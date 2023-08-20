import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  overflow-x: auto;

  justify-content: space-between;
  box-sizing: content-box;
  width: 100%;
  width: 100%;
  ::-webkit-scrollbar {
    display: none;
}

@media (min-width: 769px){
  width: 47.188rem;
  flex-direction: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.125rem;
}

@media (min-width: 1000px){
  width: 56.250rem;
  flex-direction: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.125rem;
}
  
`;

export const CardProduct = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 15.625rem;

  border: 0.125rem solid #e0e0e0;
  border-radius: 0.313rem;
  figure {
    background-color: gray;
    width: 15.625rem;
    height: 9.375rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 0;
    border-radius: 0.313rem;
    border-radius: 0.313rem 0.313rem 0 0;
  }
  img {
    width: 9.375rem;
    height: 9.375rem;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 90%;
  }
  h3 {
    margin-bottom: 0;
    color: #333333;
    font-weight: 700;
    font-size: 1rem;
  }
  h5 {
    margin-bottom: 0;
    color: #828282;
    font-weight: 400;
    font-size: 0.75rem;
  }

  .preco {
    font-weight: 600;
    font-size: 0.875rem;
    color: #010232;
  }

  button {
    margin-top: 2rem;
    margin-bottom: 2rem;
    background-color: #010232;
    width: 6.688rem;
    height: 2.5rem;
    padding: 0 1.25rem;
    font-weight: 600;
    border: 2px solid #010232;
    border-radius: 8px;
    color: #ffffff;
  }
`;
