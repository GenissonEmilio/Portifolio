import React from "react";
import { FaBars } from "react-icons/fa";
import styles from "./Mobile.module.css";

const Mobile: React.FC = () => {
    //const size: number = window.innerWidth;
    /*if (size <= 500) {
        
    }*/

    return (
        <div>
            <button className={styles.hamburguer}>
                <FaBars />
            </button>
        </div>
    )
}

export default Mobile;