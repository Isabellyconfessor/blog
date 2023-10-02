import PostModelo from "componentes/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png";
import styles from './SobreMim.module.css';
import fotoSobreMim from 'assets/sobre_mim_foto.png'


function SobreMim () {
    return (
        <PostModelo 
            fotoCapa={fotoCapa}
            titulo="Sobre mim"
        >
            <h3 className={styles.subtitulo}>
                Olá, eu sou Isabelly!
            </h3>
            <img
                src={fotoSobreMim}
                alt="Foto de Isabelly sorrindo"
                className={styles.fotoSobreMim}
            />
            <p className={styles.paragrafo}>
                Oi, tudo bem? Eu sou desenvolvedora Front-end e estou feliz de te ver por aqui.
            </p>        
            <p className={styles.paragrafo}>
                Minha história com programação iniciou quando, por influência do meu pai que é desenvolvedor, eu decidi me aventurar nesse mundo e comecei a estudar desenvolvimento front-end.
            </p>
            <p className={styles.paragrafo}>
                No ensino superior, escolhi cursar Análise e Desenolvimento de Sistemas na Uninassau. Paralelamente à universidade, eu sempre estudei para me aprofundar cada vez mais na área.
            </p>
            <p className={styles.paragrafo}>
                Consegui participar do curso de Introdução à Desenvolvimento Web, do Descomplica em parceria com o Instituto NU. No mesmo período, também consegui participar do programa ONE - turma 5, da Alura em parceria com a Oracle. 
            </p>       
            <p className={styles.paragrafo}>
                Desde então, tem sido aprenas aprendizados atrás de aprendizados
                Hoje estou a procura do meu primeiro emprego na área de desenvolvimento.
            </p>
            <p className={styles.paragrafo}>
                Espero que aprenda bastante!
            </p>
        </PostModelo>
    )
}


export default SobreMim