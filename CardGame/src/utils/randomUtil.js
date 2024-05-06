import { cardItem } from "../constants/constants";

const shuffleArray = (arr) => {
    // Fisher-Yates Shuffle 알고리즘
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]]
    }
    return arr;
}

const randomUtil = (cnt) => {
  if (cnt <= 0) return;
  const index = Array.from({ length: cardItem.length }, (_, index) => index); 
  shuffleArray(index);

  const randomItem = [];
  index.slice(0, cnt).forEach((idx, i) => {
    randomItem.push({...cardItem[idx], "cardId": i});
    randomItem.push({...cardItem[idx], "cardId": i + 9});
  })

  return shuffleArray(randomItem);
};

export default randomUtil;