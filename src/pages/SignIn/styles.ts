import styled from 'styled-components';
import { shade } from 'polished';
import SigInBackground from '../../assets/sign-in-background.png';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  place-content: center;
  width: 100%;
  max-width: 700px;

  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;

    a {
      color: #f4ede8;
      display: block;
      align-items: center;
      margin-top: 24px;
      text-decoration: none;
      transition: color 0.2s;

      &:hover {
        color: ${shade(0.2, '#f4ede8')};
      }
    }

    h1 {
      margin-bottom: 24px;
      color: #f4ede8;
    }
  }

  > a {
    color: #ff9000;
    display: block;
    margin-top: 24px;
    text-decoration: none;
    transition: color 0.2s;

    display: flex;
    align-items: center;

    &:hover {
      color: ${shade(0.2, '#ff9000')};
    }
  }

  svg {
    margin-right: 16px;
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${SigInBackground}) no-repeat center;
  background-size: cover;
`;
