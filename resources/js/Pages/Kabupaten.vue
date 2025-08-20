<script setup>
import { ref, computed } from 'vue'
import { Head, Link, usePage } from '@inertiajs/vue3'
import AppLayout from '@/Layouts/AppLayout.vue'

const props = defineProps({
    kabupatens: Array,
    currentLang: String
})

const page = usePage()
const searchQuery = ref('')

// Translation helper
const __t = (key) => {
    const translations = page.props.translations || {}
    return key.split('.').reduce((obj, part) => obj && obj[part], translations) || key
}

// Filtered kabupatens based on search
const filteredKabupatens = computed(() => {
    if (!searchQuery.value) return props.kabupatens
    
    return props.kabupatens.filter(kabupaten => 
        kabupaten.nama_kabupaten.toLowerCase().includes(searchQuery.value.toLowerCase())
    )
})
</script>

<template>
    <AppLayout :current-lang="currentLang">
        <Head :title="__t('nav.regencies')" />

        <!-- Hero Section -->
        <section class="bg-primary-600 text-white py-16 relative overflow-hidden mt-20">
            <div class="absolute top-0 left-0 w-full h-full bg-[url('/assets/images/bg-pattern.png')] z-0 opacity-10"></div>
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                <h1 class="text-3xl lg:text-4xl font-bold mb-4">
                    {{ __t('regencies.title') }} {{ __t('regencies.subtitle') }}
                </h1>
                <p class="text-md lg:text-xl text-blue-100 max-w-3xl mx-auto">
                    {{ __t('regencies.description') }}
                </p>
            </div>
        </section>

        <!-- Search & Filter Section -->
        <section class="py-8 bg-white border-b border-gray-200">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex flex-col md:flex-row gap-4 items-center justify-between">
                    <div class="relative flex-1 max-w-md">
                        <i class="ti ti-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                        <input 
                            v-model="searchQuery"
                            type="text" 
                            :placeholder="__t('regencies.search_placeholder')"
                            class="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        >
                    </div>
                    <div class="text-gray-600">
                        <span class="font-medium">{{ filteredKabupatens.length }}</span> {{ __t('regencies.total_regencies') }}
                    </div>
                </div>
            </div>
        </section>

        <!-- Regencies Grid -->
        <section class="py-12 bg-gray-50">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div v-if="filteredKabupatens.length === 0" class="text-center py-12">
                    <div class="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                        <i class="ti ti-search text-gray-400 text-3xl"></i>
                    </div>
                    <h3 class="text-xl font-semibold text-gray-900 mb-2">{{ __t('common.no_results') }}</h3>
                    <p class="text-gray-600">{{ __t('common.try_different_keywords') }}</p>
                </div>

                <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <Link :href="route('wisata', { kabupaten_id: kabupaten.id })" 
                        v-for="kabupaten in filteredKabupatens" 
                        :key="kabupaten.id"
                        class="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
                    >
                        <div class="p-6">
                            <div class="flex items-center justify-between mb-4">
                                <div class="w-16 h-16 flex items-center justify-center">
                                    <img :src="'/storage/' + kabupaten.logo" alt="">
                                </div>
                                <div class="text-right">
                                    <div class="text-2xl font-bold text-secondary-400">{{ kabupaten.wisatas_count || 0 }}</div>
                                    <div class="text-sm text-gray-500">{{ __t('regencies.destinations_count') }}</div>
                                </div>
                            </div>
                            
                            <h3 class="text-xl font-semibold text-gray-900 mb-3">{{ kabupaten.nama_kabupaten }}</h3>
                            
                            <p class="text-gray-600 mb-4">
                                Temukan berbagai destinasi wisata biru di {{ kabupaten.nama_kabupaten }}.
                            </p>

                            <div class="flex items-center justify-between">
                                <Link 
                                    :href="route('wisata', { kabupaten_id: kabupaten.id })"
                                    class="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
                                >
                                    {{ __t('regencies.view_destinations') }}
                                    <i class="ti ti-arrow-right ml-1"></i>
                                </Link>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </section>

        <!-- CTA Section -->
        <section class="py-16 bg-secondary-400 text-white relative overflow-hidden">
            <div class="absolute top-0 left-0 w-full h-full bg-[url('/assets/images/bg-pattern.png')] z-0 opacity-10"></div>
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                <div class="max-w-3xl mx-auto">
                    <h2 class="text-3xl lg:text-4xl font-bold mb-4">
                        {{ __t('regencies.ready_to_explore') }}
                    </h2>
                    <p class="text-md lg:text-xl text-blue-100 mb-8">
                        {{ __t('regencies.explore_description') }}
                    </p>
                    <Link 
                        :href="route('wisata')"
                        class="inline-flex items-center px-5 py-3 bg-white text-secondary-400 font-semibold rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
                    >
                        <i class="ti ti-compass mr-2 text-2xl"></i>
                        {{ __t('regencies.explore_all_destinations') }}
                    </Link>
                </div>
            </div>
        </section>
    </AppLayout>
</template>

