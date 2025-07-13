<script setup>
import { Head, usePage } from '@inertiajs/vue3'
import AppLayout from '@/Layouts/AppLayout.vue'
import HeroSection from '@/Components/HeroSection.vue'
import PopularDestinationSection from '@/Components/PopularDestinationSection.vue'
import CTAAjelSection from '@/Components/CTAAjelSection.vue'
import RegenciesSection from '@/Components/RegenciesSection.vue'
import StatsSection from '@/Components/StatsSection.vue'
import CTAAjelSection2 from '@/Components/CTAAjelSection2.vue'
import ScrapeSection from '@/Components/ScrapeSection.vue'

const props = defineProps({
    kabupatens: Array,
    wisatas: Array,
    currentLang: String,
    destinations: Array
})

const page = usePage()

const __t = (key) => {
    const translations = page.props.translations || {}
    return key.split('.').reduce((obj, part) => obj && obj[part], translations) || key
}
</script>

<template>
    <AppLayout :current-lang="currentLang">
        <Head title="Jelajah Lampung Biru" />

        <!-- Hero Section -->
        <HeroSection :__t="__t" />

        <!-- CTA Ajel Section -->
        <CTAAjelSection :__t="__t" />

        <!-- Scrape Section -->
        <ScrapeSection :destinations="destinations" :__t="__t" />

        <!-- Stats Section -->
        <StatsSection :kabupatens="kabupatens" :wisatas="wisatas" :__t="__t" />

        <!-- Regencies Section -->
        <RegenciesSection :kabupatens="kabupatens" :__t="__t" />

        <!-- Popular Destinations -->
        <PopularDestinationSection :wisatas="wisatas" :__t="__t" />

        <!-- CTA Section -->
        <CTAAjelSection2 :__t="__t" />
    </AppLayout>
</template>
