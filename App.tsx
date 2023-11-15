import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import Counter from './components/Counter';
import LoginForm from './components/LoginForm';
import { UserListItem } from './components/User';
import useUsers from './hooks/useUsers';

export default function App() {
  const users = useUsers();

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
        <LoginForm></LoginForm>
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
