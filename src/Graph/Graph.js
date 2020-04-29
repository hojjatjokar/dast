class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  addEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }

  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      (item) => item !== vertex2
    );
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      (item) => item !== vertex1
    );
  }
}

const routes = new Graph();

routes.addVertex('London');
routes.addVertex('Rome');
routes.addVertex('Milan');
routes.addVertex('Berlin');

routes.addEdge('London', 'Rome');

console.log(routes);

routes.removeEdge('London', 'Rome');

console.log(routes);
