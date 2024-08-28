import Player from "./domain/player"
import MedievalWorldFactory from "./factory/medieval-world.factory"

const medievalWorld = new MedievalWorldFactory()

const player = new Player('Merlen', medievalWorld)

console.log("player", player)