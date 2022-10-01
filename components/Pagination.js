import styles from '../styles/Home.module.css'


const Pagination = ({ setPage, page }) => {
    // 
    let vetor = []

    for ( let i = 1; i <= 21; i++ ) {
        vetor.push( <button className={styles.btn} onClick={ () => setPage( i ) } >{ i }</button> )
    }

    return (
        <div className={styles.btn_container}>
            <div className={styles.btn_align}>
                <button className={styles.btn} onClick={ () => setPage( page - 1 ) }>Anterior</button>
                    {
                        vetor.map( e => {
                            return e
                        })
                    }
                <button className={styles.btn} onClick={ () => setPage( page + 1 ) }>Próximo</button>
            </div>
        </div>
    )
}
// page > 0 && setPage(page + 1)
export default Pagination
