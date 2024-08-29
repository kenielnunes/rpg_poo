import IItem from "../interface/item.interface";

export class FuturisticItemFactory implements IItem {
    getName(): string {
        return 'Plasma Gun'
    }
}