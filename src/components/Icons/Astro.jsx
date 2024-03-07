import React from 'react'

export const Astro = ({ fill = '#17191E', size = 40 }) => {
  return (
    <>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        shapeRendering='geometricPrecision'
        textRendering='geometricPrecision'
        imageRendering='optimizeQuality'
        fillRule='evenodd'
        clipRule='evenodd'
        viewBox='0 0 410 512.32'
        width={size}
        height={size}
      >
        <path
          fill={fill}
          fillRule='nonzero'
          d='M0 335.49s69.19-33.61 138.56-33.61l52.31-161.48c1.96-7.81 7.68-13.12 14.13-13.12 6.46 0 12.17 5.31 14.13 13.12l52.31 161.48c82.17 0 138.56 33.61 138.56 33.61S292.49 16.16 292.26 15.52C288.88 6.08 283.19 0 275.51 0H134.5c-7.68 0-13.14 6.08-16.74 15.52C117.5 16.15 0 335.49 0 335.49zm127.25 94.89c-25.3-22.82-32.69-70.78-22.15-105.52 18.28 21.9 43.6 28.84 69.84 32.76 40.49 6.04 80.27 3.78 117.89-14.48 4.3-2.09 8.28-4.87 12.98-7.69 3.53 10.1 4.45 20.31 3.22 30.69-3 25.29-15.76 44.83-36.04 59.64-8.11 5.92-16.69 11.21-25.07 16.8-25.74 17.16-32.7 37.29-23.03 66.57.23.71.43 1.43.95 3.17-13.14-5.81-22.74-14.26-30.05-25.37-7.72-11.72-11.4-24.69-11.59-38.73-.1-6.83-.1-13.72-1.03-20.45-2.27-16.42-10.08-23.77-24.79-24.19-15.1-.43-27.05 8.78-30.21 23.28-.25 1.12-.6 2.21-.95 3.51l.03.01z'
        />
      </svg>
    </>
  )
}
