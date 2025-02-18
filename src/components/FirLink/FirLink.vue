<script setup lang="ts">
import { LinkHTMLAttributes } from 'vue';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface FirLinkProps extends /** @vue-ignore */ LinkHTMLAttributes { }

const props = withDefaults(defineProps<FirLinkProps>(), {
    href: ''
});
</script>

<template>
    <a :href="props.href" class="fir-link__root">
        <slot></slot>
    </a>
</template>

<style>
.fir-link__root {
    font-family: var(--fir-global-font-family);
    font-size: var(--fir-global-font-size-medium);
    text-decoration: none;
    color: var(--fir-link-color);
    transition: var(--fir-global-duration);
}
.fir-link__root:visited {
    color: var(--fir-link-visited-color);
}
.fir-link__root:active {
    color: var(--fir-link-active-color);
}
.fir-link__root:hover {
    color: var(--fir-link-hover-color);
}
</style>