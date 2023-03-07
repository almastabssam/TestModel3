import 'react-native-gesture-handler';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import React, {useRef} from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import Asci from '../screens/homeTopTabs/Asci';
import Nomu from '../screens/homeTopTabs/Nomu';
import Tm30 from '../screens/homeTopTabs/Tm30';
const Top = createMaterialTopTabNavigator();

const TopTab = ({navigation}) => {
  const refRBSheet = useRef();
  return (
    <View style={{flex: 1, backgroundColor: '#5879d3'}}>
      <View style={{flexDirection: 'row'}}>
        <Text style={styles.text}>Markets</Text>
        <TouchableOpacity
          style={{
            marginTop: 20,
            marginLeft: 220,
          }}>
          <Image
            source={require('../../../assets/icons/search.png')}
            style={{
              width: 25,
              height: 25,
              tintColor: 'white',
            }}
          />
        </TouchableOpacity>
      </View>

      <Top.Navigator
        screenOptions={{
          tabBarActiveTintColor: 'white',
          tabBarStyle: {
            backgroundColor: '#5879d3',
          },
        }}>
        <Top.Screen name="Asci" component={Asci} />
        <Top.Screen name="Nomu" component={Nomu} />
        <Top.Screen name="Tm30" component={Tm30} />
      </Top.Navigator>
    </View>
  );
};
const styles = StyleSheet.create({
  text: {
    marginBottom: 30,
    color: 'white',
    padding: 15,
    fontSize: 20,
  },
});

export default TopTab;
