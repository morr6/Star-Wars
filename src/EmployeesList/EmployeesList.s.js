import glamorous from 'glamorous';

export const Employees = glamorous.div({  
  marginTop: '20px',
  color: '#5f6c75',
  overflow: 'scroll',
  scrollbarWidth: 'none',

  '::-webkit-scrollbar' : {
    width: '0px'
  },
  
  '@media(max-width: 400px)': {
    fontSize: 10
  },
})
