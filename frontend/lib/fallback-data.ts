import type { Chapter, GlossaryTerm, Quiz } from "./types";

export const fallbackChapters: Chapter[] = [
  ["linear-regression", 1, "Linear Regression", "線性回歸", "監督式學習", "入門", 25, true, 100],
  ["logistic-regression", 2, "Logistic Regression", "邏輯斯迴歸", "監督式學習", "入門", 30, true, 100],
  ["decision-tree", 3, "Decision Tree", "決策樹", "監督式學習", "入門", 30, false, 65],
  ["random-forest", 4, "Random Forest", "隨機森林", "集成學習", "中階", 35, false, 30],
  ["svm", 5, "Support Vector Machine", "支援向量機", "監督式學習", "中階", 40, false, 0],
  ["knn", 6, "K-Nearest Neighbors", "K 近鄰", "監督式學習", "入門", 25, false, 0],
  ["naive-bayes", 7, "Naive Bayes", "樸素貝氏", "機率模型", "入門", 25, false, 0],
  ["k-means", 8, "K-Means Clustering", "K-Means 分群", "非監督式學習", "入門", 30, false, 0],
  ["pca", 9, "PCA", "主成分分析", "降維", "中階", 35, false, 0],
  ["neural-networks", 10, "Neural Networks / Deep Learning", "神經網路 / 深度學習", "深度學習", "進階", 45, false, 0],
].map(([id, order, title_en, title_zh, category, difficulty, estimated_minutes, completed, progress]) => ({
  id: String(id),
  order: Number(order),
  title_en: String(title_en),
  title_zh: String(title_zh),
  category: String(category),
  difficulty: String(difficulty),
  estimated_minutes: Number(estimated_minutes),
  completed: Boolean(completed),
  progress: Number(progress),
  summary: `${title_zh}章節摘要，之後會接上 PDF 解析與 AI 生成教材。`,
  key_points: ["核心概念", "使用情境", "常見限制"],
  content: `${title_zh}的假資料內容。這裡預留教材段落、互動圖解、程式範例與測驗連結。`,
}));

export const fallbackGlossary: GlossaryTerm[] = [
  {
    id: "supervised-learning",
    term_en: "Supervised Learning",
    term_zh: "監督式學習",
    definition: "使用已標記資料訓練模型，讓模型學習輸入到答案的對應關係。",
    related_chapters: ["linear-regression", "logistic-regression"],
  },
  {
    id: "overfitting",
    term_en: "Overfitting",
    term_zh: "過擬合",
    definition: "模型過度貼合訓練資料，在新資料上的表現變差。",
    related_chapters: ["decision-tree", "neural-networks"],
  },
];

export const fallbackQuiz: Quiz = {
  chapter_id: "linear-regression",
  title: "章節小測驗",
  score: null,
  questions: [
    {
      id: "q1",
      question: "這個演算法最適合先理解哪個面向？",
      options: [
        { id: "a", text: "任務類型" },
        { id: "b", text: "伺服器部署" },
        { id: "c", text: "CSS 配色" },
        { id: "d", text: "版本控制" },
      ],
      answer: "a",
      explanation: "理解演算法適合的任務類型，是選模型的第一步。",
    },
  ],
};
