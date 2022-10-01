import styles from '../styles/Footer.module.css'


const Footer = () => {

    let date = new Date().getFullYear()

    return (
            <footer className={styles.footer}>
                <p><span>Poke Next</span>@Copyright { date }</p>
            </footer>
    );
}

export default Footer;


