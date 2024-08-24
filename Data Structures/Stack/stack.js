class Stack {
  #data;
  constructor() {
    
    this.#data = [];
  }

  length() {
    return this.#data.length;
  }

  isEmpty() {
    return this.#data.length === 0;
  }

  top() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }

    return this.#data[this.#data.length - 1];
  }

  push(element) {
    return this.#data.push(element);
  }

  pop() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }

    return this.#data.pop();
  }
}

const stack = new Stack();

console.log(stack.push(1));
console.log(stack.push(2));
console.log(stack.push(3));
console.log(stack.push(4));
console.log(stack.push(5));
console.log(stack.push(6));
console.log(stack.pop())
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.push(7));
console.log(stack.top())
console.log(stack.length())
console.log(stack.isEmpty())

