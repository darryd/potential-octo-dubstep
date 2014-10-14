
/*---------------------------------------------------------------------------------------------------------------------*/

function node_new (x, y, id) {

  var node = {};

  node.x = x;
  node.y = y;
  node.id = id;
  node.color = "black";
  node.radius = 20;
  node.edges = {};  // edges indexed by nodes eg. node.edge[nodeA]


  node.toString = function() {return "id="+this.id+"x="+x+"y="+y+"radius="+this.radius;}; // This is to make the hashes work correctly

  node.add_edge = function (nodeB, weight) {

    var edge; 

    if (this.edges[nodeB] == undefined ) {
        
      edge = edge_new(this, nodeB, weight, false, true);

      this.edges[nodeB] = edge;
      nodeB.edges[this] = edge;
    } 

    else {

      edge = this.edges[nodeB];
      
      if (edge.node1 == nodeB)
	edge.is_dir_node1 = true;
      else
	edge.is_dir_node2 = true;
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
/*
function node_add_edge(nodeA, nodeB, weight) {
    
  edge = edge_new(nodeA, nodeB, weight);
  nodeA.edges.push(edge);
}
*/
/*---------------------------------------------------------------------------------------------------------------------*/
