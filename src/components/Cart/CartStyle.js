import styled from "styled-components";

export const Container = styled.div`
   
    border-radius: 0.313rem;
    width: 15.625rem;
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    background-color: #F5F5F5;


    .carrinho{
        display: flex;
        justify-content: flex-start;
        width: 100%;
        margin-top: 0;
        background-color: #010232;
        color: #FFFF;
        border: 1px solid #010232;
        border-radius: 0.313rem 0.313rem 0 0;
        font-size: 1.125rem;
        font-weight: 500;

    }

    .message{
        font-weight: 400;
    }

    .cardCart{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 100%;
        


    }
    figure{
        width: 30px;
        height: 30px;
        margin: 0;
        background-color: #E0E0E0;
        border-radius: 5px;
        margin-left: 3px;
    }
    img{
        width:30px;
        height: 30px;
    }
    
    div{
        display: flex;
        flex-direction: column;
        margin: 0;
        width: 60%;
        
    }
    .category{
        font-size: 10px;
        margin: 0;
        color: #828282;
        font-weight: 400;
        

    }
    
    .name{
        margin: 0;
        font-size: 12px;
        color: #333333;
        overflow: hidden;
        text-overflow: ellipsis
    }

    button{
        background-color: transparent;
        border: none;
        margin: 0 0 30px 0;
        font-size: 10px;
        color: #BDBDBD;
        cursor: pointer;

    }

    .cartTotal{
        border-top: 1px solid black; 
    }

` 