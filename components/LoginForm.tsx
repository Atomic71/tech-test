import React, { useEffect, useState } from 'react';
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const useLoginInfo = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  return {
    username,
    password,
    setUsername,
    setPassword,
  };
};

const styles = StyleSheet.create({
  container: {
    gap: 5,
  },
  title: {
    fontSize: 20,
  },
  input: {
    height: 40,
    borderWidth: 1,
    paddingLeft: 20,
  },
});

const useAlertTimer = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      Alert.alert('Do you need help?');
    }, 5000);

    return () => clearTimeout(timer);
  }, []);
};

const LoginForm = () => {
  const { username, password, setUsername, setPassword } = useLoginInfo();
  useAlertTimer();

  const handleChangeUsername = (text: string) => {
    setUsername(text);
  };

  const handleChangePassword = (text: string) => {
    setPassword(text);
  };

  const handleSubmit = () => {
    Alert.alert('Login submitted: ' + username + ', ' + password);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        testID='username-input'
        placeholder='your-email@email.com'
        onChangeText={handleChangeUsername}
        value={username}
      />
      <TextInput
        testID='password-input'
        style={styles.input}
        secureTextEntry={true}
        placeholder='Enter your password'
        onChangeText={handleChangePassword}
        value={password}
      />
      <TouchableOpacity
        testID='login-button'
        disabled={username.length === 0 || password.length === 0}
        onPress={handleSubmit}
      >
        <Text>Andrej</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginForm;
