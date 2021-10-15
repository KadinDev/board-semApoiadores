import Link from 'next/link'; // para navegar
import styles from './styles.module.scss';

import { SignInButton } from '../SignInButton';

import { useSession } from 'next-auth/client';

export function Header () {
    
    const [ session ] = useSession();

    /*
        { session && ( // se o user estiver logado
                        <Link href='/board'>
                            <a>Meu Board</a>
                        </Link>
                    ) }
    */

    return (
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <Link href='/'>
                    <img src='/images/logo.svg' alt='Logo Meu Board'/>
                </Link>

                <nav>
                    <Link href='/'>
                        <a>Home</a>
                    </Link>
                    
                    { session ? ( // se o user estiver logado
                        <Link href='/board'>
                            <a className={styles.logado}> Meu Board</a>
                        </Link>
                    ) : (
                        <Link href='/board'>
                            <a className={styles.notLogin} >Meu Board </a>
                        </Link>
                    ) }
                    
                </nav>
                
                <SignInButton />
                
            </div>
        </header>
    )
}
