import Head from "next/head";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Main from "../components/Main";
import request from "../utils/request";

export default function Home({results}) {
    return (
        <div>
            <Head>
                <title>Hulu 2.O</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <Header/>

            <Navbar/>

            <Main results={results}/>
        </div>
    )
}

export async function getServerSideProps(context) {
    const genre = context.query.genre;
    const requests = await fetch(`https://api.themoviedb.org/3${request[genre]?.url || request.fetchingTrending.url}`
    ).then((res) => res.json());

    return {
        props: {
            results: requests.results,
        }
    }
}
