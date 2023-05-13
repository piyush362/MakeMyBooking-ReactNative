import { FlatList, Pressable, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const SearchResult = ({ data, searchInput, setSearchInput }) => {

    const navigation = useNavigation();
    return (

        <View>
            <View>
                <Text style={{ color: 'red', textAlign: 'center', marginTop: 10 }}>Only Bangalore and Hyderabad is Available as of now</Text>
                <Text style={{ color: 'red', textAlign: 'center' }}>Please Explore Bangalore, Hyderabad is busy... 😊</Text>
                {
                    searchInput === '' && <Image
                        source={{
                            uri: 'https://cdni.iconscout.com/illustration/premium/thumb/landing-page-for-hotel-search-and-booking-online-2710145-2252785.png'
                        }}
                        style={styles.beforeImage}
                    />
                }
            </View>
            <FlatList data={data} renderItem={({ item }) => {
                if (item.place.toLowerCase().includes(searchInput.toLowerCase())) {
                    if (searchInput === '') {
                        return (
                            null
                        )
                    } else {
                        return (
                            <Pressable style={styles.SearchResultCard}
                                onPress={() => {
                                    setSearchInput(item.place);
                                    navigation.navigate("Home", {
                                        placeName: item.place
                                    })
                                }}
                            >
                                <Image
                                    source={{
                                        uri: item.placeImage
                                    }}
                                    style={{ width: 150, height: 150 }}
                                />
                                <View style={styles.SearchResultCardText}>
                                    <Text style={{ fontSize: 30, fontWeight: '500', marginBottom: 10, color: "gray" }} >{item.place}</Text>
                                    <Text>{item.shortDescription}</Text>
                                    <Text>{item.properties.length}</Text>
                                </View>
                            </Pressable>
                        )
                    }
                }


            }} />
        </View>
    )
}

export default SearchResult

const styles = StyleSheet.create({
    SearchResultCard: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        marginTop: 10
    },
    SearchResultCardText: {
        marginLeft: 20
    },
    beforeImage: {
        width: 400,
        height: 250,
        resizeMode: 'cover',
        marginTop: 200,

    }
})