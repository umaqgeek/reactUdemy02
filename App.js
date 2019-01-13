import React, {Component} from 'react';
import { StyleSheet, View } from 'react-native';

import { connect } from 'react-redux';
import { tambahTempat, deleteTempat, deleteAllTempat, pilihTempat, unPilihTempat } from './src/store/actions/index';

import TextInputAndButton from './src/components/Inputs/TextInputAndButton';
import PaparTempat from './src/components/ListItem/PaparTempat';
import imageTest from './src/assets/img/image01.jpg';
import PaparTempatDetail from './src/components/ListItem/PaparTempatDetail';

class App extends Component {

  state = {
    tempat: [],
    selectedTempat: null
  }

  tambahTempatGlobal = (val) => {
    this.props.onTambahTempat(val);
  }

  clearTempatGlobal = () => {
    this.props.onDeleteAllTempat();
  }

  clearTempat = () => {

    // style #1
    // var temp = this.state.tempat;
    // temp.splice(id, 1);
    // this.setState({
    //   tempat: temp
    // });

    // style #2
    // this.setState(prevState => {
    //   return {
    //     // tempat: prevState.tempat.filter((temp, i) => {
    //     //   return i !== id
    //     // })
    //     tempat: prevState.tempat.filter((temp) => {
    //       return temp.key !== prevState.selectedTempat.key
    //     }),
    //     selectedTempat: null
    //   };
    // });

    // style #3
    this.props.onDeleteTempat();
  }

  pilihTempat = (id) => {
    this.props.onPilihTempat(id);
  }

  tukangTutupModal = () => {
    this.props.onUnPilihTempat();
  }

  render() {
    return (
      <View style={styles.container}>
        <PaparTempatDetail
          tempatSelected={this.props.selectedTempat}
          deleteTempat={this.clearTempat}
          onTutupModal={this.tukangTutupModal} />
        <TextInputAndButton onTempatTambah={this.tambahTempatGlobal} onClearAllTempat={this.clearTempatGlobal} />
        <PaparTempat tempat={this.props.tempat} chooseTempat={this.pilihTempat} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'rgba(100, 20, 200, 0.1)',
    // flex: 1,
    // flexDirection: "row",
    justifyContent: 'center',
    alignItems: 'center',
    width: "100%"
  }
});

const mapStateToProps = (state) => {
  return {
    tempat: state.tempat.tempat,
    selectedTempat: state.tempat.selectedTempat
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onTambahTempat: (namaTempat) => dispatch(tambahTempat(namaTempat)),
    onDeleteTempat: () => dispatch(deleteTempat()),
    onDeleteAllTempat: () => dispatch(deleteAllTempat()),
    onPilihTempat: (keyTempat) => dispatch(pilihTempat(keyTempat)),
    onUnPilihTempat: () => dispatch(unPilihTempat())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
