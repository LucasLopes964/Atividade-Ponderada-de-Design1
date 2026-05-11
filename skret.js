let iter = 186;
const total = 300;

function setup() {
  noCanvas();

  const card = createDiv('');
  card.style('background', 'white');
  card.style('border', '0.5px solid #ddd');
  card.style('border-radius', '12px');
  card.style('padding', '1.25rem 1.5rem');
  card.style('width', '500px');

  const top = createDiv('');
  top.style('display', 'flex');
  top.style('justify-content', 'space-between');
  top.style('align-items', 'center');
  top.style('margin-bottom', '12px');
  card.child(top);

  top.child(createSpan('Executando algoritmo...'));
  top.child(createSpan('CARREGANDO'));
  top.child(createSpan('62%'));

  const canvas = createCanvas(500, 14);
  canvas.parent(card);
  noLoop();

  const bottom = createDiv('');
  bottom.style('display', 'flex');
  bottom.style('justify-content', 'space-between');
  bottom.style('margin-top', '8px');
  card.child(bottom);

  bottom.child(createSpan('Iteração 186 de 300'));
  bottom.child(createSpan('Convergindo...'));
}

function draw() {
  background(220);
  fill(30);
  rect(0, 0, width * (iter / total), height, 7);
}