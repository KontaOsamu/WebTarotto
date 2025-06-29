export async function loadCards() {
    const response = await fetch('../data/tarot_cards.json');
    const data = await response.json();
    return data.cards;
}

export function drawCards(cards, count) {
    const shuffled = cards.sort(() => 0.5 - Math.random());
    const drawn = shuffled.slice(0, count);
    return drawn.map(card => ({
        ...card,
        isReversed: Math.random() > 0.5
    }));
}
