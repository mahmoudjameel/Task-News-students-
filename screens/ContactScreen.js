import React, { useState, useRef } from 'react';
import { View, TextInput, Image, StyleSheet, TouchableWithoutFeedback, Animated, TouchableOpacity, Text, Linking } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

 const ContactScreen = () => {
  const [input1Value, setInput1Value] = useState('');
  const [input2Value, setInput2Value] = useState('');
  const [input3Value, setInput3Value] = useState('');
  const [showSocialMediaIcons, setShowSocialMediaIcons] = useState(false);
  const animation = useRef(new Animated.Value(0)).current;

  const toggleSocialMediaIcons = () => {
    setShowSocialMediaIcons(!showSocialMediaIcons);

    Animated.timing(animation, {
      toValue: showSocialMediaIcons ? 0 : 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const socialMediaIconStyle = {
    transform: [
      {
        translateY: animation.interpolate({
          inputRange: [0, 1],
          outputRange: [100, 0],
        }),
      },
    ],
  };

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('../assets/logoColor2.png')} />
      <Text style={styles.title}>تواصل معنا</Text>
      <View style={styles.inputContainer}>
        <TouchableOpacity style={styles.buttonContainer} onPress={() => Linking.openURL('mailto:info@mcci.org.sa')}>
          <Text style={styles.buttonText}>info@mcci.org.sa</Text>
          <MaterialIcons name="email" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
      <View style={styles.inputContainer}>
        <TouchableOpacity style={styles.buttonContainer} onPress={() => Linking.openURL('tel:+966148258366')}>
          <Text style={styles.buttonText}>+966 14 825 8366</Text>
          <MaterialIcons name="phone" size={24} color="#fff"/>
        </TouchableOpacity>
      </View>
      <View style={styles.inputContainer}>
        <TouchableOpacity style={styles.buttonContainer} onPress={() => Linking.openURL('https://mcci.org.sa/')}>
          <Text style={styles.buttonText}>لزيارة موقعنا الإلكتروني</Text>
          <MaterialIcons name="web" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
      <TouchableWithoutFeedback onPress={toggleSocialMediaIcons}>
        <View style={styles.socialMediaButton}>
          <Ionicons name="logo-linkedin" size={24} color="red" />
        </View>
      </TouchableWithoutFeedback>
      {showSocialMediaIcons && (
        <Animated.View style={[styles.socialMediaIcons, socialMediaIconStyle]}>
          <Ionicons name="logo-twitter" size={24} color="white" style={styles.socialMediaIcon} />
          <Ionicons name="logo-instagram" size={24} color="white" style={styles.socialMediaIcon} />
          <Ionicons name="logo-youtube" size={24} color="white" style={styles.socialMediaIcon} />
          <Ionicons name="logo-facebook" size={24} color="white" style={styles.socialMediaIcon} />
        </Animated.View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  image: {
    width: 180,
    height: 200,
    resizeMode: 'cover',
    marginBottom: 10,
    borderRadius:20

  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#12355a',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
    width: '80%',
  },
  input: {
    marginLeft: 10,
    width: '100%',
  },
  iconButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#fff',
    borderRadius: 30,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  socialMediaButton: {
    position: 'absolute',
    bottom: 40,
    right: 20,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 30,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    paddingVertical: 5,
    paddingHorizontal: 15,
  },
  socialMediaIcon: {
    marginHorizontal: 5,
  },
  socialMediaIcons: {
    position: 'absolute',
    bottom: 40,
    right: 100,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#000',
    borderRadius: 30,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    paddingVertical: 5,
    paddingHorizontal: 15,
  },
  buttonContainer: {
    flexDirection: 'row',
    backgroundColor: '#12355a',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    width: 290,
    height: 40, 
    justifyContent: 'center'
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    paddingRight: 6
  },
  title: {
    fontSize: 18,
    marginBottom: 26,
    fontWeight: 'bold',
    color: '#12355a',
    backgroundColor:'#cfd6de',
    padding: 16,
    width: 300,
    textAlign: 'center'
  },
});

export default ContactScreen;