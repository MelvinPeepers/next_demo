import Head from 'next/head'
import { Router, useRouter } from 'next/router'

function Home() {

    const router = useRouter()

    const handleClick = (event) => {
        event.preventDefault()
        router.push('/pokemon')
    }

    return (
        <>
            <Head>
            <title>My Next.js Site!</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <div>Welcome, Exploreer!</div>
            <button onClick={handleClick}>
                Click Me!
            </button>
        </>
    ) 
}

export default Home