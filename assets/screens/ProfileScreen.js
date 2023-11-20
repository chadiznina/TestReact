import React, { useState } from 'react';
import { View, Text, Image, SafeAreaView, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { theme } from '../core/theme';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Sample data for the body
const bodyData = [
  { id: 1, title: 'Mes Informations' },
  { id: 2, title: 'Mes Favoris' },
  { id: 3, title: 'Mes Commandes' },
  { id: 4, title: 'Mes livraisons ' },
  { id: 5, title: 'Conditions générales' },
  { id: 6, title: 'Politique de confidentialité' },
];

const ProfileScreen = () => {
  const [showHeader, setShowHeader] = useState(false);

  const toggleContent = () => {
    setShowHeader(!showHeader);
  };

  // Header component
  const ProfileHeader = () => {
    return (
      <View
        style={{
          backgroundColor: theme.colors.BgColor,
          padding: 20,
          borderRadius: 10,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <View style={{ flexDirection: 'column', alignItems: 'center' }}>
          <Image
            source={require('../images/profile.jpg')}
            style={{ width: 100, height: 100, borderRadius: 50 }}
          />
          <Text style={{ fontSize: 18, fontWeight: '700', textAlign: 'center', color: theme.colors.white }}>
            Darrell Steward
          </Text>
        </View>
      </View>
    );
  };
  const LivreurHeader = () => {
    return (
      <View
        style={{
          backgroundColor: theme.colors.orange,
          padding: 20,
          borderRadius: 10,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <View style={{ flexDirection: 'column', alignItems: 'center' }}>
          <Image
            source={require('../images/profile2.png')}
            style={{ width: 100, height: 100, borderRadius: 50 }}
          />
          <Text style={{ fontSize: 18, fontWeight: '700', textAlign: 'center', color: theme.colors.white }}>
            Darrell Steward
          </Text>
        </View>
      </View>
    );
  };

  const ProfileBody = () => {
    return (
      <ScrollView style={{ padding: 20 }}>
        {bodyData.map((item) => (
          <TouchableOpacity key={item.id} style={styles.bodyItem} onPress={() => console.log('press')}>
            <View style={styles.bodyContent}>
              <Text style={styles.bodyTitle}>{item.title}</Text>
            </View>
            <Ionicons name="arrow-forward" size={20} color={theme.colors.gray} />
          </TouchableOpacity>
        ))}
      </ScrollView>
    );
  };

  const ProfileFooter = () => {
    return (
      <View style={styles.footer}>
        <TouchableOpacity style={{
    backgroundColor: showHeader ? theme.colors.green : theme.colors.orange  ,
    padding: 20,
    borderRadius: 32,
  }} onPress={() => toggleContent()}>
          <Text style={styles.footerButtonText}>Devenir Livreur</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <SafeAreaView>
      <ScrollView>
        {showHeader ? <ProfileHeader /> : <LivreurHeader/>}
       <ProfileBody /> 
      </ScrollView>
      <ProfileFooter />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  bodyTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  bodyDescription: {
    fontSize: 14,
    color: theme.colors.gray,
  },
  bodyContent: {
    flex: 1,
  },
  bodyItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 0.1,
    borderColor: 'grey',
    borderRadius: 10,
    padding: 15,
    marginBottom: 5,
  },
  footer: {
    alignItems: 'center',
  },

  footerButtonText: {
    color: theme.colors.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ProfileScreen;
