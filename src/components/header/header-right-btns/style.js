import styled from 'styled-components';

export const HeaderRightButtons = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  height: 55px;
  display: flex;
  align-items: center;
`

export const Button = styled.a`
  display: inline-block;
  box-sizing: border-box;
  height: 40px;
  line-height: 40px;
  border-radius: 20px;
  text-align: center;
  margin-right: 15px;
  font-size: 15px;

  &.register {
    width: 80px;
    border: 1px solid #e79685;
    color: #e79685;
    background-color: #fff;
    
    :hover {
      background-color: #fdf7f6;
    }
  }
  &.write {
    width: 100px;
    color: #fff;
    background-color: #dc7661;

    :hover {
      background-color: #dc6a52;
    }

    &.icon-Pensyumaobi:before {
      font-size: 18px;
      margin-right: 2px;
      vertical-align: middle;
    }
  }
`
