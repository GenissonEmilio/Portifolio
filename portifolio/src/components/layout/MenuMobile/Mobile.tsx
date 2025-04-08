import React from "react";
import { FaBars } from "react-icons/fa";

const Mobile: React.FC = () => {
    //const size: number = window.innerWidth;
    /*if (size <= 500) {
        
    }*/

    return (
        <div>
            <button className="hamburguer">
                <FaBars />
            </button>
        </div>
    )
}

export default Mobile;