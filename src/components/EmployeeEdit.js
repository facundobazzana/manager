import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import Communications from 'react-native-communications';
import EmployeeForm from './EmployeeForm';
import { employeeUpdate, employeeSave } from '../actions';
import { Card, CardSection, Button } from './common';

class EmployeeEdit extends Component {
  // Props:
  // Employees: come from Employee List (ListView)

  componentWillMount() {
    // recorre todas las props de employee y actualiza el reducer para que contenga estos datos.
    _.each(this.props.employee, (value, prop) => {
      this.props.employeeUpdate({ prop, value });
    });
  }

  onButtonPress() {
    const { name, phone, day } = this.props;

    this.props.employeeSave({ name, phone, day, uid: this.props.employee.uid });
  }

  onTextPress() {
    const { phone, day } = this.props;
    
    Communications.text(phone, `Your upcoming shift is on ${day}`);
  }

  render() {
      return (
        <Card>
          <EmployeeForm />

          <CardSection>
            <Button onPress={this.onButtonPress.bind(this)}>
              Save changes
            </Button>
          </CardSection>

          <CardSection>
            <Button onPress={this.onTextPress.bind(this)}>
              Text schedule
            </Button>
          </CardSection>
        </Card>
      );
  }
}

const mapStateToProps = (state) => {
  const { name, phone, day } = state.employeeForm;

  return { name, phone, day };
};

export default connect(mapStateToProps, { employeeUpdate, employeeSave })(EmployeeEdit);
