import { FC } from 'react';

const Pricing: FC = () => {
  return (
    <section id="pricing" className="pricing">
      <div className="container">
        <h2>料金について</h2>

        <div className="pricing-content">
          <div className="price-card">
            <h3>選択代行サービス 基本料金</h3>
            <div className="price">
              <span className="amount">無料</span>
            </div>

            <div className="actual-price">
              <h4>あなたにお支払いいただく金額</h4>
              <div className="free-price">0<span>円</span></div>
              <p className="price-note">（どなたでも、いつご利用いただいても完全無料です）</p>
              <p className="price-note">※ メール相談も無料でご利用いただけます。</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;

  