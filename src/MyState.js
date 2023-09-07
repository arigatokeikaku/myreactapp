import { useState } from 'react';

export default function MyState(props) {
  // a.Stateの初期値を設定 UseState関数
  const [count, setCount] = useState(0);

  //c. count値をインクリメント（イベントハンドラー）ちなみに++は無効
  function increment() {
    setCount(count + 1);
  }

  return (
    <>
    {/* b. countの値をページに反映 */}
      <input type="button" value="カウント" onClick={increment} />
      <p>{count}回、クリックされました。</p>
    </>
  );
}
