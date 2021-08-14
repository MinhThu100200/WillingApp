import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Image, FAB } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS, images } from '../../constants';
import Spacer from '../components/Spacer';

const AcoountScreen = () => {
    function renderHearder() {
        return (
            <View style={styles.container}>
                <Spacer />
                <FAB icon={<Image source={images.avatar_1} style={{
                            resizeMode: 'contain',
                            height: 40,
                            width: 40
                        }} />}/>  
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                    <Text>Minh Thu</Text>        
                </View> 
                 <Spacer />
            </View>
        )
    };
    return (
        <SafeAreaView>
            {renderHearder()}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.primary
    }
});

export default AcoountScreen;