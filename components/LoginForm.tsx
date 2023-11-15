import React, { useState, useEffect } from 'react';
import {
  View,
  TextInput,
  Button,
  Text,
  Alert,
  NativeSyntheticEvent,
  TextInputChangeEventData,
  StyleSheet,
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

type EType = NativeSyntheticEvent<TextInputChangeEventData>;
const LoginForm = () => {
  const { username, password, setUsername, setPassword } = useLoginInfo();
  useAlertTimer();

  const handleChangeUsername = ({ nativeEvent: { text } }: EType) => {
    setUsername(text);
  };

  const handleChangePassword = ({ nativeEvent: { text } }: EType) => {
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
        placeholder='your-email@email.com'
        onChange={handleChangeUsername}
        value={username}
      />
      <TextInput
        style={styles.input}
        secureTextEntry={true}
        placeholder='Enter your password'
        onChange={handleChangePassword}
        value={password}
      />
      <Button
        disabled={username.length === 0 || password.length === 0}
        title='Login'
        onPress={handleSubmit}
      />
    </View>
  );
};

export default LoginForm;
