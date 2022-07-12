export function getFontWeight(weight: string) {
  if (weight === '100') {
    return 'Thin'
  } else if (weight === '200') {
    return 'ExtraLight'
  } else if (weight === '300') {
    return 'Light'
  } else if (weight === '400') {
    return 'Regular'
  } else if (weight === '500') {
    return 'Medium'
  } else if (weight === '600') {
    return 'SemiBold'
  } else if (weight === '700') {
    return 'Bold'
  } else if (weight === '800') {
    return 'ExtraBold'
  }
  return 'Black'
}