// output.pathに絶対パスを指定する必要があるため、pathモジュールを読み込んでおく
const path = require("path");
const BomPlugin = require("webpack-utf8-bom");
const webpack = require("webpack");
const FixStyleOnlyEntries = require("webpack-fix-style-only-entries");
const assets = path.join(__dirname, "./public/script/");
const froms = {
  js: {
    scripts: assets + "app.js",
    modules: assets + "modules.js",
    scaner: assets + "scaner.js",
  },
};
module.exports = {
  // モードの設定、v4系以降はmodeを指定しないと、webpack実行時に警告が出る
  mode: "development",
  // エントリーポイントの設定
  entry: {
    scripts: froms.js.scripts,
    modules: froms.js.modules,
    scaner: froms.js.scaner,

  },
  // 出力の設定
  output: {
    // 出力するファイル名
    filename: "[name]-build.js",
    // 出力先のパス（絶対パスを指定する必要がある）
    path: path.join(__dirname, "public/script/"),
  },
  plugins: [new FixStyleOnlyEntries(), new BomPlugin(true)],
};
