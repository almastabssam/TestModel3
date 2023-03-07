import {View, Image} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// Meterial Bottom Tab Screens
import WatchList from './app/src/screens/homeBottomTabs/WatchList';
import Market from './app/src/screens/homeBottomTabs/Market';
import Notification from './app/src/screens/homeBottomTabs/Notification';
import News from './app/src/screens/homeBottomTabs/News';
import More from './app/src/screens/homeBottomTabs/More';
import TopTab from './app/src/component/TopTab';
import Subscription from './app/src/screens/Subscription';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Market"
        children={TopTab}
        options={{
          headerShown: false,
          tabBarIcon: (color, size) => {
            return (
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}>
                <Image
                  source={require('./assets/icons/market.png')}
                  style={{
                    width: 20,
                    height: 20,
                  }}
                />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="WatchList"
        component={WatchList}
        options={{
          headerShown: false,
          tabBarIcon: (color, size) => {
            return (
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}>
                <Image
                  source={require('./assets/icons/bookmark.png')}
                  style={{
                    width: 20,
                    height: 20,
                  }}
                />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="News"
        component={News}
        options={{
          headerShown: false,
          tabBarIcon: (color, size) => {
            return (
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}>
                <Image
                  source={require('./assets/icons/news.png')}
                  style={{
                    width: 20,
                    height: 20,
                  }}
                />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Notification"
        component={Notification}
        options={{
          headerShown: false,
          tabBarIcon: (color, size) => {
            return (
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}>
                <Image
                  source={require('./assets/icons/notification.png')}
                  style={{
                    width: 20,
                    height: 20,
                  }}
                />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="More"
        component={More}
        options={{
          headerShown: false,
          tabBarIcon: (color, size) => {
            return (
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}>
                <Image
                  source={require('./assets/icons/more.png')}
                  style={{
                    width: 20,
                    height: 20,
                  }}
                />
              </View>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Tabs"
          component={Tabs}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Subscription" component={Subscription} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Routes;
