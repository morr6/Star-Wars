import glamorous from 'glamorous';
import * as media from '../Utilities/mediaQueriesHandler'

export const EmployeesListContainer = glamorous.div({
  width: '600px',
  height: '590px',
  background: '#2b3942',
  borderRadius: '5px',
  display: 'flex',
  flexDirection: 'column',
  position: 'relative', 

  [media.media[2]]: {
    height: '100%',
    width: '100%',
    overflow: 'hidden',
  }, 

})

export const ListHeader = glamorous.div({
  height: '100px',
  marginTop: '20px',
  display: 'flex',
  flexDirection: 'column',
})

export const HeaderTitle = glamorous.div({
  width: '90%',
  display: 'flex',
  justifyContent: 'flex-start',
  fontSize: 20,
  color: '#92a0a9',
  marginLeft: '5%',
  paddingLeft: '30px'
})

export const HeaderImage = glamorous.img({
  maxHeight: '60px',
  maxWidth: '90%',
  transform: 'rotateY(180deg)',
  marginLeft: '5%'
})

export const PageButtonsWrapper = glamorous.div({
  display: 'flex',
  justifyContent: 'space-between',
  position: 'absolute',
  width: '100%',
  height: '35px',
  bottom: '-50',
 
  [media.media[0]] : {
    top: '80px !important',
    width: '100% !important',
  },
  [media.media[4]]: {
    top: 10,
    width: '50%',
    right: 10
  },
  [media.media[5]] : {
    botton: -80,
  }
})

export const PageButton = glamorous.button(props => {
  return {   
    padding: '10px 20px 10px 20px',
    color: '#5f6c75',
    background: '#2b3942',
    border: 'none',
    height: '35px',
    borderRadius: '5px',
    outline: 'none',
    cursor: 'pointer',
    transition: '.7s',
    fontWeight: 'bold',
    opacity: props.disabled ? .6 : 1, 

    ':hover' : !props.disabled ? { 
      transform: 'scale(1.05)',
      color: '#2b3942',
      background: '#5f6c75',
    } : {},

    ':active' : {
      transform: 'scale(.8)'
    },

    [media.media[4]]: {
      color: '#2b3942',
      background: '#5f6c75',
    }
  }
})

export const PageNumber = glamorous.div({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '35px',
  height: '35px',
  outline: 'none',
  fontWeight: 'bold',
  color: '#5f6c75',
  background: '#2b3942',
  border: 'none',
  borderRadius: '5px',
  
  [media.media[4]]: {
    color: '#2b3942',
    background: '#5f6c75',
  }
})