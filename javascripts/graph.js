
/*----------------------------------------------------------------------------------------------------------------------------------*/
function graph_new(canvas) {

  var graph = {};
  
  graph.canvas = canvas;
  graph.nodes = [];
  graph.edges = [];

  graph.new_node = function (x, y, id) {

    var node = node_new(x, y, id, this);
    this.nodes.push(node);

    return node; 
  }

  graph.draw = function () {

    for (var i=0; i < this.nodes.length; i++) {
       node_draw(this.nodes[i], canvas);
    }

    for(var i=0; i < this.edges.length; i++) {
      edge_draw(this.edges[i], canvas);
    }
  }

  return graph;
} 
/*----------------------------------------------------------------------------------------------------------------------------------*/
