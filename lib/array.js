class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index) {
    return this.data[index];
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }

  pop() {
    const lastItem = this.data[this.length - 1];
    delete lastItem;
    this.length--;
    return 
  }

  delete(index) {
      const item = this.data[index]
      this.shiftItems(index)
  }

  shiftItems(index) {
    for (let i = index; i < this.length - 1; i++) {
        this.data[i] = this.data[i+1]
    }
  }
}

const newArray = new MyArray();
console.log(newArray.get(0));
