import IArmor from "../interface/armor.interface";

export class MedievalItemFactory implements IArmor {
    getName(): string {
        return 'Cloth Chest'
    }
}