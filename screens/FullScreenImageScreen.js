import React from 'react';
import { StyleSheet, View, Image, Dimensions, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');

const FullScreenImageScreen = ({ route }) => {
  const navigation = useNavigation();
  const { image } = route.params;

  const handleBackPress = () => {
    navigation.goBack();
    console.log('sddssdsddsds');
  };

  return (
    <View style={styles.container}>
   
      <Image source={image} style={styles.image} resizeMode="contain" />
      <TouchableOpacity style={styles.backButton} onPress={handleBackPress}>
        <Text style={styles.backButtonText}>X</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    backgroundColor: '#12355a',
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backButtonText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  image: {
    width: width,
    height: height,
  },
});

export default FullScreenImageScreen;
