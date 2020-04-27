import styled from 'styled-components';

export const Container = styled.div`
  position: relative;

  span {
    width: 160px;
    /* background: #ff9000; */
    background: #c53030;
    padding: 8px;
    border-radius: 4px;
    font-size: 14px;
    font-weight: 500;
    /* opacity: 0;
    transition: opacity 0.4s;
    visibility: hidden; */

    position: absolute;
    bottom: calc(100% + 12px);
    left: 50%;
    transform: translateX(-50%);

    /* color: #321e38; */
    color: #fff;

    &::before {
      content: '';
      border-style: solid;
      /* border-color: #ff9000 transparent; */
      border-color: #c53030 transparent;
      border-width: 6px 6px 0 6px;
      bottom: 20px;
      top: 100%;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    }
  }

  &:hover {
    /* opacity: 1;
    visibility: hidden; */
  }
`;
