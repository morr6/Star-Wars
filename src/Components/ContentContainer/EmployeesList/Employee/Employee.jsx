import React, {Component} from 'react';
import {EmployeeContainter, 
        Redsaber, 
        EmployeeName, 
        SaberWrapper } from './Employee.s';
import RedsaberImage from '../../../../Assets/Images/red-lightsaber.png'

export class Employee extends Component {
  constructor(props) {
    super(props);

    this.state = {
      areDetailsOpen: false
    };
  };

  toogleDetails() {
    this.setState({ areDetailsOpen: !this.state.areDetailsOpen })
  }
  

  render() {
    console.log(this.state)
    return(
      <div>
        <EmployeeContainter detailsOpen={this.state.areDetailsOpen}>
          <EmployeeName onClick={ () => this.toogleDetails() } >
              { this.props.employee.name } 
          </EmployeeName>
        </EmployeeContainter>
        <SaberWrapper> <Redsaber src={RedsaberImage} /> </SaberWrapper>
      </div>
    )
  }
}