// 配列の組み込みメソッドと同等の機能を持った関数を作る

/**
 * 前提: 配列の組み込みメソッドは使わない
 */

/**
 * 課題1: 「Array.prototype.forEach()」と同等の機能を持つ関数を作る
 *   - 「Array.prototype.forEach()」のドキュメント
 *     - https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
 *   - 関数名は「each」とする
 *   - each関数は次の2つの引数を持つ
 *     - 第1引数: 配列(引数名はarrayとする)
 *     - 第2引数: コールバック関数(引数名はcallbackとする)
 *       - コールバック関数の内容は、each関数の第1引数で受け取った配列をイテレーションする機能を持つ
 *       - コールバックは次の2つの引数を持つ
 *         - 第1引数: each関数の第1引数で受け取った配列の各要素を1ループごとにセットする
 *         - 第2引数: コールバック関数の第1引数で受け取った要素に対応するインデックス番号をセットする
 *       - コールバック関数は戻り値を持たない　*戻り値：関数に処理を依頼した後、呼び出し元の関数に返す値
 *   - each関数は戻り値を持たない
 *   - 実装したeach関数が意図通り動くか確かめるためのコードを記述する
 *     - コールバック関数の中でconsole.logを使って、コールバック関数の第1引数と第2引数の値を確認する
 *     - each関数内でarrayをループさせるにはfor文を使う
 *
 *
 * each関数の実装の答えは以下の学習コンテンツのスライド内に記述されているので、実装イメージがつかなかったら参考にしてもOK
 *
 * JavaScriptの配列でイテレーション処理をする
 * https://tsuyopon.xyz/learning-contents/web-dev/javascript/javascript-grammar/how-to-iterate-an-array-in-js/
 */

// ここでeach関数を作る (関数を引数に受け取る)

function each(array, callback) {
    for (let i = 0; i < array.length; i++) {
        callback(array[i], i);
    }
}

// ここでeach関数の挙動を確かめる

const testArray = [1, 2, 3, 4];

const returnOfEach = each(testArray, function (num, index) {
    console.log('each関数のコールバック関数内 ' + 'index：' + index + ' 値：' + num);
});

console.log(testArray);
console.log(returnOfEach);


/**
 * 課題2: 「Array.prototype.map()」と同等の機能を持つ関数を作る
 *   - 「Array.prototype.map()」のドキュメント
 *     - https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/map
 *   - 関数名は「map」とする
 *   - map関数は次の2つの引数を持つ
 *     - 第1引数: 配列(引数名はarrayとする)
 *     - 第2引数: コールバック関数(引数名はcallbackとする)
 *       - コールバック関数の内容は、map関数の第1引数で受け取った配列をイテレーションする機能を持つ
 *       - コールバックは次の2つの引数を持つ
 *         - 第1引数: map関数の第1引数で受け取った配列の各要素を1ループごとにセットする
 *         - 第2引数: コールバック関数の第1引数で受け取った要素に対応するインデックス番号をセットする
 *       - コールバック関数は戻り値を持つ
 *         - コールバック関数内でreturnした値がmap関数の配列の要素としてセットされる
 *   - map関数は戻り値を持つ
 *     - map関数の戻り値はコールバック関数のそれぞれの戻り値を格納した配列となる
 *       - 例: 以下のnewArrayには[2, 4, 6]という配列が格納される。
 *         - const newArray = map([1, 2, 3], (value, index) => {
 *             return value * 2; // valueは「1, 2, 3」 と順番にセットされて、「value * 2」で2倍にしているため[1, 2, 3]は[2, 4, 6]となる
 *           });
 *   - 実装したmap関数が意図通り動くか確かめるためのコードを記述する
 *     - map関数の返り値をconsole.logで出力する
 *     - map関数内のイテレーション処理には課題1で作ったeach関数を利用する
 *
 * 上の文章で実装する内容を理解するよりも、「Array.prototype.map()」のドキュメントの例を参考にmapがどんな挙動をするのか理解するのか理解したほうが早いかも。
 */

// ここでmap関数を実装する


// ここでmap関数の挙動を確認する



/**
 * 課題3: 「Array.prototype.filter()」と同等の機能を持つ関数を作る
 *   - 「Array.prototype.filter()」のドキュメント
 *     - https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
 *   - 関数名は「filter」とする
 *   - filter関数は次の2つの引数を持つ
 *     - 第1引数: 配列(引数名はarrayとする)
 *     - 第2引数: コールバック関数(引数名はcallbackとする)
 *       - コールバック関数の内容は、filter関数の第1引数で受け取った配列をイテレーションする機能を持つ
 *       - コールバックは次の2つの引数を持つ
 *         - 第1引数: filter関数の第1引数で受け取った配列の各要素を1ループごとにセットする
 *         - 第2引数: コールバック関数の第1引数で受け取った要素に対応するインデックス番号をセットする
 *       - コールバック関数は戻り値を持つ
 *         - コールバック関数内で真偽値(true or false)をreturnする
 *           - trueを返した場合は、現在セットされている要素をfilter関数の戻り値である配列に格納する
 *           - falseを返した場合は、現在セットされている要素をfilter関数の戻り値である配列に含めないようにする
 *   - filter関数は戻り値を持つ
 *     - filter関数の戻り値はコールバック関数の戻り値がtrueだった要素を格納した配列となる
 *       - 例: 以下のfilteredArrayには[2, 4]という配列が格納される。
 *         - const filteredArray = filter([1, 2, 3, 4, 5], (value, index) => {
 *             return value % 2 === 0; // valueは「1, 2, 3, 4, 5」 と順番にセットされて、「value % 2 === 0」で偶数がtrueになるので「2, 4」trueとなり[2, 4]という配列が返る
 *           });
 *   - 実装したfilter関数が意図通り動くか確かめるためのコードを記述する
 *     - filter関数の返り値をconsole.logで出力する
 *     - filter関数内のイテレーション処理には課題1で作ったeach関数を利用する
 *
 * 上の文章で実装する内容を理解するよりも、「Array.prototype.filter()」のドキュメントの例を参考にfilterがどんな挙動をするのか理解するのか理解したほうが早いかも。
 */

// ここでfilter関数を作る


// ここでfilter関数の挙動を確認する

