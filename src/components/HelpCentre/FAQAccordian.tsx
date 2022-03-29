import React, { useState, useRef, useEffect } from 'react';
import "./Accordion.css";
import Chevron from './Chevron';



function FAQAccordion({key, idx, title, cont, isOpen, setIdxOfOpenedAccordion}: any) { 

 

  const [ setActive, setActiveState ] = useState(isOpen ? 'accordion--active' : '');
  const [ setHeight, setHeightState ] = useState('0px');
  const [ setRotate, setRotateState ] = useState('accordion__icon');
  let chevronSize = 15;
 
  useEffect(
    () => {
      if (isOpen) {
        setActiveState('accordion--active');
        let scrollHeight = (content.current)?  content.current.scrollHeight : 0;
        setHeightState(`${scrollHeight}px`);
        setRotateState('accordion__icon rotate');
      } else {
        setActiveState('');
        setHeightState('0px');
        setRotateState('accordion__icon');
      }
    },
    [ isOpen ]
  );

  const content = useRef<HTMLDivElement>(null);

  function toggleAccordion() {
    if (isOpen) {
      setIdxOfOpenedAccordion(-1);
    } else {
      setIdxOfOpenedAccordion(idx);
    }
  }

 

  return (
    <>
    <div className="accordion__section">
      <button className={`accordion ${setActive}`} onClick={toggleAccordion}>
        <table style={{width: "100%"}}><tr>
          <td>
        <p className="accordion__title">{title}</p>
        </td><td align="right">
        <Chevron className={`${setRotate}`} width={chevronSize} height={chevronSize} fill={'#000000'} />
        </td>
        </tr></table>
      </button>
      <div ref={content} style={{ maxHeight: `${setHeight}` }} className="accordion__content">
        <div className="accordion__text">{cont}</div>
      </div>
    </div>
    </>
  );
}

export default FAQAccordion;