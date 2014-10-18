
/*---------------------------------------------------------------------------------------------------------------------*/

function node_new (x, y, id, graph) {

  var node = {};

  node.x = x;
  node.y = y;
  node.id = id;
  node.graph = graph;
  node.color = "black";
  node.radius = 20;
  node.edges = {};  // edges indexed by nodes eg. node.edge[nodeA]


  node.toString = function() {return "id="+this.id+"x="+x+"y="+y+"radius="+this.radius;}; // This is to make the hashes work correctly

  node.add_edge = function (nodeB, weight) {

    var edge; 

    if (this.edges[nodeB] == undefined ) {
        
      edge = edge_new(this, nodeB, weight, 0);

      this.edges[nodeB] = edge;
      nodeB.edges[this] = edge;

      this.graph.edges.push(edge);
    } 

    else {

      edge = this.edges[nodeB];

      edge.nodes[this].weight = weight;
      
    }
    return edge;
  };

  return node;
}

/*---------------------------------------------------------------------------------------------------------------------*/
function node_draw (node, canvas) {

    var ctx;
    ctx = canvas.getContext("2d");
    ctx.strokeStyle = node.color;
    ctx.beginPath();
    ctx.arc(node.x, node.y, node.radius, 0, 2 * Math.PI);
    ctx.stroke();
}

/*---------------------------------------------------------------------------------------------------------------------*/
