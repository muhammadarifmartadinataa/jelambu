<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import { Head, usePage } from '@inertiajs/vue3'
import AppLayout from '@/Layouts/AppLayout.vue'
import axios from 'axios'

const props = defineProps({
    currentLang: String,
    destinations: Object,
})

const page = usePage()
const selectedWisata = ref(null)
const searchQuery = ref('')
const showDropdown = ref(false)
const isLoading = ref(false)
const comments = ref([])
const summary = ref(null)
const errorMessage = ref(null)

const __t = (key) => {
    const translations = page.props.translations || {}
    return key.split('.').reduce((obj, part) => obj && obj[part], translations) || key
}

const dropdownItems = computed(() => {
  if (!searchQuery.value) {
    return props.destinations
  }

  return props.destinations.filter(item =>
    item.toLowerCase().includes(searchQuery.value.toLowerCase())
  )
})

const selectItem = (item) => {
  selectedWisata.value = item
  searchQuery.value = item
  showDropdown.value = false
}

onMounted(async () => {
    document.addEventListener('click', handleClickOutside)

    const query = new URLSearchParams(window.location.search)
    const incomingQuery = query.get('query')

    if (incomingQuery) {
        selectedWisata.value = incomingQuery
        searchQuery.value = incomingQuery
        await telusuriKomentar()
        history.replaceState({}, document.title, window.location.pathname)
    }
})

const telusuriKomentar = async () => {
    if (selectedWisata.value) {
        try {
            isLoading.value = true

            const response = await axios.post('/reviews/search-comments', { query: selectedWisata.value })
            comments.value = response.data.tweets
            summary.value = response.data.summary
        } catch (error) {
            if (error.response.status === 429) {
                errorMessage.value = 'Maaf, Anda telah mencapai batas 3 scrape per menit. Coba beberapa saat lagi ya 😊'
            } else {
                errorMessage.value = 'Maaf, terjadi kesalahan saat mencari komentar. Coba beberapa saat lagi ya 😊'
            }
        } finally {
            isLoading.value = false
        }
    }
}

const dropdownRef = ref(null)

const handleClickOutside = (e) => {
  if (dropdownRef.value && !dropdownRef.value.contains(e.target)) {
    showDropdown.value = false
  }
}

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside)
})

const clearSearch = () => {
  searchQuery.value = ''
  selectedWisata.value = null
  comments.value = []
  summary.value = null
  showDropdown.value = true
}
</script>

<template>
    <AppLayout :current-lang="currentLang">
        <Head :title="__t('nav.reviews')" />

        <!-- Hero Section -->
        <section class="bg-primary-600 text-white py-16 relative overflow-hidden mt-20">
            <div class="absolute top-0 left-0 w-full h-full bg-[url('/assets/images/bg-pattern.png')] z-0 opacity-10"></div>
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                <h1 class="text-3xl lg:text-4xl font-bold mb-4">
                    {{ __t('reviews.title') }}
                </h1>
                <p class="text-md lg:text-xl text-blue-100 max-w-3xl mx-auto">
                    {{ __t('reviews.description') }}
                </p>
            </div>
        </section>

        <section class="py-8 bg-white border-b border-gray-200">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex flex-col md:flex-row gap-4 items-center justify-between">
                    <div class="flex gap-4 max-w-2xl w-full">
                        <div class="relative w-full" ref="dropdownRef">
                            <input
                                type="text"
                                v-model="searchQuery"
                                @focus="showDropdown = true"
                                @input="showDropdown = true"
                                :placeholder="__t('reviews.placeholder')"
                                class="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-primary-500 focus:border-primary-500"
                            />

                            <button
                                v-if="searchQuery"
                                @click="clearSearch"
                                type="button"
                                class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                            >
                                <i class="ti ti-x"></i>
                            </button>

                            <ul
                                v-show="showDropdown && dropdownItems.length"
                                class="absolute z-10 mt-1 w-full bg-white border border-gray-200 rounded-md shadow-lg max-h-40 overflow-auto"
                            >
                                <li
                                    v-for="(item, index) in dropdownItems"
                                    :key="index"
                                    @click="selectItem(item)"
                                    class="px-4 py-2 hover:bg-primary-100 hover:text-primary-800 cursor-pointer"
                                >
                                    {{ item }}
                                </li>
                            </ul>
                        </div>
                        <button @click="telusuriKomentar" :disabled="isLoading || !selectedWisata" class="disabled:opacity-50 text-nowrap bg-primary-600 text-white font-medium py-3 px-6 rounded-lg hover:bg-primary-700 transition duration-200">
                            <span v-if="isLoading" class="flex items-center">
                                <svg class="animate-spin sm:-ml-1 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                <span class="ml-3 hidden sm:block">{{ __t('reviews.button_loading') }}</span>
                            </span>
                            <span v-else class="flex items-center">
                                <i class="ti ti-search sm:-ml-1"></i><span class="ml-3 hidden sm:block">{{ __t('reviews.button') }}</span>
                            </span>
                        </button>
                    </div>
                    <div class="text-gray-600">
                        <span class="font-medium">{{ comments.length }}</span> {{ __t('reviews.tweets_found') }}
                    </div>
                </div>
            </div>
        </section>    
        
        <section class="py-12 bg-gray-50">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div v-if="isLoading" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div class="bg-white shadow-sm rounded-lg p-4">
                        <div class="animate-pulse flex space-x-4">
                            <div class="rounded-full bg-slate-300 h-10 w-10"></div>
                            <div class="flex-1 space-y-6 py-1">
                                <div class="h-2 bg-slate-300 rounded w-28"></div>
                                <div class="space-y-3">
                                    <div class="grid grid-cols-3 gap-4">
                                        <div class="h-2 bg-slate-300 rounded col-span-2"></div>
                                        <div class="h-2 bg-slate-300 rounded col-span-1"></div>
                                    </div>
                                    <div class="h-2 bg-slate-300 rounded"></div>
                                </div>
                                <div class="h-2 bg-slate-300 rounded w-40"></div>
                            </div>
                        </div>
                    </div>
                    <div class="bg-white shadow-sm rounded-lg p-4">
                        <div class="animate-pulse flex space-x-4">
                            <div class="rounded-full bg-slate-300 h-10 w-10"></div>
                            <div class="flex-1 space-y-6 py-1">
                                <div class="h-2 bg-slate-300 rounded w-28"></div>
                                <div class="space-y-3">
                                    <div class="grid grid-cols-3 gap-4">
                                        <div class="h-2 bg-slate-300 rounded col-span-2"></div>
                                        <div class="h-2 bg-slate-300 rounded col-span-1"></div>
                                    </div>
                                    <div class="h-2 bg-slate-300 rounded"></div>
                                </div>
                                <div class="h-2 bg-slate-300 rounded w-40"></div>
                            </div>
                        </div>
                    </div>
                    <div class="bg-white shadow-sm rounded-lg p-4">
                        <div class="animate-pulse flex space-x-4">
                            <div class="rounded-full bg-slate-300 h-10 w-10"></div>
                            <div class="flex-1 space-y-6 py-1">
                                <div class="h-2 bg-slate-300 rounded w-28"></div>
                                <div class="space-y-3">
                                    <div class="grid grid-cols-3 gap-4">
                                        <div class="h-2 bg-slate-300 rounded col-span-2"></div>
                                        <div class="h-2 bg-slate-300 rounded col-span-1"></div>
                                    </div>
                                    <div class="h-2 bg-slate-300 rounded"></div>
                                </div>
                                <div class="h-2 bg-slate-300 rounded w-40"></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div v-else-if="comments.length === 0" class="text-center py-12">
                    <div class="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                        <i class="ti ti-search text-gray-400 text-3xl"></i>
                    </div>
                    <h3 class="text-xl font-semibold text-gray-900 mb-2">{{ __t('reviews.not_found.title') }}</h3>
                    <p class="text-gray-600">{{ __t('reviews.not_found.description') }}</p>
                </div>

                <div v-else>
                    <div class="columns-1 md:columns-2 lg:columns-3 gap-4 mb-8">
                        <div v-for="(comment, index) in comments" :key="index" class="bg-white rounded-lg p-4 shadow-sm mb-4 break-inside-avoid">
                            <div class="flex gap-4">
                                <img :src="comment.profile_image" alt="user" class="w-10 h-10 rounded-full">
                                <div>
                                    <p class="font-semibold text-primary-600 mb-2">@{{ comment.username }}</p>
                                    <p class="text-sm text-gray-800 mb-3">{{ comment.text }}</p>
                                    <small class="block mt-3 text-gray-600">{{ comment.created_at }}</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="bg-white p-5 shadow-sm rounded-lg">
                        <h3 class="text-lg font-semibold text-gray-900 mb-2">{{ __t('reviews.summary') }}</h3>
                        <div v-html="summary" class="text-md summary-text"></div>
                    </div>
                </div>
            </div>
        </section>

    </AppLayout>
</template>

<style>
.summary-text p {
    margin-bottom: 4px;
}
.summary-text p:last-child {
    margin-bottom: 0;
}
.summary-text ul {
    list-style: disc;
    padding-left: 20px;
    margin-bottom: 4px;
}
.summary-text li {
    margin-bottom: 4px;
}
.summary-text li:last-child {
    margin-bottom: 0
}
.summary-text hr {
    margin: 8px 0;
}
</style>