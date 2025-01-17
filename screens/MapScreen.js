import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import Map from '../components/Map'
import MapView from 'react-native-maps'
import { createStackNavigator } from '@react-navigation/stack'
import NavigateCard from '../components/NavigateCard'
import RideOptionsCard from '../components/RideOptionsCard'
import { Icon } from 'react-native-elements/dist/icons/Icon'
import { TouchableOpacity } from 'react-native-gesture-handler'

const MapScreen = () => {

  const Stack = createStackNavigator();


  return (
    <View>

  <TouchableOpacity 
  style={tw`bg-gray-100 absolute top-16 left-8  z-50 p-3 rounded-full shadow-lg`}>
        <Icon name="menu" type="feather" color="black" />
      </TouchableOpacity>


      <View style={tw`h-1/2`}>
        <Map />
      </View>
  

      <View style={tw`h-1/2`}>
        <Stack.Navigator>
          <Stack.Screen name="NavigateCard" 
          component={NavigateCard}
          options={{
            headerShown: false,
          }}
          />
          <Stack.Screen name="RideOptionsCard" 
          component={RideOptionsCard}
          options={{
            headerShown: false,
          }}
          />

        </Stack.Navigator>
      </View>
    </View>
  )
}

export default MapScreen

const styles = StyleSheet.create({})