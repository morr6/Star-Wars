import React, {Component} from 'react';
import {EmployeeContainter, 
        Redsaber, 
        EmployeeName, 
        SaberWrapper, 
        EmployeeDetails,
        DetailsWrapper,
        AvatarWrapper,
        EmployeeAvatar,
        DetailName,
        Detail} from './EmployeeWrapper.s';
import RedsaberImage from '../Assets/Images/red-lightsaber.png'
import AvatarImage from '../Assets/Images/avatar.png'
import SmoothCollapse from 'react-smooth-collapse'

export class EmployeeWrapper extends Component {
  constructor(props) {
    super(props);

    this.state = {
      areDetailsOpen: false
    };
  };

  toogleDetails() {
    this.setState({ areDetailsOpen: !this.state.areDetailsOpen })
  }

  firstLetterUpperCase(word) {
    if (typeof word !== 'string') return 
    return word.charAt(0).toUpperCase() + word.slice(1)    
  }

  render() {
    const {employee} = this.props
    return(
      <div>
        <EmployeeContainter detailsOpen={this.state.areDetailsOpen}>
          <EmployeeName onClick={ () => this.toogleDetails() } >
            { this.props.employee.name } 
          </EmployeeName>
          
          <SmoothCollapse 
            expanded={this.state.areDetailsOpen} 
            heightTransition='.75s' 
          >
              <EmployeeDetails>

                <DetailsWrapper>
                  <Detail>
                    <DetailName> Height: </DetailName> 
                    {this.firstLetterUpperCase(employee.height)} cm 
                  </Detail>
                  <Detail> 
                    <DetailName> Mass: </DetailName> 
                    {this.firstLetterUpperCase(employee.mass)} kg  
                  </Detail>
                  <Detail> 
                    <DetailName> Birth Year: </DetailName> 
                    {employee.birth_year}  
                  </Detail>
                  <Detail> 
                    <DetailName> Gender: </DetailName> 
                    {this.firstLetterUpperCase(employee.gender)}  
                  </Detail>
                </DetailsWrapper>
                
                <DetailsWrapper>
                  <Detail>
                    <DetailName> Hair: </DetailName>
                    {this.firstLetterUpperCase(employee.hair_color)} 
                  </Detail>
                  <Detail>
                    <DetailName> Skin: </DetailName> 
                    {this.firstLetterUpperCase(employee.skin_color)}  
                  </Detail>
                  <Detail>
                    <DetailName> Eye: </DetailName>
                    {this.firstLetterUpperCase(employee.eye_color)}  
                  </Detail>             
                </DetailsWrapper>

                <AvatarWrapper>
                  <EmployeeAvatar src={AvatarImage} />
                </AvatarWrapper>

              </EmployeeDetails>     
          </SmoothCollapse>      
                    
        </EmployeeContainter>
        <SaberWrapper> <Redsaber src={RedsaberImage} /> </SaberWrapper>
      </div>
    )
  }
}