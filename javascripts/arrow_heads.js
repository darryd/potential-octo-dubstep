
/*----------------------------------------------------------------------------------------------------------------------------------*/
function arrow_head_draw (arrow_head, canvas) {
  var canvas, ctx;
  ctx = canvas.getContext("2d");
  ctx.beginPath();
  ctx.moveTo(arrow_head[0][0], arrow_head[0][1]);
  ctx.lineTo(arrow_head[1][0], arrow_head[1][1]);
  ctx.lineTo(arrow_head[2][0], arrow_head[2][1]);
  ctx.stroke();
}

/*----------------------------------------------------------------------------------------------------------------------------------*/
function arrow_head_new (origin, dest) {
  var angle, arrow_head, length;
  length = 10;
  arrow_head = [];
  arrow_head[0] = [length, 0, 1];
  arrow_head[1] = [0, 0, 1];
  arrow_head[2] = [0, length, 1];
  angle = getRadiansBetweenPoints(origin.x, origin.y, dest.x, dest.y);
  arrow_head = rotate(arrow_head, (3.0 / 4.0) * Math.PI);
  arrow_head = rotate(arrow_head, angle);
  arrow_head = translate(arrow_head, dest.x, dest.y);

  return arrow_head;
}

/*----------------------------------------------------------------------------------------------------------------------------------*/

function arrow_head_new_and_draw(origin, dest, canvas) {

  var arrow_head = arrow_head_new(origin, dest);
  arrow_head_draw(arrow_head, canvas);

  return arrow_head;
}

/*----------------------------------------------------------------------------------------------------------------------------------*/
function draw_line (p1, p2, canvas, color) {

   var ctx = canvas.getContext("2d");
   ctx.strokeStyle = color;
   ctx.lineWidth = 1;
   ctx.beginPath();
   ctx.moveTo(p1.x, p1.y);
   ctx.lineTo(p2.x, p2.y);
   ctx.stroke();
}

/*----------------------------------------------------------------------------------------------------------------------------------*/
function draw_arrow (p1, p2, canvas, color) {

  var arrow_head = arrow_head_new(p1, p2);

  draw_line(p1, p2, canvas, color);
  arrow_head_draw(arrow_head, canvas)
}

/*----------------------------------------------------------------------------------------------------------------------------------*/
