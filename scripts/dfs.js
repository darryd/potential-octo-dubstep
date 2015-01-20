
/*----------------------------------------------------------------------------------------------------------------------------------*/

function _dfs (graph, node) {

    var neighbours = node.get_opposite_nodes();
    node.dfs_discovered = true;

    for (var i=0; i < neighbours.length; i++) 
      if (!neighbours[i].dfs_discovered)
	_dfs(graph, neighbours[i]);

}

/*----------------------------------------------------------------------------------------------------------------------------------*/
function dfs (graph, node) {

    // init
    for (var i=0; i < graph.nodes.length; i++) {
      graph.nodes[i].dfs_discovered = false;
    }

    _dfs(graph, node);
}


/*----------------------------------------------------------------------------------------------------------------------------------*/
