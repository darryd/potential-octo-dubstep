
/*----------------------------------------------------------------------------------------------------------------------------------*/
function graph_new(canvas) {

  var graph = {};
  
  graph.canvas = canvas;
  graph.nodes = [];
  graph.edges = [];

  /*----------------------------------------------------------------------------------------------------------------------------------*/
  graph.new_node = function (x, y, id) {

    var node = node_new(x, y, id, this);
    this.nodes.push(node);

    return node; 
  }

  /*----------------------------------------------------------------------------------------------------------------------------------*/
  graph.draw = function () {

    var ctx = this.canvas.getContext("2d")
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    for (var i=0; i < this.nodes.length; i++) {
       node_draw(this.nodes[i], canvas);
    }

    for(var i=0; i < this.edges.length; i++) {
      edge_draw(this.edges[i], canvas);
    }
  };
  /*----------------------------------------------------------------------------------------------------------------------------------*/
  graph.edge_is_removed = function (edge) {

    var i = this.edges.indexOf(edge);

    if (i != -1)
      this.edges.splice(i, 1);
  };
  /*----------------------------------------------------------------------------------------------------------------------------------*/
  graph.remove_node = function (node) {

    var i = this.nodes.indexOf(node);

    if (i != -1) {
      node.remove_edges();
      this.nodes.splice(i, 1);
    }
  };
  /*----------------------------------------------------------------------------------------------------------------------------------*/

  return graph;
} 
/*----------------------------------------------------------------------------------------------------------------------------------*/
