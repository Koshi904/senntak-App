import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ChoiceForm from '../components/ChoiceForm';
import Result from '../components/Result';
import '../styles.css';

interface Lifestyle {
  value: string;
  label: string;
  message: string;
}

const lifestyles: Lifestyle[] = [
  { value: 'challenge', label: '新しいことに挑戦中の人', message: '新しい道を進むあなたを、私たちは全力で応援します。' },
  { value: 'stability', label: '安定を求めている人', message: '落ち着いた選択も、立派な一歩です。' },
  { value: 'turning', label: '転機を迎えている人', message: 'その選択が、あなたの人生を大きく変えるかもしれません。' },
  { value: 'searching', label: '何かを探している途中の人', message: '迷いの中にも、ヒントがきっとあります。' },
  { value: 'relaxing', label: 'ゆっくりしたい人', message: '自分を大事にすること、それも選択です。' },
  { value: 'surviving', label: '頑張って生きている人', message: '貴方の人生において間違った選択なんて一つもありません。' },
  { value: 'tired', label: '何もしたくない人', message: '休んでもいい。立ち止まることも選択です。' }
];

const DecisionPage: React.FC = () => {
  const [selectedLifestyle, setSelectedLifestyle] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [result, setResult] = useState<string | null>(null);

  const handleLifestyleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setSelectedLifestyle(value);
    const found = lifestyles.find(l => l.value === value);
    setMessage(found ? found.message : '');
  };

  const handleSubmitChoices = (choice1: string, choice2: string) => {
    const selected = Math.random() < 0.5 ? choice1 : choice2;
    setResult(selected);
  };

  const reset = () => {
    setResult(null);
    setSelectedLifestyle('');
    setMessage('');
  };

  return (
    <>
      <Header />
      <main className="decision-container">
        <section className="lifestyle-section">
          <h2>まずはあなたの状態を選んでください</h2>
          <select value={selectedLifestyle} onChange={handleLifestyleChange}>
            <option value="">-- 選択してください --</option>
            {lifestyles.map(l => (
              <option key={l.value} value={l.value}>{l.label}</option>
            ))}
          </select>
        </section>

        {selectedLifestyle && !result && (
          <section className="choice-section">
            <h2>選択肢を入力してください</h2>
            <ChoiceForm onSubmit={handleSubmitChoices} />
          </section>
        )}

        {result && (
          <section className="result-section">
            <Result choice={result} onReset={reset} />
            <p className="lifestyle-message">{message}</p>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
};

export default DecisionPage;
