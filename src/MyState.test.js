import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import MyState from './MyState';

test('MyState Test', async () => {
  // a .userEventオブジェクトを準備
  // user-event ライブラリ の 核 と なる のは、 userEvent オブジェクト です。 userEvent オブジェクト は、 setup メソッド で 生成 でき ます（ a.）。 ［構文］ setup
// ［構文］ setup メソッド[^ 1008] 
      // setup([ config]) 
      // ・config： 設定 オプション（「 オプション 名: 値, …」 形式 の オブジェクト）

  const ev = userEvent.setup();
  render(<MyState />);
  // 目的の要素を取得
  const btn = screen.getByRole('button');
  const cnt = screen.getByText(/クリック/);
  // ｂ。ボタンをクリック＆その結果を確認
  await ev.click(btn);
  expect(cnt).toHaveTextContent('1回');
});
