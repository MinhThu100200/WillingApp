import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, ButtonGroup, Image } from 'react-native-elements';
import { icons, COLORS } from '../../constants';
import Spacer from './Spacer';


const HistorySupport = () => {
    const buttons = ['Dịch vụ', 'Hiện trạng', 'Thời gian'];
    return (
        <View style={{justifyContent: 'center' ,alignItems: 'center' }}>
            <ButtonGroup 
                buttons={buttons}
                containerStyle={{height: 40}}
                buttonContainerStyle={{backgroundColor: COLORS.lightBlue}}
                textStyle={{color: '#fff'}}
            />
            <Image source={icons.history} style={styles.default}/>
            <Spacer />
            <Text style={{fontWeight: 'bold'}}>Cùng xem lại yêu cầu hỗ trợ bạn đã thực hiện nào!</Text>
            <Spacer>
                <Text>Dễ dàng tìm lại các dịch vụ mà bạn đã yêu cầu hỗ trợ trong phần lịch sử nha!</Text>
            </Spacer>
        </View>
        
    );
};

const styles = StyleSheet.create({
    default: {
        height: 150, 
        width: 150,
        
    }
});

export default HistorySupport;