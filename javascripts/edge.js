

/*----------------------------------------------------------------------------------------------------------------------------------*/
function edge_new (node1, node2, weight, is_dir_node1, is_dir_node2) {

  var edge = {};

  edge.node1 = node1;
  edge.node2 = node2;
  edge.weight = weight;
  edge.color = "blue";

  edge.is_dir_node1 = is_dir_node1; // True if there's an arrow head at node1
  edge.is_dir_node2 = is_dir_node2; // True if there's an arrow head at node2

  return edge;
}

/*----------------------------------------------------------------------------------------------------------------------------------*/
function edge_draw(edge, canvas) {

 // TODO: I'm going to make it so the lines don't get drawn into the circles of the nodes 
 

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

  node1 = node_new(100, 100);
  node2 = node_new(200, 200);
  edge = edge_new(node1, node2, 1, false, true);

  node_draw(node1, canvas);
  node_draw(node2, canvas);

  edge_draw(edge, canvas);
}

