import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, GestureResponderEvent } from 'react-native'

interface PrimaryButtonProps {
  text: string
  onPress: (event: GestureResponderEvent) => void
}

const PrimaryButton = ({text, onPress}: PrimaryButtonProps) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    width: 150,
    height: 60,
    marginBottom: 10
  },
  text: {
    color: 'white',
    fontSize: 20
  }
})

export default PrimaryButton
