import { SimpleLineIcons } from '@expo/vector-icons';
import * as React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from 'react-native';
import Colors from '../../constants/Colors';

export default function MessageScreen() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.holder}>
          <View style={[styles.oppContainer, styles.bg_gray]} >
          <View style={styles.row}>
            <View>
              <Image style={styles.oppImage} source={{ uri: "http://eastside-online.org/wp-content/uploads/2021/01/011619b-Inline.jpg" }}/>
            </View>
            <View style={styles.column}>
              <Text style={[styles.oppTitle, styles.oppText]}>Covenant Healthcare</Text>
            </View>
            <View style={styles.columnsm}>
              <TouchableOpacity>
                <SimpleLineIcons name="arrow-right" size={ 24 } style={ styles.enterArrow }/>
              </TouchableOpacity>
            </View>
          </View>
        </View>

          <View style={[styles.oppContainer, styles.bg_gray]} >
          <View style={styles.row}>
            <View>
              <Image style={styles.oppImage} source={{ uri: "http://eastside-online.org/wp-content/uploads/2021/01/011619b-Inline.jpg" }}/>
            </View>
            <View style={styles.column}>
              <Text style={[styles.oppTitle, styles.oppText]}>Covenant Healthcare</Text>
            </View>
            <View style={styles.columnsm}>
              <TouchableOpacity>
                <SimpleLineIcons name="arrow-right" size={ 24 } style={ styles.enterArrow }/>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: 'white'
  },
  messageContainer: {
    // backgroundColor: Colors.background,
    // width: '100%',
    // height: 70,
    // marginTop: 20,
    // marginLeft: 'auto',
    // marginRight: 'auto',
  },
  messageBox: {
    // width: '100%',
    // backgroundColor: Colors.background
  },
  oppImage: {
    width: 80,
    height: 80,
    borderRadius: 75,
    marginLeft: 8,
    marginTop: 10,
    marginBottom: 10,
    paddingRight: 5,
    flex: 1
  },
  oppHeader: {
    // marginLeft: 125,
  },
  row: {
    // height: "100%",
    // width: "100%",
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
  },
  column: {
    height: "100%",
    // flex: 0,
    flexDirection: "column",
    // paddingTop: 10,
    // justifyContent: "center",
    // paddingBottom: 10,
    // flexWrap: "wrap",
    // alignItems: "center",
  },
  columnsm: {

  },
  oppTitle: {
    // flex: 1,
    fontSize: 22,
    color: Colors.secondary
    // lineHeight: 20,
  },
  oppDate: {
    // flex: .5,
    fontSize: 16
  },
  oppOrganizer: {
    // flex: 1,
    fontSize: 16
  },
  enterArrow: {
    marginTop: 50,
    color: "black",  
  },
  oppText: {
    // paddingBottom: 15,
  },
  oppContainer: {
    backgroundColor: Colors.background,
    width: "100%",
    // height: 100,
    // flex: 1,
    borderRadius: 10,
    marginBottom: 10,
  },
  bg_gray: {
    // backgroundColor: Colors.background
  },
  holder: {
    marginTop: 80,
  }
});
