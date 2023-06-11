const complimentBtn = document.getElementById("complimentButton")

const fortuneButton = document.getElementById(`fortuneButton`);

const pokemonList = document.getElementById(`pokemon-list`)

const createPokemon = document.getElementById(`create-pokemon`);

const nameInput = document.getElementById(`name`);
const levelInput = document.getElementById(`level`);
const healthInput = document.getElementById(`health`);
const atkInput = document.getElementById(`atk`);
const defInput = document.getElementById(`def`);
const spAtkInput = document.getElementById(`spAtk`);
const spDefInput = document.getElementById(`spDef`);
const speedInput = document.getElementById(`speed`);


const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const getFortune = () => {
    axios.get(`http://localhost:4000/api/fortune/`)
        .then(res => {
            alert(res.data)
        })
        .catch(err => console.log(err))
};

const showPokemon = pokemonArr => {
    pokemonList.innerHTML = ``;

    pokemonArr.forEach((pokemonObj, index) => {
        let {name, stats} = pokemonObj;
        let list = document.createElement(`li`);
        let pokeName = document.createElement(`div`);
        let pokeLvl = document.createElement(`div`);
        let pokeHealth = document.createElement(`div`);
        let pokeAtk = document.createElement(`div`);
        let pokeDef = document.createElement(`div`);
        let pokeSpAtk = document.createElement(`div`);
        let pokeSpDef = document.createElement(`div`);
        let pokeSpeed = document.createElement(`div`);
        let releaseBtn = document.createElement(`button`);
        
        pokeName.textContent = name;
        
        pokeLvl.innerHTML = `
        <span> Level: <button onclick="updatePokemon(${index}, 'minus', 'level')">-</button> ${stats.level} <button onclick="updatePokemon(${index}, 'plus', 'level')">+</button></span>
        `
        pokeHealth.innerHTML = `
        <span> Health: <button onclick="updatePokemon(${index}, 'minus', 'health')">-</button> ${stats.health} <button onclick="updatePokemon(${index}, 'plus', 'health')">+</button></span>
        `
        pokeAtk.innerHTML = `
        <span> Atk: <button onclick="updatePokemon(${index}, 'minus', 'atk')">-</button> ${stats.atk} <button onclick="updatePokemon(${index}, 'plus', 'atk')">+</button></span>
        `
        pokeDef.innerHTML = `
        <span> Def: <button onclick="updatePokemon(${index}, 'minus', 'def')">-</button> ${stats.def} <button onclick="updatePokemon(${index}, 'plus', 'def')">+</button></span>
        `
        pokeSpAtk.innerHTML = `
        <span> SpAtk: <button onclick="updatePokemon(${index}, 'minus', 'spAtk')">-</button> ${stats.spAtk} <button onclick="updatePokemon(${index}, 'plus', 'spAtk')">+</button></span>
        `
        pokeSpDef.innerHTML = `
        <span> SpDef: <button onclick="updatePokemon(${index}, 'minus', 'spDef')">-</button> ${stats.spDef} <button onclick="updatePokemon(${index}, 'plus', 'spDef')">+</button></span>
        `
        pokeSpeed.innerHTML = `
        <span> Speed: <button onclick="updatePokemon(${index}, 'minus', 'speed')">-</button> ${stats.speed} <button onclick="updatePokemon(${index}, 'plus', 'speed')">+</button></span>
        `
        
        releaseBtn.textContent = `Release`;
        releaseBtn.id = index;
        releaseBtn.addEventListener(`click`, releasePokemon);
        
        list.appendChild(pokeName);
        list.appendChild(pokeLvl);
        list.appendChild(pokeHealth);
        list.appendChild(pokeAtk);
        list.appendChild(pokeDef);
        list.appendChild(pokeSpAtk);
        list.appendChild(pokeSpDef);
        list.appendChild(pokeSpeed);
        list.appendChild(releaseBtn);
        
        pokemonList.appendChild(list);
    })
};

const getPokemon = () => {
    axios.get(`http://localhost:4000/api/pokemon/`)
        .then(res => {
            showPokemon(res.data)
        })
        .catch(err => console.log(err))
};

const addPokemon = evt => {
    evt.preventDefault()
    let obj = {
        name: nameInput.value,
        stats:{
            level: levelInput.value,
            health: healthInput.value,
            atk: atkInput.value,
            def: defInput.value,
            spAtk: spAtkInput.value,
            spDef: spDefInput.value,
            speed: speedInput.value
        }
    };

    axios.post(`http://localhost:4000/api/pokemon/`, obj)
        .then(res => {
            showPokemon(res.data)
        })
        .catch(err => console.log(err))
};

const updatePokemon = (index, action, stat) => {
    console.log(index, action, stat)
    axios.put(`http://localhost:4000/api/pokemon/${index}`, {action, stat})
        .then(res => {
            showPokemon(res.data)
        })
        .catch(err => console.log(err))
};

const releasePokemon = evt => {
    axios.delete(`http://localhost:4000/api/pokemon/${evt.target.id}`)
        .then(res => {
            showPokemon(res.data)
        })
        .catch(err => console.log(err))
};


complimentBtn.addEventListener('click', getCompliment)
fortuneButton.addEventListener(`click`, getFortune);
createPokemon.addEventListener(`submit`, addPokemon);
getPokemon();