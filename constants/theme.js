import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

export const COLORS = {
    //primary colors
    primary: "#2D6AAD", //bluedark
    secondary: "#EFF4F9", //gray

    //colors
    black: "#333435",
    white: "#FFFFFF",

    lightBlue: "#96B5D6",
    lightBlue1: "#EFF4F9",
    
    lightGray: "#F5F5F6",
    lightGray2: "#F6F6F7",
    lightGray3: "#EFEFF1",
    lightGray4: "#F8F8F9",
    transparent: "transparent",
    darkgray: "#898C95"
};

export const SIZES = {
    //global size
    base: 8,
    font: 14,
    radius: 30,
    padding: 10,
    padding2: 12,

    //fontsize
    largeTitle: 50,
    h1: 30,
    h2: 22,
    h3: 20,
    h4: 18,
    body1: 30,
    body2: 20,
    body3: 16,
    body4: 14,
    body5: 12,

    //app dimensions
    width,
    height
};

export const FONTS = {
    largeTitle: { fontFamily: "Aleo-Regular", fontSize: SIZES.largeTitle, lineHeight: 55},
    h1: { fontFamily: "Aleo-Bold", fontSize: SIZES.h1, lineHeight: 36},
    h2: { fontFamily: "Aleo-Bold", fontSize: SIZES.h2, lineHeight: 30},
    h3: { fontFamily: "Aleo-Bold", fontSize: SIZES.h3, lineHeight: 22},
    h4: { fontFamily: "Aleo-Bold", fontSize: SIZES.h4, lineHeight: 22},
    body1: { fontFamily: "Effra_Std_Lt", fontSize: SIZES.body1, lineHeight: 36},
    body2: { fontFamily: "Aleo-Regular", fontSize: SIZES.body2, lineHeight: 30},
    body3: { fontFamily: "Aleo-Regular", fontSize: SIZES.body3, lineHeight: 22},
    body4: { fontFamily: "Aleo-Regular", fontSize: SIZES.body4, lineHeight: 22},
    body5: { fontFamily: "Aleo-Regular", fontSize: SIZES.body5, lineHeight: 22}
};

const appTheme = { COLORS, SIZES, FONTS };

export default appTheme;
