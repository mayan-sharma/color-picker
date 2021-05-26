import { useMutation, useQuery, useSubscription } from "@apollo/client";

import Color from "./Color";
import styles from './styles/Colors.module.css';
import addIcon from '../assets/add.png';
import { GET_ALL_COLORS_QUERY } from "../utils/graphql/queries";
import { CREATE_COLOR_MUTATION } from "../utils/graphql/mutations";
import { SUBSCRIBE_COLOR_ADDED } from '../utils/graphql/subscriptions';
import { getColorObject } from "../utils/generateColor";

export default function Colors() {

    const { data: queryData, queryError, loading: queryLoading } = useQuery(GET_ALL_COLORS_QUERY);
    
    const [addColor, { loading: mutationLoading }] = useMutation(CREATE_COLOR_MUTATION);

    const { data: subscriptionData, loading: subscriptionLoading } = useSubscription(SUBSCRIBE_COLOR_ADDED, {
        update: (cache) => {
            console.log(cache);
        }
    });

    if (queryLoading) return <p>Loading...</p>
    if (queryError) return <p>Error</p>

    const handleAddColor = () => {
        addColor({
            variables: {
                object: getColorObject()
            }
        });
    }

    const data = subscriptionLoading ? queryData : subscriptionData;

    return (
        <div className={styles.container}>
            <p>{subscriptionLoading ? "Connecting to WebSocket..." : "WebSocket Connected"}</p>
            <h3>Colors</h3>
            <div>
                
                { data.colors.map(color => (
                   <Color key={color.id} id={color.id} label={color.label} hex={color.hex} rgb={color.rgb} /> 
                )) }

                <div className={styles.add}>
                    <button 
                        onClick={handleAddColor}
                        disabled={mutationLoading}
                    >
                        <img src={mutationLoading ? <p>s</p> : addIcon} width="30px" />
                    </button>
                </div>
            </div>
        </div>
    );
}