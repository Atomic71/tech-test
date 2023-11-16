import { PropsWithChildren, useCallback } from 'react';
import {
  Alert,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { User, makeGoogleUrl } from '../utils';

const styles = StyleSheet.create({
  container: {
    paddingBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 15,
    marginBottom: 5,
    fontWeight: 'bold',
  },
  userMapLinkWrapper: {
    paddingVertical: 3,
  },
  userMapLink: {
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    gap: 10,
  },
});
export const UserListItem = ({ user }: PropsWithChildren<{ user: User }>) => {
  const { suite, street, zipcode, city } = user.address;
  const { lat, lng } = user.address.geo;
  const openUserOnMap = useCallback(() => {
    const url = makeGoogleUrl(lng, lat);
    Linking.openURL(url).catch(() => {
      Alert.alert('Error', 'Unable to open Google Maps');
    });
  }, [lat, lng]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Patient name: {user.name}</Text>
      <Text style={styles.subtitle}>Works at: {user.company.name}</Text>
      <TouchableOpacity
        onPress={() => {
          openUserOnMap();
        }}
        style={styles.userMapLinkWrapper}
      >
        <Text>Lives at:</Text>
        <Text>
          {suite}, {street}, {zipcode} {city}
        </Text>
        <Text style={styles.userMapLink}>see on map</Text>
      </TouchableOpacity>
    </View>
  );
};
