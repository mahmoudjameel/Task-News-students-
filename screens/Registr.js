import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React, { useState } from 'react';
import { Button, Text, TextInput, View,StyleSheet, TouchableOpacity, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const Tab = createMaterialTopTabNavigator();

const Step1 = ({navigation}) => { 
  const [name, setName] = useState('');

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleNext = () => {
    navigation.navigate('Step2');
  };

  return (
    <View style={styles.container}>
      <Image 
          source={require('../assets/logoColor2.png')}
          style={{ width: 150, height: 140, marginBottom:48, marginTop:-54}}
        />
      <Text style={styles.title}>رقم السجل التجاري</Text>
      <TextInput
        style={styles.input}
        onChangeText={text => setName(text)}
        value={name}
        placeholder="ادخل رقم السجل التجاري"
      />

      <TouchableOpacity style={styles.buttonContainer} onPress={handleNext}>
        <Text style={styles.buttonText}>التالي</Text>
      </TouchableOpacity>
    </View>

  );
};

const Step2 = ({navigation}) => {
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');

 
 
  const handleNext = () => {
    navigation.navigate('Step3');
  };
  

  return (
    

 <View style={styles.container}>
    <Image 
        source={require('../assets/validation.gif')}
        style={{ width: 140, height: 140, marginBottom:20, marginTop:-54}}
      />
  <Text style={styles.title}> ادخل رمز التحقق</Text>
  <TextInput
    style={styles.input2}
    onChangeText={text => setPhone(text)}
    value={phone}
      placeholder="- - - -"
  />

  <TouchableOpacity style={styles.buttonContainer} onPress={handleNext}>
    <Text style={styles.buttonText}>تحقق</Text>
  </TouchableOpacity>
</View> 

  );
};

const Step3 = ({route, navigation}) => {
  const handleFinish = () => {
    navigation.navigate('Home');
  };

  const handleForgotPassword = () => {
    navigation.navigate('ForgotPassword');
  };

  return (
    <View style={styles.container}>
      <Image 
        source={require('../assets/user.png')}
        style={{ width: 110, height: 110, marginBottom:40, marginTop:-54}}
      />
      <Text style={styles.lable}>البريد الإلكتروني</Text>
      <TextInput style={styles.input} placeholder="ادخل البريد الإلكتروني" />

      <Text style={styles.lable}>كلمة المرور</Text>
      <TextInput
        style={styles.input}
        placeholder="ادخل كلمة المرور"
        secureTextEntry={true}
      />

      <TouchableOpacity style={styles.buttonContainer} onPress={handleFinish}>
        <Text style={styles.buttonText}>تسجيل الدخول</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleForgotPassword}>
        <Text style={styles.forgotPassword}>نسيت كلمة المرور؟</Text>
      </TouchableOpacity>
    </View>
  );
};


const Register = () => {
  return (
  <Tab.Navigator style={{paddingTop:50}}
     
  screenOptions={   ({ route }) => ({

    
    tabBarIcon: ({ focused, color, size }) => {
      let iconName;

      if (route.name === 'Step1') {
        iconName = focused ? 'radio-button-checked' : 'radio-button-unchecked';
      } else if (route.name === 'Step2') {
        iconName = focused ? 'radio-button-checked' : 'radio-button-unchecked';
      } else if (route.name === 'Step3') {
        iconName = focused ? 'radio-button-checked' : 'radio-button-unchecked';
      } else if (route.name === 'Success') {
        iconName = focused ? 'check-circle' : 'check-circle-outline';
      }

      // Return an icon component
      return <MaterialIcons name={iconName} size={25} color={"#6c873e"} />;
    },
  })}
  tabBarOptions={{
    activeTintColor: "#6c873e",
    inactiveTintColor: 'gray',
  }}
>
  <Tab.Screen name="Step1" component={Step1}   options={{ tabBarShowLabel: false}} />
  <Tab.Screen name="Step2" component={Step2} options={{ tabBarShowLabel: false}}/>
  <Tab.Screen name="Step3" component={Step3} options={{ tabBarShowLabel: false}}/>
</Tab.Navigator>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 17,
    marginBottom: 8,
    fontWeight: 'bold',
    color: '#12355a',
  },
  lable: {
    fontSize: 17,
    marginBottom: 8,
    fontWeight: 'bold',
    color: '#12355a',
  },
  input: {
    width: '80%',
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: '#fff',
    textAlign:'right'
  },
  input2: {
    width: '70%',
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: '#fff',
    textAlign:'center',
    fontSize: 25,
  },

  buttonContainer: {
    backgroundColor: '#6c873e',
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 20,
    width: 200,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  forgotPassword: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#12355a',
    textAlign: 'center',
    marginTop: 20
  }

});

export default Register;