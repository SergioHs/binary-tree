# Árvore Binária em JavaScript

Esta é uma implementação simples de uma Árvore Binária em JavaScript, com métodos para inserção de nós e percursos em Pré-Ordem e Pós-Ordem.

## Como utilizar

Para utilizar esta implementação da Árvore Binária em JavaScript, basta criar uma instância da classe BinaryTree e chamar o método insert para inserir nós na árvore. Em seguida, você pode chamar os métodos preOrderTraversal ou postOrderTraversal para percorrer a árvore.

Além disso, os percursos em Pré-Ordem e Pós-Ordem também são utilizados para formar um desenho de árvore no prompt de saída, com os valores dos nós sendo deslocados para a direita para criar uma visualização da árvore.

Aqui está um exemplo de uso:
```javascript
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
```
Este exemplo criará uma árvore binária com os valores 10, 5, 15, 2 e 7, e em seguida chamará os métodos preOrderTraversal e postOrderTraversal para percorrer a árvore e exibir o desenho no prompt de saída.

Aqui está o output do exemplo acima:

```prompt
Adicionando nó 10 como raiz
Adicionando nó 5 à esquerda do nó 10
Adicionando nó 15 à direita do nó 10
Adicionando nó 2 à esquerda do nó 5
Adicionando nó 7 à direita do nó 5

Percurso em Pré-Ordem:
10
  5
    2
    7
  15

Percurso em Pós-Ordem:
  2
    7
  5
    15
  10
  ```
Observe que os percursos em Pré-Ordem e Pós-Ordem formam um desenho de árvore no prompt de saída, com os valores dos nós deslocados para a direita para criar uma visualização da árvore.
