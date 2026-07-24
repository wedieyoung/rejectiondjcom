# KNOWLEDGE — rejectiondjcom

## Bandsintown widget v3
- **導入**: `<script charset="utf-8" src="https://widgetv3.bandsintown.com/main.min.js"></script>` を body末尾に置き、
  `<a class="bit-widget-initializer" data-artist-name="id_15654244" ...></a>` を設置すると script が中身を描画する。
- **アーティスト指定**: 数値IDを使う場合は `data-artist-name="id_15654244"`(`id_` プレフィックス必須)。
  アーティスト名でも可だが ID の方が確実。
- **スタイル系 data-* 属性**:
  - `data-auto-style="false"` にすると手動スタイルが効く。
  - `data-text-color` / `data-link-color` / `data-background-color`(透過は `rgba(0,0,0,0)`)/ `data-separator-color`
  - `data-link-text-color` はボタン内テキスト色。
  - `data-font="Epilogue"` でフォント指定(サイトで読み込んでいる Google Font 名)。
  - `data-display-past-dates="true"` で過去日程リンク、`data-display-limit` で表示件数。
- **表示の遅延**: 外部 script 取得後に描画されるため、初回は数秒かかることがある。描画前は空要素。
- **フォールバック**: JS 無効環境向けに `<noscript>` で Bandsintown アーティストページへのリンクを置く。

## Spotify カバーアートの取得
- カバー URL は `https://<host>/image/<image-id>` 形式。host は `image-cdn-ak.spotifycdn.com` または `image-cdn-fa.spotifycdn.com`。
- `ab67616d0000b273...` は 640px 版のプレフィックス。curl で直接 DL 可能(User-Agent 指定で確実)。今回は17枚すべて成功。
- Spotify 未ログイン状態ではアーティストの全ディスコグラフィを機械取得できないため、リリース一覧は手動管理。

## 画像処理(sips, macOS 標準)
- 長辺リサイズ + JPEG 品質指定: `sips -Z 1920 -s format jpeg -s formatOptions 68 in.jpg --out out.jpg`
- PNG 幅リサイズ: `sips -Z 1200 -s format png in.png --out out.png`
- 寸法取得: `sips -g pixelWidth -g pixelHeight file`
- ImageMagick(`montage` 等)は未インストール。コンタクトシートは作れないので Read ツールで個別確認した。
- ヒーロー写真は 1920px / q68 で 280–420KB に収まり、500KB 以下の目安を満たす。

## 素材の所在
- ロゴ: `/Users/sakuragikodai/Documents/01_画像/ロゴ・ブランド/rejection logo/`(black / white / red / ガイドライン.ai)
- 宣材写真: `/Users/sakuragikodai/Documents/01_画像/アー写・宣材/rejection photos/`(39枚)。
  DSC025xx/026xx = 都市・夜のアーティスト写真(黒ボンバー)、DSC035xx = 昼の公園ポートレート(明るい緑背景)。
  ヒーロー向きの暗め横長は DSC026xx 系。実際のDJブース/ライブ写真はこのフォルダには無い。
- 採用: hero=DSC02634 / links=DSC02612 / bio=DSC02646。

## バイオ出典
- `/Users/sakuragikodai/Projects/wedieyoungjp/js/data.js` の `ARTISTS.owner` に和文 `bio` と英文 `bio_en`。海外向けは `bio_en` を主に使う。

## 静的サイトのヘッダー共通化
- フレームワーク無しのためヘッダー(SVGアイコン含む)は3ページに複製。
  更新時は index / music / tour の3ファイルすべてを直す必要がある(JSインジェクションは堅牢性/SEOのため不採用)。
