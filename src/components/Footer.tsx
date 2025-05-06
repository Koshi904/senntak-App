import { useLocation } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();
  const currentYear = new Date().getFullYear();

  // /decision ページでは表示しない
  if (location.pathname === '/select') {
    return null;
  }
  
  // ヘッダーと同様のスクロール機能
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>きめま所</h3>
            <p>あなたの選択を、私たちが代行します。</p>
          </div>
          
          <div className="footer-section">
            <h4>リンク</h4>
            <ul>
              <li><a href="#home" onClick={(e) => handleNavClick(e, 'home')}>ホーム</a></li>
              <li><a href="#service" onClick={(e) => handleNavClick(e, 'service')}>サービス内容</a></li>
              <li><a href="#pricing" onClick={(e) => handleNavClick(e, 'pricing')}>料金について</a></li>
              <li><a href="#recommendations" onClick={(e) => handleNavClick(e, 'recommendations')}>おすすめ</a></li>
              <li><a href="#faq" onClick={(e) => handleNavClick(e, 'faq')}>よくある質問</a></li>
              <li><a href="#contact" onClick={(e) => handleNavClick(e, 'contact')}>メール相談</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>お問い合わせ</h4>
            <p>メール: info@sentakupro.jp</p>
            <p>営業時間: 平日 9:00-18:00</p>
          </div>
        </div>
        
        <div className="copyright">
          <p>&copy; {currentYear} きめま所 選択代行サービス All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;