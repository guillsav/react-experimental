import React, { useRef } from 'react';

import left from '../lib/arrow-left-bold.svg';
import right from '../lib/arrow-right-bold.svg';

import css from '../css/Carousel.module.css';

function Button(props) {
  const buttonEl = useRef(null);

  function scroll() {
    console.log(props.listRef);
    const sW = props.listRef.current.scrollWidth;
    const childrenCount = props.listRef.current.childElementCount;
    const move =
      (sW / (childrenCount / 2)) * (props.scroll === 'left' ? -1 : 1);

    props.listRef.current.scrollBy({
      top: 0,
      left: move,
      behavior: 'smooth'
    });
  }

  function blur() {
    buttonEl.current.blur();
  }

  return (
    <button
      ref={buttonEl}
      className={css.button}
      onClick={scroll}
      onPointerUp={blur}
      style={
        props.scroll === 'left' ? { left: '-1.6rem' } : { right: '-1.6rem' }
      }
    >
      <img
        src={props.scroll === 'left' ? left : right}
        alt={`${props.scroll} carousel scroll button`}
      />
    </button>
  );
}

export default function Carousel(props) {
  const listEl = useRef(null);

  function checkMobile() {
    if (window.matchMedia('(pointer: coarse)').matches) return false;
    else return true;
  }

  return (
    <div className={css.container}>
      {checkMobile() && <Button scroll="left" listRef={listEl} />}
      <ul ref={listEl} className={css.list}>
        {props.children}
      </ul>
      {checkMobile() && <Button scroll="right" listRef={listEl} />}
    </div>
  );
}
