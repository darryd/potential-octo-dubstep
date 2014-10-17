

/*----------------------------------------------------------------------------------------------------------------------------------*/

function node_data_new(opposite_node, weight, is_drawer) {

  return { opposite_node: opposite_node, weight: weight, is_drawer: is_drawer };

}

/*----------------------------------------------------------------------------------------------------------------------------------*/
function edge_new (node1, node2, weight1, weight2) {

  var edge = {};

  edge.node1 = node1;
  edge.node2 = node2;

  edge.nodes = {};

  edge.nodes[1] = edge.nodes[node1] = node_data_new(node2, weight1, true);
  edge.nodes[2] = edge.nodes[node2] = node_data_new(node1, weight2, false);

  edge.color = "blue";

  return edge;
}

/*----------------------------------------------------------------------------------------------------------------------------------*/
// Returns the point on the circle that a line from the centre of the circle with angle 'radians' intercepts.

function getXY(node, radians) {

  var x = node.radius * Math.cos(radians) + node.x;
  var y = node.radius * Math.sin(radians) + node.y;

  return {x: x, y: y}
}

/*----------------------------------------------------------------------------------------------------------------------------------*/
function edge_draw(edge, canvas) {

  // Get the point of the line where it intercepts with the cirlce.
  var rad1 = getRadiansToPoint2(edge.node1, edge.node2);
  var point1 = getXY(edge.node1, rad1);

  var rad2 = getRadiansToPoint2(edge.node2, edge.node1);
  var point2 = getXY(edge.node2, rad2);

  draw_line(point1, point2, canvas, edge.color);

  if (edge.nodes[1].weight != 0)
    arrow_head_new_and_draw(point2, point1, canvas);
  if (edge.nodes[2].weight != 0)
    arrow_head_new_and_draw(point1, point2, canvas);
  
}

/*----------------------------------------------------------------------------------------------------------------------------------*/

function my_test() {
   


  canvas = document.getElementById("demo_canvas");

  node1 = node_new(100, 100, 1);
  node2 = node_new(200, 200, 2);
  edge = edge_new(node1, node2, 1, 1);

  node_draw(node1, canvas);
  node_draw(node2, canvas);

  edge_draw(edge, canvas);


  node3 = node_new(50, 150, 3);
  node4 = node_new(50, 290, 4);

  edge2 = edge_new(node3, node4, 1, 1);
  node_draw(node3, canvas);
  node_draw(node4, canvas);

  edge_draw(edge2, canvas);

  edge3 = edge_new(node1, node3, 1, 1);
  edge4 = edge_new(node4, node2, 1, 1);
  edge5 = edge_new(node4, node1, 1, 1);

  edge_draw(edge3, canvas);
  edge_draw(edge4, canvas);
  edge_draw(edge5, canvas);



}

