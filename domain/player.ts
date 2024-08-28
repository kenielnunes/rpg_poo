import IWorldFactory from "../interface/world-factory.interface";
import Item from "./item";

export default class Player {
    protected name: string
    protected itens: Item

    constructor(name: string, factory: IWorldFactory) {
        this.name = name;
        this.itens = factory.getItem()
    }
}