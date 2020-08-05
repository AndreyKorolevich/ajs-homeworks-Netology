import Buyable from './Buyable';

export default class Move implements Buyable {
    constructor(
        readonly id: number,
        readonly name: string,
        readonly author: string,
        readonly year: number,
        readonly country: string,
        readonly slogan: string,
        readonly genre: string,
        readonly time: number,
        readonly price: number
    ) { }
}
