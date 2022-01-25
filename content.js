let table;

const getCol = (table, index) => {
	for (var r = 1, n = table.rows.length; r < n; r++) {
		console.log(table.rows[r].cells[index].innerHTML);
	}
};

const findTables = () => {
	table = document.getElementsByTagName("table")[1];
	table.style.backgroundColor = "orange";
	getCol(table, 2);
};

const findCourses = async () => {
	const courses = window.location.search
		.slice(1)
		.replaceAll("[", "")
		.replaceAll("]", "")
		.split(",");
	console.log(courses);
	chrome.storage.sync.set({ courses });
	chrome.runtime.sendMessage({ msg: "gettab" }, (response) => {
		console.log(response.tab);
	});
};
setTimeout(function () {
	findTables();
}, 5000);
findCourses();
