import { SHOPPING_LIST } from './data.js'

const container = document.getElementById('content');
const categoryList = document.getElementById('categoryList');

categoryList.addEventListener('click', (e) => {
    const category = e.target.getAttribute('category');
    if (!category) return;

    filterItems(category);
});

function filterItems(category) {
    const itemsToDisplay = category === '전체' ?
        Object.values(SHOPPING_LIST).flat():
        SHOPPING_LIST[category];
    
    const categoryHtml = itemsToDisplay.map(item => `
        <article class="card">
            <img src="${item.src}" alt="${item.name}">
            <div class="card-info">
                <div class="heart-icon">♥</div>
                <h3>${item.name}</h3>
                <div class="price">${item.price}RP</div>
            </div>
        </article>
    `).join(``);
    container.innerHTML = `<section class="card-container">${categoryHtml}</secion>`;
}

filterItems('전체');
