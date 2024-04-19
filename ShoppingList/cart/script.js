const cartData = JSON.parse(localStorage.getItem('cart')) || [];
console.log({cartData})
const tableBody = document.getElementById('cartTable').querySelector('tbody');
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
        }
    };
    deleteCell.appendChild(deleteButton);
});

const modal = document.getElementById('purchase-modal');
document.getElementById('purchase-button').onclick = () => {
    modal.style.display = 'block';
}
document.getElementById('close-modal').onclick = () => {
    modal.style.display = 'none';
}
window.onclick = (e) => {
    if (e.target == modal) {
        modal.style.display = 'none';
    }
}
