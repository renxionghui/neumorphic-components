import './theme/button.scss'

import NcButton from './button'

const components = [
    NcButton
]

const install = (app) => {
    components.forEach(component => {
        app.component(component.name, component)
    })
}

export default install