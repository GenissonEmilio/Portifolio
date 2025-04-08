import React from "react";
import { FaBars } from "react-icons/fa";
import styles from "../MenuDesktop/Menu.module.css";

const Mobile: React.FC = () => {
    const size: number = window.innerWidth;
    console.log(size);

    return (
        <div>
            <button className={styles.hamburguer} >
                <FaBars />
            </button>
        </div>
    )
}

export default Mobile;