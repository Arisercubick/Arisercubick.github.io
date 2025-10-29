"use strict";


function nextImage() {
  // Add code for step 3 here:
  const limage = document.querySelector('img');
  let src = limage.getAttribute('src');
  console.log("CheckNext");
  if (src === "assets/b.jpg") {
		src = "assets/cdem.jpg";
		console.log(src);
	} else if (src === "assets/cdem.jpg") {
		src = "assets/lg.jpg";
		console.log(src);
	} else if (src === "assets/lg.jpg") {
		src = "assets/n.jpg";
		console.log(src);
	} else {
		src = "assets/b.jpg";
		console.log(src);
	}
	
	limage.setAttribute('src', src);
  clearResult();
}

function previousImage() {
  // Add code for step 3 here:
  const limage = document.querySelector('img');
  let src = limage.getAttribute('src');
  console.log("CheckPre");
  if (src === "assets/b.jpg") {
		src = "assets/n.jpg";
		console.log(src);
	} else if (src === "assets/n.jpg") {
		src = "assets/lg.jpg";
		console.log(src);
	} else if (src === "assets/lg.jpg") {
		src = "assets/cdem.jpg";
		console.log(src);
	} else {
		src = "assets/b.jpg";
		console.log(src);
	}
	
	limage.setAttribute('src', src);
  clearResult();
}

// Add the handleKey function here:
function handleKey(event) {
	if (event.key === "ArrowUp") {
		previousImage();
	} else if (event.key === "ArrowDown") {
		nextImage();
	} else {
		console.log("Any other key " + event);
	}
}
document.addEventListener("keyup", handleKey);
// Add an event listener to the down button here:

// Add an event listener to the up button here:
// Add an event listener for the document to handle keydown here:


// Complete the validateAnswer code below:
function validateAnswer(){
	
}

// Add an event listener on the Check My Answer button here:


// Leave this function alone (but know what it does)
function clearResult() {
  const result = document.getElementById("result");
  result.innerText = "";
}