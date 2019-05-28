export default {
    dismiss: event => event.target.parent(MyModule.defaultProps.name).addModifier('hidden')
}