import React, { useState } from "react";
import {Image, StyleSheet, Text, View, ScrollView, CheckBox, TouchableOpacity } from 'react-native';
import { Button } from "react-native-elements";
import {LinearGradient} from 'expo-linear-gradient';
import {images ,COLORS} from '../../constants';


function SUAgree({navigation}) {
    const [isSelected, setSelection] = useState(false);

    return (
        <View style={styles.container}>
            <LinearGradient colors={['#a1c4fd', '#a1c4fd','#c2e9fb']} start={[0.1,0.1]} style={styles.linearGradient}>
            <View style={styles.cards}>
                <Image style={styles.logo} source={images.logo} />
                <ScrollView style={styles.scrollView}>
                <Text style={styles.agreementsTitle}>Điều khoản sử dụng – Chính sách Quyền riêng tư</Text>
                <Text style={styles.agreementsText}>Nội dung của Điều khoản sử dụng – Chính sách Quyền riêng tư ứng dụng Willing dưới đây tạo thành một Hợp đồng sử dụng dịch vụ ràng buộc về mặt pháp lý giữa Nhà phát triển và Người dùng. Khi người dùng sử dụng ứng dụng Willing có nghĩa là người dùng đã chấp nhận các Điều khoản và Chính sách dưới đây và chịu sự ràng buộc phải tuân thủ bởi các Điều khoản và Chính sách đó. Người dùng có trách nhiệm xem xét và đọc kỹ nội dung của Bản điều khoản – chính sách này. Nếu người dùng không đồng ý với các điều khoản và chính sách này thì nên chấm dứt sử dụng ứng dụng này.</Text>
                    <Text style={styles.agreementsTitle}>Điều 1. Mô tả ứng dụng</Text>
                    <Text style={styles.agreementsText}>Ứng dụng Willing là Phần mềm công nghệ giúp đỡ, hỗ trợ người khuyết tật và kết nối với tình nguyện viên với phương châm “Sẵn lòng giúp đỡ - Sẵn sàng đón nhận”. Ứng dụng cho phép người khuyết tật (người cần hỗ trợ) đặt ra yêu cầu hỗ trợ và kết nối với tình nguyện viên có thể thực hiện hỗ trợ thông qua việc sử dụng ứng dụng thông qua thiết bị di động.</Text>

                    <Text style={styles.agreementsTitle}>Điều 2. Điều khoản sử dụng</Text>
                    <Text style={styles.agreementsText}>1. Chúng tôi có thể chỉnh sửa, cập nhật “Điều khoản sử dụng – Chính sách Quyền riêng tư” này bất cứ lúc nào mà không cần báo trước. Việc chỉnh sửa này sẽ có hiệu lực ngay khi được cập nhật trên Ứng dụng Willing. Người dùng cần thường xuyên kiểm tra các thay đổi này, và việc người dùng tiếp tục sử dụng Ứng dụng này đồng nghĩa với việc đồng ý với các nội dung đã thay đổi đó.
2. Bằng cách sử dụng ứng dụng, người dùng bảo đảm có quyền hợp pháp để chấp thuận và đồng ý với Điều khoản và Chính sách sử dụng, bảo đảm rằng người dùng có đủ quyền, thẩm quyền và năng lực để sử dụng ứng dụng và để tuân theo Điều khoản sử dụng – Chính sách Quyền riêng tư và tham gia vào một thỏa thuận mang tính hợp đồng.
</Text>

                    <Text style={styles.agreementsTitle}>Điều 3. Quyền và trách nhiệm của người dùng</Text>
                    <Text style={styles.agreementsText}>1. Đọc, hiểu, tuân thủ các thủ tục đăng ký và các quy định, hướng dẫn sử dụng và Điều khoản sử dụng – Chính sách Quyền riêng tư này trước khi sử dụng ứng dụng.
2. Sử dụng đúng mục đích những thông tin do Ứng dụng cung cấp.
3. Cung cấp đầy đủ, chính xác các thông tin cần thiết khi đăng ký và/hoặc phát sinh trong quá trình sử dụng dịch vụ theo yêu cầu của Nhà phát triển.
4. Tuân thủ các quy định pháp luật và quy định của Nhà phát triển liên quan đến việc đăng ký và sử dụng ứng dụng.
5. Tuân thủ các quy định pháp luật về bảo vệ Quyền của người khuyết tật.

6. Giữ an toàn và bảo mật mật khẩu tài khoản của mình hoặc bất kỳ phương thức nhận dạng nào mà chúng tôi cung cấp để bạn truy cập vào ứng dụng.
</Text>

                    <Text style={styles.agreementsTitle}>Điều 4. Quyền và trách nhiệm của chúng tôi</Text>
                    <Text style={styles.agreementsText}>1. Tuân thủ các quy định của pháp luật liên quan đến việc cung ứng dịch vụ.
2. Đảm bảo cung cấp chính xác, đầy đủ sự hỗ trợ cho người dùng theo thỏa thuận.
3. Cung cấp tài liệu hướng dẫn, hỗ trợ người dùng sử dụng dịch vụ.
4. Giải đáp thắc mắc, khiếu nại của người dùng liên quan đến dịch vụ.
</Text>

                    <Text style={styles.agreementsTitle}>Điều 5. Chính sách Quyền riêng tư</Text>
                    <Text style={styles.agreementsText}>Ứng dụng Willing đảm bảo cam kết tôn trọng và bảo vệ quyền riêng tư trực tuyến của bạn.
Điều này gồm nhu cầu và quyền được biết chúng tôi làm gì với thông tin cá nhân mà bạn chia sẻ với chúng tôi, đồng thời cũng hướng dẫn về các chính sách của Nhà phát triển liên quan đến việc quản lý dữ liệu này, bao gồm cách thu thập, xử lý và mục đích của thông tin.
</Text>

                    <View style={styles.interacts}>
                        <View style={styles.checkboxContainer}>
                            <CheckBox
                                value={isSelected}
                                onValueChange={setSelection}
                                style={styles.checkbox}
                            />
                            <Text style={styles.label}>Tôi đã đọc và đồng ý với điều khoản sử dụng.</Text>
                        </View>
                        <View style={{alignItems: 'center', justifyContent: 'center'}}>
                            <TouchableOpacity>
                                <Button title="Đăng ký" buttonStyle={{backgroundColor: COLORS.primary, width: 100}} onPress={() => navigation.navigate('Home')}></Button>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
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
      scrollView: {
          flex: 1,
      },
      genders: {
        padding: 10,
        marginTop: "10%",
        marginLeft: 30,
        flexDirection: "row",
      },
      agreementsTitle: {
        padding: 20,
        fontSize: 20,
        fontWeight: "bold",
      },
      agreementsText: {
        padding: 20,
        fontSize: 18,
        lineHeight: 30,
        textAlign: "justify",
      },
      interacts: {
        backgroundColor: "white",
        padding: 20,
        paddingBottom: 150,
      },
      checkboxContainer: {
        flexDirection: "row",
      },
      checkbox: {
        alignSelf: "center",
      },
      label: {
        margin: 8,
      },
})

export default SUAgree;