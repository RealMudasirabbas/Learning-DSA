class Node {
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

const node1 = new Node(1)
const node2 = new Node(44)
const node3 = new Node(23)
const node4 = new Node(67)
const node5 = new Node(3)

node1.next = node2
node2.next = node3
node3.next = node4
node4.next = node5

let currentNode = node1

while (currentNode != null) {
    console.log(currentNode.data)
    currentNode = currentNode.next
}

