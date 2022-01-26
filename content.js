let table;

const getCol = (table, index) => {
	var links = [];
	for (var r = 1, n = table.rows.length; r < n; r++) {
		links.push(table.rows[r].cells[index].innerHTML);
	}
	// console.log(links);
	chrome.storage.sync.set({ links });
};

const findTables = () => {
	table = document.getElementsByTagName("table")[1];
	if (table) {
		getCol(table, 2);
	}
};

const findCourses = async () => {
	const courses = window.location.search
		.slice(1)
		.replaceAll("[", "")
		.replaceAll("]", "")
		.split(",");
	// console.log(courses);
	chrome.storage.sync.set({ courses });
};

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
	console.log(request, sender);
	if (request.msg === "refresh") {
		findTables();
		findCourses();
		sendResponse({ msg: "success" });
	}
});

setTimeout(() => {
	findTables();
}, 5000);

findCourses();
