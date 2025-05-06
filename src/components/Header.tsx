import { useState } from 'react';
import { Link,useLocation } from 'react-router-dom';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isHomePage = location.pathname === "/";

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    
    // モバイルメニューが開いている場合は閉じる
    setMobileMenuOpen(false);
    
    // 対象の要素を取得してスクロール
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="header">
      <div className="container header-container">
        <div className="logo">
          <h1>きめま所</h1>
          <p>選択代行サービス</p>
        </div>
        
        <button 
          className="mobile-menu-button" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? '✕' : '☰'}
        </button>
        
        <nav className={`main-nav ${mobileMenuOpen ? 'open' : ''}`}>
          <ul>
          <li>
              {isHomePage ? (
                <a href="#home" onClick={(e) => handleNavClick(e, 'home')}>ホーム</a>
              ) : (
                <Link to="/">ホーム</Link>
              )}
            </li>
            {/* 以下はスクロール専用なのでホーム以外では非表示でもOK */}
            {isHomePage && (
            <>
             <li><a href="#service" onClick={(e) => handleNavClick(e, 'service')}>サービス内容</a></li>
             <li><a href="#pricing" onClick={(e) => handleNavClick(e, 'pricing')}>料金について</a></li>
             <li><a href="#recommendations" onClick={(e) => handleNavClick(e, 'recommendations')}>おすすめ</a></li>
             <li><a href="#faq" onClick={(e) => handleNavClick(e, 'faq')}>よくある質問</a></li>
             <li><a href="#contact" onClick={(e) => handleNavClick(e, 'contact')}>メール相談</a></li>
            </>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;