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

// 50 Questions (10 per dimension)
export const questions: Question[] = [
  // --- TIME (1-10) ---
  {
    id: 1,
    text: "朝起きて最初にすることは？",
    dimension: 'time',
    options: [
      { text: "顔を洗う", score: 2 },
      { text: "ニュースチェック", score: 5 },
      { text: "推しのSNSを確認", score: 10 },
      { text: "推しにおはようのリプ", score: 20 },
    ],
  },
  {
    id: 2,
    text: "1日のうち、推しのことを考えている時間は？",
    dimension: 'time',
    options: [
      { text: "ふとした瞬間に", score: 5 },
      { text: "暇さえあれば", score: 10 },
      { text: "仕事中も上の空", score: 15 },
      { text: "24時間365日", score: 20 },
    ],
  },
  {
    id: 3,
    text: "推しの過去の動画や記事はチェックする？",
    dimension: 'time',
    options: [
      { text: "たまに見る", score: 5 },
      { text: "気になったら見る", score: 10 },
      { text: "デビュー時から全て網羅", score: 15 },
      { text: "もはや歴史学者レベル", score: 20 },
    ],
  },
  {
    id: 4,
    text: "推しが出る番組のリアタイ視聴は？",
    dimension: 'time',
    options: [
      { text: "都合が合えば", score: 5 },
      { text: "録画で見る", score: 10 },
      { text: "絶対リアタイ", score: 15 },
      { text: "そのために有給とる", score: 20 },
    ],
  },
  {
    id: 5,
    text: "休日の過ごし方は？",
    dimension: 'time',
    options: [
      { text: "友人と遊ぶ", score: 2 },
      { text: "家でゆっくり", score: 5 },
      { text: "推しのDVD鑑賞会", score: 15 },
      { text: "推しの聖地巡礼", score: 20 },
    ],
  },
  {
    id: 6,
    text: "推しの夢を見る頻度は？",
    dimension: 'time',
    options: [
      { text: "見たことない", score: 0 },
      { text: "たまにある", score: 10 },
      { text: "週1くらい", score: 15 },
      { text: "ほぼ毎日出演してくれる", score: 20 },
    ],
  },
  {
    id: 7,
    text: "スマホのスクリーンタイム、一番多いアプリは？",
    dimension: 'time',
    options: [
      { text: "LINE", score: 2 },
      { text: "ブラウザ", score: 5 },
      { text: "X (Twitter)", score: 15 },
      { text: "動画アプリ (推し専用)", score: 20 },
    ],
  },
  {
    id: 8,
    text: "推しの誕生日、どう過ごす？",
    dimension: 'time',
    options: [
      { text: "心の中で祝う", score: 5 },
      { text: "ケーキを買う", score: 10 },
      { text: "祭壇を作って撮影会", score: 15 },
      { text: "0時から24時間生誕祭", score: 20 },
    ],
  },
  {
    id: 9,
    text: "推しのブログやSNSの通知設定は？",
    dimension: 'time',
    options: [
      { text: "していない", score: 0 },
      { text: "たまに見る", score: 5 },
      { text: "オンにしている", score: 10 },
      { text: "通知音で推しと分かる", score: 20 },
    ],
  },
  {
    id: 10,
    text: "推しのためなら睡眠時間を削れる？",
    dimension: 'time',
    options: [
      { text: "無理、寝たい", score: 0 },
      { text: "少しなら", score: 5 },
      { text: "翌日休みなら", score: 10 },
      { text: "推しを見るためなら不眠不休", score: 20 },
    ],
  },

  // --- MONEY (11-20) ---
  {
    id: 11,
    text: "推し活に使う月々の金額は？",
    dimension: 'money',
    options: [
      { text: "〜5,000円", score: 5 },
      { text: "〜30,000円", score: 10 },
      { text: "〜100,000円", score: 15 },
      { text: "上限なし（生活費以外全て）", score: 20 },
    ],
  },
  {
    id: 12,
    text: "同じCDやグッズを複数買う？",
    dimension: 'money',
    options: [
      { text: "1つで十分", score: 2 },
      { text: "保存用と観賞用", score: 10 },
      { text: "特典コンプのためなら", score: 15 },
      { text: "積むことが愛の証明", score: 20 },
    ],
  },
  {
    id: 13,
    text: "遠征費（交通費・宿泊費）は惜しい？",
    dimension: 'money',
    options: [
      { text: "できれば安く済ませたい", score: 5 },
      { text: "必要経費", score: 10 },
      { text: "推しに会えるならタダ同然", score: 15 },
      { text: "むしろ高いほど燃える", score: 20 },
    ],
  },
  {
    id: 14,
    text: "推しが表紙の雑誌は買う？",
    dimension: 'money',
    options: [
      { text: "立ち読みで済ます", score: 2 },
      { text: "気に入ったら買う", score: 5 },
      { text: "即購入", score: 10 },
      { text: "出版社への感謝として複数冊", score: 20 },
    ],
  },
  {
    id: 15,
    text: "コラボカフェやポップアップストアは？",
    dimension: 'money',
    options: [
      { text: "行かない", score: 0 },
      { text: "近くなら行く", score: 5 },
      { text: "グッズ代を用意して行く", score: 10 },
      { text: "メニュー全制覇するまで帰らん", score: 20 },
    ],
  },
  {
    id: 16,
    text: "有料会員（FCなど）に入ってる？",
    dimension: 'money',
    options: [
      { text: "入っていない", score: 0 },
      { text: "1つだけ", score: 10 },
      { text: "複数名義持ってる", score: 15 },
      { text: "モバイル・メール・FC全加入", score: 20 },
    ],
  },
  {
    id: 17,
    text: "推しへのプレゼントや手紙は？",
    dimension: 'money',
    options: [
      { text: "送ったことない", score: 0 },
      { text: "手紙は書く", score: 5 },
      { text: "誕生日にはプレゼント", score: 10 },
      { text: "ハイブランドを貢ぐ", score: 20 },
    ],
  },
  {
    id: 18,
    text: "金欠の時に推しのグッズが出たら？",
    dimension: 'money',
    options: [
      { text: "諦める", score: 0 },
      { text: "来月買う", score: 5 },
      { text: "食費を削る", score: 15 },
      { text: "魔法のカード（リボ）召喚", score: 20 },
    ],
  },
  {
    id: 19,
    text: "オンラインくじ、何回引く？",
    dimension: 'money',
    options: [
      { text: "引かない", score: 0 },
      { text: "運試しに数回", score: 5 },
      { text: "推しが出るまで", score: 15 },
      { text: "ロット買いの勢いで", score: 20 },
    ],
  },
  {
    id: 20,
    text: "推し活貯金してる？",
    dimension: 'money',
    options: [
      { text: "していない", score: 0 },
      { text: "余ったお金を回す", score: 5 },
      { text: "毎月定額を積立", score: 10 },
      { text: "人生設計が推し中心", score: 20 },
    ],
  },

  // --- ACTION (21-30) ---
  {
    id: 21,
    text: "ライブやイベントの参戦頻度は？",
    dimension: 'action',
    options: [
      { text: "在宅派", score: 2 },
      { text: "年1〜2回", score: 5 },
      { text: "ツアーは必ず行く", score: 10 },
      { text: "全通が基本", score: 20 },
    ],
  },
  {
    id: 22,
    text: "チケットが取れなかったら？",
    dimension: 'action',
    options: [
      { text: "諦める", score: 2 },
      { text: "SNSで譲渡を探す", score: 10 },
      { text: "会場まで音漏れを聞きに行く", score: 15 },
      { text: "徳を積んで奇跡を待つ", score: 20 },
    ],
  },
  {
    id: 23,
    text: "推しの聖地巡礼、どこまで行く？",
    dimension: 'action',
    options: [
      { text: "近場なら", score: 5 },
      { text: "国内なら", score: 10 },
      { text: "海外でも行く", score: 15 },
      { text: "もはやそこに住む", score: 20 },
    ],
  },
  {
    id: 24,
    text: "コラボ商品を探して店舗を回れる？",
    dimension: 'action',
    options: [
      { text: "見つけたら買う", score: 2 },
      { text: "数軒なら", score: 5 },
      { text: "見つかるまで帰らない", score: 15 },
      { text: "県外まで遠征して確保", score: 20 },
    ],
  },
  {
    id: 25,
    text: "推しのための自分磨き（美容・服）は？",
    dimension: 'action',
    options: [
      { text: "特にしない", score: 0 },
      { text: "イベント前は気合入れる", score: 10 },
      { text: "常に万全の状態", score: 15 },
      { text: "推しの好みに整形レベル", score: 20 },
    ],
  },
  {
    id: 26,
    text: "推しのイベントでのコールや応援は？",
    dimension: 'action',
    options: [
      { text: "静かに見守る", score: 2 },
      { text: "周りに合わせる", score: 5 },
      { text: "全力で叫ぶ", score: 15 },
      { text: "喉が潰れるまでがライブ", score: 20 },
    ],
  },
  {
    id: 27,
    text: "推しが出演する学園祭や地方イベントは？",
    dimension: 'action',
    options: [
      { text: "行かない", score: 0 },
      { text: "近ければ", score: 5 },
      { text: "どんな僻地でも行く", score: 15 },
      { text: "前乗りして最前確保", score: 20 },
    ],
  },
  {
    id: 28,
    text: "推し活のためのスキル習得は？",
    dimension: 'action',
    options: [
      { text: "特にない", score: 0 },
      { text: "動画編集や画像加工", score: 10 },
      { text: "語学（韓国語・英語など）", score: 15 },
      { text: "プロ級のカメラ・防振双眼鏡技術", score: 20 },
    ],
  },
  {
    id: 29,
    text: "オフ会には参加する？",
    dimension: 'action',
    options: [
      { text: "興味ない", score: 0 },
      { text: "誘われたら", score: 5 },
      { text: "積極的に参加", score: 10 },
      { text: "自分で主催する", score: 20 },
    ],
  },
  {
    id: 30,
    text: "推しに認知されたい？",
    dimension: 'action',
    options: [
      { text: "壁になりたい（認知不要）", score: 5 },
      { text: "ファンの一人として", score: 10 },
      { text: "名前を覚えてほしい", score: 15 },
      { text: "レスをもらうためなら何でもする", score: 20 },
    ],
  },

  // --- EVANGELISM (31-40) ---
  {
    id: 31,
    text: "周囲への布教活動は？",
    dimension: 'evangelism',
    options: [
      { text: "隠れファン", score: 0 },
      { text: "聞かれたら答える", score: 5 },
      { text: "隙あらば語る", score: 10 },
      { text: "息をするように布教", score: 20 },
    ],
  },
  {
    id: 32,
    text: "SNSでの発信頻度は？",
    dimension: 'evangelism',
    options: [
      { text: "見る専", score: 2 },
      { text: "たまに呟く", score: 5 },
      { text: "毎日発信", score: 10 },
      { text: "毎秒実況ツイート", score: 20 },
    ],
  },
  {
    id: 33,
    text: "友人をライブに誘う？",
    dimension: 'evangelism',
    options: [
      { text: "一人で行く", score: 2 },
      { text: "ファン友達と行く", score: 5 },
      { text: "興味ない子も誘う", score: 15 },
      { text: "チケット代奢ってでも連行", score: 20 },
    ],
  },
  {
    id: 34,
    text: "推しの良さをプレゼンできる？",
    dimension: 'evangelism',
    options: [
      { text: "言葉にできない", score: 5 },
      { text: "なんとなく", score: 5 },
      { text: "3時間は語れる", score: 15 },
      { text: "パワポ資料作れる", score: 20 },
    ],
  },
  {
    id: 35,
    text: "カラオケで推しの曲を歌う？",
    dimension: 'evangelism',
    options: [
      { text: "歌わない", score: 0 },
      { text: "数曲歌う", score: 5 },
      { text: "履歴を推しで埋める", score: 10 },
      { text: "本人映像を見せて布教", score: 20 },
    ],
  },
  {
    id: 36,
    text: "推しのグッズを身につけて外出する？",
    dimension: 'evangelism',
    options: [
      { text: "部屋に飾るだけ", score: 2 },
      { text: "さりげないものなら", score: 5 },
      { text: "バッグに付ける", score: 10 },
      { text: "全身推し色コーデ", score: 20 },
    ],
  },
  {
    id: 37,
    text: "SNSのハッシュタグ祭りに参加する？",
    dimension: 'evangelism',
    options: [
      { text: "しない", score: 0 },
      { text: "RTだけする", score: 5 },
      { text: "投稿する", score: 10 },
      { text: "トレンド入りまで連投", score: 20 },
    ],
  },
  {
    id: 38,
    text: "推しのアンケートや投票企画は？",
    dimension: 'evangelism',
    options: [
      { text: "気が向いたら", score: 2 },
      { text: "投票する", score: 5 },
      { text: "友人にも頼む", score: 15 },
      { text: "端末を総動員して組織票", score: 20 },
    ],
  },
  {
    id: 39,
    text: "職場や学校で推しの話をする？",
    dimension: 'evangelism',
    options: [
      { text: "隠している", score: 0 },
      { text: "仲良い人だけに", score: 5 },
      { text: "公言している", score: 10 },
      { text: "私の推しを知らない人はいない", score: 20 },
    ],
  },
  {
    id: 40,
    text: "布教用のお菓子やCDを配る？",
    dimension: 'evangelism',
    options: [
      { text: "配らない", score: 0 },
      { text: "たまに", score: 5 },
      { text: "よくやる", score: 10 },
      { text: "配るために大量購入", score: 20 },
    ],
  },

  // --- MENTAL (41-50) ---
  {
    id: 41,
    text: "推しを見て泣いたことがある？",
    dimension: 'mental',
    options: [
      { text: "ない", score: 0 },
      { text: "感動して少し", score: 5 },
      { text: "ライブで号泣", score: 10 },
      { text: "尊すぎて呼吸困難", score: 20 },
    ],
  },
  {
    id: 42,
    text: "推しのスキャンダルが出たら？",
    dimension: 'mental',
    options: [
      { text: "冷めるかも", score: 0 },
      { text: "ショックだけど応援する", score: 10 },
      { text: "寝込むが復活する", score: 15 },
      { text: "どんな推しでも受け入れる（全肯定）", score: 20 },
    ],
  },
  {
    id: 43,
    text: "推しが結婚したら？",
    dimension: 'mental',
    options: [
      { text: "祝う", score: 5 },
      { text: "素直に祝えないかも", score: 10 },
      { text: "推しロスで会社休む", score: 15 },
      { text: "相手も含めて愛する", score: 20 },
    ],
  },
  {
    id: 44,
    text: "推しのアンチを見かけたら？",
    dimension: 'mental',
    options: [
      { text: "スルーする", score: 5 },
      { text: "イラッとする", score: 10 },
      { text: "通報・ブロック", score: 15 },
      { text: "論破しに行く（戦闘態勢）", score: 20 },
    ],
  },
  {
    id: 45,
    text: "推しへの愛の重さは？",
    dimension: 'mental',
    options: [
      { text: "ライトに好き", score: 2 },
      { text: "生活の癒やし", score: 5 },
      { text: "生きがい", score: 10 },
      { text: "推しなしでは生きていけない", score: 20 },
    ],
  },
  {
    id: 46,
    text: "推しと目が合った気がしたら？",
    dimension: 'mental',
    options: [
      { text: "気のせいだと思う", score: 2 },
      { text: "嬉しい", score: 5 },
      { text: "私信だと思い込む", score: 15 },
      { text: "その瞬間、世界が止まった", score: 20 },
    ],
  },
  {
    id: 47,
    text: "推しの言葉に救われたことは？",
    dimension: 'mental',
    options: [
      { text: "特にない", score: 0 },
      { text: "元気が出た", score: 5 },
      { text: "辛い時支えになった", score: 10 },
      { text: "人生が変わった", score: 20 },
    ],
  },
  {
    id: 48,
    text: "推し以外の異性（または恋愛対象）に興味ある？",
    dimension: 'mental',
    options: [
      { text: "普通にある", score: 2 },
      { text: "推しは別腹", score: 5 },
      { text: "推し以上の人はいない", score: 15 },
      { text: "推しと結婚したい（ガチ恋）", score: 20 },
    ],
  },
  {
    id: 49,
    text: "推しの幸せを願ってる？",
    dimension: 'mental',
    options: [
      { text: "楽しませてくれればいい", score: 2 },
      { text: "活躍してほしい", score: 5 },
      { text: "健康でいてくれればいい", score: 10 },
      { text: "自分の幸せより推しの幸せ", score: 20 },
    ],
  },
  {
    id: 50,
    text: "生まれ変わっても推しを推す？",
    dimension: 'mental',
    options: [
      { text: "わからない", score: 0 },
      { text: "たぶん", score: 5 },
      { text: "絶対推す", score: 10 },
      { text: "来世でも必ず見つけ出す", score: 20 },
    ],
  },
];

export const getOtakuType = (scores: Record<Dimension, number>): { type: string; description: string } => {
  const dimensions: Dimension[] = ['time', 'money', 'action', 'evangelism', 'mental'];

  // Sort dimensions by score descending
  const sortedDims = [...dimensions].sort((a, b) => scores[b] - scores[a]);
  const top1 = sortedDims[0];
  const top2 = sortedDims[1];
  const totalScore = Object.values(scores).reduce((a, b) => a + b, 0);
  const maxPossible = 1000; // 50 questions * 20 max score

  // Legend Check (High score in all areas or very high total)
  if (totalScore >= 900) {
    return { type: 'レジェンド', description: '全てのステータスがカンストしている伝説のオタク。推しと共に歴史に名を刻む存在。' };
  }

  // Composite Types Logic
  // If the top 2 scores are relatively close (e.g., within 20% of each other), consider it a composite type
  const isComposite = scores[top2] >= scores[top1] * 0.8;

  if (isComposite) {
    const pair = [top1, top2].sort().join('+'); // Sort to handle order independence

    // Map pairs to types
    // Pairs: action+money, evangelism+money, mental+money, money+time
    //        action+evangelism, action+mental, action+time
    //        evangelism+mental, evangelism+time
    //        mental+time

    if (pair.includes('money') && pair.includes('evangelism')) return { type: 'プロデューサー型', description: '財力と拡散力で推しを売れっ子にする仕掛け人。' };
    if (pair.includes('money') && pair.includes('mental')) return { type: '保護者型', description: '「私が守る」という強い意志と財力で推しを支える親心。' };
    if (pair.includes('time') && pair.includes('action')) return { type: 'ストーカー(愛)型', description: '時間と行動力を全振りして、推しの行く先々に現れる影。' };
    if (pair.includes('time') && pair.includes('mental')) return { type: '分析家型', description: '推しの言動を深く考察し、解釈することに時間を費やす研究者。' };
    if (pair.includes('evangelism') && pair.includes('time')) return { type: 'クリエイター型', description: '推しの魅力を伝えるために創作や発信に時間を捧げる職人。' };
    if (pair.includes('action') && pair.includes('mental')) return { type: 'オカン/オトン型', description: '現場に駆けつけ、無事を祈る。行動と愛が直結しているタイプ。' };
  }

  // Fallback to Basic Types (Dominant Dimension)
  switch (top1) {
    case 'money':
      return { type: '投資家 (ATM)型', description: '「推しへの課金は呼吸」と豪語する、経済を回す守護神。' };
    case 'action':
      return { type: '冒険家 (フットワーク軽)型', description: '地球の裏側でも駆けつける、物理法則を無視した行動力。' };
    case 'evangelism':
      return { type: '宣教師型', description: '全人類を沼に落とすことが使命。プレゼン能力が異常に高い。' };
    case 'mental':
      return { type: '信者 (重力シンパシー)型', description: '推しの一挙手一投足に命を削る、感情のジェットコースター。' };
    case 'time':
    default:
      return { type: '夢想家 (純愛)型', description: '24時間365日、脳内メーカーは推し一色。' };
  }
};

export const getResult = (totalScore: number, scores: Record<Dimension, number>): DiagnosisResult => {
  const { type, description: typeDescription } = getOtakuType(scores);

  // Max possible score is 1000 (50 questions * 20 points)
  // Calculate level 1-100
  const maxPossible = 1000;
  let levelNum = Math.floor((totalScore / maxPossible) * 100);
  if (levelNum < 1) levelNum = 1;
  if (levelNum > 100) levelNum = 100; // Cap at 100 (or allow overflow for fun?) -> Let's cap for "Level" but maybe "Rank" differs.

  const level = `Lv.${levelNum}`;

  let baseResult;
  // Titles based on level ranges
  if (levelNum <= 20) {
    baseResult = {
      title: "茶の間ファン",
      description: "マイペースに推しを楽しむ平和なファン。推し活と私生活のバランスが完璧。",
      color: "#4ade80",
    };
  } else if (levelNum <= 40) {
    baseResult = {
      title: "駆け出しオタク",
      description: "沼に片足を突っ込んでいる状態。引き返すなら今だが、もう手遅れかも。",
      color: "#2dd4bf",
    };
  } else if (levelNum <= 60) {
    baseResult = {
      title: "一般ファン",
      description: "推しへの愛は本物。ライブやイベントも全力で楽しむ、模範的なオタク。",
      color: "#3b82f6",
    };
  } else if (levelNum <= 80) {
    baseResult = {
      title: "ガチ恋勢",
      description: "推しが生活の中心。愛が重すぎて、時々自分でも苦しくなるレベル。",
      color: "#e11d48",
    };
  } else if (levelNum <= 99) {
    baseResult = {
      title: "石油王・トップオタ",
      description: "財力・行動力・愛、全てにおいて一般人を凌駕するエリート。",
      color: "#f59e0b",
    };
  } else {
    baseResult = {
      title: "概念",
      description: "もはや推しと一体化している。あなたが推しで、推しがあなた。",
      color: "#8b5cf6",
    };
  }

  return {
    level,
    ...baseResult,
    type,
    typeDescription
  };
};
