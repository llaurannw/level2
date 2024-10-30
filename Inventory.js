
import Item from './Item.js';

class Inventory {
    constructor() {
        this.items = [];
    }

    addItem(item) {
        this.items.push(item);
    }

    removeItem(id) {
        this.items = this.items.filter(item => item.id !== id);
    }

    listItems() {
        return this.items.map(item => item.toString()).join('\n');
    }

    updateItem(id, name, quantity, price) {
        const item = this.items.find(item => item.id === id);
        if (item) {
            item.updateDetails(name, quantity, price);
        }
    }
}


// Jangan hapus kode di bawah ini!
export default Inventory;
