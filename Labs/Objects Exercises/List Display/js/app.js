document.addEventListener("DOMContentLoaded", function () {
    //array of bug objects
    const collection = [
        {
            name: "Grasshopper",
            type: "Bug",
            color: "Green",
            length: 7.5 //in centimeters
        },
        {
            name: "Dragonfly",
            type: "Bug",
            color: "Blue",
            length: 3.2 //in centimeters
        },
        {
            name: "Ladybug",
            type: "Bug",
            color: "Red and Black",
            length: 0.7 //in centimeters
        }
    ];

    const collectionContainer = document.getElementById("collection-container");

    for (const item of collection) {
        const div = document.createElement("div");
        div.classList.add("collection-item");
        //updates the bg color if the length of the bug is less than 0.8 cm
        let style = "";
        if (item.type === "Bug" && item.length < 0.8) {
            style = "yellow-bg";
        }
        //HTML for bug attributes
        div.innerHTML = `
            <h3>${item.name}</h3>
            <p>Type: ${item.type}</p>
            <p>Length: ${item.length ? item.length + "cm" : "-"}</p>
            <p>Color: ${item.color || "-"}</p>
        `;

        if (style) {
            div.classList.add(style);
        }

        collectionContainer.appendChild(div);
    }
});
