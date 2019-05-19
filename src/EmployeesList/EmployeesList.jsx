import React, {Component} from 'react';
import { Employees, LoadingAnimationWrapper, LoadingImage, LoadingMessage } from './EmployeesList.s';
import { EmployeeWrapper } from '../EmployeeWrapper/EmployeeWrapper';
import { employeesList } from '../Utilities/EmployeesApi/EmployeesFetch'
import loadingImageUrl from '../Assets/Images/loadingImage.png'

export class EmployeesList extends Component {
  constructor() {
    super();

    this.state = {
      employees: [] ,
      isApiLoading: false,
    }
  }

  toogleApiLoadingStatus() {
    this.setState({isApiLoading: !this.state.isApiLoading})
  }

  fetchApi(page) {
    this.toogleApiLoadingStatus();

    employeesList.fetchList(page)
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

  componentWillReceiveProps(nextProps) {
    this.fetchApi(nextProps.page)
  }

  componentDidMount() {
    this.fetchApi(this.props.page)
  }

  renderContent() {
    if (this.state.isApiLoading) { 
      return <LoadingAnimationWrapper>
        <LoadingImage src={loadingImageUrl}/>
        <LoadingMessage>. . .</LoadingMessage>
      </LoadingAnimationWrapper>
    } 
    else {
      return this.state.employees && this.state.employees.map(
        (employee,key) => <EmployeeWrapper key={key} employee={employee} />
      )
    } 
  }

  render() {
    console.log('props:'+this.props.page)
    return(
      <Employees isApiLoading={this.state.isApiLoading}>
        { this.renderContent() }
      </Employees>
    )
  }
}