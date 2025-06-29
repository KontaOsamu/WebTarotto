import { generateSoftAdvice } from './generateSoftAdvice.js';

export async function generateThreeCardInterpretation(cards) {
  const [pastCard, presentCard, futureCard] = cards;

  const getPositionalMeaning = (card, position) => {
    const orientation = card.isReversed ? 'reversed' : 'upright';
    return card.meaning.context?.[position]?.[orientation]
      || (card.isReversed ? card.meaning.reversed : card.meaning.upright);
  };

  const getOrientation = (card) => card.isReversed ? '逆位置' : '正位置';

  const pastInterpretation = getPositionalMeaning(pastCard, 'past');
  const presentInterpretation = getPositionalMeaning(presentCard, 'present');
  const futureInterpretation = getPositionalMeaning(futureCard, 'future');

  const advice = await generateSoftAdvice(pastCard, presentCard, futureCard);

  return `
  
【スリーカード・リーディング】

🔹過去：「${pastCard.name}」（${getOrientation(pastCard)}）
${pastInterpretation}

🔹現在：「${presentCard.name}」（${getOrientation(presentCard)}）
${presentInterpretation}

🔹未来：「${futureCard.name}」（${getOrientation(futureCard)}）
${futureInterpretation}

🌱【アドバイス】
${advice}
`;
}