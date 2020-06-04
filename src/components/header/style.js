import styled from 'styled-components';
import LogoPic from '../../statics/nav-logo.png'

export const HeaderWrapper = styled.div`
  box-sizing: border-box;
  background-color: #fff;
  border-bottom: 1px solid #f0f0f0;
`

export const WidthLimit = styled.div`
  width: 1440px;
  margin: 0 auto;
  position: relative;
`

export const Logo = styled.a`
  position: absolute;
  top: 0;
  left: 0;
  width: 100px;
  height: 56px;
  background-image: url(${LogoPic});
  background-size: contain;
`
