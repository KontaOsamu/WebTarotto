import { loadCards, drawCards } from './modules/tarot.js';
import { displayCards, displayResult, displayInterpretation } from './modules/ui.js';
import { spreads } from './modules/spreads.js';
import { generateThreeCardInterpretation } from './modules/interpretation.js';

document.addEventListener('DOMContentLoaded', async () => {
    const cards = await loadCards();
    const spreadSelect = document.getElementById('spread-select');
    const drawButton = document.getElementById('draw-button');

    // 占いの種類をドロップダウンに追加
    console.log(spreads); // spreadsオブジェクトをコンソールに出力
    for (const spreadKey in spreads) {
        const option = document.createElement('option');
        option.value = spreadKey;
        option.textContent = spreads[spreadKey].name;
        spreadSelect.appendChild(option);
    }

    drawButton.addEventListener('click', () => {
        const selectedSpreadKey = spreadSelect.value;
        const selectedSpread = spreads[selectedSpreadKey];
        const drawnCards = drawCards(cards, selectedSpread.cardCount);

        const onAllCardsFlipped = async (flippedCards) => {
            if (selectedSpreadKey === 'three-card') {
                const interpretation = await generateThreeCardInterpretation(flippedCards);
                displayInterpretation(interpretation);
            }
        };

        displayCards(drawnCards, selectedSpread, onAllCardsFlipped);
        
        // 結果表示と総合解釈をクリア
        document.getElementById('result-container').innerHTML = '';
        document.getElementById('interpretation-container').innerHTML = '';
    });
});