import styles from '../styles/Skills_old.module.sass';

export default function Skills() {
    return (
        <div className={styles.skills}>
            <div className={styles.card}>
                <span style={{ color: '#6A9955', fontSize: '.5em' }}>
                        // My skills
                </span>
            </div>
            <div className={styles.card}>
                <span style={{ color: '#808080' }}>
                    &lt;
                </span>
                <span style={{ color: '#4C85D6' }}>
                    html &nbsp;
                </span>
                <span style={{ color: '#808080' }}>
                    {'/>'}
                </span>
            </div>
            <div className={styles.card}>
                <span style={{ color: '#D7AF62' }}>
                    .CSS &nbsp;
                </span>
                <span style={{ color: '#FFD70A' }}>{'{}'}</span>
            </div>
            <div className={styles.card}>
                <span style={{ color: '#D7AF62' }}>
                    .SASS / .SCSS
                </span>
            </div>
            <div className={styles.card}>
                <span style={{ color: '#4C85D6', fontSize: '.5em' }}>
                    let &nbsp;
                </span>
                <span style={{ color: '#9CDCF1' }}>
                    TypeScript
                </span>
                <span style={{ color: '#CCC', fontSize: '.5em' }}>
                    : &nbsp;
                </span>
                <span style={{ color: '#4EC994', fontSize: '.5em' }}>
                    string
                </span>
            </div>
            <div className={styles.card}>
                <span style={{ color: '#4C85D6', fontSize: '.5em' }}>
                    const &nbsp;
                </span>
                <span style={{ color: '#9CDCF1' }}>
                    JavaScript
                </span>
            </div>
            <div className={styles.card}>
                <span style={{ color: '#808080', fontSize: '.5em' }}>
                    &lt;
                </span>
                <span style={{ color: '#4EC994', fontSize: '.5em' }}>
                    Component
                </span>
                <span style={{ color: '#808080', fontSize: '.5em' }}>
                    &gt;
                </span>
                <span style={{ color: '#CCC' }}>
                    React.js
                </span>
                <span style={{ color: '#808080', fontSize: '.5em' }}>
                    {'</'}
                </span>
                <span style={{ color: '#4EC994', fontSize: '.5em' }}>
                    Component
                </span>
                <span style={{ color: '#808080', fontSize: '.5em' }}>
                    &gt;
                </span>
            </div>
            <div className={styles.card}>
                <span style={{ color: '#CCC' }}>
                    Next.js
                </span>
            </div>
            <div className={styles.card}>
                <span style={{ color: '#4C85D6', fontSize: '.5em' }}>
                    SELECT &nbsp;
                </span>
                <span style={{ color: '#CCC', fontSize: '.5em' }}>
                    * &nbsp;
                </span>
                <span style={{ color: '#4C85D6', fontSize: '.5em' }}>
                    FROM &nbsp;
                </span>
                <span style={{ color: '#CCC' }}>
                    POSTGRESQL;
                </span>
            </div>
        </div >
    );
}