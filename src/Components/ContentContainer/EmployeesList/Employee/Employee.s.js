import glamorous from 'glamorous';

export const EmployeeContainter = glamorous.div(props => {
 return { 
    transition: '1s',
    height: props.detailsOpen ? '150px' : '20px',
    width: '90%',
    margin: '2px 0 0 5%',
    fontWeight: 'bold',
  }
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
