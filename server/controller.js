const pokemon = [  {
    name: `Pikachu`,
    level: 100,
    stats: {
        health: 85,
        atk: 85,
        def: 85,
        spAtk: 85,
        spDef: 85,
        speed: 85,
    }
},
{
    name: `Charizard`,
    level: 100,
    stats: {
        health: 0,
        atk: 0,
        def: 0,
        spAtk: 252,
        spDef: 4,
        speed: 252,
    }
}
];

module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },
    getFortune: (req, res) => {
        const fortunes = [`A beautiful, smart, and loving person will be coming into your life.`, `A golden egg of opportunity falls into your lap this month.`, `A pleasant surprise is waiting for you.`, `Adventure can be real happiness.`, `All will go well with your new project.`];

        let index = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[index];

        res.status(200).send(randomFortune);
    },
    getPokemon: (req, res) => {
        res.status(200).send(pokemon)
    },
    addPokemon: (req, res) => {
        pokemon.push(req.body);
        res.status(200).send(pokemon);
    },

    updatePokemon: (req, res) => {
        // Currently working on --------------------------
        console.log(req.params)
        // find right pokemon pos in the array
        const pokemonIndex = +req.params.index
        pokemon[pokemonIndex][`${req.params.atk}`] = req.params.value
        // find the right stat
        // update it
    },

    releasePokemon: (req, res) => {
        // console.log(req.params.index)
        // console.log(+req.params.index)
        pokemon.splice(+req.params.index, 1);
        res.status(200).send(pokemon);
    }
}