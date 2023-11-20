import React, { useState } from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,TextInput
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { theme } from "../core/theme";
import styles from '../components/Styles'; 

const { width } = Dimensions.get("window");

const SPACING = 10;

const colors = {
  black: "#000",
  dark: `rgb(70,70,70)`,
  yellow: `rgb(250,230,50)`,
  gray: `rgb(120,120,120)`,
  light: `rgb(240,240,240)`,
  white: "#fff",
};

const ITEM_WIDTH = width / 2 - SPACING * 3;

const DATA = [
  {
    id: 1,
    title: "Main",
    recipes: [
      {
        id: 1,
        name: "Recipe 1",
        image: require("../images/FOOD1.jpeg"), 
        discount: "15%",
        price: 10.99,
      },
      {
        id: 2,
        name: "Recipe 2",
        image: require("../images/FOOD2.jpeg"),
        discount: "10%",
        price: 3.99,
      },
      {
        id: 3,
        name: "Recipe 3",
        image: require("../images/FOOD3.jpeg"),
        discount: "10%",
        price: 19.99,
      },
     
    ],
  },
  {
    id: 2,
    title: "Healthy Food",
    recipes: [
      {
        id: 1,
        name: "Healthy Recipe 1",
        image: require("../images/FOOD4.jpg"), 
        discount: "15%",
        price: 12.99,
      },
      {
        id: 2,
        name: "Healthy Recipe 2",
        image: require("../images/FOOD5.jpeg"), 
        discount: "15%",
        price: 15.99,
      },
    ],
  },
  {
    id: 3,
    title: "Asian Food",
    recipes: [
      {
        id: 1,
        name: "Asian Recipe 1",
        image: require("../images/FOOD5.jpeg"), 
        discount: "15%",
        price: 12.99,
      },
      {
        id: 2,
        name: "Asian Recipe 2",
        image: require("../images/FOOD6.jpeg"), 
        discount: "15%",
        price: 12.99,
      },
    
    ],
  },

];

const RestaurantScreen = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  
  const renderBody = () => {
    return (
      <ScrollView horizontal>
        {DATA.map((category, index) => (
          <TouchableOpacity
            style={{ marginRight: SPACING * 3, paddingTop: SPACING * 2, paddingLeft: SPACING * 2 }}
            key={index}
            onPress={() => setActiveCategory(index)}
          >
            <Text
              style={[
                {
                  fontSize: SPACING * 1.7,
                  fontWeight: "600",
                  color: theme.colors.OtpGreen,
                },
                activeCategory === index && {
                  color: theme.colors.OtpGreen,
                  fontWeight: "700",
                  fontSize: SPACING * 1.8,
                },
              ]}
            >
              {category.title}
            </Text>
          </TouchableOpacity>
        ))}
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-between",
            marginVertical: SPACING * 2,
            padding: SPACING,
          }}
        >
          {DATA[activeCategory].recipes.map((item) => (
            <TouchableOpacity
              style={{ width: ITEM_WIDTH, marginBottom: SPACING * 2 }}
              key={item.id}
            >
              <Image
                style={{
                  width: "100%",
                  height: ITEM_WIDTH + SPACING * 3,
                  borderRadius: SPACING * 2,
                }}
                source={item.image}
              />
              <Text
                style={{
                  fontSize: SPACING * 2,
                  fontWeight: "700",
                  marginTop: SPACING,
                }}
              >
                {item.name}
              </Text>
              <Text
                style={{
                  fontSize: SPACING * 1.5,
                  color: colors.gray,
                  marginVertical: SPACING / 2,
                }}
              >
                Today discount {item.discount}
              </Text>
              <Text style={{ fontSize: SPACING * 2, fontWeight: "700" }}>
                $ {item.price}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    );
  };

  return (
    <SafeAreaView>
      <ScrollView >
        <View>
        
     <View  style={{
          backgroundColor: theme.colors.BgColor, 
          padding: SPACING * 2,
          borderRadius: SPACING,
          justifyContent : 'center', alignContent : 'center', alignItems :'center'
        }}> 
            <Text style={{ fontSize: SPACING * 2, fontWeight: "500" , textAlign : 'center',color : theme.colors.white}}>
            Commandez simplement chez vos commercants préférés 
            </Text>      
            <View style={{ height: 15 }} />
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <TextInput
        placeholder="Que recherchez-vous ?"
        placeholderTextColor={theme.colors.white}
        style={{
          flex: 10, 
          color: theme.colors.gray,
          fontSize: 16, 
          backgroundColor: theme.colors.green,
          borderRadius: 12,
          borderWidth: 0,
          paddingLeft: 12,
        }}
      />
      <Ionicons name="search" size={25} style={{ flex: 1 }} />
    </View>
    <View style={{ height: 15 }} />
    <View style={styles.buttonGroup}>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Button 1</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Button 2</Text>
      </TouchableOpacity>
    </View>
          </View>


          <ScrollView horizontal>
            {DATA.map((category, index) => (
              <TouchableOpacity
                style={{ marginRight: SPACING * 3 , paddingTop: SPACING *2 , paddingLeft : SPACING * 2 ,}}
                key={index}
                onPress={() => setActiveCategory(index)}
              >
                <Text
                  style={[
                    {
                      fontSize: SPACING * 1.7,
                      fontWeight: "600",
                      color: theme.colors.OtpGreen,
                    },
                    activeCategory === index && {
                      color: theme.colors.OtpGreen,
                      fontWeight: "700",
                      fontSize: SPACING * 1.8,
                    },
                  ]}
                >
                  {category.title}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-between",
              marginVertical: SPACING * 2,
              padding: SPACING ,
            }}
          >
            {DATA[activeCategory].recipes.map((item) => (
              <TouchableOpacity
                style={{ width: ITEM_WIDTH, marginBottom: SPACING * 2 }}
                key={item.id}
              >
                <Image
                  style={{
                    width: "100%",
                    height: ITEM_WIDTH + SPACING * 3,
                    borderRadius: SPACING * 2,
                    
                  }}
                  source={item.image}
                />
                <Text
                  style={{
                    fontSize: SPACING * 2,
                    fontWeight: "700",
                    marginTop: SPACING,
                  }}
                >
                  {item.name}
                </Text>
                <Text
                  style={{
                    fontSize: SPACING * 1.5,
                    color: colors.gray,
                    marginVertical: SPACING / 2,
                  }}
                >
                  Today discount {item.discount}
                </Text>
                <Text style={{ fontSize: SPACING * 2, fontWeight: "700" }}>
                  $ {item.price}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RestaurantScreen;


