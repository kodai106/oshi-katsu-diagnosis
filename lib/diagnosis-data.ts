export type Dimension = 'time' | 'money' | 'action' | 'evangelism' | 'mental';

export type Question = {
  id: number;
  text: string;
  dimension: Dimension;
  options: {
    text: string;
    score: number;
  }[];
};

export type DiagnosisResult = {
  level: string;
  title: string;
  description: string;
  color: string;
  type: string;
  typeDescription: string;
};

export const questions: Question[] = [
  {
    id: 1,
    text: "1日のうち、推しのことを考えている時間は？",
    dimension: 'time',
    options: [
      { text: "ふとした瞬間に思い出す程度", score: 10 },
      { text: "暇な時間はついSNSを見ちゃう", score: 30 },
      { text: "仕事中・授業中も上の空", score: 60 },
      { text: "夢に出てくるまでがセット", score: 100 },
    ],
  },
  {
    id: 2,
    text: "推し活に使う月々の金額は？",
    dimension: 'money',
    options: [
      { text: "お小遣いの範囲内 (〜5,000円)", score: 10 },
      { text: "欲しいグッズは買う (〜30,000円)", score: 40 },
      { text: "生活費を削って捻出 (〜100,000円)", score: 80 },
      { text: "実質、推しを養っている (上限なし)", score: 150 },
    ],
  },
  {
    id: 3,
    text: "推しのためにどこまで遠征できる？",
    dimension: 'action',
    options: [
      { text: "近場の会場なら行く", score: 10 },
      { text: "国内ならどこでも", score: 50 },
      { text: "海外公演も視野", score: 90 },
      { text: "推しがいる場所が私の住所", score: 200 },
    ],
  },
  {
    id: 4,
    text: "周囲への布教活動はしている？",
    dimension: 'evangelism',
    options: [
      { text: "聞かれたら答える", score: 10 },
      { text: "SNSで良さを発信", score: 30 },
      { text: "友人をライブに連行", score: 60 },
      { text: "勝手にグッズを配り歩く", score: 100 },
    ],
  },
  {
    id: 5,
    text: "推しのスキャンダルや熱愛報道が出たら？",
    dimension: 'mental',
    options: [
      { text: "ショックだけど幸せならOK", score: 20 },
      { text: "しばらく寝込む", score: 50 },
      { text: "相手を特定して呪う", score: 100 },
      { text: "それも含めて推しの人生", score: 200 },
    ],
  },
];

export const getOtakuType = (scores: Record<Dimension, number>): { type: string; description: string } => {
  let maxDim: Dimension = 'time';
  let maxScore = -1;

  const dimensions: Dimension[] = ['time', 'money', 'action', 'evangelism', 'mental'];

  for (const dim of dimensions) {
    if (scores[dim] > maxScore) {
      maxScore = scores[dim];
      maxDim = dim;
    }
  }

  switch (maxDim) {
    case 'money':
      return { type: 'ATM型', description: '「推しへの課金は呼吸」と豪語する、経済を回す守護神。' };
    case 'action':
      return { type: 'フットワーク軽すぎ型', description: '地球の裏側でも駆けつける、物理法則を無視した行動力。' };
    case 'evangelism':
      return { type: '宣教師型', description: '全人類を沼に落とすことが使命。プレゼン能力が異常に高い。' };
    case 'mental':
      return { type: '重力シンパシー型', description: '推しの一挙手一投足に命を削る、感情のジェットコースター。' };
    case 'time':
    default:
      return { type: '純愛型', description: '24時間365日、脳内メーカーは推し一色。' };
  }
};

export const getResult = (totalScore: number, scores: Record<Dimension, number>): DiagnosisResult => {
  const { type, description: typeDescription } = getOtakuType(scores);

  let baseResult;
  if (totalScore < 100) {
    baseResult = {
      level: "Lv.1",
      title: "茶の間ファン",
      description: "マイペースに推しを楽しむ平和なファン。推し活と私生活のバランスが完璧。",
      color: "#4ade80",
    };
  } else if (totalScore < 250) {
    baseResult = {
      level: "Lv.50",
      title: "一般ファン",
      description: "推しへの愛は本物。ライブやイベントも全力で楽しむ、模範的なオタク。",
      color: "#3b82f6",
    };
  } else if (totalScore < 450) {
    baseResult = {
      level: "Lv.99",
      title: "ガチ恋勢",
      description: "推しが生活の中心。愛が重すぎて、時々自分でも苦しくなるレベル。",
      color: "#e11d48",
    };
  } else if (totalScore < 700) {
    baseResult = {
      level: "Lv.MAX",
      title: "石油王",
      description: "財力と行動力で全てを解決する太客。推しにとってあなたは神様かもしれない。",
      color: "#f59e0b",
    };
  } else {
    baseResult = {
      level: "Lv.???",
      title: "概念",
      description: "もはや推しと一体化している。あなたが推しで、推しがあなた。",
      color: "#8b5cf6",
    };
  }

  return {
    ...baseResult,
    type,
    typeDescription
  };
};
