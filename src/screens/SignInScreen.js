import React from 'react';
import { Image, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-elements';
import {LinearGradient} from 'expo-linear-gradient';
import { RadioButton } from 'react-native-paper';
import { COLORS, images } from '../../constants';

function Login({navigation}) {
  const [text, onChangeText] = React.useState("");
  const [number, onChangeNumber] = React.useState(null);
  const [checked, setChecked] = React.useState('first');
    return (
        <View style={styles.container}>
            <LinearGradient colors={['#a1c4fd', '#a1c4fd','#c2e9fb']} start={[0.1,0.1]} style={styles.linearGradient}>
            <View style={styles.cards}>
              <Image style={styles.logo} source={images.logo} />
              <View style={styles.roles}>
                <View style={styles.boxRole}>
                  <RadioButton style={styles.itemRole}
                    value="first"
                    label="first"
                    status={ checked === 'first' ? 'checked' : 'unchecked' }
                    onPress={() => setChecked('first')}
                  />
                </View>
                <Text style={styles.textRole}>Người cần hỗ trợ</Text>
                <View style={styles.boxRole}>
                  <RadioButton style={styles.itemRole}
                    value="second"
                    label="second"
                    status={ checked === 'second' ? 'checked' : 'unchecked' }
                    onPress={() => setChecked('second')}
                  />
                </View>
                <Text style={styles.textRole}>Tình nguyện viên</Text>
              </View>
              <View style={styles.IDbox}>
                <TextInput
                  style={styles.IDinput}
                  onChangeText={onChangeNumber}
                  value={number}
                  placeholder="Điện thoại"
                  keyboardType="numeric"
                />
                <TextInput
                  style={styles.IDinput}
                  onChangeText={onChangeText}
                  value={text}
                  placeholder="Mật khẩu"
                />
              </View>
              <View style={styles.interacts}>
              <Button title="Đăng nhập" onPress={() => navigation.navigate('Home')} buttonStyle={{width: 100, backgroundColor: COLORS.primary}} />
              <View style={styles.ask}>
                <TouchableOpacity onPress={() =>navigation.navigate('SignUp')}>
                  <Text>Đăng ký mới</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Text style={{marginLeft: 100}}>Quên mật khẩu?</Text>
                </TouchableOpacity>
                
              </View>
              </View>
            </View>
            </LinearGradient>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#2D6AAD",
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
        marginTop: "5%",  
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
      IDbox: {
        flex: 1,
        marginTop: "7%",
        alignItems: "center",
        justifyContent: "flex-start",
      },
      IDinput: {
        fontSize: 16,
        padding: 18,
        width: "83%",
        borderBottomWidth: 1,
      },
      roles: {
        padding: 10,
        marginTop: "10%",
        flexDirection: "row",
      },
      boxRole: {
        position: "relative",
        display: "flex",
        flex: 1,
      },
      itemRole: {
        flex: 1,
      },
      textRole: {
        paddingTop: 10,
        flex: 3,
      },
      interacts: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        paddingBottom: 200,
      },
      ask: {
        flexDirection: "row",
      },
      askText: {
        textAlign: "center",
        padding: 20,
        flex:1,
      },
})

export default Login;