import Item from "../domain/item"
import IWorldFactory from "../interface/world-factory.interface"
import { MedievalItemFactory } from "./medieval-item.factory"

export default class MedievalWorldFactory implements IWorldFactory {
    getItem() {
        const item = new MedievalItemFactory()

        console.log('------------------')
        console.log(`Itens do jogador: ${item.getName()}, ${item.getName()}`)
        console.log('------------------')

        return item
    }
}