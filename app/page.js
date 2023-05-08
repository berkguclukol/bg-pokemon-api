import Image from 'next/image'
import {use} from "react";
import Link from "next/link";

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
        <main className="container mx-auto">
            <div className="grid grid-cols-5 gap-4">
                {pokemonList.map(p=>
                    <Link key={p.id} href={`/detail/${p.name}`}>
                        <div key={p.id} className="pointer-events-auto relative z-10 rounded-lg bg-white text-[0.8125rem] leading-5 text-slate-700 shadow-xl shadow-black/5 ring-1 ring-slate-700/10">
                            <h5 className="text-center px-3.5 py-3 capitalize font-bold text-lg">{p.name}</h5>
                            <div className="h-40 border-t border-b border-slate-400/20 px-3.5 py-3 flex justify-center">
                                <Image src={p.image}
                                       alt={p.name}
                                       width={90}
                                       height={90}
                                />

                            </div>
                            <p className="text-center px-3.5 py-3 capitalize">
                                Type: {p.type}
                            </p>

                        </div>
                    </Link>
                )}
            </div>
        </main>
    )
}

export default Home;