import React from "react";
import Menu from "../MenuDesktop/Menu";
import styles from "./Header.module.css";
import Mobile from "../MenuMobile/Mobile";

const Header: React.FC = () => {

    return (
        <div className={styles.menu}>
            <Menu />
            <Mobile />
        </div>
    )
}

export default Header;