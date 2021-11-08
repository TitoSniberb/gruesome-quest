import React from 'react'
import { View, Text, StyleSheet, Modal } from 'react-native'

const BaseModal = ({ children }: { children: JSX.Element }) => {
  return (
    <Modal style={styles.container}>
      {children}
    </Modal>
  )
}

export default BaseModal

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    width: '80%',
    height: '50%',
    borderColor: 'white',
    position: 'absolute',
    alignSelf: 'center',
    backgroundColor: 'rgba(245, 245, 245, 0.3)',
    padding: 24
  }
})