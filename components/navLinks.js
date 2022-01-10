import styles from '../styles/Home.module.css'

const NavLinks = (props) => {
    return (
        <ul className={styles.NavLinks}>
            <img className={styles.logo} src="logo.jpg"/>
            <li onClick={() => props.isMobile && props.closeMobileMenu()}>
                <a href="/">Home.</a>
            </li>
            <li onClick={() => props.isMobile && props.closeMobileMenu()}>
                <a href="#portfolio">Portfolio.</a>
            </li>
            <li onClick={() => props.isMobile && props.closeMobileMenu()}>
               <nobr> <a href="#contact">Contact us.</a> </nobr>
            </li>

            <li onClick={() => props.isMobile && props.closeMobileMenu()}>
                <nobr><a href="about">About us.</a></nobr>
            </li>

            <li onClick={() => props.isMobile && props.closeMobileMenu()}>
                <a href="blog">Blog.</a>
            </li>

            <p className={styles.contUs}>
                <nobr><a href="#contact">Contact Us</a></nobr>
                </p>

        </ul>
        
    );
}
export default NavLinks;