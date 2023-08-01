let objects = [
    { color: "#FF0000", height: 100, width: 300 },
    { color: "#FFFF00", height: 200, width: 200 },
    { color: "#ff0000", height: 300, width: 100 },
  ];
  
  //get the container div where we will add the generated divs
  const container = document.getElementById("container");
  
  for (let i = 0; i < objects.length; i++) {
    const { color, height, width } = objects[i];
  
    //create a new div element
    const newDiv = document.createElement("div");
  
    //set the style attributes of the div based on the object data
    newDiv.style.backgroundColor = color;
    newDiv.style.height = height + "px";
    newDiv.style.width = width + "px";
    newDiv.style.margin = "10px";
  
    //append the newly created div to the container
    container.appendChild(newDiv);
  }
  