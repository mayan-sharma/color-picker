import Color from "./Color";
import styles from './styles/Colors.module.css';
import addIcon from '../assets/add.png';

export default function Colors() {
    return (
        <div className={styles.container}>
            <h3>Colors</h3>
            <div>
                <Color />
                <Color />
                <Color />
                <div className={styles.add}>
                    <img src={addIcon} width="30px" onClick={() => console.log("Item Added")} />
                </div>
            </div>
        </div>
    );
}