import React from "react";
import Mobile from "../MenuMobile/Mobile";
import Menu from "../MenuDesktop/Menu";

const Header: React.FC = () => {

    return (
        <div>
            <Menu />
            <Mobile />
        </div>
    )
}

export default Header;