import React, {Component} from 'react';
import {EmployeesListContainer, 
        ListHeader, 
        HeaderTitle, 
        HeaderImage,
        PageButtonsWrapper,
        PageButton,
        PageNumber} from './ContentContainer.s.js';
import BlueSaber from '../Assets/Images/blue-lightsaber.png'
import {EmployeesList} from '../EmployeesList/EmployeesList'

export class ContentContainer extends Component {
  constructor() {
    super();

    this.state = {
      page: 1 
    }
  }

  nextPage() {
    this.setState({page: this.state.page + 1})
  }

  previousPage() {
    this.state.page > 1 && this.setState({page: this.state.page - 1})
  }

  render() {
    return(
      <EmployeesListContainer>

        <ListHeader>
          <HeaderTitle> Employees list </HeaderTitle>
          <HeaderImage src={BlueSaber}/>
        </ListHeader>

        <EmployeesList page={this.state.page}/>

        <PageButtonsWrapper>
          <PageButton 
            onClick={() => this.previousPage()}
            disabled={this.state.page === 1}
          >
            Previous page 
          </PageButton>
          <PageNumber> {this.state.page} </PageNumber>
          <PageButton 
            onClick={() => this.nextPage()}
            disabled={this.state.page === 9}
          > 
            Next page 
          </PageButton>
        </PageButtonsWrapper>

      </EmployeesListContainer>
    )
  }
}