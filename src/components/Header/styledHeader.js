import styled from 'styled-components';

export const StyledHeader = styled.header`
  border-bottom: 1px solid #dfdfdf;
  box-shadow: 0px 1px 5px 0px #dfdfdf;

  .header {
    padding: 18px 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: black;
  }

  .list-links {
    display: flex;
    gap: 10px;
  }

  .title-header {
    text-align: center;
  }

  .btn-show-shoppingcart {
    background: none;
    color: black;
  }

  .shoppingcart-icon {
    width: 19px;
    height: 23px;
  }

  .top-header {
    background-color: #123e64;
    color: white;
    padding: 10px 30px;
    text-align: center;
    font-size: 0.9rem;
  }
`;
