

/*----------------------------------------------------------------------------------------------------------------------------------*/

function node_data_new(node, opposite_node, weight) {

  return { node: node, opposite_node: opposite_node, weight: weight };

}

/*----------------------------------------------------------------------------------------------------------------------------------*/
function edge_new (node1, node2, weight1, weight2) {

  var edge = {};

  edge.node1 = node1;
  edge.node2 = node2;

  edge.nodes = {};

  edge.nodes[1] = edge.nodes[node1] = node_data_new(node1, node2, weight1);
  edge.nodes[2] = edge.nodes[node2] = node_data_new(node2, node1, weight2);

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

function get_arrow_end_points(edge) {

  var points = {};

  // Get the point of the line where it intercepts with the cirlce.
  var rad1 = getRadiansToPoint2(edge.node1, edge.node2);
  points.point1 = getXY(edge.node1, rad1);

  var rad2 = getRadiansToPoint2(edge.node2, edge.node1);
  points.point2 = getXY(edge.node2, rad2);

  return points;
}


/*----------------------------------------------------------------------------------------------------------------------------------*/
function edge_draw(edge, canvas) {

  // Get the point of the line where it intercepts with the cirlce.
  points = get_arrow_end_points(edge)

  draw_line(points.point1, points.point2, canvas, edge.color);

  if (edge.nodes[1].weight != 0)
    arrow_head_new_and_draw(points.point1, points.point2, canvas);
  if (edge.nodes[2].weight != 0)
    arrow_head_new_and_draw(points.point2, points.point1, canvas);
  
}

/*----------------------------------------------------------------------------------------------------------------------------------*/
