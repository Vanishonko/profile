var faq = document.querySelectorAll(".faq-page");



faq.forEach(function (item) {
	item.addEventListener("click", function () {
		var answer = this.nextElementSibling;

		this.classList.toggle("active");

		if (answer.style.display === "block" || answer.style.display === "") {
			answer.style.display = "none";
		} else {
			answer.style.display = "block";
		}
	});
});
