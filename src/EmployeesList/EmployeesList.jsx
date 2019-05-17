import React, {Component} from 'react';
import { Employees, LoadingAnimationWrapper, LoadingImage, Elo } from './EmployeesList.s';
import { EmployeeWrapper } from '../EmployeeWrapper/EmployeeWrapper';
import { employeesList } from '../EmployeesApi/EmployeesFetch'
import loadingImageUrl from '../Assets/Images/loadingImage.png'

export class EmployeesList extends Component {
  constructor() {
    super();

    this.state = {
      employees: [],
      isApiLoading: false
    }
  }

  toogleApiLoadingStatus() {
    this.setState({isApiLoading: !this.state.isApiLoading})
  }

  fetchApi() {

    this.toogleApiLoadingStatus();

    employeesList.fetchList()
    .then(
      (result) => {
        this.setState({employees: result.results});
        this.toogleApiLoadingStatus();
      },
      (error) => {
        console.log(error)
      }
    )
  }

  componentDidMount() {
    this.fetchApi()
  }

  renderContent() {
    if (this.state.isApiLoading) { 
      return <LoadingAnimationWrapper>
        <LoadingImage src={loadingImageUrl}/>
        <Elo>. . .</Elo>
      </LoadingAnimationWrapper>
    } 
    else {
      return this.state.employees.map(
        (employee,key) => <EmployeeWrapper key={key} employee={employee} />
      )
    } 
  }

  render() {
    return(
      <Employees isApiLoading={this.state.isApiLoading}>
        { this.renderContent() }
      </Employees>
    )
  }
}