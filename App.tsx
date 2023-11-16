import { StatusBar } from 'expo-status-bar';
import {
  Alert,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Counter from './components/Counter';
import LoginForm from './components/LoginForm';
import { UserListItem } from './components/User';
import useUsers from './hooks/useUsers';
import { useCallback } from 'react';

export default function App() {
  const users = useUsers();

  const handleLogin = useCallback((username: string, password: string) => {
    Alert.alert(`Username: ${username}, Password: ${password}`);
  }, []);
  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <View style={styles.screenContainer}>
        <StatusBar style='auto' />
        <Text style={styles.title}>Excercise #1</Text>
        <ScrollView>
          {users.length > 0 &&
            users.map((user, i) => (
              <UserListItem
                user={user}
                key={user.id}
              />
            ))}
        </ScrollView>

        <Text style={styles.title}>Excercise #2:</Text>
        <Counter></Counter>
        <Text style={styles.title}>Excercise #3:</Text>
        <LoginForm onSubmit={handleLogin}></LoginForm>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
  },
  screenContainer: {
    paddingHorizontal: 20,
    paddingTop: 30,
    flex: 1,
    gap: 20,
  },
  title: {
    marginBottom: 10,
    fontSize: 30,
  },
});
