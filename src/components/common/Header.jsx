import React from "react";
import { Link } from "react-router-dom";
import * as _ from "./Header.style"



export const Header = () => {
    return(
        <>
        <_.HeaderContainer>
            <_.HeaderIn>
                <_.HeaderInTop>
                    <_.SearchWrap></_.SearchWrap>
                </_.HeaderInTop>
                <_.NavContainer>
                        <_.NavMenu>
                            <_.NavMenuText to="/">
                                홈
                            </_.NavMenuText>
                        </_.NavMenu>
                        <_.NavMenu>
                            <_.NavMenuText to="/category">
                                카테고리
                            </_.NavMenuText>
                        </_.NavMenu>
                        <_.NavMenu>
                            <_.NavMenuText to="/challenge">
                                챌린지
                            </_.NavMenuText>
                        </_.NavMenu>
                        <_.NavMenu>
                            <_.NavMenuText to="/commonbuy">
                                공동구매
                            </_.NavMenuText>
                        </_.NavMenu>
                </_.NavContainer>
            </_.HeaderIn>
        </_.HeaderContainer>
        </>
    )
}

export default Header;