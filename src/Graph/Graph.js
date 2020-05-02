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

  removeVertex(vertex) {
    const vertexes = Object.keys(this.adjacencyList);
    vertexes.forEach((key) => {
      this.removeEdge(key, vertex);
    });
    delete this.adjacencyList[vertex];
  }

  DepthFirstRecursive(start) {
    const result = [];
    const visitedMap = {};

    function dfs(vertex) {
      if (!vertex) return;

      result.push(vertex);
      visitedMap[vertex] = true;

      this.adjacencyList[vertex].forEach((item) => {
        if (!visitedMap[item]) dfs.call(this, item);
      });
    }

    dfs.call(this, start);

    return result;
  }

  DepthFirstIteratively(start) {
    const stack = [];
    const result = [];
    const visited = {};

    stack.push(start);
    visited[start] = true;

    while (stack.length) {
      const vertex = stack.pop();

      result.push(vertex);

      this.adjacencyList[vertext].forEach((item) => {
        if (!visited[item]) {
          stack.push();
          visited[item] = true;
        }
      });
    }
  }
}

const routes = new Graph();

routes.addVertex('A');
routes.addVertex('B');
routes.addVertex('C');
routes.addVertex('D');
routes.addVertex('E');
routes.addVertex('F');

routes.addEdge('A', 'B');
routes.addEdge('A', 'C');
routes.addEdge('B', 'D');
routes.addEdge('C', 'E');
routes.addEdge('D', 'E');
routes.addEdge('D', 'F');
routes.addEdge('E', 'F');

console.log(routes.DepthFirstRecursive('A'));
