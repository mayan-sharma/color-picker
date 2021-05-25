import styles from './styles/Colors.module.css';
import crossIcon from '../assets/cross.png';

export default function Color() {
    return (
        <div className={styles.color}>
            <p>Background</p>
            <div className={styles.background}>
            </div>
            <div className={styles.info}>
                <p>HEX #A8C38B</p>
                <p>RGB 26 / 26 / 26</p>
                <p>CMYK 0 / 0 / 0 / 100</p>
            </div>
            <img src={crossIcon} onClick={() => console.log("Removed")} />
        </div>
    );
}