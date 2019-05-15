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
    console.log(this.props)
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
                    <span> {employee.height} cm </span>
                  </Detail>
                  <Detail> 
                    <DetailName> Mass: </DetailName> 
                    <span> {employee.mass} kg </span> 
                  </Detail>
                  <Detail> 
                    <DetailName> Birth Year: </DetailName> 
                    <span> {employee.birth_year} </span> 
                  </Detail>
                  <Detail> 
                    <DetailName> Gender: </DetailName> 
                    <span> {employee.gender} </span> 
                  </Detail>
                </DetailsWrapper>
                
                <DetailsWrapper>
                  <Detail>
                    <DetailName> Hair: </DetailName>
                    <span> {employee.hair_color} </span>
                  </Detail>
                  <Detail>
                    <DetailName> Skin: </DetailName> 
                    <span> {employee.skin_color} </span> 
                  </Detail>
                  <Detail>
                    <DetailName> Eye: </DetailName>
                    <span> {employee.eye_color} </span> 
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