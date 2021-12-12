import * as React from 'react';
import { Text, View, ScrollView, StyleSheet, Image, TouchableOpacity, RefreshControl } from 'react-native';
import { useState } from 'react';

import { RootTabScreenProps } from '../../types';
import { SimpleLineIcons } from "@expo/vector-icons";
import Bookmark from '../../components/Bookmark';
import { useSelector } from 'react-redux';
import Colors from '../../constants/Colors';
import config from '../../config';
import { RootState } from '../../redux/redux';

export default function HomeScreen({ navigation }: RootTabScreenProps<'Home'>) {
  const [data, setData] = useState<any[]>([]);
  const userToken = useSelector((state: RootState) => state.user.authToken);

  React.useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    let res = await fetch(config.api.host + '/api/events', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + userToken
      },
    })
    let respondedData = await res.json()
    let respondedStatus = res.status;

    if(respondedStatus == 200) {
      setData(respondedData);
    } else {
      console.log("ERROR");
    }
  };

  function parseDates(item: any) {
    if(item.end_date) {
      var date1 = new Date(item.start_date);
      var date2 = new Date(item.end_date);
      var string = `${date1.getMonth() + 1}/${date1.getDate()}/${date1.getFullYear().toString().substr(-2)} - ${date2.getMonth() + 1}/${date2.getDate()}/${date2.getFullYear().toString().substr(-2)}`;
      return string;
      // Has a start and end date, so combine the two
    } else {
      // Has only start date, which is required
      var date1 = new Date(item.start_date);
      var string = `${date1.getMonth() + 1}/${date1.getDate()}/${date1.getFullYear().toString().substr(-2)} ${formatAMPM(date1)}`;
      return string;
    }
  }

  function sourceImage(image : string) {
    if(image) {
      return config.api.host + image;
    } else {
      return "https://cdn.pixabay.com/photo/2017/10/13/12/29/hands-2847508_960_720.jpg";
    }
  }

  function formatAMPM(date: Date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
  }

  let oppList=data.map((item,index)=>{
    return (
      <TouchableOpacity onPress={() => { 
          navigation.navigate('Opportunity', item); }
        } key={index}>
        <View style={[styles.oppContainer, styles.bg_gray]} key={index} >
          <View style={styles.row}>
            <View>
              <Image style={styles.oppImage} source={{ uri: sourceImage(item.organization.image) }}/>
            </View>
            <View>
              <Bookmark 
                id={item._id}
                clicked={false}
              />
            </View>
            <View style={styles.column}>
              <Text style={styles.oppTitle}>{ item.title }</Text>
              <Text style={styles.oppOrganizer}>{ item.organization.name }</Text>
              <Text style={styles.oppDate}>{ parseDates(item) }</Text>
            </View>
            <View style={styles.columnsm}>
              <TouchableOpacity>
                <SimpleLineIcons name="arrow-right" size={ 24 } style={ styles.enterArrow }/>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  });

  return (
    <View style={ styles.container }>

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

      <ScrollView style={styles.sv}
        refreshControl={
          <RefreshControl
            refreshing={false}
            onRefresh={fetchData} // exl in function : this.yourWebview.reload();
          />
      }>
        { oppList }
      </ScrollView>

      {/* End List of Opportunities */}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: 'white'
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
  bg_gray: {
    backgroundColor: Colors.background
  }
});
