import React, { Component } from 'react';
import { Alert } from 'react-native';
import { connect } from 'react-redux';
import { employeeCreate, employeeRefresh } from '../actions';
import { Card, CardSection, Button } from './common';
import EmployeeForm from './EmployeeForm';

class EmployeeCreate extends Component {

  componentWillMount() {
    return this.props.employeeRefresh();
  }

  createEmployee() {
    const { name, phone, day } = this.props;

    if (name === '' || phone === '') {
      return (
        Alert.alert('Campos invalidos', 'Debe completar los campos obligatorios')
      );
    }

    return this.props.employeeCreate({ name, phone, day: day || 'monday' });
  }

  render() {
    return (
      <Card>
        <EmployeeForm {...this.props} />
        <CardSection>
          <Button onPress={this.createEmployee.bind(this)}>
            Create
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

export default connect(mapStateToProps, { employeeCreate, employeeRefresh })(EmployeeCreate);
