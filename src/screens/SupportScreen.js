import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, ButtonGroup } from 'react-native-elements';
import { COLORS, FONTS, SIZES } from '../../constants';
import CurentSupport from '../components/CurrentSupport';
import HistorySupport from '../components/HistorySupport';


const SupportScreen = () => {
    const buttons = ['Đang hỗ trợ', 'Lịch sử'];
    const [index, setIndex] = useState(0);
    return (
        <SafeAreaView  style={{backgroundColor: COLORS.lightBlue, flex: 1}}>
            <View>
                <ButtonGroup
                    buttons={buttons}
                    containerStyle={{height: 40}}
                    buttonContainerStyle={{backgroundColor: COLORS.lightBlue}}
                    textStyle={{color: '#fff'}}
                    onPress={(index) => setIndex(index)}
                    selectedIndex={index}
                />
                {index === 0 ? <CurentSupport /> : <HistorySupport />}
            </View>
            
        </SafeAreaView>
        
    );
};

const styles = StyleSheet.create({
   
});

export default SupportScreen;