import React, { UseState } from "react"
import { Text, View, StyleSheet } from "react-native"

const CardPerformance = props => {

  return(
    <View style={[styles.container, {backgroundColor: props.backgroundColor}]}>
      <Text style={styles.number}>{props.number}</Text>
      <Text style={styles.text}>{props.text}</Text> 
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 110,
    borderRadius: 12,
    padding: 12,
    flex: 1,
    marginHorizontal: 4
  },
  number: {
    fontSize: 42,
    textAlign: 'center',
  },
  text: {
    textAlign: 'center',
    fontSize: 16,
    color: '#737c8b',
  }
})

export default CardPerformance