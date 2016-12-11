import React from 'react';
import { View } from 'react-native';

const Card = (props) => {
  return (
    // Responsabilidad del componente Card de renderizar todos los componentes que contiene
    <View style={styles.containerStyle}>
      {props.children}
    </View>
  );
};

const styles = {
  containerStyle: {
    borderWidth: 1, // border around the component
    borderRadius: 2, // round the corners
    borderColor: '#ddd',
    borderBottomWidth: 0, // width of the bottom
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 }, // shadows sides
    shadowOpacity: 0.1,
    shadowRadius: 2, // round the corners of the shadow
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10
  }
};

export { Card };
