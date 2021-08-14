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
            <Image source={icons.current} style={styles.default}/>

            <Spacer />
            <Text style={{fontWeight: 'bold'}}>Bạn chưa yêu cầu hỗ trợ nào nè bạn ơi!</Text>
            <Spacer>
                <Text>Những yêu cầu đã được gửi đến và xác nhận, đang được thực hiện đều sẽ được hiển thị ở đây để bạn có thể dễ dàng theo dõi!</Text>
            </Spacer>
            
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