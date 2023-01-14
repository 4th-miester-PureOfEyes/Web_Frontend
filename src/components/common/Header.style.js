import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.div`
    width: 100%;
    height: 150px;
    display: flex;
    /* background-color: orange; */
`;

export const HeaderIn = styled.div`
    width: 700px;
    height: 100%;
    /* background-color: aqua; */
    margin: auto;
`;

export const HeaderInTop = styled.div`
    width: 100%;
    height: 50%;
    /* background-color: beige; */
`;

export const SearchWrap = styled.input`
    width: 400px;
    height: 10px;
    margin: 20px 10px 40px 120px;

    border: none;
    padding: 20px;
    background-color: #F8F8F8;
    border-radius: 70px;
    font-size: 18px;
    color: #766D6D;

    outline: none;
`;

export const NavWrap = styled.div`
    height: 100%;
    display: flex;
    margin: auto;
`;

export const AllCategory = styled.div`
    display: flex;
`;

export const Category = styled.div`
    border: none;
    color: #333;
`;

export const NavContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 500px;
    height: 70px;
    margin: auto;
`;

export const NavMenu = styled.div`
    width: 110px;
    height: 100%;
`;

export const NavMenuText = styled(Link)`
    display: inline-block;
    width: 60%;
    height: 30px;
    margin-top: 25px;
    text-align: center;
    font-size: 14px;
    /* font-weight: 700; */
    cursor: pointer;
    color: #333;
    text-decoration: none;

    &:focus, &:visited, &:link, &:active {
        text-decoration: none;
    }
    &:hover{
        /* margin-top: 20px; */
        /* border-bottom: 2px solid #FFD951;*/
        color: #EA7589;
    }
`

export const MainLogo = styled.div`
    width: 100px;
    height: 100%;
    /* background-color: aqua; */
    margin-left: 100px;
`;

export const LogoImg = styled.img`
    margin-top: 30px; 
    width: 200px;
    height: 100px;
`;