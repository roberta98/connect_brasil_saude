import React, { UseState } from "react"
import { Text, View, Image, StyleSheet, Dimensions } from "react-native"

const width = Dimensions.get('window').width

const CommingSoon = () => {

  return(
    <View style={styles.container}>
      <Image style={styles.image} source={require('../assets/em-manutencao.png')} resizeMode={'contain'} />
      <Text style={styles.text}>Estamos em manutenção para melhor atende-los</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: width,
    height: 250,
    marginTop: width / 2
  },
  text: {
    paddingVertical: 20,
    fontSize: 20,
    textAlign: 'center',
    color: '#454545'
  }
})

export default CommingSoon