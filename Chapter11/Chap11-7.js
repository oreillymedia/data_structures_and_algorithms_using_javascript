load("Graph.js");
g = new Graph(6);
g.addEdge(1,2);
g.addEdge(2,5);
g.addEdge(1,3);
g.addEdge(1,4);
g.addEdge(0,1);
g.vertexList = ["CS1", "CS2", "Data Structures", 
                "Assembly Language", "Operating Systems",
                "Algorithms"];
g.showGraph();
g.topSort();
