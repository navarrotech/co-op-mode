// Copyright © 2024 Navarrotech

// Typescript
import type { IMedia } from '@/modules/protobuf/schema'

// React.js
import { useState } from 'react'

// Misc
import styles from './Dating.module.sass'

type Props = {
  media: IMedia[]
  className?: string
}

export function Slideshow({ media, className = '', }: Props) {
  const [ index, setIndex, ] = useState<number>(0)

  media = [ ...media, ...media, ...media, ]

  function next() {
    if (index > media.length - 1) {
      return
    }
    setIndex(index + 1)
  }

  function prev() {
    if (index <= 0) {
      return
    }
    setIndex(index - 1)
  }

  const imagesToShow = media.map((item, i) => {
    return (
      <div
        key={i}
        className={styles.fullScreenImage}
        style={{ backgroundImage: `url(${item.url})`, }}
      />
    )
  })

  if (media.length >= 4) {
    imagesToShow.unshift(
      <div className={styles.gridView} key='grid-view'>
        {media.slice(0, 4).map((item, i) => (
          <div
            key={i}
            className={`${styles.gridItem}`}
            style={{ backgroundImage: `url(${item.url})`, }}
          />
        ))}
      </div>,
    )
  }

  return (
    <div className={`${styles.slideshow} ${className}`}>
      <div
        className={styles.slideshowContent}
        onClick={(event) => {
          const rect = event.currentTarget.getBoundingClientRect()
          const x = event.clientX - rect.left
          if (x < rect.width / 2) {
            prev()
          }
          else {
            next()
          }
        }}
      >
        { imagesToShow[index] }
      </div>
      <div className={styles.progressBar}>{
        imagesToShow.map((_, i) => (
          <div
            key={i}
            className={`${
              styles.progressBarChunk
            } ${
              i < index
                ? styles.previous 
                : i === index
                  ? styles.active
                  : ''
            }`}
          />
        ))
      }</div>
    </div>
  )
}
