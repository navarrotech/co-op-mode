// Copyright © 2024 Navarrotech

import Keycloak from 'keycloak-js';

const keycloak = new Keycloak({
    url: 'http://localhost:8080',
    realm: 'Libertea',
    clientId: 'libertea',
})

export default keycloak
