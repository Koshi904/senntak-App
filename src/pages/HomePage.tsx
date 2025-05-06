import Header from '../components/Header';
import Footer from '../components/Footer';
import FAQ from '../components/FAQ';
import Recommendations from '../components/Recommendations';
import ContactForm from '../components/ContactForm';
import Pricing from '../components/Pricing';
import { Link } from 'react-router-dom';



const App = () => {

  return (
    <div className="app">
      <Header />
      
      <main>
        <section id="home" className="hero">
          <div className="container">
            <h1>選択代行サービス「きめま所」</h1>
            <p className="tagline">あなたの代わりに、私たちが選びます。</p>
            <p className="description">
              日々の選択に疲れていませんか？大小問わず、決断するのが面倒な時はぜひ当サービスにお任せください。<br/>
              プロフェッショナルな視点で、あなたに代わって選択します。
            </p>
          </div>
        </section>


        {/* サービスについて（3ステップ説明） */}
         <section id="service" className="service-section">
                <h2>選択代行サービスの使い方</h2>
                 <p>あなたの選択をサポートする、簡単な3ステップ。</p>
  
              <div className="steps-container">
              <div className="step">
                <div className="step-icon">1</div>
              <h3>選択肢を入力</h3>
                  <p>決められない2つの選択肢を入力します。</p>
               </div>
             <div className="step">
               <div className="step-icon">2</div>
               <h3>選択代行ボタンを押す</h3>
             <p>選択代行ボタンを押して、あなたの代わりに選択をします。</p>
                    </div>
             <div className="step">
             <div className="step-icon">3</div>
            <h3>選択結果が表示</h3>
              <p>選択結果が表示され、迷いが解消されます。</p>
              </div>
              </div>
         </section>


        <section id="service" className="service-section">
          <div className="container">
            <h2>サービスを試してみる</h2>

           {/* リンク先を /select（DecisionPage）に設定 */}
           <Link to="/select" className="button">
                     選択代行を使う
           </Link>
         </div>
        </section>

        <section id="recommendations" className="recommendations-section">
          <div className="container">
            <Recommendations />
          </div>
        </section>


        <section id="pricing" className="pricing-section">
          <div className="pricing">
            <Pricing />
          </div>
        </section>

        <section id="faq" className="faq-section">
          <div className="container">
            <FAQ />
          </div>
        </section>

        <section id="contact" className="contact-section">
          <div className="container">
            <h2>メール相談</h2>
            <p>選択に関する悩みがあれば、お気軽にご相談ください。</p>
            <ContactForm />
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default App;