
function chart_new() {

  var chart = {};
  chart.nodes = [];

  return chart;
} 

function chart_draw(chart, canvas) {

  for (i=0; i<chart.nodes.length; i++) {
     node_draw(chart.nodes[i], canvas);
  }

}

function chart_add_node (chart, node) {

  chart.nodes.push(node);
}




