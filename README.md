# React+TypeScriptでシンプルなToDoアプリを作成
## 動作確認(Github Pages)
- https://kotepagu.github.io/todo-ts/
## 開発環境の構築方法
1. ローカル環境にクローン
```
$ git clone https://github.com/kotepagu/todo-ts.git
```
2. yarnのインストール
```
$ npm install -g yarn
```
3. ローカル環境で起動
```
$ yarn start
```
## GitHub Pagesへの公開方法
1. gh-pagesモジュールのインストール
```
$ yarn add gh-pages
```
2. GitHub上に`gh-pages`という名称のブランチを作成する
3. package.jsonの設定
```
{
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject",
    "ghpages": "gh-pages -d build"　←追加
  },
  "homepage": "./"　←追加
}
```
4. GitHub Pagesに公開
```
$ yarn ghpages
```
