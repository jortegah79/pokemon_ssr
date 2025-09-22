const { log } = require("console");
const FileSystem  = require("fs");


 (async()=>{
    
    const NUM_POKEMONS =150;

    const pokemonsText=new Array( NUM_POKEMONS ).fill(0).map( (_,index )=> `/pokemons/page/${ index + 1 }`);
    const pokemonsText2=new Array( NUM_POKEMONS ).fill(0).map( (_,index )=> `/pokemon/${ index + 1 }`);
    let pokemonsText3=[];
    await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${ NUM_POKEMONS }`).then(async(response)=>{     
        await response.json().then((pokemons)=>{          
            pokemons.results.forEach(( { name })=>{               
                pokemonsText3.push(`/pokemon/${name}`);
            });
        });
    })  

    FileSystem.writeFileSync('src/routes.txt', [...pokemonsText, ...pokemonsText2, ...pokemonsText3].join('\n'));





})();