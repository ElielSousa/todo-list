import styled from "styled-components";

const List = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;

  .filters {
    display: flex;
    justify-content: center;
    gap: 24px;
  }

  ul {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
`;

export default List;
