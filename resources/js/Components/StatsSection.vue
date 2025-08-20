<script setup>
import { computed, ref } from 'vue'

const props = defineProps({
    kabupatens: Array,
    wisatas: Array,
    __t: Function,
    statsWisata: Number
})

const averageRating = computed(() => {
    if (!props.wisatas || props.wisatas.length === 0) return '0.0'
    const total = props.wisatas.reduce((sum, wisata) => sum + parseFloat(wisata.rating), 0)
    return (total / props.wisatas.length).toFixed(1)
})

const stats = ref([
    {
        title: props.__t('home.stats.regencies'),
        icon: 'ti ti-building-community',
        value: props.kabupatens.length
    },
    {
        title: props.__t('home.stats.destinations'),
        icon: 'ti ti-map',
        value: props.statsWisata
    },
    {
        title: props.__t('home.stats.average_rating'),
        icon: 'ti ti-star',
        value: averageRating.value
    },
    {
        title: props.__t('home.stats.visitors'),
        icon: 'ti ti-users',
        value: '10K+'
    }
])
</script>

<template>
    <section class="py-12 bg-primary-600 relative overflow-hidden">
        <div class="absolute top-0 left-0 w-full h-full bg-[url('/assets/images/bg-pattern.png')] z-0 opacity-5"></div>
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
                <div v-for="stat in stats" :key="stat.title" class="group text-center bg-white/10 hover:bg-white px-4 py-6 rounded-lg cursor-pointer transition-all duration-300">
                    <div class="w-16 h-16 bg-white group-hover:bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                        <i class="text-primary-600 group-hover:text-white text-2xl" :class="stat.icon"></i>
                    </div>
                    <div class="text-3xl font-bold text-white group-hover:text-gray-900 mb-2">{{ stat.value }}</div>
                    <div class="text-gray-200 group-hover:text-gray-600">{{ stat.title }}</div>
                </div>
            </div>
        </div>
    </section>
</template>