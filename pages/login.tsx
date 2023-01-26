import TopBar from '../components/TopBar.js';
import Formulario from '../components/Formulario.js';
import styles from '../styles/login.module.css';

function LoginPage() {
  
    return (
        <>
        <TopBar title="Login"/>
        <div className={styles.container}>
                <Formulario classe={styles.form} title="Login" down_text="Não tem uma conta? Clique aqui!" link='/registro' />
        </div>
        </>
    );
}
export default LoginPage;