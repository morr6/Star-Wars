import glamorous from 'glamorous';

export const EmployeeContainter = glamorous.div({
  transition: '1s',
  width: '90%', 
  margin: '2px 0 0 5%',
  fontWeight: 'bold',
  
})

export const EmployeeName = glamorous.div( {
  transition: '.5s',
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  cursor: 'pointer',
  overflow: 'hidden',

  ':hover' : {
    color: '#92a0a9',
  }
})

export const SaberWrapper = glamorous.div({
  width:'100%',
  display: 'flex',  
  justifyContent: 'center'
})

export const Redsaber = glamorous.img({
  width: '95%',
  height: '45px'
})

export const EmployeeDetails = glamorous.div({
  height: '125px',  
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-around',
})
  
export const DetailsWrapper = glamorous.span({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'left',
})

export const DetailName = glamorous.div({
  textAlign: 'right',
  width: '75px',
  float: 'left',
  paddingRight: '5px'

})

export const Detail = glamorous.div({

})

export const AvatarWrapper = glamorous.div({
  '@media(max-width: 400px)': {
    height: '50px',
    width: '50px'
  },
})

export const EmployeeAvatar = glamorous.img({
  height: '100%',
  width: '100%'
})