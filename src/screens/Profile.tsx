import { DrawerNavigationHelpers } from '@react-navigation/drawer/lib/typescript/src/types';
import * as React from 'react';
import { View, Text, Button } from 'react-native';

export default function ProfileScreen({ navigation }: { navigation: DrawerNavigationHelpers }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', gap: 10 }}>
      <Text style={{ fontSize: 16, fontWeight: '700' }}>Profile Screen</Text>
      <Button title="Go to Feed" onPress={() => navigation.navigate("feed")}></Button>
      <Button title="Go to Goal" onPress={() => navigation.navigate("goal")}></Button>
    </View>
  );
}
