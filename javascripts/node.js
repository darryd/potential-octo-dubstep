
/*---------------------------------------------------------------------------------------------------------------------*/

function node_new (x, y, id) {

  var node = {};

  node.x = x;
  node.y = y;
  node.id = id;
  node.color = "black";
  node.radius = 20;
  node.edges = [];

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
function node_add_edge(nodeA, nodeB, weight) {
    
  edge = edge_new(nodeA, nodeB, weight);
  nodeA.edges.push(edge);
}

/*---------------------------------------------------------------------------------------------------------------------*/
