import React, { useContext, useEffect } from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, Image } from 'react-native-elements';
import { images, icons, COLORS, FONTS } from '../../constants';
import Spacer from '../components/Spacer';
import { Context as LocationContext } from '../context/LocationContext';
//import useLocation from '../hooks/useLocation';


const UserScreen = () => {
    //const { addLocation, state } = useContext(LocationContext);
    //const err = useLocation(addLocation);

    function renderHearder() {
        return (
            <View style={styles.container}>
                <Spacer>
                    <Text style={styles.textStyle}>Hỗ trợ bạn tại ...</Text>
                    <View style={styles.styleLocation}>
                        <Image source={icons.gps} style={{
                            resizeMode: 'contain',
                            height: 40,
                            width: 40
                        }} />
                        <Text style={{ fontSize: 18, marginTop: 10 }}>Số 1 Võ Văn Ngân, Phường Linh Chiểu...</Text>
                    </View>
                   
                </Spacer>              
            </View>
        )
    };
    return (
        <SafeAreaView forceInset={{top: 'always'}} style={{backgroundColor: COLORS.lightBlue, flex: 1}} >
            {renderHearder()}
            <Spacer />
            <View style={styles.logoCenter}>
                <Image source={images.logo} style={{height: 140, width: 140}}/>
               
            </View>  
            <Spacer>
                <View>
                    <TouchableOpacity style={styles.supportStyle}>
                        <Image source={icons.immediately} style={ styles.iconStyle }/>
                        <Text style={styles.textSupport}>Hỗ trợ ngay</Text>
                    </TouchableOpacity>
                </View>  
            </Spacer>
            <View style={{ marginLeft: 15, marginEnd: 15}}>
                    <TouchableOpacity style={styles.supportStyle}>
                        <Image source={icons.book} style={ styles.iconStyle }/>
                        <Text style={styles.textSupport}>Đặt lịch hỗ trợ</Text>
                    </TouchableOpacity>
            </View>  
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        color: COLORS.white, 
        paddingBottom: 10,
        //fontFamily: FONTS.body2.fontFamily,
        fontSize: FONTS.body2.fontSize,
        marginLeft: 5
    },
    container: {
        backgroundColor: COLORS.primary,
    },
    logoCenter: {
        justifyContent: 'center', 
        alignItems: 'center'
    },
    supportStyle: {
        borderColor: COLORS.white,
        borderRadius: 10,
        borderWidth: 1,
        paddingTop: 5,
        paddingBottom: 5,
        flexDirection: 'row',
        backgroundColor: COLORS.lightBlue1
    },
    textSupport: {
        fontSize: FONTS.body1.fontSize,
        //fontFamily: FONTS.body1.fontFamily,
        paddingTop: 12,
        color: COLORS.primary,
        marginLeft: 10
    },
    iconStyle: {
        height: 70, 
        width: 70, 
        resizeMode: 'contain', 
        marginLeft: 15
    },
    styleLocation: {
        flexDirection: 'row',
    }
});

export default UserScreen;