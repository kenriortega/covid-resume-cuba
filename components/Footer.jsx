import styles from '../styles/Footer.module.css'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div>
                <a
                    href='https://twitter.com/kenriortega'
                    target='_blank'
                    rel='noreferrer'
                >
                    Desarrollado por @kenriortega
                </a>

                <span>&bull;</span>
                <a href='https://github.com/kenriortega/covid-resume-cuba' rel='nofollow noreferrer' target='_blank'>GitHub</a>
                <span>&bull;</span>
                <span>&bull;</span>
                <a href='https://github.com/kenriortega/covid-resume-cuba/issues/new' rel='nofollow noreferrer' target='_blank'>Enviar sugerencia</a>
            </div>
        </footer>
    )
}