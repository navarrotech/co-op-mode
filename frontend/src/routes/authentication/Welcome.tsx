// Copyright © 2024 Navarrotech
import { Navigate } from 'react-router'
import { Link } from 'react-router-dom'

// UI
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import styles from "./auth.module.sass"

// Redux
import { useSelector } from '@/store'

// Utility
import { Trans, useTranslation } from 'react-i18next'
import LanguageChooser from '@/elements/LanguageChooser'
import urls from '../urls'

export default function Welcome() {
    const isAuthorized = useSelector(state => state.user.authorized)
    const { t } = useTranslation()

    if (isAuthorized) {
        return <Navigate to="/app" />
    }

    return <section className={"section " + styles.welcome}>
        <div className="container is-max-fullhd is-stacked">
            <div className="block has-text-centered">
                <h1 className="title is-2">{ t('brand_name') }</h1>
                <h2 className="subtitle is-3">{ t('brand_subtitle') }</h2>
            </div>
            <figure className="block image is-160x160 is-centered">
                <img src="/logo.png" alt="Co-Op Mode" />
            </figure>
            <div className="block v-spacer" />
            <div className="block buttons is-centered">
                <Link to={urls.discord} className="button is-logo is-discord is-fullwidth">
                    <span className="icon">
                        <img src="/brands/discord.svg" alt="Discord Logo" />
                    </span>
                    <span>{t('sign_in_with_discord')}</span>
                </Link>
                <Link to={urls.google} className="button is-logo is-google is-fullwidth">
                    <span className="icon">
                        <img src="/brands/google.svg" alt="Google Logo" />
                    </span>
                    <span>{t('sign_in_with_google')}</span>
                </Link>
                <Link to={urls.phoneStart} className="button is-logo is-white is-fullwidth">
                    <span className="icon">
                        <FontAwesomeIcon icon={faPhone} />
                    </span>
                    <span>{t('sign_in_with_phone')}</span>
                </Link>
            </div>
            <div className="block has-text-centered centered is-size-7">
                <p className='field has-text-pretty' style={{ maxWidth: '225px' }}>
                    <Trans
                        t={t}
                        i18nKey="terms_agreement"
                        components={[
                            <Link key={0} to={urls.termsOfService}>
                                { t('terms_of_service') }
                            </Link>,
                            <Link key={1} to={urls.privacyPolicy}>
                                { t('privacy_policy') }
                            </Link>,
                        ]}
                    />
                </p>
                <LanguageChooser />
            </div>
        </div>
    </section>
}
