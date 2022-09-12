import styles from "./style.module.css"

const Cards = (props) => {
    return ( 
        <div className={styles.Cards}>
            {props.children}
        </div>
     );
}
 
export default Cards ;