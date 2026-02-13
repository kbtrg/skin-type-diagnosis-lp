export type SkinTypeId = "normal" | "oily" | "dry" | "combination" | "sensitive";

export interface SkinType {
  id: SkinTypeId;
  name: string;
  description: string;
  shortDescription: string;
  /** カード用画像URL（/images/skin-types/ または外部URL） */
  imageUrl: string;
}

export interface Choice {
  text: string;
  scores: Partial<Record<SkinTypeId, number>>;
}

export interface Question {
  id: number;
  text: string;
  choices: Choice[];
}

/** 肌タイプごとのカード用画像（差し替え可: public/images/skin-types/{id}.jpg など） */
const SKIN_TYPE_IMAGES: Record<SkinTypeId, string> = {
  normal: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&h=400&fit=crop",
  oily: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=600&h=400&fit=crop",
  dry: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=600&h=400&fit=crop",
  combination: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=600&h=400&fit=crop",
  sensitive: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600&h=400&fit=crop",
};

export const SKIN_TYPES: SkinType[] = [
  {
    id: "normal",
    name: "ノーマル",
    shortDescription: "バランスの取れた理想的な肌",
    description:
      "水分と油分のバランスが良く、キメが整った理想的な肌タイプです。トラブルが少なく、化粧のりも良いのが特徴です。",
    imageUrl: SKIN_TYPE_IMAGES.normal,
  },
  {
    id: "oily",
    name: "オイリー",
    shortDescription: "テカり・ベタつきが気になる肌",
    description:
      "皮脂分泌が活発で、テカりやベタつきが気になりやすいタイプ。毛穴の開きやニキビができやすい傾向があります。",
    imageUrl: SKIN_TYPE_IMAGES.oily,
  },
  {
    id: "dry",
    name: "乾燥",
    shortDescription: "カサつき・つっぱりが気になる肌",
    description:
      "水分や皮脂が不足しがちで、カサつきやつっぱりを感じやすいタイプ。小じわやくすみに注意が必要です。",
    imageUrl: SKIN_TYPE_IMAGES.dry,
  },
  {
    id: "combination",
    name: "混合",
    shortDescription: "Tゾーンはオイリー・Uゾーンは乾燥",
    description:
      "Tゾーンはテカり、頬や目元は乾燥する混合タイプ。部位によってケアを変えると効果的です。",
    imageUrl: SKIN_TYPE_IMAGES.combination,
  },
  {
    id: "sensitive",
    name: "敏感",
    shortDescription: "刺激に弱く赤みやかゆみが出やすい肌",
    description:
      "外部刺激に反応しやすく、赤み・かゆみ・ヒリつきが出やすいタイプ。低刺激のスキンケアがおすすめです。",
    imageUrl: SKIN_TYPE_IMAGES.sensitive,
  },
];

export const QUESTIONS: Question[] = [
  {
    id: 1,
    text: "洗顔後、何もつけない状態で1時間ほど過ごしたときの頬の状態は？",
    choices: [
      { text: "つっぱらないし、テカりもない", scores: { normal: 2 } },
      { text: "テカってくる", scores: { oily: 2, combination: 1 } },
      { text: "つっぱる・カサカサする", scores: { dry: 2, sensitive: 1 } },
      { text: "Tゾーンはテカるが頬は乾く", scores: { combination: 2 } },
    ],
  },
  {
    id: 2,
    text: "化粧崩れで気になる部分は？",
    choices: [
      { text: "特になく、夕方もきれい", scores: { normal: 2 } },
      { text: "鼻・額のテカり", scores: { oily: 2, combination: 1 } },
      { text: "粉ふき・くすみ", scores: { dry: 2 } },
      { text: "頬の赤み・かゆみ", scores: { sensitive: 2 } },
    ],
  },
  {
    id: 3,
    text: "季節の変わり目や環境の変化で肌はどうなりますか？",
    choices: [
      { text: "あまり変化を感じない", scores: { normal: 2 } },
      { text: "夏はテカり、冬は乾く", scores: { combination: 2 } },
      { text: "乾燥がひどくなる", scores: { dry: 2 } },
      { text: "赤みやかゆみが出やすい", scores: { sensitive: 2 } },
    ],
  },
  {
    id: 4,
    text: "毛穴の状態で当てはまるのは？",
    choices: [
      { text: "目立たない", scores: { normal: 2, dry: 1 } },
      { text: "鼻周りが目立つ", scores: { oily: 2, combination: 1 } },
      { text: "全体的に目立つ", scores: { oily: 2 } },
      { text: "毛穴より赤みが気になる", scores: { sensitive: 2 } },
    ],
  },
  {
    id: 5,
    text: "新しい化粧品を使ったときの反応は？",
    choices: [
      { text: "特に問題ないことが多い", scores: { normal: 2 } },
      { text: "合わないとニキビが出る", scores: { oily: 1, sensitive: 1 } },
      { text: "合わないとカサつく", scores: { dry: 2 } },
      { text: "赤み・ヒリつきが出やすい", scores: { sensitive: 2 } },
    ],
  },
];

export function calculateResult(answers: Record<number, Choice>): SkinTypeId {
  const scores: Record<SkinTypeId, number> = {
    normal: 0,
    oily: 0,
    dry: 0,
    combination: 0,
    sensitive: 0,
  };

  for (const choice of Object.values(answers)) {
    for (const [type, point] of Object.entries(choice.scores)) {
      if (type in scores && typeof point === "number") {
        scores[type as SkinTypeId] += point;
      }
    }
  }

  const entries = Object.entries(scores) as [SkinTypeId, number][];
  const max = Math.max(...entries.map(([, v]) => v));
  const top = entries.find(([, v]) => v === max);
  return top ? top[0] : "normal";
}
