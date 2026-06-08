# 機器學習十大演算法互動研讀平台

這是一個根據「Top 10 Machine Learning Algorithms / 機器學習十大演算法」研讀教材規劃的互動式學習平台 MVP。專案採用 `frontend/` 與 `backend/` 分離架構，先建立可運行、可擴充的基礎，後續可加入 PDF 解析、章節內容生成、測驗紀錄、搜尋與學習進度追蹤。

## 功能特色

- 十大機器學習演算法章節瀏覽
- 單一章節內容、研讀重點與進度顯示
- Dashboard 學習進度總覽
- 選擇題測驗頁面雛形
- Glossary 名詞解釋
- 搜尋章節與名詞的 API 與前端 UI
- PDF Viewer 預留頁，方便後續接入教材 PDF

## 技術架構

- Frontend: Next.js, TypeScript, Tailwind CSS, App Router
- Backend: FastAPI, Python, Pydantic, Uvicorn
- Data: sample JSON 假資料

## 專案結構

```text
frontend/
  app/
  components/
  lib/
backend/
  data/
  models/
  main.py
  requirements.txt
```

## 安裝需求

- Node.js 18+
- Python 3.10+
- npm

## 後端啟動

```bash
cd backend
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt
uvicorn main:app --reload --port 8000
```

若你的環境中 `python` 指向 Python 2.x，請把上述 `python` 改成 `python3`。

API:

- `GET /api/health`
- `GET /api/chapters`
- `GET /api/chapters/{chapter_id}`
- `GET /api/quiz/{chapter_id}`
- `GET /api/glossary`
- `GET /api/search?q=`

## 前端啟動

```bash
cd frontend
npm install
npm run dev
```

前端預設呼叫 `http://localhost:8000`。若後端位置不同，可設定：

```bash
NEXT_PUBLIC_API_BASE_URL=http://localhost:8000 npm run dev
```

## MVP 頁面

- 首頁：網站介紹、開始學習、十大演算法卡片
- Dashboard：進度總覽、完成章節數、測驗摘要、推薦下一章
- 章節列表：十大演算法卡片
- 單一章節：`/chapters/[id]`
- 測驗頁：`/quiz/[id]`
- Glossary：機器學習名詞解釋
- PDF Viewer：PDF 嵌入預留頁
- 搜尋：搜尋 UI 與基本 API 串接

## 後續可擴充方向

- 串接 PDF.js 或後端解析服務
- 儲存學習進度與測驗紀錄
- 加入章節內容生成與重點摘要
- 建立全文搜尋或語意搜尋
- 補上登入、個人化推薦與部署設定
