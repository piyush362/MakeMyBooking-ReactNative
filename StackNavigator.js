import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//icons
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

// screens
import HomeScreen from './screens/HomeScreen';
import SavedScreen from './screens/SavedScreen';
import BookingScreen from './screens/BookingScreen';
import ProfileScreen from './screens/ProfileScreen';
import SearchScreen from './screens/SearchScreen';
import PlaceScreen from './screens/PlaceScreen';

const StackNavigator = () => {

    const Tab = createBottomTabNavigator();
    const Stack = createNativeStackNavigator();

    function BottomTabs() {
        return (
            <Tab.Navigator
                screenOptions={{
                    tabBarStyle: { height: 70, paddingBottom: 10 },

                }}
            >
                <Tab.Screen
                    name='Home'
                    component={HomeScreen}
                    options={{
                        tabBarLabel: "Home",
                        headerShown: false,
                        tabBarIcon: ({ focused }) =>
                            focused ? (<Entypo name="home" size={24} color="#05BFDB" />) : (
                                <AntDesign name="home" size={24} color="black" />)
                    }} />

                <Tab.Screen
                    name='Saved'
                    component={SavedScreen}
                    options={{
                        tabBarLabel: "Saved",
                        headerShown: true,
                        tabBarIcon: ({ focused }) =>
                            focused ? (<AntDesign name="heart" size={24} color="#05BFDB" />) : (<AntDesign name="hearto" size={24} color="black" />)
                    }} />

                <Tab.Screen
                    name='Booking'
                    component={BookingScreen}
                    options={{
                        tabBarLabel: "Booking",
                        headerShown: true,
                        tabBarIcon: ({ focused }) =>
                            focused ? (
                                <Ionicons name="notifications-sharp" size={24} color="#05BFDB" />)
                                : (<Ionicons name="notifications-outline" size={24} color="black" />)
                    }} />

                <Tab.Screen
                    name='Profile'
                    component={ProfileScreen}
                    options={{
                        tabBarLabel: "Profile",
                        headerShown: true,
                        tabBarIcon: ({ focused }) =>
                            focused ? (<FontAwesome5 name="user-alt" size={24} color="#05BFDB" />) : (<FontAwesome5 name="user" size={24} color="black" />)
                    }} />


            </Tab.Navigator>
        )
    }




    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Main"
                    component={BottomTabs}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name="Search"
                    component={SearchScreen}
                    options={{
                        headerShown: true
                    }}
                />
                <Stack.Screen
                    name="Place"
                    component={PlaceScreen}
                    options={{
                        headerShown: true
                    }}
                />

            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default StackNavigator

const styles = StyleSheet.create({})