import glamorous from 'glamorous';
import * as media from '../mediaQueriesHandler'

export const EmployeeContainter = glamorous.div({
  transition: '1s',
  width: '90%', 
  margin: '2px 0 0 5%',
  fontWeight: 'bold',
  overflow: 'hidden'
  
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
  height: '45px',

  [media.media[0]]: {
    width: '90%',
    height: '40%'
  }
})

export const EmployeeDetails = glamorous.div({
  height: '125px',  
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-around',
  
  [media.media[0]]: {
    fontSize: '8px'
  },
  [media.media[2]]: {
    fontSize: '10px'
  },
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
  [media.media[0]]: {
    height: '40px',
    width: '40px'
  },
})

export const EmployeeAvatar = glamorous.img({
  height: '100%',
  width: '100%'
})