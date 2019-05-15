import React, {Component} from 'react';
import {EmployeesListContainer, 
        ListHeader, 
        HeaderTitle, 
        HeaderImage} from './ContentContainer.s.js';
import BlueSaber from '../../Assets/Images/blue-lightsaber.png'
import {EmployeesList} from './EmployeesList/EmployeesList'

export class ContentContainer extends Component {
  render() {
    return(
      <EmployeesListContainer>

        <ListHeader>
          <HeaderTitle> Employees list </HeaderTitle>
          <HeaderImage src={BlueSaber}/>
        </ListHeader>

        <EmployeesList />

      </EmployeesListContainer>
    )
  }
}