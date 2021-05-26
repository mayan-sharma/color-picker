import styles from './styles/Colors.module.css';
import crossIcon from '../assets/cross.png';
import { useMutation } from '@apollo/client';
import { DELETE_COLOR_MUTATION, UPDATE_LABEL_MUTATION } from '../utils/graphql/mutations';

export default function Color({ id, label, hex, rgb }) {
    
    
    const [removeColor] = useMutation(DELETE_COLOR_MUTATION);
    
    const [changeLabel] = useMutation(UPDATE_LABEL_MUTATION);

    const handleLabelChange = e => {
        const res = window.prompt('Change label name: ');
        
        if (res) {
            changeLabel({
                variables: { id: `${id}`, label: `${res}` }
            })
        }
    }

    return (
        <div className={styles.color}>
            <p onClick={handleLabelChange}>{label}</p>
            <div style={{backgroundColor: `#${hex}`}} className={styles.background}>
            </div>
            <div className={styles.info}>
                <p>HEX #{hex}</p>
                <p>RGB {rgb}</p>
            </div>
            <button
                onClick={() => {
                    removeColor({
                        variables: { id: `${id}` }
                    })
                }}
            >
                <img src={crossIcon} />
            </button>
        </div>
    );
}