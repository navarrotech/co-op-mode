// Copyright © 2024 Navarrotech

import { useTranslation } from 'react-i18next'

export default function Loader() {
  return <div className="customLoader" />
}

export function LoaderLayout() {
  const { t } = useTranslation()

  return <section className="section is-beautiful">
    <div className="hero is-fullheight">
      <div className="hero-body">
        <div className="container is-fluid p-0">
          <div className="block has-text-centered">
            <h1 className="title is-2">{ t('brand_name') }</h1>
            <h2 className="subtitle">{ t('brand_subtitle') }</h2>
          </div>
          <figure className="block image is-128x128 is-centered mb-6">
            <img src="/logo.png" alt={ t('brand_name') } />
          </figure>
        </div>
      </div>
    </div>
  </section>
}
