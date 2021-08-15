import React from 'react';
import {Image, StyleSheet, View, TouchableOpacity} from 'react-native';
import { Button } from 'react-native-elements';
//import StyledButton from "../components/StyledButton";
import {images} from '../../constants';
import Spacer from '../components/Spacer';
import { COLORS } from '../../constants';
import * as RootNavigation from "../navigationRef";


const Login = ({navigation}) => {
  //console.log(navigation);
    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={images.logo} />
            <View style={{height: "5%", backgroundColor: "#ffffff",}}></View>
            <TouchableOpacity>
                <Button title="Đăng nhập" buttonStyle={{backgroundColor: COLORS.primary, width: 100}} onPress={() => navigation.navigate('SignIn')}></Button>
            </TouchableOpacity>
            <Spacer />
            <TouchableOpacity>
                <Button title="Đăng ký" buttonStyle={{backgroundColor: COLORS.primary, width: 100}} onPress={() => navigation.navigate('SignUp')}></Button>
            </TouchableOpacity>
            
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "white",
      },
      linearGradient: {
        flex: 1,
        width: "100%",
        height: "100%",
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5,
        justifyContent: "center",
        alignItems: "center",
      },
      background: {
        width: "100%",
        height: "100%",
        position: "absolute",
        flex: 1,
        justifyContent: "center",
      },
      logo: {
        marginTop: "50%",  
        alignSelf: "center",
        width: 160,
        height: 160,
        resizeMode: "stretch",

      },
      title: {
        textAlign: "center",
        marginTop: "10%",
        fontSize: 35,
        color: "#a1c4fd",
      },
      cards: {
          backgroundColor: "#ffffff",
          marginTop: "35%",
          width: "97%",
          height: "100%",
          borderRadius: 50,
          shadowRadius: 12,
          shadowOpacity: 0.5,
          elevation: 10,
      },
})

export default Login;