const button = document.querySelector("#additem");
const list = document.querySelector("ul");
const searchBar = document.querySelector("input");

list.style.listStyleType = "space-counter";



button.addEventListener("click", (e) => {


    const item = document.createElement("li");
    const itemDescription = document.createElement("span");
    const delBtn = document.createElement("button");

    const itemString = searchBar.value;
    searchBar.value = "";

    if (itemString === "") {
        alert("Do you think I'm stupid?")
    }
    else {
        list.appendChild(item);
        item.appendChild(itemDescription);
        item.appendChild(delBtn);
    }

    // Item-div style:-
    item.style.cssText = 'margin: 0 0 0 50px; padding: 10px; background: rgba(0, 0, 0, 0.1); font-size: 32px;';
    itemDescription.textContent = itemString;


    // Item-button style:-
    delBtn.style.cssText = 'padding: 10px; background: black; color: white; font-size: 16px;';
    delBtn.textContent = "Delete Item";
    

    // Delete Item:-
    delBtn.addEventListener("click", () => {
        
        list.removeChild(item);
    })

    // Make the searchbar in focus:-
    searchBar.focus();
});


