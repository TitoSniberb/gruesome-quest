import React, { useState } from 'react';
import {
  ImageBackground,
  StyleSheet,
} from 'react-native';
import PrimaryButton from './src/components/buttons/PrimaryButton';
import SettingsModal from './src/components/Modals/SettingsModal';
import { ModalTypes } from './src/schemes/enums';

const App = () => {
  const [selectedModal, setselectedModal] = useState<keyof typeof ModalTypes>('none');

  const DisplayedModal = () => {
    switch (selectedModal) {
      case 'play':
        return <SettingsModal />

      case 'credits':
        return <SettingsModal />

      case 'settings':
        return <SettingsModal />

      default:
        return null;
    }
  }

  return (
    <ImageBackground source={require('./src/assets/backgrounds/mainmenu.jpg')} style={styles.container}>
      <PrimaryButton text='Play' onPress={() => setselectedModal('play')} />
      <PrimaryButton text='Settings' onPress={() => setselectedModal('settings')} />
      <PrimaryButton text='Credits' onPress={() => setselectedModal('credits')} />

      <DisplayedModal />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default App;
