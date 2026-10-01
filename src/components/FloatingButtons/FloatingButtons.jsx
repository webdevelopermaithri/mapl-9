import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaWhatsapp } from 'react-icons/fa';
import { IoChatbubbleEllipsesOutline, IoClose, IoSend } from 'react-icons/io5';
import { getAIResponse, QUICK_QUESTIONS } from '../../utils/chatAssistant.js';
import { tm } from '../../utils/formatTM.jsx';
import './FloatingButtons.css';

// Used once, globally, in App.jsx — every page gets the same
// WhatsApp / Chat buttons instead of each page defining its own.
//
// The Chat button opens the MEGHDOOT guide: a small chat panel that
// greets visitors as Maithri Aquatech, answers questions about MEGHDOOT
// (technology, product range, applications, impact, pricing) using the
// local knowledge base in utils/chatAssistant.js, and hands off to
// WhatsApp/sales when needed.
function FloatingButtons() {
  const navigate = useNavigate();
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [quickMenuOpen, setQuickMenuOpen] = useState(false);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const containerRef = useRef(null);
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      text: 'Hi, this is Maithri Aquatech Pvt Ltd.',
    },
    {
      role: 'assistant',
      text: 'How may I help you?',
    },
  ]);
  const scrollRef = useRef(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' });
  }, [messages, isTyping]);

  // Close the collapsed quick-menu on outside click, and on any scroll
  // (the hero carousel + most pages scroll internally/on window) so it
  // never lingers open on top of content the visitor has moved past.
  useEffect(() => {
    if (!quickMenuOpen) return undefined;

    const handleOutsideClick = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setQuickMenuOpen(false);
      }
    };
    const handleScroll = () => setQuickMenuOpen(false);

    document.addEventListener('mousedown', handleOutsideClick);
    document.addEventListener('touchstart', handleOutsideClick);
    window.addEventListener('scroll', handleScroll, true);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('touchstart', handleOutsideClick);
      window.removeEventListener('scroll', handleScroll, true);
    };
  }, [quickMenuOpen]);

  const send = async (text) => {
    const trimmed = text.trim();
    if (!trimmed) return;
    const history = messages.map((m) => ({ role: m.role, content: m.text }));
    setMessages((prev) => [...prev, { role: 'user', text: trimmed }]);
    setInput('');
    setIsTyping(true);
    const reply = await getAIResponse(trimmed, history);
    setMessages((prev) => [...prev, { role: 'assistant', text: reply }]);
    setIsTyping(false);
  };

  // "Contact sales" — take the visitor to the Contact section on the
  // Design Your Water System page (ScrollToHash, rendered once in
  // App.jsx, smooth-scrolls to #contact once that page has mounted).
  const goToContactSales = () => {
    navigate('/design-your-water-system#contact');
    setIsChatOpen(false);
  };

  return (
    <div ref={containerRef} className="floating-buttons" role="group" aria-label="Quick contact options">
      {isChatOpen && (
        <div className="chat-panel" role="dialog" aria-label="Chat with the MEGHDOOT® guide">
          <div className="chat-panel__header">
            <div className="chat-panel__avatar">M</div>
            <div className="chat-panel__header-text">
              <div className="chat-panel__name">Maithri Aquatech</div>
              <div className="chat-panel__role">MEGHDOOT<sup className="tm-mark">®</sup> GUIDE</div>
            </div>
            <button
              type="button"
              className="chat-panel__close"
              onClick={() => setIsChatOpen(false)}
              aria-label="Close chat"
            >
              <IoClose size={20} aria-hidden="true" />
            </button>
          </div>

          <div ref={scrollRef} className="chat-panel__messages">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`chat-bubble-row ${m.role === 'user' ? 'chat-bubble-row--user' : ''}`}
              >
                <div className={`chat-bubble ${m.role === 'user' ? 'chat-bubble--user' : 'chat-bubble--assistant'}`}>
                  {tm(m.text)}
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="chat-bubble-row">
                <div className="chat-bubble chat-bubble--assistant chat-bubble--typing">Typing…</div>
              </div>
            )}

            {messages.length <= 2 && (
              <div className="chat-quick-questions">
                {QUICK_QUESTIONS.map((q) => (
                  <button key={q} type="button" className="chat-quick-question" onClick={() => send(q)}>
                    {q}
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="chat-panel__input-area">
            <div className="chat-panel__input-row">
              <input
                className="chat-panel__input"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && send(input)}
                placeholder="Ask a question..."
              />
              <button
                type="button"
                className="chat-panel__send"
                onClick={() => send(input)}
                aria-label="Send message"
              >
                <IoSend size={16} aria-hidden="true" />
              </button>
            </div>
            <button
              type="button"
              className="chat-panel__sales"
              onClick={goToContactSales}
            >
              CONTACT SALES
            </button>
          </div>
        </div>
      )}

      <div className={`floating-quick-menu ${quickMenuOpen ? 'is-open' : ''}`}>
        <a
          className="floating-button floating-whatsapp"
          href="https://api.whatsapp.com/send/?phone=917702291519&text=Hi+Maithri+Aquatech%21+I%27d+like+to+know+more+about+your+water-from-air+systems.&type=phone_number&app_absent=0"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
        >
          <FaWhatsapp size={18} aria-hidden="true" /> WhatsApp
        </a>
        <button
          type="button"
          className="floating-button floating-chat"
          onClick={() => {
            setIsChatOpen((v) => !v);
            setQuickMenuOpen(false);
          }}
          aria-expanded={isChatOpen}
          aria-label={isChatOpen ? 'Close chat' : 'Open chat'}
        >
          <IoChatbubbleEllipsesOutline size={18} aria-hidden="true" /> {isChatOpen ? 'Close' : 'Chat'}
        </button>
      </div>

      {/* Single collapsed toggle — only shown on small screens (see
          FloatingButtons.css). Tapping it reveals the WhatsApp/Chat pair
          above it instead of both always sitting on screen at once, so the
          floating widget takes up far less room over whatever's beneath
          it as the page scrolls. */}
      <button
        type="button"
        className="floating-fab-toggle"
        onClick={() => setQuickMenuOpen((v) => !v)}
        aria-expanded={quickMenuOpen}
        aria-label={quickMenuOpen ? 'Close quick contact menu' : 'Open quick contact menu'}
      >
        {quickMenuOpen ? (
          <IoClose size={22} aria-hidden="true" />
        ) : (
          <IoChatbubbleEllipsesOutline size={22} aria-hidden="true" />
        )}
      </button>
    </div>
  );
}

export default FloatingButtons;
