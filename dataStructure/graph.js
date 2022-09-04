class graph {
  constructor() {
    this.edge = null;
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }
  addEdge(vertex1, vertex2) {
    if (!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2])
      return undefined;
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }
  removeEdge(v1, v2) {
    this.adjacencyList[v1] = this.adjacencyList[v1].filter((v) => v !== v2);
    this.adjacencyList[v2] = this.adjacencyList[v2].filter((v) => v !== v1);
  }
  removeVertex(vertex) {
    while (this.adjacencyList[vertex.length]) {
      const adjacentVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjacentVertex);
    }
    delete this.adjacencyList[vertex];
  }
  depthFirsyRecursive(start) {
    const result = [];
    const visited = [](function dfs(vertex) {
      if (!vertex) return null;
      visited[vertex] = true;
      result.push(vertex);
    })(start);
  }
  //   DFS() {
  //     if
  //   }
}
