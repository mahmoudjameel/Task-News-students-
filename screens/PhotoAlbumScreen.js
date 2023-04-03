import React from 'react';
import { StyleSheet, View, Text, FlatList, Image, Dimensions, TouchableOpacity } from 'react-native';
import { PinchGestureHandler, State } from 'react-native-gesture-handler';
import Animated, { useAnimatedGestureHandler, useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import { clamp, withDecay } from 'react-native-redash';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const { width, height } = Dimensions.get('window');
// const IMAGE_WIDTH = width * 0.4;
// const IMAGE_HEIGHT = height * 0.2;

const photos = [
  { id: 1, image: require('../assets/circulars.jpeg') },
  { id: 2, image: require('../assets/circulars.jpeg') },
  { id: 3, image: require('../assets/circulars.jpeg') },
  { id: 4, image: require('../assets/circulars.jpeg') },
  { id: 5, image: require('../assets/circulars.jpeg') },
  { id: 6, image: require('../assets/circulars.jpeg') },
  { id: 7, image: require('../assets/circulars.jpeg') },
  { id: 8, image: require('../assets/circulars.jpeg') },
  { id: 9, image: require('../assets/circulars.jpeg') },
  { id: 10, image: require('../assets/circulars.jpeg') },
];

const PhotoAlbumScreen = () => {
  const navigation = useNavigation();
  const scale = useSharedValue(1);
  const translationX = useSharedValue(0);
  const translationY = useSharedValue(0);

  const pinchHandler = useAnimatedGestureHandler({
    onActive: (event) => {
      scale.value = event.scale;
      translationX.value = event.translationX;
      translationY.value = event.translationY;
    },
    onEnd: () => {
      scale.value = withSpring(1);
      translationX.value = withSpring(0);
      translationY.value = withSpring(0);
    },
  });

  const imageStyle = useAnimatedStyle(() => {
    const imageScale = clamp(scale.value, 1, 3);
    return {
      transform: [
        { translateX: translationX.value },
        { translateY: translationY.value },
        { scale: imageScale },
      ],
    };
  });

  const handleImagePress = (image) => {
    navigation.navigate('FullScreenImage', { image });
  };

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <PinchGestureHandler onGestureEvent={pinchHandler}>
        <Animated.View>
          <TouchableOpacity activeOpacity={0.8} onPress={() => handleImagePress(item.image)}>
            <Image source={item.image} style={[styles.image, imageStyle]} />
          </TouchableOpacity>
        </Animated.View>
      </PinchGestureHandler>
    </View>
  );

  return (    
    <View style={styles.container}>
        <View style={styles.header}>
          <View style={{ width: 20 }}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Ionicons name="ios-arrow-back" size={30} color="#12355a" />
            </TouchableOpacity>
          </View>
          <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 18, textAlign: "center" }}>جميع التعاميم</Text>
          </View>
          <View style={{ width: 20 , marginLeft:20}}>
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <Ionicons name="ios-menu" size={30} color="#12355a" />
            </TouchableOpacity>
          </View>
        <View>
        </View>
        </View>
      <FlatList
        data={photos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        numColumns={2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
    itemContainer: {
      flex: 1,
      padding: 19,
      aspectRatio: 1,
      borderRadius: 3,
      overflow: 'hidden',
    },
  image: {
    width: 150,
    height: 180,
    resizeMode: 'cover',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    height: 90,
    elevation: 3,
    paddingHorizontal: 20,
    paddingTop:40,
    textAlign:'center'
  },
  backButton: {
    marginRight: 20,
  },
  
});
export default PhotoAlbumScreen;