import { SHOPPING_LIST } from './data.js'

const container = document.getElementById('content');
const cardContainer = document.getElementById('card-container');
const categoryList = document.getElementById('categoryList');
const cart = JSON.parse(localStorage.getItem('cart')) || [];
const bannerItems = document.getElementById('banner-items');

function bannerDisplay() {
    Object.values(SHOPPING_LIST).forEach(category => {
        category.forEach(item => {
            const img = document.createElement('img');
            img.src = item.src;
            img.alt = item.name;
            bannerItems.appendChild(img);
        });
    });
}
bannerDisplay();
bannerDisplay();
    
categoryList.addEventListener('click', (e) => {
    const category = e.target.getAttribute('category');
    if (!category) return;

    filterItems(category);
});

container.addEventListener('click', (e) => {
    const card = e.target.closest('.card');     // 클릭된 요소에서 가장 가까운 .card 요소 찾는 코드
    if (!card) return;

    const itemName = card.querySelector('h3').innerText;
    const item = customFlat(Object.values(SHOPPING_LIST)).find(i => i.name === itemName);
    if (item) {
        const isAlreadyInCart = cart.some(cartItem => cartItem.name === item.name);
        if (isAlreadyInCart) {
            alert('이미 장바구에 존재하는 상품입니다.');
        } else if (confirm(`${item.name}을 장바구니에 추가하시겠습니까?`)) {
            addToCart(item);
        }
    }
});

function filterItems(category) {
    const itemsToDisplay = category === '전체' ?
        customFlat(Object.values(SHOPPING_LIST)):
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
    cardContainer.innerHTML = `${categoryHtml}`;
}

filterItems('전체');

function addToCart(item) {
    cart.push(item);
    localStorage.setItem('cart', JSON.stringify(cart));
}

function customFlat(arr, depth = 1) {
	let result = [];
	arr.forEach(item => {
		if (Array.isArray(item) && depth > 0) {
			result = result.concat(customFlat(item, depth - 1));
		} else {
			result.push(item);
		}
	});
	return result;
}
