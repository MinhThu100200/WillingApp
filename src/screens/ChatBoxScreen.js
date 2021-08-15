import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, ButtonGroup } from 'react-native-elements';
import { COLORS, FONTS, SIZES } from '../../constants';
import EmptyChat from '../components/EmptyChat';
import Spacer from '../components/Spacer';


const ChatBoxScreen = () => {
    function renderHearder() {
        return (
            <View style={{justifyContent: 'center', alignItems: 'center', backgroundColor: COLORS.primary}}>
                <Spacer>
                    <Text style={{fontSize: 30, fontWeight: 'bold', color: COLORS.white}}>Tin nhắn</Text>
                </Spacer>              
            </View>
        )
    };
    return (
        <SafeAreaView  style={{backgroundColor: COLORS.lightBlue, flex: 1}}>
            {renderHearder()}
            <EmptyChat />
            
        </SafeAreaView>
        
    );
};

const styles = StyleSheet.create({
   
});

export default ChatBoxScreen;