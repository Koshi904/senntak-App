import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ = () => {
  const faqs: FAQItem[] = [
    {
      question: 'このサービスは本当に私の代わりに選択してくれるのですか？',
      answer: 'はい、当サービスはあなたが提供した2つの選択肢からランダムに1つを選択します。選択に迷った時に、客観的な第三者の視点で決断をサポートします。'
    },
    {
      question: '料金はかかりますか？',
      answer: '基本的な選択代行サービスは無料でご利用いただけます。より高度な選択や、継続的なサポートをご希望の場合は、有料プランをご検討ください。詳細は料金ページをご覧ください。'
    },
    {
      question: '重要な決断にも利用できますか？',
      answer: '当サービスは日常の小さな決断から、比較的重要でない選択のサポートを目的としています。人生の重大な決断については、専門家への相談や十分な情報収集を行った上でご判断されることをお勧めします。'
    },
    {
      question: '選択結果に納得できない場合はどうすればいいですか？',
      answer: '再度選択を依頼することができます。ただし、選択に悩んでいる場合は、最初の結果を尊重してみることで、新たな視点や可能性が開けることもあります。'
    },
    {
      question: '友人や家族との意見の相違を解決するために使えますか？',
      answer: '当サービスを第三者の意見として活用いただくことは可能です。ただし、重要な問題や対人関係の課題については、オープンな対話や適切な調停を行うことをお勧めします。'
    },
    {
      question: '選択のアルゴリズムはどのように機能していますか？',
      answer: '当サービスは完全にランダムな選択を行っています。これにより、偏りのない公平な決断をサポートします。将来的には、ユーザーの好みや過去の選択を考慮したパーソナライズド機能の追加も検討しています。'
    },
    {
      question: '誤った選択で物事が上手く行きませんでした。責任取ってくれますか？',
      answer: '本サービスは意思決定をサポートするものであって、法律的・金銭的・生命的な結果については一切の責任を負いません。最終決断は貴方自身に委ねられています。'
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <h2>よくある質問</h2>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div 
            key={index} 
            className={`faq-item ${openIndex === index ? 'open' : ''}`}
          >
            <div 
              className="faq-question"
              onClick={() => toggleFAQ(index)}
            >
              <h3>{faq.question}</h3>
              <span className="faq-toggle">{openIndex === index ? '−' : '+'}</span>
            </div>
            
            {openIndex === index && (
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;