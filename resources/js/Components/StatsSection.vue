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
    <section class="px-4 sm:px-6 lg:px-8 bg-white">
        <div class="max-w-7xl mx-auto bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 sm:p-16 p-4 relative z-10 rounded-2xl">
            <div class="grid grid-cols-1 lg:grid-cols-4 gap-4 sm:gap-8">
                <div v-for="stat in stats" :key="stat.title" class="group text-center bg-white/10 hover:bg-white/20 px-4 py-6 rounded-2xl cursor-pointer transition-all duration-300">
                    <div class="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                        <i class="text-white text-2xl" :class="stat.icon"></i>
                    </div>
                    <div class="text-3xl font-bold text-white mb-2">{{ stat.value }}</div>
                    <div class="text-gray-200">{{ stat.title }}</div>
                </div>
            </div>
        </div>
    </section>
</template>