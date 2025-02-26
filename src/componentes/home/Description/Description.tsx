'use client';
import { useState } from 'react';
import classNames from 'classnames/bind';

import Image from 'next/image';
import placeHolder from 'app/shared/placeholderImage';

import styles from './Description.module.sass';

export const Description = () => {
  const [hasBorder, setBorder] = useState(false);

  const handleClick = () => setBorder(!hasBorder);

  const cx = classNames.bind(styles);

  const buttonStyles = cx('Description__button', {
    'Description__button--border': hasBorder,
  });

  return (
    <section className={styles.Description}>
      <button onClick={handleClick} className={buttonStyles}>
        <div className={styles.Description__imageContainer}>
          <Image
            src='/images/description.jpeg'
            alt='products marketplace'
            fill
            priority={false}
            quality={30}
            placeholder='blur'
            blurDataURL={placeHolder.Description}
          />
        </div>
      </button>

      <div className={styles.Description__text}>
        <h2>Bring the future today</h2>
        <p>
          Future World: Your Gateway to Tomorrow Tech! Dive into a world of
          cutting-edge gadgets and gear. Stay ahead of the curve and redefine
          your digital lifestyle with us.
        </p>
      </div>
    </section>
  );
};
