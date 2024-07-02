// Copyright © 2024 Navarrotech

import { useTranslation } from "react-i18next"

type Props = {
  message: string
}

export default function ErrorLayout({ message }: Props) {
  const { t } = useTranslation()

  return <section className="section is-danger">
    <div className="hero is-fullheight">
      <div className="hero-body p-0">
          <div>
              <figure className="block image is-128x128 is-centered">
                  <img src="/logo.png" alt={ t('brand_name') } />
              </figure>
              <div className="block has-text-centered">
                  <h1 className="title is-4">{ t('something_went_wrong') }</h1>
              </div>
              <div className="block has-text-centered mb-6">
                <p>{ message }</p>
              </div>
          </div>

      </div>
    </div>
  </section>
}
