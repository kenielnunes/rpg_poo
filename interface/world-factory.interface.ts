import Item from "../domain/item";

export default interface IWorldFactory {
    getItem(): Item
}