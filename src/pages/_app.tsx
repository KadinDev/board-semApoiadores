// esse _app que vai ficar renderizando todas as páginas
// se eu quiser compartilhar um mesmo algo para todas as páginas terei que colocar por aqui

import { AppProps } from 'next/app';

import '../styles/global.scss';
import { Header } from '../components/Header';

// import o Provider, renomeio ele de NextAuthProvider.
// o provider é para compartilhar as informações do user em toda a aplicação
import { Provider as NextAuthProvider } from 'next-auth/client';

// aqui já estou tipando  : AppProps
function MyApp({ Component, pageProps } : AppProps  ) {

  return (
    <NextAuthProvider 
      // propriedade chamada session, que é a propriedade da sessão que vai estar dentro
      // das páginas
      session={pageProps.session} 
    >

      <Header />
      <Component {...pageProps} 
      // Component serão as páginas da aplicação
      />

    </NextAuthProvider>
  )

}

export default MyApp
