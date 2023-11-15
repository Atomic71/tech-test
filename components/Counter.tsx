import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    gap: 20,
  },
  buttonsWrapper: {
    flexDirection: 'row',
    gap: 30,
    justifyContent: 'space-around',
  },
  button: {
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
  },
});

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text>Count: {count}</Text>
      <View style={styles.buttonsWrapper}>
        <TouchableOpacity
          onPress={() => setCount(count - 1)}
          disabled={count === 0}
          style={styles.button}
        >
          <Text
            style={{
              color: 'white',
            }}
          >
            Decrement
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setCount(count + 1)}
          style={styles.button}
        >
          <Text
            style={{
              color: 'white',
            }}
          >
            Increment
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Counter;
