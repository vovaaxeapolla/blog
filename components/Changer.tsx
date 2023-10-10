import classNames from 'classnames';
import styles from '../styles/Changer.module.sass';

type ChangerProps = {
    states: string[],
    currentState: string
    setState: Function
}

export default function Changer({ states, currentState, setState }: ChangerProps) {
    return (
        <div className={styles.changer}>
            {states.map(s =>
                <button
                    key={s}
                    onClick={() => setState(s)}
                    className={classNames(styles['changer__button'],
                        { [styles['changer__button-active']]: currentState === s })}>
                    {s}
                </button>
            )}
            <div
                className={styles['changer__highlight']}
                style={{
                    translate: states.findIndex(v => v === currentState) * 100 + '%',
                    width: 101 / states.length + '%'
                }} />
        </div>
    )
}