import {use} from 'react'
import Image from "next/image";

function Detail({ params }) {
    async function getSinglePokemon() {
        return await (await fetch(`https://pokeapi.co/api/v2/pokemon/${params.slug}`, {cache: "no-store"})).json();
    }
    const pokemon = use(getSinglePokemon())
    return (
        <main className="container mx-auto">
            <h1 className="capitalize text-2xl font-bold mb-4">{pokemon.name} Detail Page</h1>

            <div className="flex gap-6 p-5 items-center pointer-events-auto relative z-10 rounded-lg bg-white text-[0.8125rem] leading-5 text-slate-700 shadow-xl shadow-black/5 ring-1 ring-slate-700/10">
                <div>
                    <Image src={pokemon.sprites.other.dream_world.front_default}
                           alt="Picture of the author"
                           width={150}
                           height={150}
                    />
                </div>
                <div>
                    <p className="capitalize text-xl mb-2"><span className="font-bold">Name: </span>{pokemon.name}</p>
                    <p className="capitalize text-xl"><span className="font-bold">Height: </span>{pokemon.height}dm</p>
                    <p className="mb-2 italic">The height of this Pokémon in decimetres.</p>
                    <p className="capitalize text-xl"><span className="font-bold">Weight: </span>{pokemon.weight}hg</p>
                    <p className="mb-2 italic">The weight of this Pokémon in hectograms.</p>
                    <p className="capitalize text-xl"><span className="font-bold">Base Experience: </span>{pokemon.base_experience}</p>
                    <p className="italic">The base experience gained for defeating this Pokémon.</p>
                </div>
            </div>
            <div className="grid grid-cols-4 gap-4 my-4">
                <div className="flex items-center p-4 flex-col pointer-events-auto relative z-10 rounded-lg bg-white text-[0.8125rem] leading-5 text-slate-700 shadow-xl shadow-black/5 ring-1 ring-slate-700/10">
                    <h6 className="text-center mb-2 capitalize font-bold">Back Default</h6>
                    <Image src={pokemon.sprites.back_default}
                           width={100}
                           height={100}
                     alt={pokemon.name}/>
                </div>
                
                <div className="flex items-center p-4 flex-col pointer-events-auto relative z-10 rounded-lg bg-white text-[0.8125rem] leading-5 text-slate-700 shadow-xl shadow-black/5 ring-1 ring-slate-700/10">
                    <h6 className="text-center mb-2 capitalize font-bold">Back Shiny</h6>
                    <Image src={pokemon.sprites.back_shiny}
                           width={100}
                           height={100}
                           alt={pokemon.name}/>
                </div>
                <div className="flex items-center p-4 flex-col pointer-events-auto relative z-10 rounded-lg bg-white text-[0.8125rem] leading-5 text-slate-700 shadow-xl shadow-black/5 ring-1 ring-slate-700/10">
                    <h6 className="text-center mb-2 capitalize font-bold">Front Default</h6>
                    <Image src={pokemon.sprites.front_default}
                           width={100}
                           height={100}
                           alt={pokemon.name}/>
                </div>
                <div className="flex items-center p-4 flex-col pointer-events-auto relative z-10 rounded-lg bg-white text-[0.8125rem] leading-5 text-slate-700 shadow-xl shadow-black/5 ring-1 ring-slate-700/10">
                    <h6 className="text-center mb-2 capitalize font-bold">Front Shiny</h6>
                    <Image src={pokemon.sprites.front_shiny}
                           width={100}
                           height={100}
                           alt={pokemon.name}/>
                </div>
            </div>
        </main>
    )
}

export default Detail;