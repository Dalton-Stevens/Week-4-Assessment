const pokemon = [  {
    name: `Pikachu`,
    stats: {
        level: 100,
        health: 85,
        atk: 85,
        def: 85,
        spAtk: 85,
        spDef: 85,
        speed: 85
    }
},
{
    name: `Charizard`,
    stats: {
        level: 100,
        health: 0,
        atk: 0,
        def: 0,
        spAtk: 252,
        spDef: 4,
        speed: 252
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
        res.status(200).send(pokemon);
    },
    addPokemon: (req, res) => {
        pokemon.push(req.body);
        res.status(200).send(pokemon);
    },

    updatePokemon: (req, res) => {
        let pokemonIndex = +req.params.index;
        let body = req.body;

        if(req.body.action === `minus` && pokemon[pokemonIndex][`stats`][body.stat] > 0) {
            pokemon[pokemonIndex][`stats`][body.stat]--;
        } else if(req.body.action === `plus`) {
            if((req.body.stat === `level` && pokemon[pokemonIndex][`stats`][body.stat] < 100) || (req.body.stat !== `level` && pokemon[pokemonIndex][`stats`][body.stat] < 252)) {
                pokemon[pokemonIndex][`stats`][body.stat]++;
            }
        } 
        res.status(200).send(pokemon);
    },

    releasePokemon: (req, res) => {
        pokemon.splice(+req.params.index, 1);
        res.status(200).send(pokemon);
    }
};