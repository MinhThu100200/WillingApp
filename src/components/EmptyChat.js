import React from 'react';
import { View, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, Button, Image } from 'react-native-elements';
import { COLORS, icons } from '../../constants';
import Spacer from './Spacer';


const CurentSupport = () => {

    return (
        <View style={{justifyContent: 'center' ,alignItems: 'center' }}>
            <Spacer />
            <Spacer />
            <Spacer />
            <Spacer />
            <Image source={icons.chatbox} style={styles.default}/>

            <Spacer />
            <Text style={{fontWeight: 'bold'}}>Kết nối với tình nguyện viên nhé bạn!</Text>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <Spacer>
                    <Text>Bạn có thể trò chuyện và trao đổi yêu cầu của bạn với tình nguyện viên đó nha!</Text>
                </Spacer>
            </View>
            
        </View>
        
    );
};

const styles = StyleSheet.create({
    default: {
        height: 150,
        width: 150
    }
});

export default CurentSupport;