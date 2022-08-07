import styled from "styled-components";

export const StyledTable = styled.table`
  width: 80%;
  caption-side: top;
  border: 3px solid #888;
  border-collapse: collapse;

  td,
  th {
    border: none;
  }

  td {
    padding: 5px 10px;
    text-align: center;
  }

  tbody tr {
    :nth-of-type(odd) {
      background-color: #efefef;
    }
    :hover {
      background-color: #ccc;
    }
  }

  thead {
    background-color: #000;
    color: yellow;

    & th {
      padding: 1.5rem 0;
      min-width: 10rem;
    }
  }
  caption {
    font-size: 2rem;
    padding: 5px;
    font-weight: bold;
  }
`;
