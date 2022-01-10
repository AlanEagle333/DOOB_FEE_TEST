import MobileNav from "./mobileNav";
import Navigation from "./navigation";
import styles from '../styles/Home.module.css'


const NavBar = () => {
    return(
        <div className={styles.NavBar}>
            <MobileNav/>
            <Navigation/>
            
        </div>
    )
}

export default NavBar;