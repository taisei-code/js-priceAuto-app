## アプリケーション概要

## 考え方

初期

メモリ
→ 8GB
ストレージ
→ 512GB
合計金額
→ 208,800円

役割

html
・input要素で金額を管理する。valueなのかdata属性

js
・input要素と合計金額を表示する要素を取得して変数で管理
・input要素のチェックがtrueかfalseなのかで処理を分ける
・htmlで設定したdata属性の data-additional-amountの値を取得して、合計金額に足す
・チェックが切り替わるタイミングでイベントが起きる