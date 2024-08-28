export default class Item {
    public readonly id: number
    public name: string

    constructor(id: number, name: string) {
        this.id = id,
        this.name = name
    }

    getId() {
        return this.id
    }

    getName() {
        return this.name
    }
}