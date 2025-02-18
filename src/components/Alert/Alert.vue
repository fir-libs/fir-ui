<script setup lang="ts">
type AlertType = "info" | "error"

interface AlertProps {
    type: AlertType
}

const props = defineProps<AlertProps>()
</script>

<template>
    {{ props.type }}
</template>