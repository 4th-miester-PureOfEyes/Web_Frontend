import React, { useState, useEffect } from 'react';
import { CardComponent, ChallengeWrap, Subtitle, Title } from './index';
import styled from 'styled-components';
import axios from 'axios'
import api from '../../util/api';

function GetData(){
    const [data, setData] = useState({});
    useEffect(() => {
        api.get('account').then((response)=> {
        setData(response.data);
        console.log(response.data);
      })
    }, []);
    

    const item = (Object.values(data)).map((item,idx)=>(
       <div key={idx}>
        <h2>{item.id}</h2>
        <h2>{item.title}</h2>
       </div>
    ));

    return item;
}
function Challenge() {
    let [products, setProducts] = useState([{
        id : 0,
        title : "No.6",
        content : "가격에 비해 마우스 성능이 큰대박 왕대박 빅대박 진짜대박 엄청대박 완전대박 진짜큰대박 진짜왕대박 진짜빅대박 엄청큰대박 엄청왕대박 엄청빅대박 완전빅대박 완전왕대박 완전빅대박 ",
        subtitle : "전자기기 | 마우스 폼 미쳤다",
    },

    {
        id : 1,
        title : "No.5",
        content : "가격에 비해 마우스 성능이 큰대박 왕대박 빅대박 진짜대박 엄청대박 완전대박 진짜큰대박 진짜왕대박 진짜빅대박 엄청큰대박 엄청왕대박 엄청빅대박 완전빅대박 완전왕대박 완전빅대박 ",
        subtitle : "전자기기 | 마우스 폼 미쳤다",
    },

    {
        id : 2,
        title : "No.4",
        content : "가격에 비해 마우스 성능이 큰대박 왕대박 빅대박 진짜대박 엄청대박 완전대박 진짜큰대박 진짜왕대박 진짜빅대박 엄청큰대박 엄청왕대박 엄청빅대박 완전빅대박 완전왕대박 완전빅대박 ",
        subtitle : "전자기기 | 마우스 폼 미쳤다",
    }]);

    return (
        <>
            <ChallengeWrap>
                <Title>한 줄 가계부</Title>
                <Subtitle>일주일에 한 번만 쓸 수 있어요!</Subtitle>
                <CardComponent>{
                    products.map((a, i) => {
              return <Card products={a} num={i} key={i}/>
            })
          }
        </CardComponent>
        <CardComponent>{
                    products.map((a, i) => {
              return <Card products={a} num={i} key={i}/>
            })
          }
        </CardComponent>
            </ChallengeWrap>
        </>
    )
}
export default Challenge;


const Background = styled.div`
    width:280px;
    height:280px;
    background-color: white;
    margin:20px;
    padding:30px;
      box-shadow:
    0.3em 0.3em 1em rgba(0, 0, 0, 0.3);
`
export const Title1 = styled.div`
font-size:1.5em;
font-weight: 600;
margin-bottom: 30px;
`
const SubTitle1 = styled.div`
    font-size:1.1em;
    color:#777777;
    margin-bottom:10px;
`
const Content = styled.div`
`
function Card(props){
    return(
        <>
        <Background>
            <Title1>{props.products.title}</Title1>
            <SubTitle1>{props.products.subtitle}</SubTitle1>
            <Content>{props.products.content}</Content>
        </Background>
        </>
    )
}