# SPEC — rejectiondjcom (合意 2026-07-22)

## 技術方針
- フレームワークなしの静的サイト: `index.html` / `music.html` / `tour.html`
- スタイル: `css/style.css`(単一ファイル)
- JS: `js/main.js`(モバイルナビ開閉のみ)
- フォント: Google Fonts — **Anton**(見出し・ロゴ的表示)/ **Epilogue**(本文・ナビ・ボタン, 400/700)
- 画像はすべてローカル `assets/images/` に配置。外部CDN直リンク禁止(例外: Bandsintown widget v3 の script のみ)
- レスポンシブ必須(モバイル1カラム、ナビはハンバーガー)

## デザイントークン
- 背景 `#DEDEDE` / 文字 `#212020` / 反転文字 `#FFFFFF`
- ヘッダー: `position:fixed`、背景 `#DEDEDE`、高さ 140px(モバイル 72px)。本体は上パディングで逃す
- ナビリンク: Epilogue 400 16px `#212020`、ホバーで下線
- ピル型ボタン: 背景 `#212020` / 文字 `#FFF` 大文字 Epilogue 700 / `border:2px solid #FFF` / `border-radius:300px` / `padding:16px 34px` / ホバーで背景・文字反転
  - 明るい背景上ではボーダーを `#212020` にした `.pill--onlight` を使用(tour ページの TICKETS)
- 見出し(BIO / CONTACT / ページタイトル): Anton 大文字。写真背景上では白文字
- 写真セクションはフルブリード(100vw)で縦積み。装飾・影・グラデーション禁止(Minimal / Brutalist)
- 写真上の文字可読性は黒半透明オーバーレイ(`.fullbleed::before`)で確保

## 共通ヘッダー(全ページ)
- 左: ナビ「Music」(`music.html`)「Tour」(`tour.html`)
- 中央: rejection 黒ロゴ(`assets/images/logo_black.png`)。クリックで `index.html`。高さ 46px(モバイル 34px)
- 右: SNSアイコン(インラインSVG, `#212020`)。順に Instagram / TikTok / X / Spotify / YouTube / Bandsintown
- モバイル: ハンバーガーで `.mobile-panel`(ナビ+SNS)を開閉

### SNSリンク
- Instagram: https://www.instagram.com/rejection_dj/
- TikTok: https://www.tiktok.com/@rejection_dj
- X: https://x.com/rejectiondj
- Spotify: https://open.spotify.com/artist/0S23vj2YyvxsVlhqqSohrk
- YouTube: https://www.youtube.com/@rejection_dj
- Bandsintown: https://www.bandsintown.com/a/15654244-rejection

## ページ構成
### index.html
1. ヒーロー: フルブリード写真 `hero.jpg`(暗めライブ/宣材, 90vh弱)
2. リンクセクション: 写真 `links.jpg` 背景 + ピルボタン4つ「TOUR TICKETS / FANBOX / MUSIC / LABEL」
   - Fanbox: https://rejection.fanbox.cc / Label: https://wedieyoung.jp
3. BIO: 写真 `bio.jpg` 背景 + 「BIO」見出し(Anton白) + 英文バイオ(下に和文小さく併記)
4. CONTACT: 同セクション内。「CONTACT」見出し + MGMT: rejection0518@gmail.com(mailto)
5. フッター: © 2026 rejection / WE DIE YOUNG

### music.html
- 2カラムグリッド(モバイル1カラム)。正方形カバー + 下にタイトル(Epilogue 400 `#212020`)
- 各セルは Spotify のアルバム/トラック URL へ `target=_blank`
- カバーは Spotify CDN から取得し `assets/images/covers/` に保存(英数スラッグ)
- 新→旧順、全17リリース

### tour.html
- 上部中央に黒ピル「TICKETS」→ Bandsintown アーティストページ
- Bandsintown 公式ウィジェット(widget v3, `data-artist-name="id_15654244"`)を埋め込み
  - 背景透過・文字色 `#212020`・`data-font="Epilogue"`・過去日程リンク表示
- `noscript` で Bandsintown ページへのフォールバックリンク

## バイオ出典
`/Users/sakuragikodai/Projects/wedieyoungjp/js/data.js` の `ARTISTS.owner`(bio / bio_en)。
英文をベースに使用し、脚色しない。
