class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      console.log(`Adicionando nó ${value} como raiz`);
    } else {
      this._insertNode(this.root, newNode);
    }
  }

  _insertNode(node, newNode) {
    if (newNode.value < node.value) {
      if (node.left === null) {
        node.left = newNode;
        console.log(`Adicionando nó ${newNode.value} à esquerda do nó ${node.value}`);
      } else {
        this._insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
        console.log(`Adicionando nó ${newNode.value} à direita do nó ${node.value}`);
      } else {
        this._insertNode(node.right, newNode);
      }
    }
  }

  preOrderTraversal(node, indent = '') {
    if (node !== null) {
      console.log(indent + node.value);
      this.preOrderTraversal(node.left, indent + '  ');
      this.preOrderTraversal(node.right, indent + '  ');
    }
  }

  postOrderTraversal(node, indent = '') {
    if (node !== null) {
      this.postOrderTraversal(node.left, indent + '  ');
      this.postOrderTraversal(node.right, indent + '  ');
      console.log(indent + node.value);
    }
  }
}

// Exemplo de uso:
const tree = new BinaryTree();
tree.insert(10);
tree.insert(5);
tree.insert(15);
tree.insert(2);
tree.insert(7);

console.log('\nPercurso em Pré-Ordem:');
tree.preOrderTraversal(tree.root);

console.log('\nPercurso em Pós-Ordem:');
tree.postOrderTraversal(tree.root);
