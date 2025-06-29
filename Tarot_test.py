import random
# import openai

tarot_cards = [
    {"jp_name": "愚者", "en_name": "The Fool", "meaning": "新たな始まり、自由、冒険心、無邪気、未知の可能性"},
    {"jp_name": "魔術師", "en_name": "The Magician", "meaning": "創造力、行動力、自己表現、可能性の実現、スキルの活用"},
    {"jp_name": "女教皇", "en_name": "The High Priestess", "meaning": "直感、潜在意識、秘密、神秘、静かな知恵"},
    {"jp_name": "女帝", "en_name": "The Empress", "meaning": "豊かさ、母性、創造力、繁栄、愛情"},
    {"jp_name": "皇帝", "en_name": "The Emperor", "meaning": "安定、権威、統制、リーダーシップ、実務力"},
    {"jp_name": "法王", "en_name": "The Hierophant", "meaning": "伝統、教育、信念、組織、社会規範"},
    {"jp_name": "恋人", "en_name": "The Lovers", "meaning": "愛、調和、選択、パートナーシップ、決断"},
    {"jp_name": "戦車", "en_name": "The Chariot", "meaning": "勝利、前進、意志力、成功、目的の達成"},
    {"jp_name": "力", "en_name": "Strength", "meaning": "勇気、自信、忍耐、自己制御、内面的な強さ"},
    {"jp_name": "隠者", "en_name": "The Hermit", "meaning": "内省、孤独、自己探求、真理の探求、知恵"},
    {"jp_name": "運命の輪", "en_name": "Wheel of Fortune", "meaning": "運命、変化、幸運、転機、予測不能"},
    {"jp_name": "正義", "en_name": "Justice", "meaning": "公平性、真実、責任、バランス、判断力"},
    {"jp_name": "吊るされた男", "en_name": "The Hanged Man", "meaning": "自己犠牲、視点の転換、停止、忍耐、新しい視野"},
    {"jp_name": "死神", "en_name": "Death", "meaning": "終わり、再生、変容、解放、新たな始まり"},
    {"jp_name": "節制", "en_name": "Temperance", "meaning": "調和、節度、中庸、忍耐、適応力"},
    {"jp_name": "悪魔", "en_name": "The Devil", "meaning": "束縛、誘惑、依存、欲望、物質的執着"},
    {"jp_name": "塔", "en_name": "The Tower", "meaning": "突然の変化、崩壊、混乱、目覚め、新たな気づき"},
    {"jp_name": "星", "en_name": "The Star", "meaning": "希望、楽観主義、癒し、直感、インスピレーション"},
    {"jp_name": "月", "en_name": "The Moon", "meaning": "不安、幻想、潜在意識、混乱、未知"},
    {"jp_name": "太陽", "en_name": "The Sun", "meaning": "成功、喜び、ポジティブ、明瞭、生命力"},
    {"jp_name": "審判", "en_name": "Judgement", "meaning": "復活、覚醒、過去の清算、重要な決断、新しい段階"},
    {"jp_name": "世界", "en_name": "The World", "meaning": "完成、達成、統合、調和、新たな旅の始まり"}
]

# タロットカードデータ（前述のデータを利用）
cards = tarot_cards.copy()

# ランダムにカードを10枚引く（重複なし）
selected_cards = random.sample(cards, 10)

# ケルト十字法のポジション定義
positions = [
    "現在の状況",
    "障害や影響",
    "顕在意識",
    "潜在意識",
    "近い過去",
    "近い未来",
    "質問者の立場や心理",
    "周囲の状況や環境",
    "希望や恐れ",
    "最終的な結果"
]

# 各カードの正位置・逆位置をランダムで決定
card_states = [random.choice(["正位置", "逆位置"]) for _ in range(10)]

# 結果表示
for i, card in enumerate(selected_cards):
    state = card_states[i]
    print(f"{positions[i]}: {card['jp_name']}（{card['en_name']}）[{state}] - 意味: {card['meaning']}")

# AIへ送るプロンプト作成
""" 
prompt = f
あなたはプロのタロット占い師です。次の10枚のカードをケルト十字法で読み解き、占い結果を分かりやすく、400字程度で解説してください。
{card_info}

# OpenAI APIの設定（キー設定が必要）
openai.api_key = "あなたのAPIキー"

# AIで占い結果を取得
response = openai.ChatCompletion.create(
    model="gpt-3.5-turbo",
    messages=[{"role": "user", "content": prompt}]
)

# 占い結果の取得と表示
fortune_result = response.choices[0].message.content
print(fortune_result) 
"""