import IItem from "../../interface/item.interface";

export class MedievalItem implements IItem {
    getName(): string {
        return 'Plasma Gun'
    }
}