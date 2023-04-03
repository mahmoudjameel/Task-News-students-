
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const ForgotPassword = ({ navigation }) => {
  const [email, setEmail] = useState('');

  const handleResetPassword = () => {
    // يتم إرسال طلب إعادة تعيين كلمة المرور بالبريد الإلكتروني المدخل
    // يمكن إضافة الخوارزمية الخاصة بالإرسال هنا
    alert(`تم إرسال طلب إعادة تعيين كلمة المرور إلى ${email}`);
    navigation.goBack(); // تتم إعادة المستخدم إلى الصفحة السابقة بعد الانتهاء
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>نسيت كلمة المرور</Text>
      <Text style={styles.description}>يرجى إدخال البريد الإلكتروني المرتبط بحسابك لإعادة تعيين كلمة المرور.</Text>
      <TextInput
        style={styles.input}
        placeholder="البريد الإلكتروني"
        value={email}
        onChangeText={setEmail}
      />
      <TouchableOpacity style={styles.button} onPress={handleResetPassword}>
        <Text style={styles.buttonText}>إعادة تعيين كلمة المرور</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 30
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20
  },
  button: {
    backgroundColor: '#12355a',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold'
  }
});

export default ForgotPassword;
