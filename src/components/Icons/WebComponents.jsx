import { useEffect, useState } from 'react'
import { hexToRGBtoThreeTonesColor } from '../../helpers/colorsMethods'

export const WebComponents = ({ fill = null, size = '161' }) => {
  const [fillState, setFillState] = useState({
    blue01: '#2A3B8F',
    blue02: '#29ABE2',
    blue03: '#166DA5',
    green01: '#B4D44E',
    green02: '#E7F716',
    green03: '#8FDB69',
    black: '#010101'
  })

  useEffect(() => {
    if (fill) {
      const newFill = hexToRGBtoThreeTonesColor(fill)
      setFillState({
        blue01: newFill[0],
        blue02: newFill[0],
        blue03: newFill[0],
        green01: newFill[1],
        green02: newFill[1],
        green03: newFill[1],
        black: newFill[2]
      })
    }
  }, [fill])

  return (
    <>
      <svg
        width={size}
        viewBox='0 0 161 132'
        xmlns='http://www.w3.org/2000/svg'
      >
        <defs>
          <linearGradient x1='0%' y1='50%' y2='50%' id='a'>
            <stop stopColor={fillState.blue01} offset='0%' />
            <stop stopColor={fillState.blue02} offset='100%' />
          </linearGradient>
          <linearGradient x1='0%' y1='50%' y2='50%' id='b'>
            <stop stopColor={fillState.blue01} offset='0%' />
            <stop stopColor={fillState.blue02} offset='100%' />
          </linearGradient>
          <linearGradient x1='100%' y1='50%' x2='0%' y2='50%' id='c'>
            <stop stopColor={fillState.green01} offset='0%' />
            <stop stopColor={fillState.green02} offset='100%' />
          </linearGradient>
          <linearGradient x1='100%' y1='50%' x2='0%' y2='50%' id='d'>
            <stop stopColor={fillState.green01} offset='0%' />
            <stop stopColor={fillState.green02} offset='100%' />
          </linearGradient>
        </defs>
        <g fill='none' fillRule='evenodd'>
          <path
            fill={fillState.blue03}
            d='M160.6 65.9l-17.4 29.3-24.4-29.7 24.4-28.9z'
          />
          <path
            fill={fillState.green03}
            d='M141.3 100.2l-26.5-31.7-15.9 26.6 24.7 36.1z'
          />
          <path fill={fillState.blue03} d='M141 31.4l-26.2 31.8-15.9-26.6L123.6.9z' />
          <path fill='url(#a)' opacity='.95' d='M61.1 31.4H141L123.4.9H78.7z' />
          <path
            fill='url(#b)'
            opacity='.95'
            d='M114.8 63.3H159l-15.9-26.8H98.8'
          />
          <path
            fill='url(#c)'
            opacity='.95'
            d='M141.3 100.3H61l17.6 30.5h45z'
          />
          <path
            fill={fillState.black}
            d='M78.6 130.8L41 65.8 79.1.8H37.9L.4 65.8l37.5 65z'
          />
          <path
            fill='url(#d)'
            opacity='.95'
            d='M114.8 68.4H159l-15.9 26.8H98.8'
          />
        </g>
      </svg>
    </>
  )
}
