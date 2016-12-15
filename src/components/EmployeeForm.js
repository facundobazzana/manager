import React, { Component } from 'react';
import { View, Picker, Text } from 'react-native';
import { connect } from 'react-redux';
import { employeeUpdate } from '../actions';
import { CardSection, Input } from './common';

class EmployeeForm extends Component {
  render() {
    return (
      <View>

        <CardSection>
          <Input
            label="Name"
            placeholder="Employee name"
            value={this.props.name}
            onChangeText={name => this.props.employeeUpdate({ prop: 'name', value: name })}
          />
        </CardSection>

        <CardSection>
          <Input
            label="Phone"
            placeholder="555-555-555"
            value={this.props.phone}
            onChangeText={phone => this.props.employeeUpdate({ prop: 'phone', value: phone })}
          />
        </CardSection>

        <CardSection style={{ flexDirection: 'column' }}>
          <Text style={styles.pickerTextStyle}>Shift</Text>
          <Picker
            selectedValue={this.props.day}
            onValueChange={day => this.props.employeeUpdate({ prop: 'day', value: day })}
          >
              <Picker.Item label="Monday" value="monday" />
              <Picker.Item label="Tuesday" value="tuesday" />
              <Picker.Item label="Wednesday" value="wednesday" />
              <Picker.Item label="Thursday" value="thursday" />
              <Picker.Item label="Friday" value="friday" />
              <Picker.Item label="Saturday" value="saturday" />
              <Picker.Item label="Sunday" value="sunday" />
            </Picker>
          </CardSection>

      </View>
    );
  }
}

const styles = {
  pickerTextStyle: {
    fontSize: 18,
    paddingLeft: 20,
    paddingTop: 15
  }
};

const mapStateToProps = (state) => {
  const { name, phone, day } = state.employeeForm;
  return { name, phone, day };
};

export default connect(mapStateToProps, { employeeUpdate })(EmployeeForm);
