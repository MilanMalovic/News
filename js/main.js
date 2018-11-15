
//var btn = document.getElementById("search-button");
//var btn1 = document.getElementById("search-btn");
//var btn2 = document.getElementById("send-btn");




function buttonClicked(){
	console.log("clicked");
	
	var customText = document.getElementsByClassName("my-input");
	var results = document.getElementById("text");
	
	results.innerHTML = customText[0].value;
	
}

function buttonClicked1(){
	console.log("clicked1");
	
	var customText1 = document.getElementsByClassName("my-new-input");
	var customMsg = document.getElementsByClassName("my-textarea");
	var results1 = document.getElementById("text1");
	
results1.innerHTML = "Hello " +  customText1[0].value + "<br>" + "Message: " + customMsg[0].value;

	
		

	
}



//btn.addEventListener("click", buttonClicked);
//btn1.addEventListener("click", buttonClicked);
//btn2.addEventListener("click", buttonClicked);