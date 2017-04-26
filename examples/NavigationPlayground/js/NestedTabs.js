/**
 * @flow
 */

import React from 'react';
import {
  Button,
  Platform,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import {
  TabNavigator,
} from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SampleText from './SampleText';

const MyNavScreen = ({ navigation, banner }) => (
  <ScrollView style={styles.container}>
    <SampleText>{banner}</SampleText>
    <Button
      onPress={() => navigation.navigate('Home')}
      title="Go to home tab"
    />
    <Button
      onPress={() => navigation.navigate('NestedHome')}
      title="Go to nested home tab"
    />
    <Button
      onPress={() => navigation.navigate('Settings')}
      title="Go to settings tab"
    />
    <Button
      onPress={() => navigation.navigate('NestedSettings')}
      title="Go to nested settings tab"
    />
    <Button
      onPress={() => navigation.goBack(null)}
      title="Go back"
    />
    <View style={styles.tallThing} />
  </ScrollView>
);

const MyHomeScreen = ({ navigation }) => (
  <MyNavScreen
    banner="Home Tab"
    navigation={navigation}
  />
);

MyHomeScreen.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ tintColor, focused }) => (
    <Ionicons
      name={focused ? 'ios-home' : 'ios-home-outline'}
      size={26}
      style={{ color: tintColor }}
    />
  ),
};

const MyPeopleScreen = ({ navigation }) => (
  <MyNavScreen
    banner="People Tab"
    navigation={navigation}
  />
);

MyPeopleScreen.navigationOptions = {
  tabBarLabel: 'People',
  tabBarIcon: ({ tintColor, focused }) => (
    <Ionicons
      name={focused ? 'ios-people' : 'ios-people-outline'}
      size={26}
      style={{ color: tintColor }}
    />
  ),
};

const MyChatScreen = ({ navigation }) => (
  <MyNavScreen
    banner="Chat Tab"
    navigation={navigation}
  />
);

MyChatScreen.navigationOptions = {
  tabBarLabel: 'Chat',
  tabBarIcon: ({ tintColor, focused }) => (
    <Ionicons
      name={focused ? 'ios-chatboxes' : 'ios-chatboxes-outline'}
      size={26}
      style={{ color: tintColor }}
    />
  ),
};

const MySettingsScreen = ({ navigation }) => (
  <MyNavScreen
    banner="Settings Tab"
    navigation={navigation}
  />
);

MySettingsScreen.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ tintColor, focused }) => (
    <Ionicons
      name={focused ? 'ios-settings' : 'ios-settings-outline'}
      size={26}
      style={{ color: tintColor }}
    />
  ),
};

const SimpleNestedTabs = TabNavigator({
  NestedHome: {
    screen: MyHomeScreen,
    path: '',
  },
  NestedPeople: {
    screen: MyPeopleScreen,
    path: 'cart',
  },
  NestedChat: {
    screen: MyChatScreen,
    path: 'chat',
  },
  NestedSettings: {
    screen: MySettingsScreen,
    path: 'settings',
  },
}, {
  ...TabNavigator.Presets.AndroidTopTabs,
});

const SimpleTabs = TabNavigator({
  Home: {
    screen: SimpleNestedTabs,
    path: '',
  },
  People: {
    screen: MyPeopleScreen,
    path: 'cart',
  },
  Chat: {
    screen: MyChatScreen,
    path: 'chat',
  },
  Settings: {
    screen: MySettingsScreen,
    path: 'settings',
  },
}, {
  animationEnabled: false,
  swipeEnabled: false,
  tabBarPosition: 'bottom',
  tabBarOptions: {
    activeTintColor: Platform.OS === 'ios' ? '#e91e63' : '#fff',
  },
});

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === 'ios' ? 20 : 0,
    // Uncomment this to see your bottom tabs again
    flex: 1,
  },
  tallThing: {
    height: 1000,
  }
});

export default SimpleTabs;
