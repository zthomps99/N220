var container = document.getElementById('container');

//Create 100 square divs
for (var i = 0; i < 100; i++) {
  var square = document.createElement('div');
  square.style.width = '20px';
  square.style.height = '20px';
  square.style.backgroundColor = getRandomColor();
  square.style.cssFloat = 'left';

  container.appendChild(square);
}

//Generates a random color
function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
