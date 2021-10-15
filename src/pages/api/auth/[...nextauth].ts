// https://next-auth.js.org/getting-started/example
// yarn add next-auth
// criando autenticação de usuário com github
//yarn add @types/next-auth -D

import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

export default NextAuth({

    providers: [
        Providers.GitHub({
            // esses nomes tem que ser iguais ao do .env.local
            clientId: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRET,
            scope: 'read:user', // o que eu quero acessar do user
        }),
    ],

    callbacks: {
        // esse quando o user já estiver logado, vai chamar essa função
        // informações do user vindo do github
        async session(session, profile){
            try {
                return {
                    ...session,
                    id: profile.sub //dentro desse sub tenho o id do user
                }
            } catch {
                return {
                    ...session,
                    id: null,
                }
            }
        },


        // essa quando vc vai logar vai chamar essa função
        // informações do user vindo do github
        async signIn(user, account, profile){

            const { email } = user;
            try {
                return true;
            } catch (err) {
                console.log('Error:', err);
                return false;
            }

        }
    }

    //precisaremos de duas chaves, uma para Id e outra para Secret, vc cria no github
})