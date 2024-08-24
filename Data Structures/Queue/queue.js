class Queue {
  #DEFAULT_CAPACITY = 10;
  #data;
  #size;
  #front;

  constructor() {
    this.#data = new Array(this.#DEFAULT_CAPACITY);
    this.#size = 0;
    this.#front = 0;
  }

  length() {
    return this.#size;
  }

  isEmpty() {
    return this.#size === 0;
  }

  first() {
    if (this.isEmpty()) {
      return "Queue is empty";
    } else {
      return this.#data[this.#front];
    }
  }

  dequeue() {
    if (this.isEmpty()) {
      return "Queue is empty";
    } else {
      const answer = this.#data[this.#front];
      this.#data[this.#front] = null;
      this.#front = (this.#front + 1) % this.#data.length;
      this.#size -= 1;
      return answer;
    }
  }

  resize(capacity) {
    const oldData = this.#data;
    this.#data = new Array(capacity);
    let index = this.#front;
    for (let i = 0; i < this.#size; i++) {
      this.#data[i] = oldData[index];
      index = (index + 1) % oldData.length;
    }
    this.#front = 0;
  }

  enqueue(element) {
    if (this.#size === this.#data.length) {
      this.resize(2 * this.#data.length);
    }
    let availIndex = (this.#front + this.#size) % this.#data.length;
    this.#data[availIndex] = element;
    this.#size += 1;
  }
}

const queue = new Queue();
