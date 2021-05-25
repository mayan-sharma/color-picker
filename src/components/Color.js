import styles from './styles/Colors.module.css';
import crossIcon from '../assets/cross.png';

export default function Color({ label, hex, rgb }) {
    return (
        <div className={styles.color}>
            <p>{label}</p>
            <div style={{backgroundColor: `#${hex}`}} className={styles.background}>
            </div>
            <div className={styles.info}>
                <p>HEX #{hex}</p>
                <p>RGB {rgb}</p>
                <p>CMYK 0 / 0 / 0 / 100</p>
            </div>
            <img src={crossIcon} onClick={() => console.log("Removed")} />
        </div>
    );
}