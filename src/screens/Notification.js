import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, ButtonGroup, Image, Button } from 'react-native-elements';
import { COLORS, FONTS, images, SIZES } from '../../constants';
import EmptyChat from '../components/EmptyChat';
import Spacer from '../components/Spacer';


const ChatBoxScreen = () => {
    const buttons = ['Xem tất cả', 'Đánh dấu đã xem'];
    function renderHearder() {
        return (
            <View style={{justifyContent: 'center', alignItems: 'center', backgroundColor: COLORS.primary}}>
                <Spacer>
                    <Text style={{fontSize: 30, fontWeight: 'bold', color: COLORS.white}}>Thông báo</Text>
                </Spacer>              
            </View>
        )
    };
    return (
        <SafeAreaView  style={{backgroundColor: COLORS.lightBlue, flex: 1}}>
            {renderHearder()}
            <ButtonGroup 
                buttons={buttons}
                containerStyle={{height: 40}}
                buttonContainerStyle={{backgroundColor: COLORS.lightBlue}}
                textStyle={{color: '#fff'}}
            />
           
            <View style={styles.container}>
                <TouchableOpacity style={styles.supportStyle}>
                    <Button type='outline' buttonStyle={{height: 70, width: 70, borderRadius: 35}} icon={<Image source={images.logopng} style={ styles.iconStyle }/>}/>
                    <Text style={styles.textSupport}>Hãy bắt đầu với hỗ trợ đầu tiên nhé!</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.container}>
                <TouchableOpacity style={styles.supportStyle}>
                    <Button type='outline' buttonStyle={{height: 70, width: 70, borderRadius: 35}} icon={<Image source={images.logopng} style={ styles.iconStyle }/>}/>
                    <Text style={styles.textSupport}>Chào mừng bạn đến với Willing!</Text>
                </TouchableOpacity>
            </View>  
            

            
        </SafeAreaView>
        
    );
};

const styles = StyleSheet.create({
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
        fontSize: 16,
        //fontFamily: FONTS.body1.fontFamily,
        paddingTop: 25,
        color: COLORS.primary,
        marginLeft: 10
    },
    container: {
        marginLeft: 10,
        marginEnd: 10,
        marginBottom: 10

    },
    iconStyle: {
        height: 50, 
        width: 50, 
        resizeMode: 'contain', 
        borderRadius: 20
    },
});

export default ChatBoxScreen;