import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

const Header = () => {
    return (
        <View style={styles.HeaderBar}>
            <View style={{ flexDirection: 'row', justifyContent: "space-around" }}>
                <Pressable style={[styles.headerBtn, { borderColor: "rgba(255, 255, 255, 1)", borderWidth: 2, borderRadius: 25, paddingVertical: 8, paddingHorizontal: 9 }]}>
                    <Ionicons name="bed-outline" size={20} color="white" />
                    <Text style={[styles.headerBtnTitle]}>Stays</Text>
                </Pressable>

                <Pressable style={[styles.headerBtn, { borderColor: "rgba(255, 255, 255, 0.2)", borderWidth: 2, borderRadius: 25, paddingVertical: 8, paddingHorizontal: 9 }]}>
                    <Ionicons name="airplane-outline" size={20} color="white" />
                    <Text style={[styles.headerBtnTitle]}>Flights</Text>
                </Pressable>

                <Pressable style={[styles.headerBtn, { borderColor: "rgba(255, 255, 255, 0.2)", borderWidth: 2, borderRadius: 25, paddingVertical: 8, paddingHorizontal: 9 }]}>
                    <Ionicons name="car-outline" size={20} color="white" />
                    <Text style={[styles.headerBtnTitle]}>Car Rental</Text>
                </Pressable>

                <Pressable style={[styles.headerBtn, { borderColor: "rgba(255, 255, 255, 0.2)", borderWidth: 2, borderRadius: 25, paddingVertical: 8, paddingHorizontal: 9 }]}>
                    <FontAwesome5 name="uber" size={17} color="white" />
                    <Text style={[styles.headerBtnTitle]}>Texi</Text>
                </Pressable>
            </View>
            <Text style={[styles.HeaderBarQuote, { marginTop: 10 }]}>Make your booking easy,</Text>
            <Text style={styles.HeaderBarQuote}>Welcome to MakeMyBooking</Text>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    HeaderBar: {
        backgroundColor: "#05BFDB",
        paddingVertical: 20,
        paddingBottom: 30,
        paddingHorizontal: 5,
        borderBottomEndRadius: 40,
        borderBottomStartRadius: 40
    },
    headerBtn: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    headerBtnTitle: {
        color: 'white',
        marginLeft: 4,
        fontSize: 15
    },
    HeaderBarQuote: {
        color: 'white',
        alignSelf: 'center',
        paddingTop: 8,
        fontSize: 15,
        fontWeight: 'bold'
    }
})