import Image from             'next/image'
import { useEffect } from     'react'
import styles from            '../styles/About.module.css'


const about = () => {
    // 
    return (
        <div className={ styles.about }>
            <h1>Sobre o projeto!</h1>
            <p>Lorem ipsum lorem ipsum lorem ipsum</p>
            
            <Image src="/images/charizard.png" width="300" height="300" alt="Charizard" />
        </div>
    );
}

export default about;