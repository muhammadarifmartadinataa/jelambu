<script setup>
import { ref, computed } from 'vue'
import { Head, Link, usePage } from '@inertiajs/vue3'
import AppLayout from '@/Layouts/AppLayout.vue'

const props = defineProps({
    wisatas: Array,
    kabupatens: Array,
    currentLang: String,
})

const page = usePage()
const searchQuery = ref('')
const selectedKabupaten = ref('')
const sortBy = ref('rating')

// Translation helper
const __t = (key) => {
    const translations = page.props.translations || {}
    return key.split('.').reduce((obj, part) => obj && obj[part], translations) || key
}

// Filtered and sorted wisatas
const filteredWisatas = computed(() => {
    let filtered = props.wisatas

    // Filter by search query
    if (searchQuery.value) {
        filtered = filtered.filter(wisata => 
            wisata.nama.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
            wisata.lokasi.toLowerCase().includes(searchQuery.value.toLowerCase())
        )
    }

    // Filter by kabupaten
    if (selectedKabupaten.value) {
        filtered = filtered.filter(wisata => 
            wisata.kabupaten_id == selectedKabupaten.value
        )
    }

    // Sort
    filtered.sort((a, b) => {
        switch (sortBy.value) {
            case 'rating':
                return parseFloat(b.rating) - parseFloat(a.rating)
            case 'name':
                return a.nama.localeCompare(b.nama)
            case 'location':
                return a.lokasi.localeCompare(b.lokasi)
            default:
                return 0
        }
    })

    return filtered
})

const resetFilters = () => {
    searchQuery.value = ''
    selectedKabupaten.value = ''
    sortBy.value = 'rating'
}
</script>

<template>
    <AppLayout :current-lang="currentLang">
        <Head :title="__t('nav.destinations')" />

        <!-- Hero Section -->
        <section class="bg-primary-600 text-white py-16 relative overflow-hidden mt-20">
            <div class="absolute top-0 left-0 w-full h-full bg-[url('/assets/images/bg-pattern.png')] z-0 opacity-10"></div>
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                <h1 class="text-3xl lg:text-4xl font-bold mb-4">
                    {{ __t('destinations.title') }} {{ __t('destinations.subtitle') }}
                </h1>
                <p class="text-md lg:text-xl text-blue-100 max-w-3xl mx-auto">
                    {{ __t('destinations.description') }}
                </p>
            </div>
        </section>

        <!-- Search & Filter Section -->
        <section class="py-8 bg-white border-b border-gray-200">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex flex-col lg:flex-row gap-4 items-center justify-between">
                    <div class="relative flex-1 max-w-md">
                        <i class="ti ti-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                        <input 
                            v-model="searchQuery"
                            type="text" 
                            :placeholder="__t('destinations.search_placeholder')"
                            class="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        >
                    </div>
                    
                    <div class="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                        <select 
                            v-model="selectedKabupaten"
                            class="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        >
                            <option value="">{{ __t('destinations.all_regencies') }}</option>
                            <option v-for="kabupaten in kabupatens" :key="kabupaten.id" :value="kabupaten.id">
                                {{ kabupaten.nama_kabupaten }}
                            </option>
                        </select>
                        
                        <select 
                            v-model="sortBy"
                            class="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        >
                            <option value="rating">{{ __t('destinations.highest_rating') }}</option>
                            <option value="name">{{ __t('destinations.name_a_z') }}</option>
                            <option value="location">{{ __t('destinations.location_a_z') }}</option>
                        </select>
                    </div>
                </div>
                
                <div class="mt-4 text-gray-600">
                    <span class="font-medium">{{ filteredWisatas.length }}</span> {{ __t('destinations.destinations_found') }}
                </div>
            </div>
        </section>

        <!-- Destinations Grid -->
        <section class="py-12 bg-gray-50">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div v-if="filteredWisatas.length === 0" class="text-center py-12">
                    <div class="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                        <i class="ti ti-search text-gray-400 text-3xl"></i>
                    </div>
                    <h3 class="text-xl font-semibold text-gray-900 mb-2">{{ __t('destinations.no_destinations_found') }}</h3>
                    <p class="text-gray-600 mb-4">{{ __t('destinations.change_filters') }}</p>
                    <button 
                        @click="resetFilters"
                        class="inline-flex items-center px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-200"
                    >
                        {{ __t('common.reset_filters') }}
                    </button>
                </div>

                <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <Link :href="route('wisata.show', { id: wisata.slug })"
                        v-for="wisata in filteredWisatas" 
                        :key="wisata.id"
                        class="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
                    >
                        <div class="relative h-48">
                            <img 
                                :src="'/storage/' + wisata.thumbnail" 
                                :alt="wisata.nama"
                                class="w-full h-full object-cover"
                            >
                            <div class="absolute top-4 right-4 bg-white backdrop-blur-sm px-2 py-1 rounded-lg">
                                <div class="flex items-center space-x-1">
                                    <i class="ti ti-star-filled text-yellow-400 text-sm"></i>
                                    <span class="text-sm font-medium">{{ wisata.rating }}</span>
                                </div>
                            </div>
                        </div>
                        
                        <div class="p-6">
                            <div class="flex items-center text-sm text-gray-500 mb-2">
                                <i class="ti ti-map-pin-filled mr-1 text-secondary-400 text-lg"></i>
                                {{ wisata.kabupaten?.nama_kabupaten }}
                            </div>
                            
                            <h3 class="text-xl font-semibold text-gray-900 mb-4">{{ wisata.nama }}</h3>
                            
                            <div class="flex items-center justify-between">
                                <Link 
                                    :href="route('wisata.show', wisata.slug)"
                                    class="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
                                >
                                    {{ __t('destinations.details') }}
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
                        {{ __t('destinations.need_personal_recommendations') }}
                    </h2>
                    <p class="text-md lg:text-xl text-blue-100 mb-8">
                        {{ __t('destinations.ai_description') }}
                    </p>
                    <div class="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link 
                            :href="route('chatbot')"
                            class="inline-flex justify-center items-center px-5 py-3 bg-white text-secondary-400 font-semibold rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
                        >
                            <div class="w-8 h-8 bg-secondary-300 rounded-full mr-2 flex justify-center">
                                <i class="ti ti-robot text-2xl text-white"></i>
                            </div>
                            {{ __t('destinations.ask_ai') }}
                        </Link>
                        <Link 
                            :href="route('kabupaten')"
                            class="inline-flex justify-center items-center px-8 py-4 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-300 backdrop-blur-sm"
                        >
                            <i class="ti ti-building-community mr-2 text-2xl"></i>
                            {{ __t('destinations.explore_by_regency') }}
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    </AppLayout>
</template>

<style>
.line-clamp-3 {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
}
</style>

