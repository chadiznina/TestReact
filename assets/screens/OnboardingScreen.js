import React from 'react';
import {
  SafeAreaView,
  Image,
  StyleSheet,
  FlatList,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import styles from '../components/Styles'; 
const {width, height} = Dimensions.get('window');
import CustomButton from '../components/Button'; 
import CirclesBackground from '../components/CirclesBackground';
const COLORS = {primary: '#282534', white: '#fff', green :'#2FB097' , Cgreen : '#3DC9AD' };


const slides = [
  {
    id: '1',
    image: require('../images/Onboarding1.png'),
    title: 'Coclick',
    subtitle: 'Commandez en toute simplicité chez\n les commerçants les plus proches\n de chez vous.',
  },
  {
    id: '2',
    image: require('../images/Onboarding2.png'),
    title: 'Rentabiliser vos trajets',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: '3',
    image: require('../images/Onboarding3.png'),
    title: 'Livrez où vous voulez',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
];
const Slide = ({item}) => {
  return (
    <View style={{alignItems: 'center', justifyContent: 'center'}}>
      <Image
        source={item?.image}
        style={{height: '20%', width ,resizeMode: 'contain'}}
      />
      <View>
        <Text style={styles.title}>{item?.title}</Text>
        <Text style={styles.subtitle}>{item?.subtitle}</Text>
      </View>
    </View>
  );
};

const OnboardingScreen = ({navigation}) => {
  const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0);
  const ref = React.useRef();
  const updateCurrentSlideIndex = e => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setCurrentSlideIndex(currentIndex);
  };

  const Footer = () => {
    return (
      <View
        style={{
          height: height * 0.25,
          justifyContent: 'space-between',
          paddingHorizontal: 20,
          marginBottom : 50,
        }}>
        {/* Indicator container */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
         
          }}>
          {/* Render indicator */}
          {slides.map((_, index) => (
            <View
              key={index}
              style={[
                styles.indicator,
                currentSlideIndex == index && {
                  backgroundColor: COLORS.white,
                  width: 50,
                },
              ]}
            />
          ))}
        </View>             
    <View style={{ flexDirection: 'column', alignItems: 'center' ,  marginBottom: 100, marginTop: 20,}}>   
     <CustomButton
            label="Connexion"
            onPress={() => navigation.navigate('Login')}
            borderColor="transparent"
            backgroundColor="white" 
            textColor={COLORS.Cgreen}
            
          />
      <View style={{ height: 15 }} />
      <CustomButton
            label="Inscription"
            onPress={() => navigation.navigate('Home')}
            borderColor="white"
            backgroundColor="transparent"
            textColor="white"
          />
    </View>
</View>     
    );
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.green}}>
      <CirclesBackground />
      <FlatList
        ref={ref}
        onMomentumScrollEnd={updateCurrentSlideIndex}
        contentContainerStyle={{height: height * 0.75}}
        showsHorizontalScrollIndicator={false}
        horizontal
        data={slides}
        pagingEnabled
        renderItem={({item}) => <Slide item={item} />}
      />
      <Footer />     
    </SafeAreaView>
  );
};


export default OnboardingScreen;