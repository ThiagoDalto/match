import styled from "styled-components";

export const ContainerTotal = styled.div`
  border-top: 1px solid #E0E0E0;
  width: 15.625rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  .suport{
    margin-top: 5px;
    margin-bottom: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
  .total{
    font-weight: 600;
font-size: 14px;
line-height: 24px;
/* identical to box height, or 171% */


/* grey-600 */

color: #333333;
  }
  .soma{
    font-weight: 600;
font-size: 14px;
line-height: 24px;





color: #828282;
  }
  .removerBtn{
    display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 0px 20px;
gap: 10px;
font-size: 16px;

width: 230px;
height: 60px;

/* grey-100 */

background: #E0E0E0;
/* grey-100 */

border: 2px solid #E0E0E0;
border-radius: 8px;

  }
`;
