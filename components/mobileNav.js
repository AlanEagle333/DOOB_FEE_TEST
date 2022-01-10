import NavLinks from "./navLinks";
import styles from '../styles/Home.module.css'
import { HiMenu } from 'react-icons/hi'
import { AiOutlineClose } from 'react-icons/ai'
import { useState } from "react";

const MobileNav = () => {

    const [open, setOpen] = useState(false);

    const hamburgericon = <HiMenu className={styles.Hamburger}
        size='40px' color='black'
        onClick={() => setOpen(!open)}
    />

    const closeicon =  <AiOutlineClose className={styles.Hamburger} 
    size='40px' color='black'
    onClick={() => setOpen(!open)}
    />

    const closeMobMenu = () => setOpen(false);

    return (
        <nav className={styles.MobileNav}>
            {open ? closeicon : hamburgericon}
            {open && <NavLinks isMobile={true}
            closeMobMenu={closeMobMenu}
            />}
        </nav>
    );
}

export default MobileNav;