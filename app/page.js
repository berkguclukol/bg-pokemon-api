import Image from 'next/image'
import React, {use} from "react";
import Link from "next/link";
import Head from "next/head";

async function getPokemonList(){
    const pokemons = [];
    for (let i = 1; i <= 100; i++) {
        const data = await (await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)).json();
        pokemons.push({
            name: data?.name,
            image: data.sprites.other.dream_world.front_default,
            type: data.types?.map((type) => type.type.name).join(', '),
            id: data.id
        });
    }
    return pokemons;
}
function Home() {
    const pokemonList = use(getPokemonList())
    return (
        <>
            <Head>
                <title>My page title</title>
            </Head>
            <main className="container mx-auto px-4">
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
                    {pokemonList.map(p=>
                        <Link key={p.id} href={`/detail/${p.name}`}>
                            <div key={p.id} className="border border-gray-300 dark:border-gray-700/50 rounded-lg bg-white dark:bg-gray-800 dark:text-slate-200">
                                <h5 className="text-center px-3.5 py-3 capitalize font-bold text-lg">{p.name}</h5>
                                <div className="h-40 border-t border-b border-gray-300 px-3.5 py-3 flex justify-center dark:border-gray-700/50">
                                    <Image src={p.image}
                                           alt={p.name}
                                           width={90}
                                           height={90}
                                    />
                                </div>
                                <p className="text-center px-3.5 py-3 capitalize text-sm">
                                    Type: {p.type}
                                </p>
                            </div>
                        </Link>
                    )}
                </div>
            </main>
            <footer className="container mx-auto px-4 py-10">
                <div className="flex items-center justify-center gap-4 text-xs text-slate-600">
                    Pokemon api example prepared with
                    <Image
                        src="/next.svg"
                        alt="Next.js Logo"
                        width={90}
                        height={40}
                        priority
                    />
                    and deploy on
                    <Image
                        src="/vercel.svg"
                        alt="vercel Logo"
                        width={90}
                        height={40}
                        priority
                    />
                    frontend platform.
                </div>
            </footer>
        </>
    )
}

export default Home;