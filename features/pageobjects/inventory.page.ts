import page from '../pageobjects/page';

class InventoryPage extends page {
  private _inventory: Record<string, number> = {};
  private _errorMessage: string = '';

  /**
 * Adds a specified amount of a given food type to the inventory.
 * 
 * @param type - The name of the vegetable or item (e.g., "carrots", "lettuce")
 * @param amount - The quantity to set in the inventory (overwrites previous value)
 */
  addFood(type: string, amount: number) {
      this._inventory[type] = amount;
  }

  /**
 * Reduces the quantity of a specific food type from the inventory.
 * If the requested amount exceeds the available quantity, it records an error.
 * 
 * @param type - The type of food to consume (e.g., "carrots", "spinach").
 * @param amount - The quantity to consume.
 */
  eatFood(type: string, amount: number) {
      const current = this._inventory[type] ?? 0;
      if (amount > current) {
        this._errorMessage = `Not enough ${type} to eat!`;
        return;
      }
      this._inventory[type] = current - amount;
      this._errorMessage = '';
  }

  /**
 * Attempts to make a salad by consuming specified quantities of two different vegetables.
 * If there are not enough of either vegetable in the inventory, an error is recorded.
 * On success, both vegetable quantities are reduced and a salad is added to the inventory.
 * 
 * @param veg1 - The name of the first vegetable (e.g., "carrots").
 * @param qty1 - The quantity of the first vegetable to use.
 * @param veg2 - The name of the second vegetable (e.g., "lettuce").
 * @param qty2 - The quantity of the second vegetable to use.
 */
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
/**
 * Retrieves the current quantity of a specific item from the inventory.
 * 
 * @param type - The name of the item to retrieve (e.g., "carrots", "salad").
 * @returns The current quantity of the item, or 0 if it doesn't exist in inventory.
 */
  getAmount(type: string): number {
    return this._inventory[type] ?? 0;
  }

  /**
 * Returns the latest error message, if any operation failed.
 * 
 * @returns A string containing the most recent error message, or an empty string if no error occurred.
 */
  getError(): string {
    return this._errorMessage;
  }
}

export default new InventoryPage();