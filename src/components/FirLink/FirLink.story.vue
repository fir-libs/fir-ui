<script setup lang="ts">
import '../../styles/main.css'
import FirLink from './FirLink.vue';
import { logEvent } from 'histoire/client'
</script>

<template>
    <Story title="Link">
        <FirLink href="#" @click.prevent="logEvent('Click', $event)">
            Link
        </FirLink> 
    </Story>
</template>