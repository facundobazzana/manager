import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { CardSection } from './common';

class ListItem extends Component {
  // Props:
  // - employee: comes from EmployeeList component (ListView)

  onRowPress() {
    Actions.employeeEdit({ employee: this.props.employee }); // Se pasa el employee como propiedad
  }

  render() {
    const { name } = this.props.employee; // Esta propiedad llega desde el ListView

    return (

      <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
        <View>
          <CardSection>
            <Text style={styles.titleStyle}>
              {name}
            </Text>
          </CardSection>
        </View>
      </TouchableWithoutFeedback>

    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
};

export default ListItem;
