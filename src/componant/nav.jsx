import React from "react";

import styles from "../componant/Nav.module.css";

const Nav = () => {
    return (
        <div>
            <div className={styles.navbar}>
                <div className={styles.title}>
   
                
                <i className="fa fa-superpowers" aria-hidden="true" ><b style={{fontFamily:"unset",marginLeft:"20px"}}>ITEMS CATALOG</b></i>
   
                   
                </div>
                <div className={styles.links}>
            
                </div>
            </div>

        </div>
    );
}
export default Nav;