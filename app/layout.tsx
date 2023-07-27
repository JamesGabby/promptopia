import { PropsWithChildren } from 'react'
import '@/styles/globals.scss'
import Nav from '@/components/Nav'
import Provider from '@/components/Provider'
import Head from 'next/head'

export const metadata = {
    title: 'Promptopia',
    description: 'Discover and Share AI Prompts'
}

const RootLayout = ({ children }:PropsWithChildren) => {
  return (
    <html lang="en">
        <Head>
            <link rel="icon" href="/favicon.ico" sizes="any" />
        </Head>
        <body>
            <Provider>
                <div className="main">
                    <div className="gradient" />
                </div>
                
                <main className="app">
                    <Nav />
                    {children}
                </main>
            </Provider>
        </body>
    </html>
  )
}

export default RootLayout