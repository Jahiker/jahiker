export const hexToRGB = (h) => {
  let r = 0
  let g = 0
  let b = 0

  // 3 digits
  if (h.length === 4) {
    r = '0x' + h[1] + h[1]
    g = '0x' + h[2] + h[2]
    b = '0x' + h[3] + h[3]

    // 6 digits
  } else if (h.length === 7) {
    r = '0x' + h[1] + h[2]
    g = '0x' + h[3] + h[4]
    b = '0x' + h[5] + h[6]
  }

  return 'rgb(' + +r + ',' + +g + ',' + +b + ')'
}

const changeTone = (t) => {
  return [
    `rgb(${(parseInt(t[0]) * 0.5).toFixed()}, ${(
      parseInt(t[1]) * 0.5
    ).toFixed()}, ${(parseInt(t[2]) * 0.5).toFixed()})`,
    `rgb(${(parseInt(t[0]) * 0.8).toFixed()}, ${(
      parseInt(t[1]) * 0.8
    ).toFixed()}, ${(parseInt(t[2]) * 0.8).toFixed()})`,
    `rgb(${t[0]}, ${t[1]}, ${t[2]})`
  ]
}

export const hexToRGBtoThreeTonesColor = (h) => {
  let r = 0
  let g = 0
  let b = 0

  // 3 digits
  if (h.length === 4) {
    r = '0x' + h[1] + h[1]
    g = '0x' + h[2] + h[2]
    b = '0x' + h[3] + h[3]

    // 6 digits
  } else if (h.length === 7) {
    r = '0x' + h[1] + h[2]
    g = '0x' + h[3] + h[4]
    b = '0x' + h[5] + h[6]
  }

  return changeTone(['' + +r + '', '' + +g + '', '' + +b + ''])
}

export const RGBToHex = (rgb) => {
  // Choose correct separator
  const sep = rgb.indexOf(',') > -1 ? ',' : ' '
  // Turn "rgb(r,g,b)" into [r,g,b]
  rgb = rgb.substr(4).split(')')[0].split(sep)

  let r = (+rgb[0]).toString(16)
  let g = (+rgb[1]).toString(16)
  let b = (+rgb[2]).toString(16)

  if (r.length === 1) {
    r = '0' + r
  }
  if (g.length === 1) {
    g = '0' + g
  }
  if (b.length === 1) {
    b = '0' + b
  }

  return '#' + r + g + b
}
