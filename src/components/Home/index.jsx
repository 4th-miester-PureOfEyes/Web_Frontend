import React from "react";
import * as _ from "./style"
import Cul from "../../assets/img/carousel.svg";
import Pct from "../../assets/img/picture.svg";
import Pct2 from "../../assets/img/picture2.svg";
import Pct3 from "../../assets/img/picture3.svg";

const Home = () => {
    return(
        <>
        <_.Carousel src={Cul}></_.Carousel>
        <_.RecommendWrap>
            <_.ValueformoneyWrap>
                <_.ValueTitle>최고의 가성비를 추천합니다.</_.ValueTitle>
                <_.More>더보기 +</_.More>
            </_.ValueformoneyWrap>
            <_.PictureWrap>
                <_.PictureContent src={Pct}></_.PictureContent>
                <_.PictureContent src={Pct}></_.PictureContent>
                <_.PictureContent src={Pct}></_.PictureContent>
                <_.PictureContent src={Pct}></_.PictureContent>
            </_.PictureWrap>
            <_.ValueformoneyWrap>
                <_.ValueTitle>공동구매 인기순위!</_.ValueTitle>
                <_.More>더보기 +</_.More>
            </_.ValueformoneyWrap>
            <_.PictureWrap>
                <_.PictureContent src={Pct2}></_.PictureContent>
                <_.PictureContent src={Pct2}></_.PictureContent>
                <_.PictureContent src={Pct2}></_.PictureContent>
                <_.PictureContent src={Pct2}></_.PictureContent>
            </_.PictureWrap>
            <_.ValueformoneyWrap>
                <_.ValueTitle>요즘 체리콕에서 떠오르고 있는 음식이에요!</_.ValueTitle>
                <_.More>더보기 +</_.More>
            </_.ValueformoneyWrap>
            <_.PictureWrap>
                <_.PictureContent src={Pct3}></_.PictureContent>
                <_.PictureContent src={Pct3}></_.PictureContent>
                <_.PictureContent src={Pct3}></_.PictureContent>
                <_.PictureContent src={Pct3}></_.PictureContent>
            </_.PictureWrap>
        </_.RecommendWrap>
        </>
    )
}

export default Home;
