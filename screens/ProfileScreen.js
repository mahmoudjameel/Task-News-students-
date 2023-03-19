import React, { useState, useRef } from 'react';
import { View, TextInput, Image, StyleSheet, TouchableWithoutFeedback, Animated } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

 const ProfileScreen = () => {
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
      <Image style={styles.image} source={require('../assets/home-3.png')} />
      <View style={styles.inputContainer}>
        <MaterialIcons name="email" size={24} color="gray" />
        <TextInput
          placeholder="email"
          value={input1Value}
          onChangeText={setInput1Value}
          style={styles.input}
        />
      </View>
      <View style={styles.inputContainer}>
        <MaterialIcons name="lock" size={24} color="gray" />
        <TextInput
          placeholder="password"
          value={input2Value}
          onChangeText={setInput2Value}
          style={styles.input}
          secureTextEntry={true}
        />
      </View>
      <View style={styles.inputContainer}>
        <MaterialIcons name="phone" size={24} color="gray" />
        <TextInput
          placeholder="phone"
          value={input3Value}
          onChangeText={setInput3Value}
          style={styles.input}
        />
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
    width: '80%',
    height: 200,
    resizeMode: 'cover',
    marginBottom: 20,
    borderRadius:20

  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    borderRadius: 25,
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
    bottom: 80,
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
    bottom: 140,
    right: 20,
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
});

export default ProfileScreen;