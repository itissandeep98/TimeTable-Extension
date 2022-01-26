let coursebtn = document.getElementById("btn");
let coursediv = document.getElementById("courses");
let linksdiv = document.getElementById("links");

coursebtn.addEventListener("click", (e) => {
	e.preventDefault();
	chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
		var activeTab = tabs[0];
		chrome.tabs.sendMessage(activeTab.id, { msg: "refresh" });
		updateData();
	});
});

const updateData = () => {
	chrome.storage.sync.get(["courses"], (result) => {
		coursediv.innerHTML = result.courses;
	});
	chrome.storage.sync.get(["links"], (result) => {
		linksdiv.innerHTML = result.links.map(
			(link, index) => "<li>" + link + "</li>"
		);
	});
};

updateData();
