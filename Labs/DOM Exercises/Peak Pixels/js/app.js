var square = document.getElementById('square');
var size = 100; //Initial size of the square in pixels

//CSS styles for square
square.style.width = size + 'px';
square.style.height = size + 'px';
square.style.backgroundColor = 'green';

square.addEventListener('click', function() {
  size = size * 1.1; //Increases size by 10%

  //Updates the size of the square
  square.style.width = size + 'px';
  square.style.height = size + 'px';
});
