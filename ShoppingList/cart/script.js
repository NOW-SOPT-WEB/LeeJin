const tableBody = document.getElementById('cartTable').querySelector('tbody');
const modal = document.getElementById('purchase-modal');
const purchaseItem = document.querySelector('.purchase-item');
const cartData = JSON.parse(localStorage.getItem('cart')) || [];

updateCartDisplay();
function updateCartDisplay() {
    tableBody.innerHTML = '';
    cartData.forEach(item => {
        const row = tableBody.insertRow();
        //선택 셀
        const selectCell = row.insertCell(0);
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.style.cursor = 'pointer';
        selectCell.appendChild(checkbox);

        //상품 사진 셀
        const imageCell = row.insertCell(1);
        const image = document.createElement('img');
        image.src = '.' + item.src;
        image.alt = item.name;
        image.style.width = '2rem';
        imageCell.appendChild(image);

        //상품명 셀
        const nameCell = row.insertCell(2);
        nameCell.textContent = item.name;

        //상품금액 셀
        const priceCell = row.insertCell(3);
        priceCell.textContent = item.price.toLocaleString() + 'RP';

        //카테고리 셀
        const categoryCell = row.insertCell(4);
        categoryCell.textContent = item.category;

        //삭제버튼 셀
        const deleteCell = row.insertCell(5);
        const deleteButton = document.createElement('button');
        deleteButton.textContent = '삭제';
        deleteButton.onclick = () => {
            tableBody.removeChild(row);
            const index = cartData.indexOf(item);
            if (index > -1) {
                cartData.splice(index, 1);
                localStorage.setItem('cart', JSON.stringify(cartData));
                updateCartDisplay();
            }
        };
        deleteCell.appendChild(deleteButton);
    });
}


//모달창 열기
document.getElementById('purchase-button').onclick = () => {
    modal.style.display = 'block';
    
    //체크된 데이터 불러오기
    purchaseItem.innerHTML = '';
    let totalAmount = 0;
    const checkedItems = tableBody.querySelectorAll('input[type="checkbox"]:checked');
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

    document.getElementById('confirm-purchase').onclick = () => {
        alert('구매가 정상적으로 완료되었습니다람쥐');
        modal.style.display = 'none';
    }
}

//item의 src 추출하기
const extractSrc = (cellsHTML) => {
    // "<img src="../assets/section4/시바냥.jpeg" alt="시바견 유미" style="width: 2rem;">"
    const tmpDiv = document.createElement('div');
    tmpDiv.innerHTML = cellsHTML;
    return tmpDiv.querySelector('img').getAttribute('src');
}

//모달창 닫기
document.getElementById('close-modal').onclick = () => {
    modal.style.display = 'none';
}
window.onclick = (e) => {
    if (e.target == modal) {
        modal.style.display = 'none';
    }
}

//구매 확정 이벤트 추가
document.getElementById('confirm-purchase').onclick = () => {
    const checkedItems = tableBody.querySelectorAll('input[type="checkbox"]:checked');
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
}