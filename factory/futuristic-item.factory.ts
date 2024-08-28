import IWeapon from "../interface/weapon.interface";

export class FuturisticItemFactory implements IWeapon {
    getName(): string {
        return 'Plasma Gun'
    }
}