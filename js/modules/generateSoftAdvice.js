// generateSoftAdvice.js

let adviceData = null;

async function loadAdviceData() {
    if (adviceData) {
        return adviceData;
    }
    try {
        const response = await fetch('js/modules/three_card_tarot_advice_no_tail.json');
        if (!response.ok) {
            throw new Error(`Failed to fetch advice data: ${response.statusText}`);
        }
        adviceData = await response.json();
        return adviceData;
    } catch (error) {
        console.error("Error loading advice data:", error);
        return []; // Return empty array on error
    }
}

// 形式を整えるための関数（例：「愚者（正位置）」などに変換）
function cardKey(card) {
  const orientation = card.isReversed ? '逆位置' : '正位置';
  return `${card.name}（${orientation}）`;
}

// アドバイス生成関数
export async function generateSoftAdvice(pastCard, presentCard, futureCard) {
  const data = await loadAdviceData();
  if (!data) {
      return "アドバイスデータを読み込めませんでした。";
  }

  const match = data.find(entry => {
    return entry["過去"] === cardKey(pastCard)
        && entry["現在"] === cardKey(presentCard)
        && entry["未来"] === cardKey(futureCard);
  });

  return match?.アドバイス || "この組み合わせに対するアドバイスはまだ準備中です。";
}