<script setup lang="ts">
export type AlertType = "info" | "error"

export interface AlertProps {
    type: AlertType
}

const props = defineProps<AlertProps>()
</script>

<template>
    {{ props.type }}
</template>