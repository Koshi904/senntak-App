interface Recommendation {
    title: string;
    description: string;
    icon: string;
  }
  
  const Recommendations = () => {
    const recommendations: Recommendation[] = [
      {
        title: '優柔不断な方',
        description: '日常の小さな決断に時間をかけすぎてしまう方。レストランでのメニュー選びや、買い物での商品選択など、細かな決断を効率化できます。',
        icon: '🤔'
      },
      {
        title: '決断疲れしている方',
        description: '毎日多くの決断を下すことに疲れを感じている方。意思決定の負担を減らし、重要なことに集中するエネルギーを確保できます。',
        icon: '😩'
      },
      {
        title: '新しい選択肢を探している方',
        description: 'いつも同じ選択をしてしまう方。ランダムな選択によって、新しい体験や可能性に出会うきっかけを作ります。',
        icon: '🔍'
      },
      {
        title: 'グループでの意見調整が難しい方',
        description: '友人や家族との意見が分かれた時に、公平な第三者としての判断を求める方。対人関係のストレスを軽減します。',
        icon: '👥'
      }
    ];
  
    return (
      <div className="recommendations-container">
        <h2>こんな方におすすめ</h2>
        <div className="recommendations-grid">
          {recommendations.map((item, index) => (
            <div key={index} className="recommendation-card">
              <div className="recommendation-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Recommendations;