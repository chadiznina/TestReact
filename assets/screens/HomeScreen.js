import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { CurvedBottomBar } from 'react-native-curved-bottom-bar';
import Ionicons from 'react-native-vector-icons/Ionicons';
import restaurantScreen from './RestaurentScreen';
import ProfileScreen from './ProfileScreen';

const Screen1 = () => {
  return <View style={styles.screen1} />;
};

const Screen2 = () => {
  return <View style={styles.screen2} />;
};

export default function Home() {
  const _renderIcon = (routeName, selectedTab) => {
    let icon = '';

    switch (routeName) {
      case 'Commandez simplement chez vos commercants préférés ':
        icon = 'restaurant-outline';
        break;
      case 'Chat':
        icon = 'chatbox-outline';
        break;
      case 'Livreur':
          icon = 'settings-outline';
          break;
          case 'Profil':
            icon = 'person-circle-outline';
            break;
      
    }

    return (
      <Ionicons
        name={icon}
        size={25}
        color={routeName === selectedTab ? 'black' : 'gray'}
      />
    );
  };

  const renderTabBar = ({ routeName, selectedTab, navigate }) => {
    return (
      <TouchableOpacity
        onPress={() => navigate(routeName)}
        style={styles.tabbarItem}
      >
        {_renderIcon(routeName, selectedTab)}
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <NavigationContainer independent={true}>
        <CurvedBottomBar.Navigator
         screenOptions={{ headerShown: false, }}
          style={styles.bottomBar}
          shadowStyle={styles.shawdow}
          height={55}
          circleWidth={50}
          bgColor="white"
          initialRouteName="Commande"
          borderTopLeftRight
          renderCircle={({ selectedTab, navigate }) => (
            <View style={styles.btnCircleUp}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => Alert.alert('Not dev yet')}
              >
                <Ionicons name={'fast-food-outline'} color="gray" size={25} />
              </TouchableOpacity>
            </View>
          )}
          tabBar={renderTabBar}
        >

          <CurvedBottomBar.Screen
            name="Commandez simplement chez vos commercants préférés "
            position="LEFT"
            component={restaurantScreen}

          />
          <CurvedBottomBar.Screen
            name="Chat"
            component={Screen2}
            position="RIGHT"

          />
          <CurvedBottomBar.Screen
            name="Livreur"
            component={() => <Screen2 />}
            position="LEFT"

          />
          <CurvedBottomBar.Screen
            name="Profil"
            component={() => <ProfileScreen />}
            position="RIGHT"

          />
        </CurvedBottomBar.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  shawdow: {
    shadowColor: '#DDDDDD',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 1,
    shadowRadius: 5,
  },
  button: {
    flex: 1,
    justifyContent: 'center',
  },
  bottomBar: {},
  btnCircleUp: {
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E8E8E8',
    bottom: 18,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 1,
  },
  tabbarItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  screen1: {
    flex: 1,
    backgroundColor: '#BFEFFF',
  },
  screen2: {

    backgroundColor: '#FFEBCD',
  },
});
