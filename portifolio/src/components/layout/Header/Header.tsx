import React from "react";
import Mobile from "../../../MenuMobile/Mobile";
import Menu from "../MenuDesktop/Menu";
import styles from "./Header.module.css";

const Header: React.FC = () => {

    return (
        <div className={styles.menu}>
            <Menu />
            <Mobile />
        </div>
    )
}

export default Header;