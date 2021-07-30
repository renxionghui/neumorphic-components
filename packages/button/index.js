import NcButton from './src/NcButton.vue'

NcButton.install = (app) => {
    app.component(NcButton.name, NcButton)
}

export default NcButton;