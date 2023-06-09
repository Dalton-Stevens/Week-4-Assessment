const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { 
    getCompliment,
    getFortune,
    getPokemon,
    addPokemon,
    releasePokemon
} = require('./controller')

app.get("/api/compliment", getCompliment);
app.get(`/api/fortune`, getFortune);
app.get(`/api/pokemon`, getPokemon);
app.post(`/api/pokemon`, addPokemon);
app.delete(`/api/pokemon/:index`, releasePokemon);



app.listen(4000, () => console.log("Server running on 4000"));