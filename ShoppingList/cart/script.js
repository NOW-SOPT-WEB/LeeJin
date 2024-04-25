const tableBody = document.getElementById('cartTable').querySelector('tbody');
const modal = document.getElementById('purchase-modal');
const purchaseItem = document.querySelector('.purchase-item');
const cartData = JSON.parse(localStorage.getItem('cart')) || [];
let checkedItems;

updateCartDisplay();
function updateCartDisplay() {
    let htmlContent = '';
    cartData.forEach(item => {
        htmlContent += `
        <tr>
            <td><input type="checkbox" style="cursor: pointer;"></td>
            <td><img src=".${item.src}" alt="${item.name}" style="width: 2rem;"></td>
            <td>${item.name}</td>
            <td>${item.price.toLocaleString()}RP</td>
            <td>${item.category}</td>
            <td><button>삭제</button></td>
        </tr>`;
    });
    tableBody.innerHTML = htmlContent;
}

document.getElementById('cartTable').addEventListener('click', function(event) {
    if (event.target.tagName === 'BUTTON' && event.target.textContent === '삭제') {
        console.log("삭제 버튼 눌렸니?")
        const itemName = event.target.closest('tr').cells[2].textContent;
        const itemIndex = cartData.findIndex(item => item.name === itemName);
        if (itemIndex > -1) {
            cartData.splice(itemIndex, 1);
            localStorage.setItem('cart', JSON.stringify(cartData));
            updateCartDisplay();
        }
    }
});

//모달창 열기
document.getElementById('purchase-button').addEventListener('click', (e) => {
    modal.style.display = 'block';
    
    //체크된 데이터 불러오기
    purchaseItem.innerHTML = '';
    let totalAmount = 0;
    checkedItems = tableBody.querySelectorAll('input[type="checkbox"]:checked');
    checkedItems.forEach(item => {
        const row = item.closest('tr');
        const itemSrc = extractSrc(row.cells[1].innerHTML);
        const itemName = row.cells[2].textContent;
        const itemPrice = row.cells[3].textContent;     //"1,250RP"
        totalAmount += parseInt(itemPrice.replace(/[^0-9]/g, ''), 10);
        const itemCard = document.createElement('div');
        itemCard.className = 'item-card';
        itemCard.innerHTML = `
            <img src="${itemSrc}" alt="${itemName}"/>
            <p>${itemName}</p>
            <p class="item-price">${itemPrice}</p>
        `
        purchaseItem.appendChild(itemCard);
    });

    document.getElementById('total-amount').textContent = totalAmount.toLocaleString() + 'RP';

});

//item의 src 추출하기
const extractSrc = (cellsHTML) => {
    const tmpDiv = document.createElement('div');
    tmpDiv.innerHTML = cellsHTML;
    return tmpDiv.querySelector('img').getAttribute('src');
}

//모달창 닫기
document.getElementById('close-modal').addEventListener('click', (e) => {
    modal.style.display = 'none';
});
window.addEventListener('click', (e) => {
    if (e.target == modal) {
        modal.style.display = 'none';
    }
})

//구매 확정 이벤트 추가
document.getElementById('confirm-purchase').addEventListener('click', (e) => {
    alert('구매가 정상적으로 완료되었습니다람쥐');

    checkedItems.forEach(item => {
        const row = item.closest('tr');
        const itemName = row.cells[2].textContent; // 아이템 이름을 식별자로 사용

        const index = cartData.findIndex(cartItem => cartItem.name === itemName);
        if (index !== -1) {
            cartData.splice(index, 1);
        }
    });

    localStorage.setItem('cart', JSON.stringify(cartData));
    modal.style.display = 'none';
    updateCartDisplay();
});