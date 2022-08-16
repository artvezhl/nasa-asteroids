import styles from './Header.module.scss'
import Nav from "./Nav";

const Header = ({ image }) => {
    return (
        <header className={styles.header}
                style={{
            backgroundImage: `url(${image})`
        }}
        >
            <div>
                <h1>ARMAGEDDON V2</h1>
                <p>Сервис заказа уничтодения астероидов, опасно подлетающих к Земле.</p>
            </div>
            <Nav />
        </header>
    );
}

export default Header
