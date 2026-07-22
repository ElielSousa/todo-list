import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  margin: 100px 0;

  .contentLimit {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    gap: 32px;
    max-width: 448px;
  }

  .title {
    width: 100%;
  }
`;

export default Container;
