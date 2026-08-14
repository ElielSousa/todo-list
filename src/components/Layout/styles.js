import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  margin: 100px 0;

  .contentLimit {
    display: flex;
    flex-direction: column;
    justify-self: center;
    width: 100%;
    padding: 0 20px;
    gap: 32px;
    max-width: 448px;
    min-width: 375px;
  }

  .title {
    width: 100%;
  }
`;

export default Container;
