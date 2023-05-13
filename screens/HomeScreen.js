import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  Alert,
} from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import Header from "../components/Header";

// icons
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import {
  BottomModal,
  ModalButton,
  ModalContent,
  ModalFooter,
  ModalTitle,
  SlideAnimation,
} from "react-native-modals";
import SearchScreen from "./SearchScreen";

const HomeScreen = () => {
  const navigation = useNavigation();

  // states
  const [selectData, setSelectData] = useState({
    startDate: "",
    endDate: "",
  });
  const [rooms, setRooms] = useState(1);
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);

  // params
  const route = useRoute();


  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "MakeMyBooking",
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
      },
      headerRight: () => (
        <Ionicons
          name="notifications-outline"
          size={24}
          color="white"
          style={{ marginRight: 20 }}
        />
      ),
    });
  });

  // console.log(route.params);

  const searchPlace = (place) => {
    if (
      !route.params ||
      selectData.startDate.length != 10 ||
      selectData.endDate.length != 10
    ) {
      Alert.alert("Invalid Details", "Please enter your all details ", [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        { text: "OK", onPress: () => console.log("OK Pressed") },
      ]);
    }

    if (
      route.params &&
      selectData.startDate.length === 10 &&
      selectData.startDate.length === 10
    ) {
      navigation.navigate("Place", {
        rooms: rooms,
        adults: adults,
        children: children,
        selectData: selectData,
        placeName: route.params.placeName,
      });
    }
  };

  // console.log(selectData);

  return (
    <>
      <View style={{ paddingBottom: 165 }}>
        <Header />
        <ScrollView>
          <View style={styles.homeDataCard}>
            {/* destination */}
            <Pressable
              style={styles.inpurdata}
              onPress={() => navigation.navigate("Search")}
            >
              <AntDesign name="search1" size={24} color="black" />
              {/* <TextInput
                placeholder={
                  route?.params
                    ? route.params.placeName
                    : "Enter your Destination"
                }
              /> */}
              <Text style={{ color: "gray" }}>
                {route?.params
                  ? route.params.placeName
                  : "Enter your Destination"}
              </Text>
            </Pressable>

            {/* select data */}
            <Pressable style={styles.inpurdata}>
              <AntDesign name="calendar" size={24} color="black" />
              <TextInput
                placeholder="02/05/2023"
                onChangeText={(startDate) =>
                  setSelectData((prevSelectData) => ({
                    ...prevSelectData,
                    startDate,
                  }))
                }
              />
              <TextInput
                placeholder="04/05/2023"
                style={{ paddingLeft: 40 }}
                onChangeText={(endDate) =>
                  setSelectData((prevSelectData) => ({
                    ...prevSelectData,
                    endDate,
                  }))
                }
              />
            </Pressable>

            {/* room and guiest */}
            <Pressable
              style={styles.inpurdata}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <AntDesign name="user" size={24} color="black" />
              {/* <TextInput
                placeholderTextColor="#f07373"
                placeholder={`${rooms} Rooms, ${adults} Adults, ${children} Childrens`}
              /> */}
              <Text
                style={{ color: "#f07373" }}
              >{`${rooms} Rooms, ${adults} Adults, ${children} Childrens`}</Text>
            </Pressable>

            {/* search btn */}
            <Pressable
              style={[
                styles.inpurdata,
                {
                  backgroundColor: "#05BFDB",
                  borderColor: "transparent",
                  borderRadius: 10,
                  padding: 5,
                },
              ]}

              onPress={() => searchPlace(route.params)}
            >
              <Text
                style={{
                  color: "white",
                  fontSize: 15,
                  textAlign: "center",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              >
                Search
              </Text>
            </Pressable>
          </View>

          <Text
            style={{
              margin: 20,
              fontSize: 25,
              fontWeight: "500",
              paddingRight: 50,
            }}
          >
            Your next adventure is just a click away
          </Text>
          <ScrollView
            showsHorizontalScrollIndicator={false}
            horizontal
            style={{ marginBottom: 70, marginHorizontal: 0 }}
          >
            <View style={{ marginLeft: 20, marginBottom: 10 }}>
              <Image
                source={{
                  uri: "https://www.gannett-cdn.com/-mm-/05b227ad5b8ad4e9dcb53af4f31d7fbdb7fa901b/c=0-64-2119-1259/local/-/media/USATODAY/USATODAY/2014/08/13/1407953244000-177513283.jpg",
                }}
                style={{ width: 250, height: 150 }}
              />
              <Text style={{ fontSize: 15, marginTop: 5 }}>Best Rooms</Text>
              <Text
                style={{
                  width: 230,
                  color: "gray",
                  fontSize: 10,
                  marginTop: 3,
                }}
              >
                Spacious hotel room with modern amenities, comfortable bedding,
                and stunning city views for a relaxing and luxurious stay
              </Text>
            </View>
            <View style={{ marginLeft: 20, marginBottom: 10 }}>
              <Image
                source={{
                  uri: "https://images.thrillophilia.com/image/upload/s--vI0Q6HT9--/c_fill,g_auto,h_600,q_auto,w_975/f_auto,fl_strip_profile/v1/images/photos/000/082/497/original/1675261154_shutterstock_2148766633.jpg.jpg",
                }}
                style={{ width: 250, height: 150 }}
              />
              <Text style={{ fontSize: 15, marginTop: 5 }}>Best Views</Text>
              <Text
                style={{
                  width: 230,
                  color: "gray",
                  fontSize: 10,
                  marginTop: 3,
                }}
              >
                Discover hotels with stunning views. Book now and enjoy
                breathtaking scenery from your room.
              </Text>
            </View>
            <View style={{ marginLeft: 20, marginBottom: 10, marginRight: 20 }}>
              <Image
                source={{
                  uri: "https://img.onmanorama.com/content/dam/mm/en/travel/outside-kerala/images/2021/10/15/buddha-park-ravangla.jpg",
                }}
                style={{ width: 250, height: 150 }}
              />
              <Text style={{ fontSize: 15, marginTop: 5 }}>Best Places</Text>
              <Text
                style={{
                  width: 230,
                  color: "gray",
                  fontSize: 10,
                  marginTop: 3,
                }}
              >
                Top hotel destinations: New York, Paris, Dubai, London, Tokyo.
                Luxury, culture, cuisine, entertainment, and unforgettable
                experiences await
              </Text>
            </View>
          </ScrollView>
          <Text
            style={{
              fontSize: 25,
              fontWeight: "600",
              textAlign: "center",
              marginBottom: 50,
            }}
          >
            MakeMy<Text style={{ color: "#05BFDB" }}>Booking</Text>
          </Text>

          <View>
            <Image
              source={{
                uri: "https://c4.wallpaperflare.com/wallpaper/431/451/684/the-most-beautiful-picture-of-nature-wallpaper-preview.jpg",
              }}
              style={{ width: "100%", height: 250, paddingBottom: 100 }}
            />
          </View>
        </ScrollView>
      </View>

      <BottomModal
        swipeThreshold={200}
        onBackdropPress={() => setModalVisible(!modalVisible)}
        swipeDirection={["up", "down"]}
        footer={
          <ModalFooter>
            <ModalButton
              text="Apply"
              style={{
                marginBottom: 20,
                color: "white",
                backgroundColor: "#05BFDB",
              }}
              onPress={() => setModalVisible(!modalVisible)}
            ></ModalButton>
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
        <ModalContent style={{ height: 350, width: "100%", paddingTop: 10 }}>
          <View style={styles.bottomModelStyle}>
            <Text style={{ fontSize: 16 }}>Rooms</Text>
            <Pressable style={styles.modelBtn}>
              <Pressable
                style={styles.modalbtnCounter}
                onPress={() => {
                  setRooms((c) => Math.max(1, c - 1));
                }}
              >
                <Text style={styles.modalConterText}>-</Text>
              </Pressable>
              <Pressable>
                <Text style={{ fontSize: 16 }}>{rooms}</Text>
              </Pressable>
              <Pressable
                style={styles.modalbtnCounter}
                onPress={() => setRooms((c) => c + 1)}
              >
                <Text style={styles.modalConterText}>+</Text>
              </Pressable>
            </Pressable>
          </View>
          <View style={styles.bottomModelStyle}>
            <Text style={{ fontSize: 16 }}>Adults</Text>
            <Pressable style={styles.modelBtn}>
              <Pressable
                style={styles.modalbtnCounter}
                onPress={() => setAdults((c) => Math.max(1, c - 1))}
              >
                <Text style={styles.modalConterText}>-</Text>
              </Pressable>
              <Pressable>
                <Text style={{ fontSize: 16 }}>{adults}</Text>
              </Pressable>
              <Pressable
                style={styles.modalbtnCounter}
                onPress={() => setAdults((c) => c + 1)}
              >
                <Text style={styles.modalConterText}>+</Text>
              </Pressable>
            </Pressable>
          </View>
          <View style={styles.bottomModelStyle}>
            <Text style={{ fontSize: 16 }}>Childrens</Text>
            <Pressable style={styles.modelBtn}>
              <Pressable
                style={styles.modalbtnCounter}
                onPress={() => setChildren((c) => Math.max(0, c - 1))}
              >
                <Text style={styles.modalConterText}>-</Text>
              </Pressable>
              <Pressable>
                <Text style={{ fontSize: 16 }}>{children}</Text>
              </Pressable>
              <Pressable
                style={styles.modalbtnCounter}
                onPress={() => setChildren((c) => c + 1)}
              >
                <Text style={styles.modalConterText}>+</Text>
              </Pressable>
            </Pressable>
          </View>
        </ModalContent>
      </BottomModal>
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  homeDataCard: {
    margin: 20,
    marginTop: 30,
    // borderColor: "#FEBE8C",
    // borderWidth: 3,
    // borderRadius: 6,
  },
  inpurdata: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    paddingHorizontal: 10,
    paddingVertical: 18,
    borderColor: "#dfe8ed",
    borderWidth: 3,
    borderRadius: 6,
    margin: 3,
  },
  bottomModelStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginTop: 10,
  },
  modelBtn: {
    flexDirection: "row",
    gap: 15,
    alignItems: "center",
  },
  modalbtnCounter: {
    backgroundColor: "#05BFDB",
    width: 30,
    height: 30,
    borderRadius: 30,
    alignItems: "center",
    alignContent: "center",
  },
  modalConterText: {
    textAlign: "center",
    alignItems: "center",
    color: "white",
    fontWeight: "500",
    fontSize: 20,
    marginTop: "auto",
    marginBottom: "auto",
  },
});
