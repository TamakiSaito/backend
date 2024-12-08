<!-- PHP : HyperText Preprocessor -->

<?php
// PHPのコード記述
// ここにphpの閉じタグをつけなくてもいい場合もある

// HTMLの中にPHPコード埋め込みする場合
<h1><?php echo 'タイトル';?></h1>

// 「コメントアウト種類」
// 一行コメントアウト
# 一行コメントアウト

/* コメントアウト */

/*
  複数コメントアウト
  複数コメントアウト
  複数コメントアウト
*/


// 「変数」
$name = '変数名';

// 変数命名
$name = '変数名'; // OK
$name01 = '変数名'; // OK
$name_01 = '変数名'; // OK
// $01name = '変数名'; // NG

// channel_nameとChannel_Nameは違う意味
$channel_name = 'チャンネル名'; 
$Channel_Name = 'チャンネル名';

// 代入
$name;

// 変数の展開 : 変数を文字列の中に埋め込む方法
echo '文字列「' . $name . '」です!'; // シングルクォーテーション
echo "文字列 「{$name}」"; // ダブルクォーテーション


// 配列
// 値を追加
$arr = []; // 空の配列を定義 key = value
$arr = '値1';
$arr = '値2';
$arr = '値3';

echo $arr[0]; // 「値1」を出力

// <pre>タグをつけると改行される
echo '<pre>';
var_dump($arr); // arrのvalueを全て出力
echo '</pre>';


// 配列のvalueの数を出力
echo count($arr);


// foreach
foreach ($arr as $key => $value) {
  echo 'key:' . $key . '<br>';
  echo 'value:' . $value . '<br>';
}
// ↓ 一緒の意味
foreach ($arr as $key => $value): // コロンをつける
  echo 'key:' . $key . '<br>';
  echo 'value:' . $value . '<br>';
endforeach; // endforeachで締める


// 関数
// 引数がない場合
function fn()
{
  // 処理
}
// 引数がある場合
function fn(引数1, 引数2, ...)
{
  // 処理
}

// PHP関数
// isset : 変数が定義されているかどうか確認する
// empty : 値がからかどうかチェックする。返り値Boolean

// in_arry : 配列の中に値がある確認にできる

// while : 何回も繰り返して処理を行うことができる
$cnt = 0;
while ($cnt < 10) {
  $cnt = $cnt + 1;
  echo $cnt . "回目\n";
}
