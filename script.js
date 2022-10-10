// Grabing Elements

var form = document.querySelector(".form");
var titleInput = document.querySelector("#title");
var linkInput = document.querySelector("#link");
var ul = document.querySelector("#bookmark-list");
var li;

// Onclick Function call

function AddBookmark() {
	// Checking for empty string

	if (titleInput.value == "" && linkInput.value == "") {
		return false;
	}
	// checking for both input fields are enterd or not
	else if (titleInput.value !== "" && linkInput.value !== "") {
		let ul = document.querySelector("#bookmark-list");
		let li = document.createElement("li");

		let checkbox = document.createElement("INPUT");
		checkbox.type = "checkbox";
		checkbox.setAttribute("id", "mycheck");

		let titleP = document.createElement("h3");
		titleP.setAttribute("class", "title-p");

		let linkP = document.createElement("p");
		linkP.setAttribute("class", "link-p");

		titleP.innerHTML = titleInput.value;
		linkP.innerHTML = linkInput.value;

		ul.appendChild(li);
		li.appendChild(checkbox);
		li.appendChild(titleP);
		li.appendChild(linkP);
	}
	var items = document.querySelectorAll("li p");
	// tab = [],
	// liIndex;

	// for (var i = 0; i < items.length; i++) {
	// 	tab.push(items[i].innerHTML);
	// }
	for (var i = 0; i < items.length; i++) {
		items[i].onclick = function () {
			let cb = navigator.clipboard;
			cb.writeText(this.innerHTML).then(
				() => (document.getElementById("copyText").innerText = "Link Copied !"),
			);
			setTimeout(() => {
				document.getElementById("copyText").innerText =
					"Click on the link to copy";
			}, 2000);
		};
	}
}

function removeItem() {
	li = ul.children;
	for (let index = 0; index < li.length; index++) {
		while (li[index] && li[index].children[0].checked) {
			//li[index] chechikg present index and && li[index].children[0] as well as inside that index
			ul.removeChild(li[index]);
		}
	}
}

// to copy links by clicking on it
// var items = document.querySelectorAll("li p"),
// 	tab = [],
// 	liIndex;

// for (var i = 0; i < items.length; i++) {
// 	tab.push(items[i].innerHTML);
// }
// for (var i = 0; i < items.length; i++) {
// 	items[i].onclick = function () {
// 		let cb = navigator.clipboard;
// 		cb.writeText(this.innerHTML).then(() => alert("Text copied"));
// 	};
// }
