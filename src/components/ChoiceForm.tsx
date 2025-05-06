import React, { useState, FormEvent } from 'react';

interface ChoiceFormProps {
  onSubmit: (choice1: string, choice2: string) => void;
}

const ChoiceForm: React.FC<ChoiceFormProps> = ({ onSubmit }) => {
  const [choice1, setChoice1] = useState('');
  const [choice2, setChoice2] = useState('');
  const [error, setError] = useState('');
  const [specialMessage, setSpecialMessage] = useState('');

  // NGワードリスト
  const NG_WORDS = ['死', '殺','人生','生きる','自害',];

  const containsNgWord = (text: string) =>
    NG_WORDS.some(word => text.includes(word));

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // NGワードチェック
    if (containsNgWord(choice1) || containsNgWord(choice2)) {
      setSpecialMessage(
        'あなたの入力には深刻なワードが含まれています。\n' +
        'もしお辛い状況でしたら、メール相談にてご相談ください。：\n' +
        '自殺予防いのちの電話 0120-783-556（24時間対応）'
      );
      setError('');
      return;
    }

    // 入力のバリデーション
    if (!choice1.trim() || !choice2.trim()) {
      setError('両方の選択肢を入力してください');
      setSpecialMessage('');
      return;
    }

    if (choice1.trim() === choice2.trim()) {
      setError('2つの異なる選択肢を入力してください');
      setSpecialMessage('');
      return;
    }

    // 通常の処理
    setError('');
    setSpecialMessage('');
    onSubmit(choice1, choice2);
  };

  return (
    <div className="choice-form-container">
      <form className="choice-form" onSubmit={handleSubmit}>
        <h3>あなたの選択肢を入力してください</h3>
        <p>決められない2つの選択肢を入力すると、プロがあなたに代わって選択します。</p>

        {/* 特別メッセージ */}
        {specialMessage && (
          <div className="special-message">
            {specialMessage.split('\n').map((line, i) => (
              <p key={i}>{line}</p>
            ))}
          </div>
        )}

        <div className="form-group">
          <label htmlFor="choice1">選択肢 1</label>
          <input
            type="text"
            id="choice1"
            value={choice1}
            onChange={e => setChoice1(e.target.value)}
            placeholder="例: ラーメン"
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="choice2">選択肢 2</label>
          <input
            type="text"
            id="choice2"
            value={choice2}
            onChange={e => setChoice2(e.target.value)}
            placeholder="例: カレー"
            required
          />
        </div>
        
        {error && <p className="error-message">{error}</p>}
        
        <button type="submit" className="submit-button">選択を代行する</button>
        
        <p className="disclaimer">
          ※ 当サービスはランダムに選択を行います。重要な決断には、適切な判断材料をもとにご自身で決定されることをお勧めします。
        </p>
      </form>
    </div>
  );
};

export default ChoiceForm;
