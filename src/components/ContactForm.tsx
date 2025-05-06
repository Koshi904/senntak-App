// src/components/ContactForm.tsx
import { useState, FormEvent } from 'react';
import emailjs from 'emailjs-com';

const SERVICE_ID = 'service_oiqms8h';
const TEMPLATE_ID = 'template_lkg5nry';
const PUBLIC_KEY = 'm_3T_05j5b3P-ZN-0';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setError('すべての必須項目を入力してください');
      return;
    }

    if (!formData.email.includes('@')) {
      setError('有効なメールアドレスを入力してください');
      return;
    }

    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, formData, PUBLIC_KEY);

      setError('');
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });

      setTimeout(() => setSubmitted(false), 5000);
    } catch (err) {
      console.error('送信エラー:', err);
      setError('送信に失敗しました。もう一度お試しください。');
    }
  };

  const subjectOptions = [
    '選択に関する相談',
    'サービスについての質問',
    '料金について',
    '人生相談',
    '世間話',
    'その他のお問い合わせ'
  ];

  return (
    <div className="contact-form-container">
      {submitted ? (
        <div className="success-message">
          <h3>お問い合わせありがとうございます！</h3>
          <p>メッセージが正常に送信されました。担当者から48時間以内にご連絡いたします。</p>
        </div>
      ) : (
        <form className="contact-form" onSubmit={handleSubmit}>
          {/* 名前 */}
          <div className="form-group">
            <label htmlFor="name">お名前 <span className="required">*</span></label>
            <input
              type="text" id="name" name="name"
              value={formData.name} onChange={handleChange}
              required placeholder="山田 太郎"
            />
          </div>
          {/* メール */}
          <div className="form-group">
            <label htmlFor="email">メールアドレス <span className="required">*</span></label>
            <input
              type="email" id="email" name="email"
              value={formData.email} onChange={handleChange}
              required placeholder="example@mail.com"
            />
          </div>
          {/* 件名 */}
          <div className="form-group">
            <label htmlFor="subject">お問い合わせ内容</label>
            <select
              id="subject" name="subject"
              value={formData.subject} onChange={handleChange}
            >
              <option value="">選択してください</option>
              {subjectOptions.map((opt, i) => (
                <option key={i} value={opt}>{opt}</option>
              ))}
            </select>
          </div>
          {/* 本文 */}
          <div className="form-group">
            <label htmlFor="message">メッセージ <span className="required">*</span></label>
            <textarea
              id="message" name="message"
              value={formData.message} onChange={handleChange}
              required placeholder="お問い合わせ内容を詳しくお書きください"
              rows={5}
            />
          </div>
          {/* エラー */}
          {error && <p className="error-message">{error}</p>}
          {/* 送信ボタン */}
          <div className="form-actions">
            <button type="submit" className="submit-button">送信する</button>
          </div>
          <p className="privacy-notice">
            ※ ご提供いただいた個人情報は、お問い合わせ対応のみに使用し、第三者には提供しません。
          </p>
        </form>
      )}
      {/* 直接連絡先 */}
      <div className="contact-info">
        <h4>直接のお問い合わせ</h4>
        <p>お急ぎの場合は、以下の連絡先までご連絡ください：</p>
        <p><strong>メール：</strong>info@sentakupro.jp</p>
      </div>
    </div>
  );
};

export default ContactForm;
