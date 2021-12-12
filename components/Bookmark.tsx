import React, { useState } from "react";
import { StyleSheet, TextInput, View, Keyboard, Button, TouchableOpacity } from "react-native";
import { Feather, Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../constants/Colors";

const Bookmark = (props: any) => {

    const [isActive, setActive] = useState(props.clicked);

    // setActive(props.clicked);

    var bookmarkPress = () => {
        console.log("ID: " + props.id + " ACTIVE: " + isActive);
        setActive(!isActive);
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity key={props.id} onPress={(e) => bookmarkPress()}>
                <Ionicons 
                    name="bookmark" 
                    size={ 35 }
                    style={
                        isActive
                          ? styles.bookmark__clicked
                          : styles.bookmark__unclicked
                    }
                />
                <Ionicons 
                    name="bookmark-outline" 
                    size={ 40 }
                    style={styles.oppBookmarkOutline} 
                />
            </TouchableOpacity>
        </View>
    );
};
export default Bookmark;

// styles
const styles = StyleSheet.create({
    container: {
      margin: 15,
      justifyContent: "flex-start",
      alignItems: "center",
      flexDirection: "row",
      width: "90%",
  
    },
    input: {
      fontSize: 20,
      marginLeft: 10,
      width: "90%",
    },
    bookmark__unclicked: {
        top: 23,
        color: Colors.bookmarkedUnclicked
      },
      bookmark__clicked: {
        top: 25,
        color: Colors.bookmarkClicked
      },
      oppBookmarkOutline: {
        position: "absolute",
        marginTop: 23,
        marginLeft: -3,
        color: Colors.bookmarkOutline
      },
  });