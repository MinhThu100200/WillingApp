import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Text, Image, FAB, Button } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS, images } from '../../constants';
import Spacer from '../components/Spacer';

const AcoountScreen = () => {
    function renderHearder() {
        return (
            <View style={styles.container}>
                <Spacer />
                <Button buttonStyle={{width: 100, height: 100, borderRadius: 50, backgroundColor: COLORS.lightBlue}} 
                        icon={<Image source={images.avatar_1} style={{
                            resizeMode: 'contain',
                            height: 70,
                            width: 70
                        }} />}/>  
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{fontSize: 22}}>Minh Thu</Text>        
                </View> 
                 <Spacer />
            </View>
        )
    };
    return (
        <SafeAreaView style={{backgroundColor: COLORS.lightBlue, flex: 1}}>
            {renderHearder()}
            <Spacer>
                <View>
                    <TouchableOpacity style={styles.supportStyle}>
                        <Text style={styles.textSupport}>Chỉnh sửa thông tin cá nhân</Text>
                    </TouchableOpacity>
                </View>  
            </Spacer>
            <View style={{marginLeft: 15, marginEnd: 15}}>
                    <TouchableOpacity style={styles.supportStyle}>
                        <Text style={styles.textSupport}>Xác minh danh tính</Text>
                    </TouchableOpacity>
                </View> 
            <Spacer>
                <View>
                    <TouchableOpacity style={styles.supportStyle}>
                        <Text style={styles.textSupport}>Cài đặt</Text>
                    </TouchableOpacity>
                </View>  
            </Spacer>
            <View style={{ justifyContent: 'center', alignItems: 'center'}}>
                <TouchableOpacity>
                    <Button title="Đăng xuất" buttonStyle={{ width: 150, height: 50, backgroundColor: COLORS.primary }}/>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.primary,
        justifyContent: 'center',
        alignItems:'center'
    }, 
    supportStyle: {
        borderColor: COLORS.white,
        borderRadius: 10,
        borderWidth: 1,
        paddingTop: 10,
        paddingBottom: 12,
        backgroundColor: COLORS.lightBlue1
    },
    textSupport: {
        fontSize: 22,
        //fontFamily: FONTS.body1.fontFamily,
        paddingTop: 2,
        color: COLORS.primary,
        marginLeft: 10
    },
});

export default AcoountScreen;