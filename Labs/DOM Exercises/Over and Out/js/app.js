var square = document.getElementById('square');

//CSS styles for square
square.style.width = '100px';
square.style.height = '100px';
square.style.backgroundColor = 'blue';

//Change color on mouseover
square.addEventListener('mouseover', function() {
  square.style.backgroundColor = 'black';
});

//Change color back on mouseout
square.addEventListener('mouseout', function() {
  square.style.backgroundColor = 'blue';
});
