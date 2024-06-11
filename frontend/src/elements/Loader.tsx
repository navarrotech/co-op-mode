// Copyright © 2024 Navarrotech

import styles from '@/sass/loader.module.sass'

type Props = {
    fullscreen?: boolean
}

const Element = <div className={styles.customLoader} />

export default function Loader(props: Props){
    if (!props.fullscreen) {
        return Element
    }

    return <section className="section">
        <div className="hero is-fullheight">
            <div className="hero-body">
                <div className="container has-text-centered">{
                    Element
                }</div>
            </div>
        </div>
    </section>
}
