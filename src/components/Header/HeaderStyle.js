import styled from "styled-components";

export const HEADER = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 2px solid #010232;
  
  
  background-color: #010232;
  figure{
    margin-bottom: 0;
  }

  div {
    display: flex;
    
    align-items: center;
    justify-content: space-between;
    position: relative;
    width:inherit;
    height: 3.750rem;
    border: 2px solid #010232;
    border-radius: 8px;
    background-color: #FFFFFF;
    margin: 0 .000rem 1.000rem .000rem;
    padding: 0 .000rem 0 000rem;


  }

  input{
    max-width: 45%;
    margin-left: 5px;
    border: none;
    background-color: #FFFFFF;
    
}
input:focus{
  border: none;
  box-shadow: 0 0 0 0;
  outline: 0;

}
::-webkit-input-placeholder{
      margin-left: 1rem;
    color:#E0E0E0;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
  }
  button{
    background-color: #010232;
    width: 6.688rem;
    height: 2.500rem;
    padding: 0 1.250rem;
    border: 2px solid #010232;
    border-radius: 8px;
    color:#FFFFFF;
    margin-right: 5px;

    
  }
`;
