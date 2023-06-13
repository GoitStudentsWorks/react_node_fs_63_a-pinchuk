import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  padding-left: 0;
  padding-right: 0;

  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: ${props => props.theme.breakpoints.mobile}) {
    max-width: ${props => props.theme.breakpoints.mobile};
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.table}) {
    max-width: ${props => props.theme.breakpoints.table};
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
    max-width: ${props => props.theme.breakpoints.desktop};
  }
`;

export const Main = styled.main`
  position: relative;

  display: flex;
  height: 100vh;
`;

export const WrapLeftColumn = styled.div`
  height: 100%;
  width: 225px;

  transition: all 250ms ease-in-out 0s;
  z-index: 100;
  position: absolute;
  left: ${p => {
    return p.showSideBar ? '0' : '-1000px';
  }};

  @media screen and (min-width: ${props => props.theme.breakpoints.table}) {
    width: 289px;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
    position: static;
  }
`;

export const WrapRightColumn = styled.div`
  // ! ОТУТ нічого не чіпайте. Тут все гуд. Правте стилі в своїх модулях.
  flex-grow: 1;
  padding: 0 20px;

  overflow: hidden;
  /* overflow-y: auto; */
  @media screen and (min-width: ${props => props.theme.breakpoints.table}) {
    padding: 0 32px;
    /* overflow-y: auto; */
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
    padding: 0 32px;
    /* overflow: hidden; */
  }
`;
