import React, { useState, UseState } from "react"
import { Text, View, StyleSheet, Image, ScrollView, FlatList, SafeAreaView, TouchableOpacity, Dimensions } from "react-native"
import Slider from '@react-native-community/slider';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import Card from '../components/Card'
import CardPerformance from '../components/CardPerformance'
import Icon from 'react-native-vector-icons/FontAwesome'
import IconE from 'react-native-vector-icons/Entypo'
import LinearGradient from 'react-native-linear-gradient';

const width = Dimensions.get('window').width


const OpportunityTab = props => {

  const [isActive, setIsActive] = useState(false)
  const [isCardActive, setIsCardActive] = useState(true)

  const dataCard = [
    {
      id: 1,
      title: 'Aumente suas chances',
      subTitle: 'Programe seu leilão agora!',
      subTitleColor: '#5c7300',
      backgroundColor: '#9abf00'
    },
    {
      id: 2,
      title: 'Pacientes ausentes (Falta)',
      subTitle: 'Envie uma mensagem personalizada',
      subTitleColor: '#88434c',
      backgroundColor: '#e36f7e'
    }
  ]

  const dataCardPerformance = [
    {
      id: 1,
      title: 32,
      text: 'Suas oportunidades',
      backgroundColor: '#f2f5e4'
    },
    {
      id: 2,
      title: 4,
      text: 'Não atendidas',
      backgroundColor: '#f9edf1'
    },
  ]
  const MAX_POINTS = 100
  let points = 20
    

  function renderLogo(){
    return(
      <View style={styles.containerLogo}>
        <Image source={require('../assets/logo.png')} resizeMode={'contain'} style={styles.logo} />
      </View>
    )
  }

  function renderCards(){
    return(
      <FlatList 
        data={dataCard} 
        contentContainerStyle={{ marginBottom: 42}}
        renderItem={({item, index}) => (
          <Card   
            title={item.title}
            subTitle={item.subTitle}
            subTitleColor={item.subTitleColor}
            backgroundColor={item.backgroundColor}
          />
        )} 
        keyExtractor={(item, index) => item.id} 
        ItemSeparatorComponent={() => <View style={{height: 12}} />}
      />
    )
  }

  function renderMeterPerformance(){

    return(
      <View>
        <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#e36f7e', '#e3db43', '#9abf00']} style={styles.trackBar} />
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Icon name={'frown-o'} size={24} color={'#b7b7b7'} style={{marginTop: -14}} />
          <Slider 
            style={{ width: 240, height: 20,}}
            minimumValue={1}
            onValueChange={(value) => {
              if(value >= 50){
                setIsCardActive(false)
              }else{
                setIsCardActive(true)
              }
            }}
            maximumValue={100}
            step={20}
            minimumTrackTintColor="transparent"
            maximumTrackTintColor="transparent"
            thumbImage={require('../assets/thumb.png')}
          />
          <Icon name={'smile-o'} size={24} color={'#b7b7b7'} style={{marginTop: -14}} />
        </View>
      </View>
    )
  }

  function renderProgressBar(){
    let fill = (points / MAX_POINTS) * 100;
    return(
      <View style={{padding: 20, flex: 1,flexDirection: 'row', justifyContent: 'space-between', marginTop: 30}}>
        <Text style={{fontSize: 22 ,justifyContent: 'flex-end', alignSelf: 'flex-end',marginBottom: 55}}>{fill}%</Text>
        <AnimatedCircularProgress
          size={240}
          width={10}
          backgroundWidth={10}
          fill={fill}
          tintColor="#00ff00"
          tintColorSecondary="#ff0000"
          backgroundColor="#afafaf"
          arcSweepAngle={240}
          rotation={240}
          lineCap="square"
        >
          {fill => (
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Text style={{fontSize: 44, fontWeight: 'bold', color: '#000'}}>{Math.round((MAX_POINTS * fill) / 100)}</Text>
              <Text style={{color: '#737c8b', fontSize: 16}}>Oportunidades na região</Text>
              <Text style={{fontSize: 16, fontWeight: 'bold', color: '#737c8b'}}>Últimos 30 dias</Text>
            </View>
          )}
        </AnimatedCircularProgress>
      </View>
    )
  }

  function renderCardPerformance(){
    return(
      <View style={{flexDirection: 'row', justifyContent: 'space-between', padding: 4}}>
        {
          dataCardPerformance.map((item) => {
            return(
              <CardPerformance 
                number={item.title}
                text={item.text}
                backgroundColor={item.backgroundColor}
              />
            )
          })
        }
      </View>
    )
  }

  function renderPerformence(){
    let text = !isActive ? 'MOSTRAR OPORTUNIDADE' : 'OCULTAR'
    let icon = !isActive ? 'eye' : 'eye-with-line'
    return(
      <View style={styles.performanceContainer}>
        <Text style={{fontSize: 28, fontWeight: 'bold', padding: 12, marginBottom: 30}}>Seu desempenho</Text>
        <View></View>
        {renderMeterPerformance()}
        {isActive && renderProgressBar()}
        {isActive && renderCardPerformance()}
        <TouchableOpacity
          onPress={() => setIsActive(!isActive)}
          style={{backgroundColor: '#f4f3f6', padding: 25, height: 50, borderRadius: 30, marginVertical: 25}}
        >
          <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
            <IconE name={icon} size={22} color={'#737c8b'} />
            <Text style={{marginLeft: 8}}>{text}</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }

  return(
    <SafeAreaView>
      <ScrollView
        style={{padding: 20,}}
      >
        {renderLogo()}
        {renderPerformence()}
        {isCardActive && renderCards()}
      </ScrollView>
    </SafeAreaView>
   
  )
}

const styles = StyleSheet.create({
  containerLogo: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 100,
  },
  logo: {
    width: 220,
    height: 120
  },
  performanceContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 4,
    borderColor: '#e2e2e2',
    borderRadius: 20,
    backgroundColor: '#fff',
    flex:1, 
    marginBottom: 40
  },
  icon:{
    justifyContent: 'center'
  },
  trackBar: 
    {
      width: 220, 
      height: 22, 
      alignSelf: 'center',
      flex: 1,
      borderRadius: 15,
      justifyContent: 'center',
      position: 'absolute',
      bottom: 12
    }
})

export default OpportunityTab