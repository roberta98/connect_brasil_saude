import React, { UseState } from "react"
import { Text, View, StyleSheet } from "react-native"
import Icon from 'react-native-vector-icons/AntDesign'
const Card = props => {

  return(
    <View style={[styles.container, {backgroundColor: props.backgroundColor}]}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={[styles.subTitle, {color: props.subTitleColor}]}>{props.subTitle}</Text>
      </View>
      <View style={styles.icon}>
       <Icon name='right' size={24} color={'#fff'} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 100,
    width: '100%',
    paddingHorizontal: 30,
    flex: 1,
    borderRadius: 10
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff'
  },
  subTitle: {
    fontSize: 14,
  },
  icon: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    width: 40,
    height: 40,
    borderRadius: 20,
    marginTop: 30
  },
  textContainer: {
    justifyContent: 'center',
  }
})

export default Card