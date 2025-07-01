import page from '../pageobjects/page';

class InventoryPage extends page {
  private _inventory: Record<string, number> = {};
  private _errorMessage: string = '';

  addFood(type: string, amount: number) {
    this._inventory[type] = amount;
  }

  eatFood(type: string, amount: number) {
    const current = this._inventory[type] ?? 0;
    if (amount > current) {
      this._errorMessage = `Not enough ${type} to eat!`;
      return;
    }
    this._inventory[type] = current - amount;
    this._errorMessage = '';
  }

makeSalad(veg1: string, qty1: number, veg2: string, qty2: number) {
  const available1 = this._inventory[veg1] ?? 0;
  const available2 = this._inventory[veg2] ?? 0;

  if (qty1 > available1 || qty2 > available2) {
    this._errorMessage = `Not enough ingredients to make a salad!`;
    return;
  }

  this._inventory[veg1] = available1 - qty1;
  this._inventory[veg2] = available2 - qty2;
  this._inventory['salad'] = (this._inventory['salad'] ?? 0) + 1;
  this._errorMessage = '';
}

  getAmount(type: string): number {
    return this._inventory[type] ?? 0;
  }

  getError(): string {
    return this._errorMessage;
  }
}

export default new InventoryPage();