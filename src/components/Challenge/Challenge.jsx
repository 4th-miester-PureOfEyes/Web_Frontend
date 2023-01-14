import React,{useState,useEffect} from 'react';
import {ChallengeWrap, Subtitle, Title} from './index';
import axios from 'axios'

function Challenge(){

    const GetData = () => {
        const [data,setData] = useState({});
        useEffect(()=>{
            axios.get('https://port-0-server-3vw25lc9t3b00.gksl2.cloudtype.app/account').then((res)=>{
                setData(res.data);
                console.log(res.data);
            })
        },[]);

        // const item = (Object.values(data)).map((item)=>(
        //     <h2>{item.title}</h2>
        // ))
    }
    const item = GetData();
    return(
        <>
        <ChallengeWrap>
            <Title>한 줄 가계부</Title>
            <Subtitle>일주일에 한 번만 쓸 수 있어요!</Subtitle>
        </ChallengeWrap>
        </>
    )
}
export default Challenge;