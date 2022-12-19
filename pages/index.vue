<template>
    <div class="text-[40px] text-red-600"> {{ $t('hello') }} World !!!!</div>
</template>

<script setup lang="ts">
 import { useI18n } from 'vue-i18n';
    import {ref} from 'vue'
    const {t} = useI18n({useScope:'global'});
</script>