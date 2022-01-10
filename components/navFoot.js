import styles from '../styles/Home.module.css'

const NavFoot = (props) => {
    return (
        <ul className={styles.NavLinks}>
            <li onClick={() => props.isMobile && props.closeMobileMenu()}>
                <a href="/">Home.</a>
            </li>
            <li onClick={() => props.isMobile && props.closeMobileMenu()}>
                <a href="portfolio">Portfolio.</a>
            </li>
            <li onClick={() => props.isMobile && props.closeMobileMenu()}>
               <nobr> <a href="contact">Contact us.</a> </nobr>
            </li>

            <li onClick={() => props.isMobile && props.closeMobileMenu()}>
                <nobr><a href="about">About us.</a></nobr>
            </li>

            <li onClick={() => props.isMobile && props.closeMobileMenu()}>
                <a href="blog">Blog.</a>
            </li>

            

        </ul>
        
    );
}
export default NavFoot;