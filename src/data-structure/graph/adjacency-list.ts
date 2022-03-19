// A node/vertex means a single value
// An edge menas a connection between two nodes
//   An edge can be:
//     Directed: goes one-way (follower/followed)
//     Unidirected: goes both ways (friendship)
//   An edge can also be weighted (when an edge has its value/meaning)
// A cycle is when an edge points to the same node

/**
 * We're going to do an example of a non-weighted, unidirected, with no cycles, graph
 */

const airports = "PHX BKK OKC JFK LAX MEX EZE HEL LOS LAP LIM".split(' ');
const routes = [
  ["PHX", "LAX"],
  ["PHX", "JFK"],
  ["JFK", "OKC"],
  ["JFK", "HEL"],
  ["JFK", "LOS"],
  ["MEX", "LAX"],
  ["MEX", "BKK"],
  ["MEX", "LIM"],
  ["MEX", "EZE"],
  ["LIM", "BKK"],
];

const graph = new Map<string, string[]>();

const add = (airport: string) => {
  graph.set(airport, []);
};

const connectUnidirected = (source: string, target: string) => {
  graph.get(source)?.push(target);
  graph.get(target)?.push(source);
};

const depthFirstSearch = (source: string, target: string, visited = new Set()) => {
  console.log(source);
  visited.add(source);
  const destinations = graph.get(source);
  if (!destinations) return;
  for (const destination of destinations) {
    if (destination === target) {
      console.log("  Found it");
      return;
    }

    if (!visited.has(destination)) {
      depthFirstSearch(destination, target, visited);
    }
  }
}

const breadthFirstSearch = (initial: string, target: string) => {
  const visited = new Set();
  const queue: string[] = [initial];
  let depth = 1;
  while (queue.length > 0) {
    const airport = queue.shift() as string;
    console.log(`\nVerifying ${airport} (Nodes count: ${depth})`);
    depth++;

    const destinations = graph.get(airport);
    if (!destinations) continue;
    for (const destination of destinations) {
      if (!visited.has(destination)) {
        visited.add(destination);
        queue.push(destination);
      }

      console.log(destination);
      if (destination === target) console.log("  Found it");
    }
  }
}

const main = () => {
  const initialDataSetup = () => {
    airports.forEach(add);
    routes.forEach(([source, target]) => connectUnidirected(source, target));
  };

  initialDataSetup();
  console.log(graph);

  console.log("\n\nBreadth First Search (PHX -> BKK):")
  breadthFirstSearch("PHX", "BKK");

  console.log("\n\nDepth First Search (PHX -> BKK):");
  depthFirstSearch("PHX", "BKK");
};

main();
