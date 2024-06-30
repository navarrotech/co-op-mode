// Copyright © 2024 Navarrotech

export default function Loader() {
    return <div className="customLoader" />
}

export function LoaderLayout() {
    return <section className="section">
        <div className="hero is-fullheight">
            <div className="hero-body">
                <figure className="image is-128x128">
                    <img src="/logo.png" alt="Co-Op Mode Logo" />
                </figure>
            </div>
        </div>
    </section>
}
