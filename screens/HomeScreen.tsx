import * as React from 'react';
import { ScrollView, StyleSheet, Image } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import { Ionicons, SimpleLineIcons } from "@expo/vector-icons";

export default function HomeScreen({ navigation }: RootTabScreenProps<'Home'>) {
  return (
    <View style={{ flex: 1, alignItems: "center" }}>

      {/* Person Header */}
      <View style={styles.header} >
        <Text style={styles.helloText}>Hello, Justin</Text>
      </View>
      <Image style={styles.headerImg} source={require("../assets/images/profilepicture.jpg")}/>
      <Text style={styles.todaysOpps}>Today's opportunities are:</Text>
      {/* End Person Header */}

      {/* List of Opportunities */}

      <ScrollView>
        { oppList }
      </ScrollView>

      {/* End List of Opportunities */}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontSize:16,
    fontWeight:"500",
    color:"#212121",
    textAlign:"center"
  },
  button: {
    width:300,
    borderRadius: 25,
    backgroundColor:"#FCE4EC",
    marginVertical: 10,
    paddingVertical:16
  },
  oppContainer: {
    backgroundColor: "#e0e1e0",
    width: 375,
    height: 100,
    borderRadius: 10,
    marginBottom: 10
  },
  todaysOpps: {
    fontSize: 25,
    marginBottom: 10,
  },
  header: {
    backgroundColor: "#e0e1e0",
    width: 400,
    height: 200,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 25
  },
  helloText: {
    marginTop: -30,
    fontSize: 40,
    color: "#b41f36",
  },
  headerImg: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginTop: -100,
    marginBottom: 10
  },
  oppImage: {
    width: 90,
    height: 80,
    borderRadius: 40,
    marginLeft: 5,
    marginTop: 5,
    marginBottom: 5,
    marginRight: 5,
    flex: 1
  },
  oppHeader: {
    marginLeft: 125,

  },
  row: {
    // height: "100%",
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
  },
  column: {
    // height: "100%",
    flex: 1,
    flexDirection: "column",
    // flexWrap: "wrap",
    // alignItems: "center",
  },
  oppTitle: {
    fontSize: 22,
    color: "#005797",
  },
  oppDate: {
    fontSize: 16
  },
  oppOrganizer: {
    fontSize: 16
  },
  oppBookmark: {
    marginTop: 50,
    marginRight: 5,
    color: "white",
  },
  oppBookmarkOutline: {
    position: "absolute",
    marginTop: 48,
    marginLeft: -2,
    color: "#dc9b9b",
  },
  enterArrow: {
    marginTop: 50,
    color: "black",  
  }
});

let formDates = (item) => {
  if(item.dateEnd) {
    // Has an end date, so concat the two dates
    return(item.dateStart + " - " + item.dateEnd)
  } else {
    // Just start date
    return(item.dateStart)
  }
}

// Test data
let oppJson=[
  {
    title: "Zoo Crew",
    image: "https://process.images.nathab.com/A6dTpd53SmIg0pBfJJhgAz/resize=width:1224/quality=value:60/cache=expiry:31536000/compress/https://www.nathab.com/uploaded-files/carousels/HERO/Alaska-North/36-The-Great-Alaskan-Grizzly-Encounter.jpg",
    organizer: {
      name: "Saginaw Children's Zoo",
    },
    dateStart: "12/21/21",
    dateEnd: "12/23/21"
  },
  {
    title: "Fundraiser Assistant",
    image: "https://img.paperform.co/fetch/f_jpg,w_1800/https://s3.amazonaws.com/paperform-blog/2020/09/How-To-Start-A-Fundraiser-Online-In-6-Simple-Steps.png",
    organizer: {
      name: "Paws for a Cause",
    },
    dateStart: "12/21/21",
    dateEnd: "12/23/21"
  },
  {
    title: "Can Drive",
    image: "http://eastside-online.org/wp-content/uploads/2021/01/011619b-Inline.jpg",
    organizer: {
      name: "Children's Club of America",
    },
    dateStart: "12/21/21",
    dateEnd: null
  },
  {
    title: "Zoo Crew",
    image: "https://process.images.nathab.com/A6dTpd53SmIg0pBfJJhgAz/resize=width:1224/quality=value:60/cache=expiry:31536000/compress/https://www.nathab.com/uploaded-files/carousels/HERO/Alaska-North/36-The-Great-Alaskan-Grizzly-Encounter.jpg",
    organizer: {
      name: "Saginaw Children's Zoo",
    },
    dateStart: "12/21/21",
    dateEnd: "12/23/21"
  },
  {
    title: "Fundraiser Assistant",
    image: "https://img.paperform.co/fetch/f_jpg,w_1800/https://s3.amazonaws.com/paperform-blog/2020/09/How-To-Start-A-Fundraiser-Online-In-6-Simple-Steps.png",
    organizer: {
      name: "Paws for a Cause",
    },
    dateStart: "12/21/21",
    dateEnd: "12/23/21"
  },
  {
    title: "Can Drive",
    image: "http://eastside-online.org/wp-content/uploads/2021/01/011619b-Inline.jpg",
    organizer: {
      name: "Children's Club of America",
    },
    dateStart: "12/21/21",
    dateEnd: null
  },
];

let oppList=oppJson.map((item,index)=>{
  return (
    <View style={styles.oppContainer} key={index} >
      <View style={styles.row}>
        <View>
          <Image style={styles.oppImage} source={{ uri: item.image }}/>
        </View>
        <View>
          <Ionicons 
            name="bookmark" 
            size={ 35 }
            style={styles.oppBookmark}
          />
          <Ionicons 
            name="bookmark-outline" 
            size={ 40 }
            style={styles.oppBookmarkOutline} 
            // I"m unsure how well this will work. I"m trying to stack 2 icons since
            // since I can"t find anywhere in the documentation about adding a border
            // to the icons. So I"m using posiiton: absolute to hold it in place.

          />
        </View>
        <View style={styles.column}>
          <Text style={styles.oppTitle}>{ item.title }</Text>
          <Text style={styles.oppOrganizer}>{ item.organizer.name }</Text>
          <Text style={styles.oppDate}>{ formDates(item) }</Text>
        </View>
        <View style={styles.column} flex={0}>
          <SimpleLineIcons name="arrow-right" size={ 24 } style={ styles.enterArrow }/>
        </View>
      </View>
    </View>
  );
});
