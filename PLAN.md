# PLAN — rejectiondjcom

## 目的
アーティスト「rejection」(Trap/Bass DJ・プロデューサー、レーベル WE DIE YOUNG 主宰)の公式サイト。
海外市場を重視するため英文バイオをベースに構築。参考サイトは sportmodemusic.com のレイアウト・雰囲気
(コード・画像・文言は一切コピーせず、デザイントークンのみ参照してゼロから独自実装)。

## 現状
- フレームワークなしの静的サイト(index / music / tour)。
- ホスティング先は未定(ローカル `python3 -m http.server 8930` で確認)。

## 今後の拡張候補
- Merch ページ追加(Shopify / WE DIE YOUNG CLOTHING 連携)。
- 独自ドメイン取得(例: rejection.dj / rejectiondj.com)と DNS 設定。
- デプロイ(GitHub Pages / Cloudflare Pages / Vercel 等の静的ホスティング)。
- OGP 画像・favicon の整備。
- ニュース / リリース告知セクション。
- リリース一覧を Spotify API 連携で自動更新(現状は手動ハードコード)。
