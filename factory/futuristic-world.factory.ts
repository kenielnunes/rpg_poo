import Item from "../domain/item"
import IWorldFactory from "../interface/world-factory.interface"
import { FuturisticItemFactory } from "./futuristic-item.factory"

export default class FuturisticWorldFactory implements IWorldFactory {
    getItem() {
        const item = new FuturisticItemFactory()

        console.log('------------------')
        console.log(`Item do jogador: ${item.getName()}`)
        console.log('------------------')

        return item
    }
}