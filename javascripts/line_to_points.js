// This code looks the way it does because it was originally written in coffee script.

function is_vertical(p1, p2) {

  return p1.x === p2.x;
}


(function() {
  window.line_to_points = function(p1, p2) {
    var points;
    if (is_vertical(p1, p2)) {
      points = get_vertical_points(p1, p2);
    } else {
      points = get_points(p1, p2);
    }
    return points;
  };

  window.get_vertical_points = function(p1, p2) {
    var end, p, points, start, y;
    points = [];
    start = Math.min(p1.y, p2.y);
    end = Math.max(p1.y, p2.y);
    y = start;
    while (y <= end) {
      p = {
        x: p1.x,
        y: y
      };
      points.push(p);
      y++;
    }
    return points;
  };

  window.get_points = function(p1, p2) {
    var b, end, m, p, points, start, x, _p1, _p2;
    points = [];
    if (p1.x < p2.x) {
      _p1 = owl.deepCopy(p1);
      _p2 = owl.deepCopy(p2);
    } else {
      _p1 = owl.deepCopy(p2);
      _p2 = owl.deepCopy(p1);
    }
    m = (_p2.y - _p1.y) / (_p2.x - _p1.x);
    b = p1.y - (m * p1.x);
    start = _p1.x;
    end = _p2.x;
    x = start;
    while (x <= end) {
      p = {};
      p.x = x;
      p.y = m * x + b;
      p.y = Math.round(p.y);
      if (x !== start) {
        points = points.concat(fill_Y(points[points.length - 1], p));
      }
      points.push(p);
      x++;
    }
    return points;
  };

  window.fill_Y = function(p1, p2) {
    var end, middle_y, p, points, start, x, y, _p1, _p2;
    points = [];
    if (Math.abs(p1.y - p2.y) < 2) {
      return points;
    }
    if (p1.y < p2.y) {
      _p1 = owl.deepCopy(p1);
      _p2 = owl.deepCopy(p2);
    } else {
      _p1 = owl.deepCopy(p2);
      _p2 = owl.deepCopy(p1);
    }
    middle_y = _p1.y + (Math.round((_p2.y - _p1.y) / 2));
    start = _p1.y + 1;
    end = _p2.y;
    y = start;
    while (y < end) {
      if (y < middle_y) {
        x = _p1.x;
      } else {
        x = _p2.x;
      }
      p = {
        x: x,
        y: y
      };
      points.push(p);
      y++;
    }
    return points;
  };

  window.arrow_to_points = function(arrow) {
    var i, lines, points;
    points = [];
    lines = path_to_lines(arrow.path_data.path);
    i = 0;
    while (i < lines.length) {
      points = points.concat(line_to_points(lines[i].p1, lines[i].p2));
      i++;
    }
    return points;
  };

  window.arrow_to_buffer = function(arrow) {
    var i, lines, points;
    points = [];
    lines = path_to_lines(arrow.path_data.path);
    i = 0;
    while (i < lines.length) {
      points = points.concat(line_to_buffer(lines[i], chart_arrow_buffer));
      i++;
    }
    return points;
  };

  window.draw_point = function(canvas, p) {
    var ctx;
    ctx = canvas.getContext("2d");
    ctx.fillStyle = p.color;
    return ctx.fillRect(p.x, p.y, 1, 1);
  };

  window.draw_points = function(canvas, points) {
    var i;
    i = 0;
    while (i < points.length) {
      draw_point(canvas, points[i]);
      i++;
    }
    return 0;
  };

  window.get_parallel_line = function(line, offset) {
    var L, x1, x1p, x2, x2p, y1, y1p, y2, y2p;
    x1 = line.p1.x;
    x2 = line.p2.x;
    y1 = line.p1.y;
    y2 = line.p2.y;
    L = Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2));
    x1p = Math.round(x1 + offset * (y2 - y1) / L);
    x2p = Math.round(x2 + offset * (y2 - y1) / L);
    y1p = Math.round(y1 + offset * (x1 - x2) / L);
    y2p = Math.round(y2 + offset * (x1 - x2) / L);
    return {
      p1: {
        x: x1p,
        y: y1p
      },
      p2: {
        x: x2p,
        y: y2p
      }
    };
  };

  window.line_to_buffer = function(line, buffer_length) {
    var end, i, line_p, new_points, points, start;
    points = [];
    start = -Math.abs(buffer_length);
    end = -start;
    i = start;
    while (i <= end) {
      if (i === 0) {
        i++;
      }
      line_p = get_parallel_line(line, i);
      new_points = line_to_points(line_p.p1, line_p.p2);
      points = points.concat(new_points);
      i++;
    }
    return points;
  };

}).call(this);
