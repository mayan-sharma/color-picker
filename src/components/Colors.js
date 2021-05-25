import { useQuery } from "@apollo/client";

import Color from "./Color";
import styles from './styles/Colors.module.css';
import addIcon from '../assets/add.png';
import { GET_ALL_COLORS_QUERY } from "../utils/graphql/queries";

export default function Colors() {

    const { data, error, loading } = useQuery(GET_ALL_COLORS_QUERY);

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error</p>

    console.log(data.colors);

    return (
        <div className={styles.container}>
            <h3>Colors</h3>
            <div>
                
                { data.colors.map(color => (
                   <Color key={color.id} label={color.label} hex={color.hex} rgb={color.rgb} /> 
                )) }

                <div className={styles.add}>
                    <button onClick={() => console.log("Item Added")}>
                        <img src={addIcon} width="30px" />
                    </button>
                </div>
            </div>
        </div>
    );
}