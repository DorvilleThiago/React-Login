import TopBar from '../components/TopBar';
import Formulario from '../components/Formulario';
import styles from '../styles/login.module.css';

function Registro() {
    
    return (
        <>
        <TopBar title="Registro"/>
        <div className={styles.container}>
        <Formulario classe={styles.form} title="Registro" down_text="Já tem uma conta? Clique aqui!" link='/login'/>
        </div>
        </>
    );
}
export default Registro;