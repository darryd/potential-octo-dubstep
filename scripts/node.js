
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


  /*---------------------------------------------------------------------------------------------------------------------*/
  node.toString = function() {return "id="+this.id+"x="+x+"y="+y+"radius="+this.radius;}; // This is to make the hashes work correctly

  /*---------------------------------------------------------------------------------------------------------------------*/
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
  /*---------------------------------------------------------------------------------------------------------------------*/

  node.add_bi_edge = function (nodeB, weight1, weight2) {

    this.add_edge(nodeB, weight1);
    nodeB.add_edge(this, weight2);

  };

  /*---------------------------------------------------------------------------------------------------------------------*/
  node.remove_edges = function () {

    for (var key_node in this.edges) {
        if (this.edges.hasOwnProperty(key_node)) {

          var edge = this.edges[key_node];
	  var opposite_node = edge.nodes[key_node].node; 

          delete opposite_node.edges[this];
	  delete this.edges[key_node];

	  this.graph.edge_is_removed(edge);
	}
    }

  }

  /*---------------------------------------------------------------------------------------------------------------------*/
  node.get_opposite_nodes = function () {

    var nodes = [];

    for (var key_node in this.edges) {
      if (this.edges.hasOwnProperty(key_node)) {

	var edge = this.edges[key_node];
	var opposite_node = edge.nodes[key_node].node;

	nodes.push(opposite_node);
      }
    }
    return nodes;
  }
  /*---------------------------------------------------------------------------------------------------------------------*/

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
