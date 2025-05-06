import { useEffect, useState } from 'react';

interface ResultProps {
  choice: string | null;
  onReset: () => void;
}

const Result = ({ choice, onReset }: ResultProps) => {
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // 結果を表示する前に少し待つことで、"選択中"の効果を作る
    const timer = setTimeout(() => {
      setLoading(false);
      setShowResult(true);
    }, 2000);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div className="result-container">
      <h3>選択結果</h3>
      
      {loading && (
        <div className="loading">
          <div className="spinner"></div>
          <p>選択中...</p>
          <p className="loading-message">プロフェッショナルが最適な選択を行っています</p>
        </div>
      )}
      
      {showResult && (
        <div className="result-content">
          <div className="result-box">
            <h4>あなたにおすすめの選択は...</h4>
            <p className="result-choice">{choice}</p>
            <p className="result-message">
              当社の高度な選択アルゴリズムによって、
              このオプションがあなたに最適であると判断されました。
            </p>
          </div>
          
          <div className="result-actions">
            <button onClick={onReset} className="reset-button">
              新しい選択を依頼する
            </button>
          </div>
          
          <div className="testimonial">
            <p>
            きめま所をご利用いただき誠にありがとうございます。<br/>
            良き選択ライフを!!
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Result;