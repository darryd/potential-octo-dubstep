/*----------------------------------------------------------------------------------------------------------------------------------*/
function edge_new (node1, node2, weight, is_dir_node1, is_dir_node2) {

  var edge = {};

  edge.node1 = node1;
  edge.node2 = node2;
  edge.weight = weight;
  edge.color = "blue";

  edge.is_dir_node1 = is_dir_node1; // True if there's an arrow head at node1
  edge.is_dir_node2 = is_dir_node2; // True if there's an arrow head at node2

  // Get the node on the other side of the edge.
  // Precondition: 'node' is one nodes in the edge.
  
  edge.get_other_node = function (node) {
     
    if (node != this.node1)
      return this.node1;
    else
      return this.node2;
  };

  // Returns wheter 'node' can go to the other side of the edge.
  // Precondition: 'node' is one nodes in the edge.
  edge.can_go_to_other_side = function (node) {   
 
    if (node != this.node1)
      return this.is_dir_node1;
    else
      return this.is_dir_node2;
  };

  return edge;
}

/*----------------------------------------------------------------------------------------------------------------------------------*/
// Returns the point on the circle that a line from the centre of the circle with angle 'radians' intercepts.

function getXY(node, radians) {

  var x = node.radius * Math.cos(radians);
  var y = node.radius * Math.sin(radians);

  x += node.x;
  y += node.y;

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

  if (edge.is_dir_node1)
    arrow_head_new_and_draw(point2, point1, canvas);
  if (edge.is_dir_node2)
    arrow_head_new_and_draw(point1, point2, canvas);
  
}

/*----------------------------------------------------------------------------------------------------------------------------------*/

function my_test() {
   


  canvas = document.getElementById("demo_canvas");

  node1 = node_new(100, 100, 1);
  node2 = node_new(200, 200, 2);
  edge = edge_new(node1, node2, 1, false, true);

  node_draw(node1, canvas);
  node_draw(node2, canvas);

  edge_draw(edge, canvas);


  node3 = node_new(50, 150, 3);
  node4 = node_new(50, 290, 4);

  edge2 = edge_new(node3, node4, 1, true, true);
  node_draw(node3, canvas);
  node_draw(node4, canvas);

  edge_draw(edge2, canvas);

  edge3 = edge_new(node1, node3, 1, false, true);
  edge4 = edge_new(node4, node2, 1, true, false);
  edge5 = edge_new(node4, node1, 1, false, true);

  edge_draw(edge3, canvas);
  edge_draw(edge4, canvas);
  edge_draw(edge5, canvas);



}

