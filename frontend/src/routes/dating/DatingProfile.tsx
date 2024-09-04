// Copyright © 2024 Navarrotech

// Typescript
import type { IDatingProfile, IMedia } from '@/modules/protobuf/schema'

// UI
import styles from './Dating.module.sass'
import Slideshow from './Slideshow'
import { Button } from '@/elements/Button'

// Utility
import { useTranslation } from 'react-i18next'

// Iconography
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faClose,
  faContactBook,
  faHeart,
  faPaperPlane,
  faPersonChalkboard,
  faPersonWalking,
  faQuoteLeft,
  faSearch,
  faStar,
  faUndo
} from '@fortawesome/free-solid-svg-icons'

type Props = {
  profile: IDatingProfile
}

const undoButtonStyle = styles.controlButton + ' ' + styles.undoButton
const dislikeButtonStyle = styles.controlButton + ' ' + styles.dislikeButton
const superlikeButtonStyle = styles.controlButton + ' ' + styles.superlikeButton
const likeButtonStyle = styles.controlButton + ' ' + styles.likeButton
const messageButtonStyle = styles.controlButton + ' ' + styles.messageButton

export default function DatingProfile({ profile }: Props) {
  const { t } = useTranslation()

  const { first_name } = profile?.user || { first_name: '' }
  const name = first_name || ''

  let media = profile.media || []

  const {
    // Core:
    age,
    distance,
    pronouns,
    bio,

    // Dynamic:
    prompts,

    // Video games
    fav_vgames,
    fav_vgenres,
    fav_vplatforms,
    fav_vcharacter,

    // Board games and tabletop
    likes_dnd,
    likes_anime,
    likes_bgames,
    fav_bgames,

    // Facts
    height,
    height_unit,
    known_langs,
    location,
    location2,

    // Career
    school,
    job_title,
    company,

    // Taste
    top_song,
    top_artist,

    // Settings
    use_smart_photos,
    dnd_mode
  } = profile

  let {
    // Core:
    gender,

    // Career
    education,
    
    // Lifestyle
    sexuality,
    looking_for,
    relationship,
    family_plans,
    workout,
    smokes,
    drinks,
    cannabis,
    
    // Personality breakdown
    personality
  } = profile

  // TOOD: Zodiac

  // Translate all of the enums
  if (sexuality) {
    sexuality = t(sexuality)
  }
  if (gender) {
    gender = t(gender)
  }
  if (education) {
    education = t(education)
  }
  if (sexuality) {
    sexuality = t(sexuality)
  }
  if (looking_for) {
    looking_for = t(looking_for)
  }
  if (relationship) {
    relationship = t(relationship)
  }
  if (family_plans) {
    family_plans = t(family_plans)
  }
  if (workout) {
    workout = t(workout)
  }
  if (smokes) {
    smokes = t(smokes)
  }
  if (drinks) {
    drinks = t(drinks)
  }
  if (cannabis) {
    cannabis = t(cannabis)
  }
  if (personality) {
    personality = t(personality)
  }

  console.log(profile)

  if (use_smart_photos) {
    const sortedMedia: IMedia[] = []
    const unsortedMedia: IMedia[] = []
  
    media!.forEach(m => {
      const totalLikes = (m.likes || 0) + (m.superlikes || 0)
      if (totalLikes >= 5) {
        sortedMedia.push(m)
      }
      else {
        unsortedMedia.push(m)
      }
    })
  
    // Sort media with at least 5 likes by most likes to least likes
    sortedMedia.sort((a, b) => {
      const aLikes = (a.likes || 0) + (a.superlikes || 0)
      const bLikes = (b.likes || 0) + (b.superlikes || 0)
      return bLikes - aLikes
    })
  
    // Randomize media with less than 5 likes
    unsortedMedia.sort(() => Math.random() - 0.5)
  
    // Combine the sorted and unsorted media
    media = [ ...sortedMedia, ...unsortedMedia ]
  }

  let heightText = ''
  if (height) {
    if (height_unit === 'Imperial') {
      const feet = Math.floor(height / 12)
      const inches = height % 12
      heightText = `${feet}ft ${inches}in`
    }
    else {
      heightText = `${height} cm`
    }
  }

  return <div className={styles.datingProfile}>

    {/* Matching controls: */}
    <div className={styles.controls}>
      <Button className={undoButtonStyle}>
        <span className='icon'>
          <FontAwesomeIcon icon={faUndo} />
        </span>
      </Button>
      <Button className={dislikeButtonStyle}>
        <span className='icon'>
          <FontAwesomeIcon icon={faClose} />
        </span>
      </Button>
      <Button className={superlikeButtonStyle}>
        <span className='icon'>
          <FontAwesomeIcon icon={faStar} />
        </span>
      </Button>
      <Button className={likeButtonStyle}>
        <span className='icon'>
          <FontAwesomeIcon icon={faHeart} />
        </span>
      </Button>
      <Button className={messageButtonStyle}>
        <span className='icon'>
          <FontAwesomeIcon icon={faPaperPlane} />
        </span>
      </Button>
    </div>

    {/* Profile content */}
    <div className={styles.details}>

      {/* Primary photo display */}
      <div className={'field ' + styles.primaryPhoto}>
        <Slideshow media={media} className={styles.photo} />
        <div className={'field ' + styles.titles}>
          <h1 className='is-size-4'>
            <strong>{ name }</strong>
            { age
              ? <span>, { age }</span>
              : <></>
            }
          </h1>
        </div>
      </div>

      {/* Favorite video games */}

      {/* Looking for */}
      <div className={styles.attributes}>
        <div className={styles.attributeTitleGroup}>
          <FontAwesomeIcon icon={faSearch} size='sm' />
          <label className={styles.attributeTitle}>{ t('section_title_looking') }</label>
        </div>
        <div className="field">
          <p className={styles.text + ' ' + styles.larger}>{ looking_for || t('not_sure_yet') }</p>
        </div>
        { relationship
          ? <div className='field tags are-medium'>
            <span className='tag is-dark'>{ relationship }</span>
          </div>
          : <></>
        }
      </div>

      {/* About me */}
      { bio
        ? <div className={styles.attributes}>
          <div className={styles.attributeTitleGroup}>
            <FontAwesomeIcon icon={faQuoteLeft} size='sm' />
            <label className={styles.attributeTitle}>{ t('section_title_about') }</label>
          </div>
          <p className={styles.text}>{ bio }</p>
        </div>
        : <></>
      }

      {/* Who I am */}
      { gender || pronouns || height || height_unit || known_langs || location
        ? <div className={styles.attributes}>
          <div className={styles.attributeTitleGroup}>
            <FontAwesomeIcon icon={faContactBook} size='sm' />
            <label className={styles.attributeTitle}>{ t('section_title_who') }</label>
          </div>
          { gender
            ? <div className={styles.attribute}>
              {/* <label className={styles.label}>Gender</label> */}
              <p className={styles.text}>{ gender }</p>
            </div>
            : <></>
          }
          { distance
            ? <div className={styles.attribute}>
              {/* <label className={styles.label}>Distance</label> */}
              <p className={styles.text}>{ t('distance_away_miles', { miles: distance }) }</p>
            </div>
            : <></>
          }
          { pronouns
            ? <div className={styles.attribute}>
              {/* <label className={styles.label}>Pronouns</label> */}
              <p className={styles.text}>{ pronouns }</p>
            </div>
            : <></>
          }
          { height
            ? <div className={styles.attribute}>
              {/* <label className={styles.label}>Height</label> */}
              <p className={styles.text}>{ heightText }</p>
            </div>
            : <></>
          }
          { known_langs
            ? <div className={styles.attribute}>
              {/* <label className={styles.label}>Languages</label> */}
              <p className={styles.text}>{ known_langs }</p>
            </div>
            : <></>
          }
          { location
            ? <div className={styles.attribute}>
              {/* <label className={styles.label}>Location</label> */}
              <p className={styles.text}>{ location }</p>
            </div>
            : <></>
          }
        </div>
        : <></>
      }

      {/* Lifestyle */}
      { sexuality || looking_for || family_plans || workout || smokes || drinks || cannabis
        ? <div className={styles.attributes}>
          <div className={styles.attributeTitleGroup}>
            <FontAwesomeIcon icon={faPersonWalking} size='sm' />
            <label className={styles.attributeTitle}>{ t('section_title_lifestyle') }</label>
          </div>
          { sexuality
            ? <div className={styles.attribute}>
              {/* <label className={styles.label}>sexuality</label> */}
              <p className={styles.text}>{ sexuality }</p>
            </div>
            : <></>
          }
          { looking_for
            ? <div className={styles.attribute}>
              {/* <label className={styles.label}>looking_for</label> */}
              <p className={styles.text}>{ looking_for }</p>
            </div>
            : <></>
          }
          { family_plans
            ? <div className={styles.attribute}>
              {/* <label className={styles.label}>family_plans</label> */}
              <p className={styles.text}>{ family_plans }</p>
            </div>
            : <></>
          }
          { workout
            ? <div className={styles.attribute}>
              {/* <label className={styles.label}>workout</label> */}
              <p className={styles.text}>{ workout }</p>
            </div>
            : <></>
          }
          { smokes
            ? <div className={styles.attribute}>
              {/* <label className={styles.label}>smokes</label> */}
              <p className={styles.text}>{ smokes }</p>
            </div>
            : <></>
          }
          { drinks
            ? <div className={styles.attribute}>
              {/* <label className={styles.label}>drinks</label> */}
              <p className={styles.text}>{ drinks }</p>
            </div>
            : <></>
          }
          { cannabis
            ? <div className={styles.attribute}>
              {/* <label className={styles.label}>cannabis</label> */}
              <p className={styles.text}>{ cannabis }</p>
            </div>
            : <></>
          }
        </div>
        : <></>
      }

      {/* Career */}
      { school || job_title || education || company 
        ? <div className={styles.attributes}>
          <div className={styles.attributeTitleGroup}>
            <FontAwesomeIcon icon={faPersonChalkboard} size='sm' />
            <label className={styles.attributeTitle}>{ t('section_title_career') }</label>
          </div>
          { school
            ? <div className={styles.attribute}>
              {/* <label className={styles.label}>school</label> */}
              <p className={styles.text}>{ school }</p>
            </div>
            : <></>
          }
          { job_title
            ? <div className={styles.attribute}>
              {/* <label className={styles.label}>job_title</label> */}
              <p className={styles.text}>{ job_title }</p>
            </div>
            : <></>
          }
          { education
            ? <div className={styles.attribute}>
              {/* <label className={styles.label}>education</label> */}
              <p className={styles.text}>{ education }</p>
            </div>
            : <></>
          }
          { company
            ? <div className={styles.attribute}>
              {/* <label className={styles.label}>company</label> */}
              <p className={styles.text}>{ company }</p>
            </div>
            : <></>
          }
        </div>
        : <></>
      }

      {/* Music tastes */}
      { top_song || top_artist 
        ? <div className={styles.attributes}>
          <div className={styles.attributeTitleGroup}>
            <FontAwesomeIcon icon={faSearch} size='sm' />
            <label className={styles.attributeTitle}>{ t('section_title_music') }</label>
          </div>
          { top_song
            ? <div className={styles.attribute}>
              {/* <label className={styles.label}>top_song</label> */}
              <p className={styles.text}>{ top_song }</p>
            </div>
            : <></>
          }
          { top_artist
            ? <div className={styles.attribute}>
              {/* <label className={styles.label}>top_artist</label> */}
              <p className={styles.text}>{ top_artist }</p>
            </div>
            : <></>
          }
        </div>
        : <></>
      }
    </div>
  </div>
}
