<template>
    <NcButton disabled @click="handleClick" type='primary'>Button</NcButton>
    <NcButton disabled round size='medium'>Button</NcButton>
    <NcButton type='primary' circle size='small'> B </NcButton>
    <NcButton round size='mini'>Button</NcButton>
</template>

<script setup>
const handleClick = (evt) => {
    console.log(evt)
}
</script>

<style scoped>
</style>
