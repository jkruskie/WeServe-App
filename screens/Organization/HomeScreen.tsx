import * as React from 'react';
import { Text, View, ScrollView, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useState } from 'react';

import EditScreenInfo from '../../components/EditScreenInfo';
import { RootTabScreenProps } from '../../types';
import { Ionicons, SimpleLineIcons } from "@expo/vector-icons";
import Bookmark from '../../components/Bookmark';
import { setUserId, setUserToken } from '../../redux/actions/UserActions';
import { useDispatch } from 'react-redux';
import Colors from '../../constants/Colors';

export default function HomeScreen({ navigation }: RootTabScreenProps<'Home'>) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [hasEmailError, setEmailError] = useState(false);
  const dispatch = useDispatch();

  async function logOut() {
    console.log('logout');
    dispatch(setUserToken(""));
    // dispatch(setUserToken(respondedData.accessToken));
    // dispatch(setUserId(respondedData.id));
    dispatch(setUserId(""));
  }

  let formDates = (item: any) => {
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
      id: 1,
      title: "Zoo Crew",
      image: "https://process.images.nathab.com/A6dTpd53SmIg0pBfJJhgAz/resize=width:1224/quality=value:60/cache=expiry:31536000/compress/https://www.nathab.com/uploaded-files/carousels/HERO/Alaska-North/36-The-Great-Alaskan-Grizzly-Encounter.jpg",
      organizer: {
        name: "Saginaw Children's Zoo",
      },
      dateStart: "12/21/21",
      dateEnd: "12/23/21",
      bookmarked: false
    },
    {
      id: 2,
      title: "Fundraiser Assistant",
      image: "https://img.paperform.co/fetch/f_jpg,w_1800/https://s3.amazonaws.com/paperform-blog/2020/09/How-To-Start-A-Fundraiser-Online-In-6-Simple-Steps.png",
      organizer: {
        name: "Paws for a Cause",
      },
      dateStart: "12/21/21",
      dateEnd: "12/23/21",
      bookmarked: true
    },
    {
      id: 3,
      title: "Can Drive",
      image: "http://eastside-online.org/wp-content/uploads/2021/01/011619b-Inline.jpg",
      organizer: {
        name: "Children's Club of America",
      },
      dateStart: "12/21/21",
      dateEnd: null,
      bookmarked: false
    },
    {
      id: 4,
      title: "Zoo Crew",
      image: "https://process.images.nathab.com/A6dTpd53SmIg0pBfJJhgAz/resize=width:1224/quality=value:60/cache=expiry:31536000/compress/https://www.nathab.com/uploaded-files/carousels/HERO/Alaska-North/36-The-Great-Alaskan-Grizzly-Encounter.jpg",
      organizer: {
        name: "Saginaw Children's Zoo",
      },
      dateStart: "12/21/21",
      dateEnd: "12/23/21",
      bookmarked: false
    },
    {
      id: 5,
      title: "Fundraiser Assistant",
      image: "https://img.paperform.co/fetch/f_jpg,w_1800/https://s3.amazonaws.com/paperform-blog/2020/09/How-To-Start-A-Fundraiser-Online-In-6-Simple-Steps.png",
      organizer: {
        name: "Paws for a Cause",
      },
      dateStart: "12/21/21",
      dateEnd: "12/23/21",
      bookmarked: true
    },
    {
      id: 6,
      title: "Can Drive",
      image: "http://eastside-online.org/wp-content/uploads/2021/01/011619b-Inline.jpg",
      organizer: {
        name: "Children's Club of America",
      },
      dateStart: "12/21/21",
      dateEnd: null,
      bookmarked: true
    },
  ];

  let oppList=oppJson.map((item,index)=>{
    return (
      <View style={[styles.oppContainer, styles.bg_gray]} key={index} >
        <View style={styles.row}>
          <View>
            <Image style={styles.oppImage} source={{ uri: item.image }}/>
          </View>
          <View>
            <Bookmark 
              id={item.id}
              clicked={item.bookmarked}
            />
          </View>
          <View style={styles.column}>
            <Text style={[styles.oppTitle, styles.oppText]}>{ item.title }</Text>
            <Text style={[styles.oppOrganizer, styles.oppText]}>{ item.organizer.name }</Text>
            <Text style={[styles.oppDate, styles.oppText]}>{ formDates(item) }</Text>
          </View>
          <View style={styles.columnsm}>
            <TouchableOpacity onPress={logOut}>
              <SimpleLineIcons name="arrow-right" size={ 24 } style={ styles.enterArrow }/>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  });

  return (
    <View style={{ flex: 1 }}>

      {/* Person Header */}
      <View style={styles.header} >
        <Text style={styles.helloText}>Hello, Justin</Text>
      </View>
      <View style={styles.headContainer}>
        <Image style={styles.headerImg} source={require("../../assets/images/profilepicture.jpg")}/>
        <Text style={styles.todaysOpps}>Today's opportunities are:</Text>
      </View>
      {/* End Person Header */}

      {/* List of Opportunities */}

      <ScrollView style={styles.sv}>
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
  headContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  oppContainer: {
    backgroundColor: Colors.background,
    width: "100%",
    height: 100,
    // flex: 1,
    borderRadius: 10,
    marginBottom: 10,
  },
  todaysOpps: {
    fontSize: 25,
    marginBottom: 10,
  },
  header: {
    backgroundColor: Colors.background,
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
    color: Colors.primary,
  },
  headerImg: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginTop: -100,
    marginBottom: 10
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
    height: "100%",
    width: "100%",
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
  },
  column: {
    height: "100%",
    flex: 1,
    flexDirection: "column",
    // paddingTop: 10,
    justifyContent: "center",
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
  sv: {
    marginLeft: 10,
    marginRight: 10,
  },
  oppText: {
    // paddingBottom: 15,
  },
  bg_gray: {
    backgroundColor: Colors.background
  }
});
