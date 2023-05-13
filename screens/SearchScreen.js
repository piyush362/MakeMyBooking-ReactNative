import { StyleSheet, Text, TextInput, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { AntDesign } from '@expo/vector-icons';
import React, { useLayoutEffect, useState, } from 'react'

// constants
import { data } from '../constants/data.js'
import SearchResult from '../components/SearchResult.js';
import { useNavigation } from '@react-navigation/native';

const SearchScreen = () => {

    const navigation = useNavigation()

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: true,
            title: "Explore your Dream Destination",
            headerTitleStyle: {
                fontSize: 20,
                fontWeight: "bold",
                color: 'white'
            },
            headerStyle: {
                backgroundColor: "#05BFDB",
                height: 150,
                borderBottomColor: "transparent",
                shadowColor: "transparent",
            },
        })
    })

    // states
    const [searchInput, setSearchInput] = useState('')


    return (
        <View>
            <View style={styles.SearchScreenTop}>
                {/* <Text style={{ textAlign: 'center', marginTop: 20, fontSize: 20, color: 'white' }}>Explore your Dream Destination</Text> */}
                <View style={styles.SearchInput}>
                    <TextInput placeholder='Enter your destination'
                        placeholderTextColor={'white'}
                        style={{ color: 'white', width: '80%' }}
                        value={searchInput}
                        onChange={(event) => setSearchInput(event.nativeEvent.text)}
                    />
                    <AntDesign name="search1" size={24} color="black" />
                </View>
            </View>
            <SearchResult data={data} searchInput={searchInput} setSearchInput={setSearchInput} />
        </View>
    )
}

export default SearchScreen

const styles = StyleSheet.create({
    SearchScreenTop: {
        backgroundColor: '#05BFDB',
        borderBottomColor: "transparent",
        shadowColor: "transparent",
    },
    SearchInput: {
        margin: 20,
        marginTop: 25,
        padding: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderWidth: 1,
        borderColor: 'yellow',
        borderRadius: 20,
        color: 'white'
    }
})