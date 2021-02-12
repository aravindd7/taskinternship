import * as React from 'react';
import {useState} from 'react';
import { Text, View, Button,TextInput, ToastAndroid, StyleSheet, StatusBar,
SafeAreaView, TouchableOpacity, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-community/async-storage';
import AsyncStore from './screens/AsyncStorage';
function LoginScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Welcome to App</Text>
      <Button
        title="Please Signup"
        onPress={() => {
          /* 1. Navigate to the Details route with params */
          navigation.navigate('Home', {
            });
        }}
      />
    </View>
  );
}

function HomeScreen({ navigation }) {
  const [userName, setUserName] = useState('');
  const [userAge, setUserAge] = useState('');
  const [userCountry, setUserCountry] = useState('');
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Please Enter Your Details {"\n"}{"\n"}</Text>
      <TextInput
          value={userName}
          onChangeText={(username) => setUserName(username)}
          placeholder={'Name'}
        />
        <Text>{"\n"}</Text>
        <TextInput
          value={userAge}
          onChangeText={(userage) => setUserAge(userage)}
          placeholder={'Age'}
        />
        <Text>{"\n"}</Text>
        <TextInput
          value={userCountry}
          onChangeText={(usercountry) => setUserCountry(usercountry)}
          placeholder={'Country'}
        />
        <Text>{"\n"}</Text>
      <Button
        title="See your Details"
        onPress={() => {
          /* 1. Navigate to the Details route with params */
          navigation.navigate('Details', {
            param1: userName,
            param2: userAge,
            param3: userCountry,
          });
        }}
      />
    </View>
  );
}

function DetailsScreen({ route, navigation }) {
  /* 2. Get the param */
  const { param1 } = route.params;
  const { param2 } = route.params;
  const { param3 } = route.params;
  const showToast = () => {
    ToastAndroid.show(param1, ToastAndroid.SHORT);
  };

  const showToastWithGravity = () => {
    ToastAndroid.showWithGravity(
      param2,
      ToastAndroid.SHORT,
      ToastAndroid.CENTER
    );
  };

  const showToastWithGravityAndOffset = () => {
    ToastAndroid.showWithGravityAndOffset(
      param3,
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
      25,
      50
    );
  };
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details</Text>
      <Text>name: {JSON.stringify(param1)}</Text>
      <Text>age: {JSON.stringify(param2)}</Text>
      <Text>country: {JSON.stringify(param3)}</Text>
      <Button title="Toggle Toast" onPress={() => showToast()} />
      <Button
        title="Toggle Toast With Gravity"
        onPress={() => showToastWithGravity()}
      />
      <Button
        title="Toggle Toast With Gravity & Offset"
        onPress={() => showToastWithGravityAndOffset()}
      />
      <Button
        title="Async Storage"
        onPress={() => {
          /* 1. Navigate to the Details route with params */
          navigation.navigate('AsyncStore', {
            });
        }}
      />
    </View>
  );
}


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="AsyncStore" component={AsyncStore} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
