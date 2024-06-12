// Copyright © 2024 Navarrotech

// React.js
import { createRoot } from 'react-dom/client'

// Application
import Initialization from './store/Initialization'
import ApplicationRouter from './routes/Router'

// Firebase
import './firebase'

// Redux
import { Provider as ReduxProvider } from 'react-redux'
import store from './store/store'

// Core CSS packages
import './index.sass'

const container = document.getElementById('root') as HTMLElement
const root = createRoot(container)

root.render(
    <ReduxProvider store={store}>
        <Initialization>
            <ApplicationRouter />
        </Initialization>
    </ReduxProvider>
)
