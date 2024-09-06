// Copyright © 2024 Navarrotech

import styles from './Meme.module.sass'

type Props = {
  imageUrl: string
  topText: string
  bottomText: string
  className?: string
}

export function Meme({ imageUrl, className, topText, bottomText, }: Props) {
  return <div className={`${styles.meme} ${className}`}>
    <figure className='image is-fluid'>
      <img src={imageUrl} alt='Meme' />
    </figure>
    <div className={styles.top}>{topText}</div>
    <div className={styles.bottom}>{bottomText}</div>
  </div>
}
