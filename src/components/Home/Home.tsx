import { useContext } from 'react';
import Card from '../Card/Card';
import Button from '../Button/Button';
import AuthContext from '../../context/AuthContext';
import styles from "./Home.module.css";


const Home = () => {
    const { user, logout }: any = useContext(AuthContext);
    return (
        <Card className={styles.home}>
            <h1>Welcome back! ({user.email})</h1>
            <Button onClick={logout} label="Logout" />
        </Card>
    )
};

export default Home;