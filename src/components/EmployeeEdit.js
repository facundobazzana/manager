import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Alert } from 'react-native';
import _ from 'lodash';
import Communications from 'react-native-communications';
import EmployeeForm from './EmployeeForm';
import { employeeUpdate, employeeSave, employeeDelete } from '../actions';
import { Card, CardSection, Button, Confirm } from './common';

class EmployeeEdit extends Component {
  // Props:
  // employee: come from EmployeeList (ListView)

  state = { showModal: false };

  componentWillMount() {
    // recorre todas las props de employee y actualiza el reducer para que contenga estos datos.
    _.each(this.props.employee, (value, prop) => {
      this.props.employeeUpdate({ prop, value });
    });
  }

  onButtonPress() {
    const { name, phone, day } = this.props;

    if (name === '' || phone === '') {
      return (
        Alert.alert('Campos invalidos', 'Debe completar los campos obligatorios')
      );
    }

    this.props.employeeSave({ name, phone, day, uid: this.props.employee.uid });
  }

  onTextPress() {
    const { phone, day } = this.props;

    Communications.text(phone, `Your upcoming shift is on ${day}`);
  }

  onAccept() {
    const { uid } = this.props.employee;
    this.props.employeeDelete({ uid });
  }

  onDecline() {
    return this.setState({ showModal: false });
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

          <CardSection>
            <Button onPress={() => this.setState({ showModal: true })}>
              Fire
            </Button>
          </CardSection>

          <Confirm
            visible={this.state.showModal}
            onAccept={this.onAccept.bind(this)}
            onDecline={this.onDecline.bind(this)}
          >
            Are you sure you want to do this?
          </Confirm>

        </Card>
      );
  }
}

const mapStateToProps = (state) => {
  const { name, phone, day } = state.employeeForm;

  return { name, phone, day };
};

export default connect(mapStateToProps, { employeeUpdate, employeeSave, employeeDelete })(EmployeeEdit);
