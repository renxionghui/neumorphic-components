<template>
    <button @click="handleClick" :disabled='disabled' :class="[
            'nc-button',
            type ? 'nc-button--' + type : '',
            size ? 'nc-button--' + size : '',
            round ? 'is-round' : '',
            circle ? 'is-circle' : ''
        ]">
        <slot></slot>
    </button>
</template>


<script setup>
defineProps({
    type: String,
    size: String,
    round: Boolean,
    circle: Boolean,
    disabled: Boolean
})

const emit = defineEmits(['click'])

const handleClick = (evt) => {
    emit('click', evt)
}
</script>
<script>
export default {
    name: 'NcButton'
}
</script>