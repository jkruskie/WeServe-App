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

export default function OpportunityScreen({route}: any) {
  const [data, setData] = useState<any[]>([]);
  const userToken = useSelector((state: RootState) => state.user.authToken);

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

  return (
    <View style={styles.container}>
        <ScrollView>
            <View style={styles.header}>
                <View style={styles.imageContainer}>
                    <Image style={styles.image} source={{ uri: sourceImage(route.params.organization.image) }}/>
                </View>
                <View style={styles.introContainer}>
                    <Text style={styles.introHeader}>{ route.params.organization.name }</Text>
                    <Text style={styles.introDescription}>{ route.params.organization.description }</Text>
                </View>
            </View>
            <View style={styles.body}>
                <View style={styles.bgContainer}>
                    <View style={styles.detailGrid}>
                        <View style={styles.headerTxt}>
                            <Text style={styles.details}>DETAILS</Text>
                        </View>
                        <View style={styles.headerDate}>
                            <Text style={styles.date}>{ parseDates(route.params) }</Text>
                        </View>
                    </View>
                    <View>
                        <Text style={styles.longText}>{ route.params.details }</Text>
                    </View>
                </View>
                <View style={styles.spacer} />
                <View style={styles.bgContainer}>
                    <View style={styles.detailGrid}>
                        {/* <View style={styles.headerTxt}> */}
                            <Text style={[styles.details, styles.leftTopPadding]}>WHEN AND WHERE</Text>
                        {/* </View> */}
                    </View>
                    <View>
                        <Text style={styles.longText}>{ route.params.location }</Text>
                    </View>
                </View>
                <View style={styles.spacer} />
                <TouchableOpacity style={styles.signUp}>
                    <Text style={styles.signUpBtn}>Sign me up!</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        backgroundColor: 'white',
    },
    header: {
        height: '30%',
        backgroundColor: 'white',
        flexDirection: 'row',
        marginTop: 100,
    },
    imageContainer: {
        width: '35%',
    },
    introContainer: {
        width: '65%',
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 100/2,
    },
    introHeader: {
        fontSize: 20,
        fontWeight: '600',
        color: Colors.secondary,
        marginBottom: 15
    },
    introDescription: {
        fontSize: 15,
        color: Colors.text
    },
    body: {
        marginTop: -80,
    },
    bgContainer: {
        backgroundColor: Colors.background,
        borderRadius: 20,
        // height: '30%',
    },
    detailGrid: {
        flexDirection: 'row',
    },
    headerTxt: {
        width: '30%',
        paddingLeft: 20,
        paddingTop: 10
    },
    headerDate: {
        width: '70%',
        paddingRight: 20,
        paddingTop: 10
    },
    details: {
        fontSize: 20,
        color: Colors.secondary,
        fontWeight: '500',
        textAlign: 'left'
    },
    date: {
        fontSize: 16,
        color: Colors.text,
        fontWeight: '300',
        textAlign: 'right'
    },
    longText: {
        fontSize: 16,
        color: Colors.text,
        paddingTop: 10,
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 20,
    },
    spacer: {
        height: 15
    },
    leftTopPadding: {
        paddingLeft: 20,
        paddingTop: 10
    },
    signUp: {
        marginBottom: 25,
        height: 60,
        width: '50%',
        backgroundColor: Colors.primary,
        marginLeft: 'auto',
        marginRight: 'auto',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
      },
      signUpBtn: {
        color: 'white',
        textAlign: 'center',
        fontSize: 26,
      },
});
