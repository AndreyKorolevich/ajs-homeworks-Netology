import Buyable from '../domain/Buyable';

export default class Cart {
    private _items: Buyable[] = [];

    add(item: Buyable): void {
        this._items.push(item);
    }

    get items(): Buyable[] {
        return [...this._items]; 
    }

  cost():number{
    let cost = 0
    this._items.forEach((item:Buyable) => {
      cost += item.price;
    })
    return cost
  }

  costDiscount(discount:number):number{
    let cost = 0
    this._items.forEach((item:Buyable) => {
      cost += item.price;
    })
    return (cost * (discount / 100))
  }

  deleteBuy(id:number) :void {
    this._items = this._items.filter((item:Buyable) => item.id !== id)
  }
}
