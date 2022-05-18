const header = `
<header class="header">
    <h1>New York Times best sellers</h1>
    <button class="material-icons">menu</button>
</header>`


function loadEvent() {

    const root = document.getElementById("root");
    root.insertAdjacentHTML("afterbegin", header)

    const cardsContainer = document.querySelector(".cards-container")

    const bookPage = books.cards.map((x, index) => `
    <article class="book-container">
        <div class="number">${index + 1}</div>
        <div class="bookCard">
            <h4>${x.sub}</h4>
            <h2>${x.title}</h2>
            <h5>${x.text}</h5>
        </div>
		<button class="details">
            <span class="btn-text">read more</span>
            <span class="material-icons arrow-icon">arrow_forward</span>
        </button>
	</article>
    `).join("")
    cardsContainer.insertAdjacentHTML("beforeend", bookPage)


}
window.addEventListener("load", loadEvent);