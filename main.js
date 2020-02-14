//javascript element

//var button = document.getElementById("addButton");
 //button.onclick = handleButtonClick;

// window.onload = init;

// // function init() {
// 	var button = document.getElementById("addButton");
// 	button.onclick = handleButtonClick;

// }
 
// function handleButtonClick() {
	
// 	// body...
// 	var textInput = document.getElementById("TextInput");
// 	var itemName = textInput.value
// 	alert ("Adding" + itemName);
// }


//new javascript
/* playlist.js */

window.onload = init;

function init() {
	var button = document.getElementById("addButton");
	button.onclick = handleButtonClick;

	//loadtodolist();
}

function handleButtonClick(e) {
	var textInput = document.getElementById("TextInput");
	
	let itemName = textInput.value;
	//alert("Adding " + itemName);

	
		//alert("Adding " + itemName);
	let li = document.createElement("li");
    let p = document.createElement("p");
    let button = document.createElement("button");
        button.setAttribute("class", "mydbutton");
    button.innerHTML = "Delete";


    button.setAttribute("onclick", "removeTask()");
let checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");

		p.innerHTML = itemName;
						li.appendChild(checkbox);

				li.appendChild(p);

						li.appendChild(button);



		var ul = document.getElementById("dolist");
		ul.appendChild(li);
		
		// for Ready Bake
		//save(itemName);


	
}

function removeTask()
{
    let akll = document.getElementsByClassName("mydbutton");
    for (i = 0; i < (akll.length); i++)
    {
        akll[i].onclick = function()
        {
            let mytask = this.parentElement;
            mytask.style.display = "none";
        }
    }
}


