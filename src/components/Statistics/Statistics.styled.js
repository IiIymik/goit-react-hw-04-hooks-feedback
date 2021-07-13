import styled from '@emotion/styled';

export const List = styled.ul`
list-style: none;
margin-top: 10px;
`;

export const Item = styled.li`
font-weight: 700;
color: #fff;
&:not(:last-child){
    margin-bottom: 10px;
}
`;