import { Pressable, StyleSheet, Text, View, Image, Dimensions } from 'react-native'
import React from 'react'
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

const PropertyCard = ({ key, rooms, children, adults, selectData, property, availableRooms }) => {

    const { width, height } = Dimensions.get('window');

    return (
        <View >
            <Pressable style={{ flexDirection: 'row', margin: 15, backgroundColor: 'white' }}>
                <View>
                    <Image
                        source={{ uri: property.image }}
                        style={{ width: width - 275, height: height / 3.3 }}
                    />
                </View>
                <View style={{ padding: 10 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Text style={{ width: 200, fontWeight: 600 }}>{property.name}</Text>
                        <FontAwesome5 name="heart" size={24} color="red" />
                    </View>
                    <View style={{ flexDirection: "row", alignItems: 'center', marginTop: 5 }}>
                        <MaterialIcons name="stars" size={24} color="black" />
                        <Text style={{ marginLeft: 5, marginRight: 15, }}>{property.rating}</Text>
                        <View style={{ backgroundColor: '#05BFDB', padding: 3, borderRadius: 5, width: 90, alignItems: 'center', color: 'white' }}>
                            <Text style={{ color: 'white' }}>Flagship</Text>
                        </View>
                    </View>
                    <View style={{ marginVertical: 4 }}>
                        <Text style={{ width: 230, fontSize: 12, fontWeight: 300 }}>{property.address}</Text>
                    </View>
                    <Text style={{ marginVertical: 3 }}>{`Price for 1 Night, ${adults} Adults`}</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ color: 'red', fontWeight: 500, textDecorationLine: 'line-through' }}>{`₹${property.oldPrice}`}</Text>
                        <Text style={{ marginHorizontal: 15, fontWeight: 500 }}>{`₹${property.newPrice}`}</Text>
                    </View>
                    <Text style={{ color: "#a6ada8", fontSize: 12, marginVertical: 2 }}>VIP Rooms</Text>
                    <Text style={{ color: "#a6ada8", fontSize: 12, marginVertical: 2 }}>Hotel Room: 1 Bed</Text>
                    <Text style={{ backgroundColor: '#05BFDB', width: 150, textAlign: 'center', paddingVertical: 2, borderRadius: 5, color: 'white' }}>Limited Time Deal</Text>
                </View>
            </Pressable>
        </View>

    )
}

export default PropertyCard

const styles = StyleSheet.create({})