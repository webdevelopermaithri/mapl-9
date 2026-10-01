import { useState } from 'react';
import faqs from '../../data/faqs';
import { tm } from '../../utils/formatTM.jsx';
import './FAQSection.css';

function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => {
    setOpenIndex((current) => (current === index ? -1 : index));
  };

  return (
    <section className="faq-section section" aria-labelledby="faq-heading">
      <span className="eyebrow">FAQ</span>
      <h2 id="faq-heading" className="faq-heading">
        Common <span className="italic-accent">questions.</span>
      </h2>

      <div className="faq-list">
        {faqs.map((item, index) => {
          const isOpen = openIndex === index;
          const panelId = `faq-panel-${index}`;
          const buttonId = `faq-button-${index}`;
          return (
            <div className="faq-item" key={item.question}>
              <button
                type="button"
                id={buttonId}
                className="faq-question"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggle(index)}
              >
                <span>{tm(item.question)}</span>
                <span className={`faq-toggle ${isOpen ? 'is-open' : ''}`} aria-hidden="true">
                  {isOpen ? '×' : '+'}
                </span>
              </button>
              {isOpen && (
                <p className="faq-answer" id={panelId} role="region" aria-labelledby={buttonId}>
                  {tm(item.answer)}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default FAQSection;
