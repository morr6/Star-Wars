import glamorous from 'glamorous';
import {css} from 'glamor'

const loading = css.keyframes({
  '0%': { transform: `rotate(0deg)` },
  '100%': { transform: `rotate(360deg)` }
})

const loadingDtos = css.keyframes({
  '0%' : { opacity: 1 },
  '50%': { opacity: 0 },
  '100%' : { opacity: 1 },
})

export const Employees = glamorous.div(props => {  
  return {
    display: props.isApiLoading ? 'flex' : 'block',
    justifyContent: 'center',
    marginTop: '20px',
    color: '#5f6c75',
    overflow: 'scroll',
    scrollbarWidth: 'none',
  
    '::-webkit-scrollbar' : {
      width: '0px'
    },
  }
})

export const LoadingAnimationWrapper = glamorous.div({ 
  marginTop: '10%',
  fontSize: '20px',
  color: 'white', 
  width: '5%',
  height: '40%',

})

export const LoadingImage = glamorous.img({
  animation: `${loading} .9s infinite`,
  width: '100%',
  height: '100%',
  marginBottom: '6px',
})

export const LoadingMessage = glamorous.div({
  animation: `${loadingDtos} 2s infinite`, 
  width: '100%'
})