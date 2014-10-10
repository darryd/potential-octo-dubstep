
function node_new (x, y, id) {

  var node = {};

  node.x = x;
  node.y = y;
  node.id = id;
  node.color = "black";
  node.radius = 20;

  return node;
}

function node_draw (node, canvas) {

    var ctx;
    ctx = canvas.getContext("2d");
    ctx.strokeStyle = node.color;
    ctx.beginPath();
    ctx.arc(node.x, node.y, node.radius, 0, 2 * Math.PI);
    ctx.stroke();

}
