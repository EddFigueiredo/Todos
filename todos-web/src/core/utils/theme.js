import { css } from 'styled-components'
import reduce from 'lodash/reduce'
import kebabCase from 'lodash/kebabCase'

export const sizes = {
  mobile: 0,
  tablet: 481,
  desktop: 961,
  largest: 1440
}

const cssSizes = {
  mobile: css`(max-width: ${sizes.tablet}px)`,
  tablet: css`(min-width: ${sizes.tablet}px)`,
  desktop: css`(min-width: ${sizes.desktop}px)`,
  largest: css`(min-width: ${sizes.largest}px)`
}

export const screen = reduce(cssSizes, (result, val, key) => {
  result[key] = (...args) => css`@media ${val} {${css(...args)} }`
  return result
}, {})

export function parseThemeObjToCss(obj) {
  return reduce(obj, (result, val, key) => {
    result += `${kebabCase(key)}: ${val};`
    return result
  }, '')
}

export const contentWrapper = css`
  position: relative;
  padding: 0 0;
  ${screen.desktop`padding: 0 6%;`}
  ${screen.largest`padding: 0 10%;`}
`
