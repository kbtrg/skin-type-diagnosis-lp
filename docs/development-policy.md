# 開発方針（Development Policy）

## プロジェクト概要

肌診断をLP形式で実施し、最後に**イベントへの申し込みフォーム**へ誘導するWebアプリケーションです。

- **流れ**: ヒーロー → 診断クイズ → 結果表示 → イベント案内（フライヤー）→ 申し込みフォーム → 完了
- **目的**: 肌タイプ診断によるエンゲージメントのうえ、体験会・イベントへの動員

---

## 技術スタック

| 領域 | 技術 |
|------|------|
| フロント | Next.js（App Router）、React 19、TypeScript |
| スタイル | Tailwind CSS v4、shadcn/ui（new-york）、tw-animate-css |
| 配信 | **静的エクスポート**（`output: "export"`） |
| デプロイ | **Vercel** |

---

## 現状の仕様

- **申し込み時のDB保存は行わない**
- フォーム送信後は完了画面を表示するのみ（モック）
- 申し込み内容（名前・メール・電話番号）はサーバーに送信・保存していない

---

## 将来の予定（バックエンド）

- **API**: NestJS で申し込み受付APIを実装
- **DB**: PostgreSQL + Prisma（想定）
- **APIのデプロイ**: Railway を想定
- 実装時は、LP（Next.js）のフォーム送信先を環境変数でAPIのURLに切り替える想定

---

## ディレクトリ・コード構成

```
src/
├── app/              # ページ・レイアウト・グローバルスタイル
├── components/       # UIコンポーネント（LP用 + ui/ はshadcn）
├── data/             # 診断の設問・肌タイプ定義（diagnosis.ts）
└── lib/              # ユーティリティ（cn など）
```

- **パスエイリアス**: `@/*` → `./src/*`（`@/components` など）
- **診断ロジック**: `src/data/diagnosis.ts` に設問（QUESTIONS）、肌タイプ（SKIN_TYPES）、スコア計算（calculateResult）を集約

---

## 静的エクスポートに関する注意

- `next.config.ts` で `output: "export"` を指定しているため、**API Routes（Route Handlers）は利用しない**
- サーバーサイドの処理は行わず、ビルド時に静的HTMLとして出力
- 将来バックエンドを用意したら、フォームは**クライアントから NestJS API へ直接送信**する形を想定

---

## UI・スタイルの規約

- **shadcn/ui**: `components.json` で new-york スタイル・RSC・`@/` エイリアスを設定
- **テーマ**: 肌診断LP用に `skin-*` 系のCSS変数を使用（`skin-background`, `skin-foreground`, `skin-card`, `skin-border`, `skin-primary` など）
- **globals.css**: Tailwind v4 + `@theme inline` で上記を `--color-skin-*` として定義

---

## その他・注意事項

- **状態管理**: 現状は `DiagnosisLp` 内の `useState` でステップ・回答・結果を保持（追加ライブラリなし）
- **フォームバリデーション**: 必須項目はHTMLの `required` に依存。将来API連携時にクライアント/サーバー両方でバリデーションを検討
- **イベント情報**: 日時・会場などは `EventFlyer` や関連コンポーネントにハードコードされている想定。変更頻度が高い場合は `src/data/` などに切り出すとよい

---

## 更新履歴

- 初版: 開発方針の策定（静的配信・Vercel、将来のNestJS/PostgreSQL/Prisma/Railway を記載）
