import React, {Component} from 'react';
import { Employees } from './EmployeesList.s';
import { EmployeeWrapper } from '../EmployeeWrapper/EmployeeWrapper';
import { employeesList } from '../EmployeesApi/EmployeesFetch'

export class EmployeesList extends Component {
  constructor() {
    super();

    this.state = {
      employees: [],
    }
  }

  fetchApi() {
    employeesList.fetchList()
    .then(
      (result) => {
        this.setState({employees: result.results})
      },
      (error) => {
        console.log(error)
      }
    )
  }

  componentDidMount() {
    this.fetchApi()
  }

  render() {
    return(
      <Employees>
        { this.state.employees.map((employee,key) => 
            <EmployeeWrapper key={key} employee={employee} />
          )
        }
      </Employees>
    )
  }
}