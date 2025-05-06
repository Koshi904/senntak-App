import React from 'react';

interface HeroProps {
  setActiveSection: (section: string) => void;
}

const Hero: React.FC<HeroProps> = ({ setActiveSection }) => {
  const handleButtonClick = (section: string) => {
    setActiveSection(section);
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="hero">
      <div className="hero-content">
        <h2>人生の選択に迷ったら</h2>
        <h3>あなたの代わりに、私たちが選びます</h3>
        <p>
          人生の岐路に立ったとき、どちらを選べばいいか迷うことはありませんか？<br />
          弊社の「選択代行サービス」が、その重荷からあなたを解放します。
        </p>
        <div className="hero-buttons">
          <button 
            className="primary-button"
            onClick={() => handleButtonClick('service')}
          >
            今すぐ選択を代行する
          </button>
          <button 
            className="secondary-button"
            onClick={() => handleButtonClick('recommendations')}
          >
            詳しく見る
          </button>
        </div>
      </div>
      <div className="hero-image">
        {/* イメージを表す装飾的な要素 */}
        <div className="decision-illustration">
          <div className="path path-left"></div>
          <div className="path path-right"></div>
          <div className="decision-point"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;