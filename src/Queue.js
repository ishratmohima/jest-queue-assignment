class Queue {
    constructor() {
      this.items = [];
    }
  
    enqueue(item) {
      this.items.push(item);
    }
  
    dequeue() {
      if (this.isEmpty()) {
        // BUG: missing throw error
        return undefined;
      }
      return this.items.shift();
    }
  
    peek() {
      if (this.isEmpty()) {
        return undefined;
      }
      return this.items[0];
    }
  
    length() {
      return this.items.length;
    }
  
    isEmpty() {
      return this.items.length === 0;
    }
  
    removeAll() {
      this.items = [];
    }
  }
  
  module.exports = Queue;
  