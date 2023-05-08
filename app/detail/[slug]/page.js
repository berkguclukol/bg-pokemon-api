import {use} from 'react'
import Image from "next/image";

function Detail({ params }) {
    async function getSinglePokemon() {
        return await (await fetch(`https://pokeapi.co/api/v2/pokemon/${params.slug}`, {cache: "no-store"})).json();
    }
    const pokemon = use(getSinglePokemon())
    return (
        <main className="container mx-auto px-4">
            <h1 className="capitalize text-2xl font-bold mb-4">{pokemon.name} Detail Page</h1>

            <div className="flex items-center border border-gray-300 dark:border-gray-700/50 rounded-lg bg-white dark:bg-gray-800 dark:text-slate-200">
                <div className="p-8">
                    <Image src={pokemon.sprites.other.dream_world.front_default}
                           alt="Picture of the author"
                           width={150}
                           height={150}
                    />
                </div>
                <div className="border-l border-gray-300 dark:border-gray-700/50 p-4">
                    <p className="capitalize text-xl"><span className="font-bold">Height: </span>{pokemon.height}dm</p>
                    <p className="mb-2 italic opacity-25">The height of this Pokémon in decimetres.</p>
                    <p className="capitalize text-xl"><span className="font-bold">Weight: </span>{pokemon.weight}hg</p>
                    <p className="mb-2 italic opacity-25">The weight of this Pokémon in hectograms.</p>
                    <p className="capitalize text-xl"><span className="font-bold">Base Experience: </span>{pokemon.base_experience}</p>
                    <p className="italic opacity-25">The base experience gained for defeating this Pokémon.</p>
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 my-4">
                <div className="border border-gray-300 dark:border-gray-700/50 rounded-lg bg-white dark:bg-gray-800 dark:text-slate-200">
                    <h6 className="text-center p-2 capitalize font-bold border-b border-gray-300 dark:border-gray-700/50">Back Default</h6>
                    <div className="flex items-center justify-center">
                        <Image src={pokemon.sprites.back_default}
                               width={100}
                               height={100}
                               alt={pokemon.name}/>
                    </div>
                </div>
                
                <div className="border border-gray-300 dark:border-gray-700/50 rounded-lg bg-white dark:bg-gray-800 dark:text-slate-200">
                    <h6 className="text-center p-2 capitalize font-bold border-b border-gray-300 dark:border-gray-700/50">Back Shiny</h6>
                    <div className="flex items-center justify-center">
                        <Image src={pokemon.sprites.back_shiny}
                               width={100}
                               height={100}
                               alt={pokemon.name}/>
                    </div>
                </div>
                <div className="border border-gray-300 dark:border-gray-700/50 rounded-lg bg-white dark:bg-gray-800 dark:text-slate-200">
                    <h6 className="text-center p-2 capitalize font-bold border-b border-gray-300 dark:border-gray-700/50">Front Default</h6>
                    <div className="flex items-center justify-center">
                        <Image src={pokemon.sprites.front_default}
                               width={100}
                               height={100}
                               alt={pokemon.name}/>
                    </div>
                </div>
                <div className="border border-gray-300 dark:border-gray-700/50 rounded-lg bg-white dark:bg-gray-800 dark:text-slate-200">
                    <h6 className="text-center p-2 capitalize font-bold border-b border-gray-300 dark:border-gray-700/50">Front Shiny</h6>
                    <div className="flex items-center justify-center">
                        <Image src={pokemon.sprites.front_shiny}
                               width={100}
                               height={100}
                               alt={pokemon.name}/>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Detail;