export function displayCards(cards, spread, onAllCardsFlipped) {
    const cardContainer = document.getElementById('card-container');
    cardContainer.innerHTML = '';
    let flippedCount = 0;

    cards.forEach((card, index) => {
        const cardWrapper = document.createElement('div');
        cardWrapper.classList.add('card-wrapper');

        const positionLabel = document.createElement('div');
        positionLabel.classList.add('position-label');
        if (spread && spread.positions) {
            positionLabel.textContent = spread.positions[index];
        }

        const cardElement = document.createElement('div');
        cardElement.classList.add('card');
        if (card.isReversed) {
            cardElement.classList.add('reversed');
        }

        const cardInner = document.createElement('div');
        cardInner.classList.add('card-inner');

        const cardFront = document.createElement('div');
        cardFront.classList.add('card-front');

        const cardBack = document.createElement('div');
        cardBack.classList.add('card-back');
        cardBack.innerHTML = `<img src="${card.image_path}" alt="${card.name}" width="100" height="150">`;

        cardInner.appendChild(cardFront);
        cardInner.appendChild(cardBack);
        cardElement.appendChild(cardInner);

        cardElement.addEventListener('click', () => {
            if (!cardElement.classList.contains('flipped')) {
                cardElement.classList.add('flipped');
                displayResult([card], spread, index);
                flippedCount++;
                if (flippedCount === cards.length) {
                    onAllCardsFlipped(cards);
                }
            }
        }, { once: true });

        cardWrapper.appendChild(positionLabel);
        cardWrapper.appendChild(cardElement);
        cardContainer.appendChild(cardWrapper);
    });
}

export function displayResult(cards, spread, cardIndex) {
    const resultContainer = document.getElementById('result-container');
    const resultElement = document.createElement('div');
    const card = cards[0];

    let positionText = '';
    if (spread && spread.positions && spread.positions[cardIndex]) {
        positionText = `<h3>${spread.positions[cardIndex]}</h3>`;
    }

    const orientation = card.isReversed ? '逆位置' : '正位置';
    const meaning = card.isReversed ? card.meaning.reversed : card.meaning.upright;

    resultElement.innerHTML = `
        ${positionText}
        <h2>${card.name} (${orientation})</h2>
        <p>${meaning}</p>
    `;
    resultContainer.appendChild(resultElement);
}

export function displayInterpretation(interpretation) {
    const interpretationContainer = document.getElementById('interpretation-container');
    interpretationContainer.innerHTML = `<h3>総合的な解釈</h3><pre>${interpretation}</pre>`;
}

