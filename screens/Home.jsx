import { StyleSheet, Text, View, TouchableOpacity as ButtonMobile,ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Fontisto, Ionicons } from '@expo/vector-icons'
import Styles from '../styles/home.style'
import { Welcome,Carousel } from '../components/index'
const Home = () => {
  return (
    <SafeAreaView>
      <View style={Styles.appBarWrapper} >
        <View style={Styles.appBar} >
          <Ionicons name='location-outline' size={24} />
          <Text style={Styles.location} >Lima - Peru</Text>
          <View style={{ alignItems: "flex-end" }} >
            <View style={Styles.cartCount} >
              <Text style={Styles.cartNumber} >8</Text>
            </View>
            <ButtonMobile>
              <Fontisto name='shopping-bag' size={24} />
            </ButtonMobile>
          </View>
        </View>
      </View>
      <ScrollView>
        <Welcome/>
        <Carousel/>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({})