import styled from 'styled-components';

export const ReviewCardContainer = styled.div`
  box-sizing: border-box;

  margin-left: auto;
  margin-right: auto;
  padding: 24px;

  width: 335px;
  min-height: 194px;

  font-family: ${p => p.theme.fonts.text};

  border: ${p => p.theme.borders.normal} rgba(17, 17, 17, 0.1);
  border-radius: ${p => p.theme.radii.small};

  @media screen and (max-width: 374px) {
    width: 99%;
    height: auto;
    padding-bottom: 0;
  }

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;

    width: 580px;
    min-height: 187px;

    padding: 32px;
  }

  & h3 {
    margin-top: 0;
    margin-bottom: 13px;
    line-height: 1;

    font-size: 18px;
    color: ${p => p.theme.colors.text};
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  gap: 17px;
`;

export const AvatarWrapper = styled.div`
  width: 50px;
  height: 50px;

  & img {
    display: block;
    width: 100%;
    height: auto;
    border-radius: ${p => p.theme.radii.round};
  }
`;

export const StarContainer = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-self: flex-end;
  gap: 10px;

  padding: 0;
  margin: 0;
  margin-bottom: 29px;

  height: 14px;
  list-style: none;

  @media screen and (min-width: 768px) {
    margin-bottom: 24px;
  }

  & li:nth-child(-n + ${props => props.value}) {
    & svg {
      fill: #ffac33;
    }
  }

  svg {
    fill: #cec9c1;
  }
`;

export const CommentText = styled.div`
  margin: 0;

  font-size: ${p => p.theme.fontSizes.s};
  font-weight: ${p => p.theme.fontWeights.normal};
  line-height: 1.29;

  color: rgba(17, 17, 17, 0.7);

  @media screen and (min-width: 768px) {
    width: 447px;

    flex-grow: 1;
    align-self: flex-end;
  }
`;
