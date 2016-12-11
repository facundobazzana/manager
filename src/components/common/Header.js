// import libraries for making a component
import React from 'react';
import {
  Text,
  View,
  Platform
} from 'react-native';

// Make a component
const Header = (props) => {
  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: '#F1F1F1',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: (Platform.OS === 'ios') ? 15 : 0,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.9,
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
    fontSize: 20,
    fontWeight: 'bold'
  }
};

// Make the component available to other parts of the App
export { Header };
