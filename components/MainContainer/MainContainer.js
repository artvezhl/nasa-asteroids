import Header from "../Header/Header";
import styles from "./MainContainer.module.scss";

const MainContainer = ({ children, bgImage }) => {
    return (
        <div className={styles.container}>
            <Header image={bgImage} />
            {children}
        </div>
    )
}

export default MainContainer
