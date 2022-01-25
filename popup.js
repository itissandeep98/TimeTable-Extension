let coursebtn = document.getElementById("btn");
let coursediv = document.getElementById("courses");

coursebtn.addEventListener("click", async () => {
	chrome.runtime.sendMessage({ greeting: "hello" }, (response) => {
		alert(JSON.stringify(response));
	});
});
