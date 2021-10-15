import { GetStaticProps } from 'next';// trabalhando com página estática

import Head from 'next/head'; //para títulos dinâmicos
import styles from '../styles/styles.module.scss';

export default function Home() {
  return (
    <>
      <Head>
        <title> Board - Organizando suas tarefas. </title>
      </Head>
      
      <main className={styles.contentContainer} >

        <img src="/images/board-user.svg" alt="Ferramenta board"/>

        <section className={styles.callToAction}>
          <h1> Uma ferramenta para seu dia a dia, escreva, planeje e organize-se... </h1>
          <p>
            <span>100% Gratuita</span> e online.
          </p>
        </section>


        <div className={styles.donaters} >
          
          <p>apoiadores</p>

          <img src="https://sujeitoprogramador.com/steve.png" alt="Usuario 1"/>
          <img src="https://sujeitoprogramador.com/steve.png" alt="Usuario 1"/>

        </div>

      </main>
    </>
  )
}


// trabalhando com página estática
export const getStaticProps: GetStaticProps = async () => {
  


  
  return {
    props: {

    },
    revalidate: 60 * 60 // página atualiza a cada 60 minutos. 60 ali é segundos 
  }
}