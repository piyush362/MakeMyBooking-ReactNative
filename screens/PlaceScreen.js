import { Pressable, ScrollView, StyleSheet, Text, View, Image, ImageBackground } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation, useRoute } from '@react-navigation/native'

//icons
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

// states


//constant 
import { data, filter, filters } from '../constants/data'
import PropertyCard from '../components/PropertyCard';
import {
    BottomModal,
    ModalButton,
    ModalContent,
    ModalFooter,
    ModalTitle,
    SlideAnimation,
} from "react-native-modals";

const PlaceScreen = () => {

    //state 
    const [modalVisible, setModalVisible] = useState(false);

    const route = useRoute();
    const navigation = useNavigation()

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: true,
            title: "Popular Places",
            headerTitleStyle: {
                fontSize: 20,
                fontWeight: "bold",
                color: "white",
            },
            headerStyle: {
                backgroundColor: "#05BFDB",
                height: 100,
                borderBottomColor: "transparent",
                shadowColor: "transparent",
            }
        });
    });


    // console.log(data.filter((item) => item.place === route.params.placeName))
    const newdata = data.filter((item) => item.place === route.params.placeName)

    const placesData = newdata[0];
    // console.log(placesData.properties.length)

    return (
        <View>
            <Pressable style={{ flexDirection: 'row', backgroundColor: 'white', justifyContent: 'space-between', paddingHorizontal: 20, paddingVertical: 5 }}>
                <Pressable style={{ flexDirection: 'row', padding: 10 }} onPress={() => setModalVisible(!modalVisible)}>
                    <Ionicons name="md-swap-horizontal" size={20} color="gray" />
                    <Text style={{ fontSize: 15, color: "gray", marginLeft: 5 }}>Sort</Text>
                </Pressable>
                <Pressable style={{ flexDirection: 'row', padding: 10 }}>
                    <Ionicons name="md-filter" size={20} color="gray" />
                    <Text style={{ fontSize: 15, color: "gray", marginLeft: 5 }}>Filter</Text>
                </Pressable>
                <Pressable style={{ flexDirection: 'row', padding: 10 }}>
                    <FontAwesome5 name="map-marker-alt" size={20} color="gray" />
                    <Text style={{ fontSize: 15, color: "gray", marginLeft: 5 }}>Map</Text>
                </Pressable>
            </Pressable>

            <ScrollView style={{ backgroundColor: '#F5F5F5', paddingTop: 10, paddingBottom: 100 }}>
                {
                    placesData.properties.map((property, index) =>
                        <PropertyCard
                            key={index}
                            rooms={route.params.rooms}
                            children={route.params.children}
                            adults={route.params.adults}
                            selectData={route.params.selectData}
                            property={property}
                            availableRooms={property.rooms}
                        />
                    )
                }

                <View style={{ marginTop: 50 }}>
                    <ImageBackground
                        source={{ uri: 'https://pyt-blogs.imgix.net/2020/05/philippines-3.jpeg?auto=format&fit=scale&h=768&ixlib=php-3.3.0&w=1024&wpsize=large' }}
                        style={{ width: '100%', height: 250 }}
                    />
                    <View style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 50, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ color: 'white', fontSize: 24, fontWeight: 'bold' }}>Hope You are Enjoing, Continue...</Text>
                    </View>
                </View>
            </ScrollView>

            <BottomModal
                swipeThreshold={200}
                onBackdropPress={() => setModalVisible(!modalVisible)}
                swipeDirection={["up", "down"]}
                footer={
                    <ModalFooter>
                        <Pressable style={{ backgroundColor: '#05BFDB', width: '100%', height: 50, alignItems: 'center', }}>
                            <Text style={{ color: 'white', fontSize: 20, textAlign: 'center' }}>Apply</Text>
                        </Pressable>
                    </ModalFooter>
                }
                modalTitle={<ModalTitle title="Select Rooms and Guests" />}
                modalAnimation={
                    new SlideAnimation({
                        slideFrom: "bottom",
                    })
                }
                onHardwareBackPress={() => setModalVisible(!modalVisible)}
                visible={modalVisible}
                onTouchOutside={() => setModalVisible(!modalVisible)}
                onSwipeOut={() => setModalVisible(!modalVisible)}
            >
                <ModalContent style={{ width: '100%', height: 300, flexDirection: 'row', justifyContent: 'space-around', paddingVertical: 10 }}>
                    <View style={{ borderRightWidth: 2, borderRightColor: 'gray', width: '30%', paddingTop: 10 }}>
                        <Text style={{ fontSize: 20, fontWeight: 500 }}>Sort</Text>
                    </View>
                    <View style={{ paddingTop: 10 }}>
                        {filters.map((val) => (
                            <View style={{ flexDirection: 'row', gap: 10, alignItems: 'center' }}>
                                <Entypo name="circle" size={24} color="black" />
                                <Text style={{ marginVertical: 5 }}>{val.filter}</Text>
                            </View>
                        ))}
                    </View>
                </ModalContent>
            </BottomModal>

        </View >
    )
}

export default PlaceScreen

const styles = StyleSheet.create({})