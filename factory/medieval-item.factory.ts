import IItem from "../interface/item.interface";

export class MedievalItemFactory implements IItem {
    getName(): string {
        return 'Cloth Chest'
    }
}