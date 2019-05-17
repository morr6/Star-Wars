import glamorous from 'glamorous';
import * as media from '../mediaQueriesHandler'

export const EmployeesListContainer = glamorous.div({
  width: '600px',
  height: '590px',
  background: '#2b3942',
  borderRadius: '5px',
  display: 'flex',
  flexDirection: 'column',

  [media.media[2]]: {
    height: '90%',
    width: '100%',
    overflow: 'hidden',
  },

  [media.media[3]]: {
    height: '80%',
    width: '80%',
    overflow: 'hidden',
  },
})
console.log(media.media[3])
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
