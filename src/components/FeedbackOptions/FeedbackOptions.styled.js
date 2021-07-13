import styled from '@emotion/styled';

export const Button = styled.button`
color: #fff;
background-color: transparent;
border: 2px solid;
border-radius: 30%;
outline: none;
text-transform: capitalize ;
&:not(:last-child){
    margin-right: 10px;
}
&:hover{
    background-color:#f2f2f2 ;
}
`;

export const Container = styled.div`
margin-top: 20px;
display: flex;
justify-content: center;

padding-bottom: 20px;
`;