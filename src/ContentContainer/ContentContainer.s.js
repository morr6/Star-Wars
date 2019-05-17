import glamorous from 'glamorous';

export const EmployeesListContainer = glamorous.div({
  width: '32.5%',
  height: '62.5%',
  background: '#2b3942',
  borderRadius: '5px',
  display: 'flex',
  flexDirection: 'column',

  '@media(max-width: 400px)': {
    height: '90%',
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
