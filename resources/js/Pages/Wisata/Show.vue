<script setup>
import { Head, Link, usePage } from '@inertiajs/vue3'
import AppLayout from '@/Layouts/AppLayout.vue'
import { nextTick, onMounted, ref, watch } from 'vue'

import 'leaflet/dist/leaflet.css'

const props = defineProps({
    wisata: Object,
    relatedWisatas: Array,
    currentLang: String,
    videoEmbed: String
})

const page = usePage()

// Active tab state
const activeTab = ref('about')

// Tab configuration
const tabs = ref([
    {
        id: 'about',
        label: 'detail.about_destination',
        icon: 'ti ti-info-circle'
    },
    {
        id: 'facilities',
        label: 'common.facilities',
        icon: 'ti ti-building-store'
    },
    {
        id: 'gallery',
        label: 'common.gallery',
        icon: 'ti ti-photo'
    },
    {
        id: 'video',
        label: 'detail.destination_video',
        icon: 'ti ti-video'
    },
    {
        id: 'maps',
        label: 'detail.location_map',
        icon: 'ti ti-map'
    }
])

// Translation helper
const __t = (key) => {
    const translations = page.props.translations || {}
    return key.split('.').reduce((obj, part) => obj && obj[part], translations) || key
}

const currentUrl = ref('')
const map = ref(null)
const mapContainer = ref(null)

onMounted(() => {
    currentUrl.value = window.location.href

    new SimpleLightbox('.gallery a', {
        captions: true,
        captionsData: 'alt',
        captionDelay: 250,
        captionPosition: 'outside',
    })
})

watch(activeTab, async (val) => {
    if (val === 'maps') {
        nextTick(async () => {
            if (map.value) {
                map.value.invalidateSize()
            } else {
                const L = await import('leaflet')

                // Set marker icons (karena Vite butuh ini biar URL-nya resolve)
                delete L.Icon.Default.prototype._getIconUrl
                L.Icon.Default.mergeOptions({
                    iconRetinaUrl: new URL('leaflet/dist/images/marker-icon-2x.png', import.meta.url).href,
                    iconUrl: new URL('leaflet/dist/images/marker-icon.png', import.meta.url).href,
                    shadowUrl: new URL('leaflet/dist/images/marker-shadow.png', import.meta.url).href,
                })

                map.value = L.map(mapContainer.value).setView([props.wisata.latitude, props.wisata.longitude], 14)

                L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                    attribution: '&copy; OpenStreetMap contributors'
                }).addTo(map.value)

                L.marker([props.wisata.latitude, props.wisata.longitude])
                    .addTo(map.value)
                    .bindPopup(props.wisata.nama)
                    .openPopup()
            }
        })
    }
})
</script>

<template>
    <AppLayout :current-lang="currentLang">
        <Head :title="wisata.nama" />

        <!-- Hero Section -->
        <section class="relative h-96 lg:h-[500px] overflow-hidden mt-20">
            <img 
                :src="'/storage/' + wisata.thumbnail || '/images/placeholder.jpg'" 
                :alt="wisata.nama"
                class="w-full h-full object-cover"
            >
            <div class="absolute inset-0 bg-black/30"></div>
            <div class="absolute inset-0 flex items-end">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 w-full">
                    <div class="text-white">
                        <div class="flex items-center text-nowrap text-sm mb-2">
                            <Link :href="route('beranda')" class="hover:text-yellow-300 transition-colors duration-200">
                                {{ __t('nav.home') }}
                            </Link>
                            <i class="ti ti-chevron-right mx-2"></i>
                            <Link :href="route('wisata')" class="hover:text-yellow-300 transition-colors duration-200">
                                {{ __t('nav.destinations') }}
                            </Link>
                            <i class="ti ti-chevron-right mx-2"></i>
                            <span class="text-yellow-300 truncate">{{ wisata.nama }}</span>
                        </div>
                        <h1 class="text-3xl lg:text-5xl font-bold mb-4">{{ wisata.nama }}</h1>
                        <div class="flex items-center space-x-6">
                            <div class="flex items-center space-x-2">
                                <i class="ti ti-map-pin-filled text-yellow-300 text-lg"></i>
                                <span>{{ wisata.kabupaten?.nama_kabupaten }}</span>
                            </div>
                            <div class="flex items-center space-x-2">
                                <i class="ti ti-star-filled text-yellow-300 text-lg"></i>
                                <span class="font-semibold">{{ wisata.rating }}</span>
                                <span class="text-gray-300">/5</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="py-12 bg-white">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <!-- Main Content with Tabs -->
                    <div class="lg:col-span-2">
                        <!-- Tab Navigation -->
                        <div class="border-b border-gray-200 mb-8">
                            <nav class="-mb-px flex space-x-2 overflow-x-auto text-nowrap">
                                <button
                                    v-for="tab in tabs"
                                    :key="tab.id"
                                    @click="activeTab = tab.id"
                                    :class="[
                                        'py-4 px-4 border-b-2 font-medium text-sm transition-colors duration-200 flex items-center justify-center',
                                        activeTab === tab.id
                                            ? 'border-primary-600 bg-primary-600 text-white rounded-t-lg'
                                            : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                    ]"
                                >
                                    <i :class="tab.icon" class="mr-2 text-lg"></i>
                                    {{ __t(tab.label) }}
                                </button>
                            </nav>
                        </div>

                        <!-- Tab Content -->
                        <div class="tab-content">
                            <!-- Tab: Tentang Destinasi -->
                            <div v-show="activeTab === 'about'" class="tab-pane">
                                <div class="prose max-w-none">
                                    <h2 class="text-2xl font-bold text-gray-900 mb-6">
                                        {{ __t('detail.about_destination') }}
                                    </h2>
                                    <div class="text-gray-600 leading-relaxed space-y-4">
                                        <div v-html="wisata.deskripsi" class="text-justify description-wisata"></div>
                                        
                                        <!-- Additional Info -->
                                        <div class="bg-gray-50 rounded-lg p-6 mt-6">
                                            <h3 class="text-lg font-semibold text-gray-900 mb-4">{{ __t('detail.quick_info') }}</h3>
                                            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                <div class="flex items-center space-x-3">
                                                    <i class="ti ti-map-pin text-primary-600 text-2xl"></i>
                                                    <div>
                                                        <p class="text-sm text-gray-500">{{ __t('detail.village') }}</p>
                                                        <p class="font-medium text-sm">{{ wisata.lokasi }}</p>
                                                    </div>
                                                </div>
                                                <div class="flex items-center space-x-3">
                                                    <i class="ti ti-star text-primary-600 text-2xl"></i>
                                                    <div>
                                                        <p class="text-sm text-gray-500">Rating</p>
                                                        <p class="font-medium text-sm">{{ wisata.rating }}/5</p>
                                                    </div>
                                                </div>
                                                <div class="flex items-center space-x-3">
                                                    <i class="ti ti-building text-primary-600 text-2xl"></i>
                                                    <div>
                                                        <p class="text-sm text-gray-500">{{ __t('detail.regency') }}</p>
                                                        <p class="font-medium text-sm">{{ wisata.kabupaten?.nama_kabupaten }}</p>
                                                    </div>
                                                </div>
                                                <div class="flex items-center space-x-3">
                                                    <i class="ti ti-gps text-primary-600 text-2xl"></i>
                                                    <div>
                                                        <p class="text-sm text-gray-500">{{ __t('detail.coordinates') }}</p>
                                                        <p class="font-medium text-sm">{{ wisata.latitude }}, {{ wisata.longitude }}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- Tab: Fasilitas -->
                            <div v-show="activeTab === 'facilities'" class="tab-pane">
                                <h2 class="text-2xl font-bold text-gray-900 mb-6">
                                    {{ __t('common.facilities') }}
                                </h2>
                                <div v-if="wisata.fasilitas && wisata.fasilitas.length > 0">
                                    <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
                                        <div 
                                            v-for="fasilitas in wisata.fasilitas" 
                                            :key="fasilitas.id"
                                            class="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg hover:ring-2 hover:ring-primary-600 transition-all duration-300"
                                        >
                                            <div class="w-8 h-8 flex items-center justify-center">
                                                <img :src="'/storage/' + fasilitas.icon" alt="">
                                            </div>
                                            <span class="text-gray-700 truncate">{{ fasilitas.nama }}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- Tab: Galeri -->
                            <div v-show="activeTab === 'gallery'" class="tab-pane">
                                <h2 class="text-2xl font-bold text-gray-900 mb-6">
                                    {{ __t('common.gallery') }}
                                </h2>
                                <div v-if="wisata.galeri && wisata.galeri.length > 0">
                                    <div class="gallery grid grid-cols-2 lg:grid-cols-3 gap-4">
                                        <a 
                                            v-for="(image, index) in wisata.galeri" 
                                            :key="index"
                                            :href="'/storage/' + image"
                                            :alt="`${wisata.nama} - ${index + 1}`"
                                            class="relative aspect-square rounded-lg overflow-hidden cursor-pointer hover:opacity-90 transition-opacity duration-200 group"
                                        >
                                            <img 
                                                :src="'/storage/' + image" 
                                                :alt="`${wisata.nama} - ${index + 1}`"
                                                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                            >
                                            <div class="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-200 flex items-center justify-center">
                                                <i class="ti ti-eye text-white text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-200"></i>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <!-- Tab: Video -->
                            <div v-show="activeTab === 'video'" class="tab-pane">
                                <h2 class="text-2xl font-bold text-gray-900 mb-6">
                                    {{ __t('detail.destination_video') }}
                                </h2>
                                <div v-if="wisata.video">
                                    <div class="aspect-video rounded-lg overflow-hidden">
                                        <iframe 
                                            width="100%" 
                                            height="100%" 
                                            :src="videoEmbed" 
                                            title="YouTube video player" 
                                            frameborder="0" 
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                            referrerpolicy="strict-origin-when-cross-origin" 
                                            allowfullscreen>
                                        </iframe>
                                    </div>
                                </div>
                                <div v-else class="text-center py-12">
                                    <i class="ti ti-video text-gray-400 text-4xl mb-4"></i>
                                    <p class="text-gray-500">{{ __t('detail.video_not_found') }}</p>
                                </div>
                            </div>

                            <!-- Tab: Maps -->
                            <div v-show="activeTab === 'maps'" class="tab-pane">
                                <h2 class="text-2xl font-bold text-gray-900 mb-6">
                                    {{ __t('detail.location_map') }}
                                </h2>
                                
                                <!-- Location Info -->
                                <div class="bg-gray-50 rounded-lg p-6 mb-6">
                                    <div class="flex items-start space-x-4">
                                        <div class="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                            <i class="ti ti-map-pin text-primary-600 text-xl"></i>
                                        </div>
                                        <div>
                                            <h3 class="text-lg font-semibold text-gray-900 mb-1">{{ __t('detail.full_address') }}</h3>
                                            <p class="text-gray-600 mb-1 text-sm sm:text-base">{{ wisata.lokasi }}, {{ wisata.kabupaten.nama_kabupaten }}</p>
                                            <div class="flex items-center space-x-4 text-sm text-gray-500">
                                                <span>Lat: {{ wisata.latitude }}</span>
                                                <span>Long: {{ wisata.longitude }}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <!-- Interactive Map Placeholder -->
                                <div class="w-full h-80 rounded-lg overflow-hidden mb-4 z-0">
                                    <div id="destination-map" ref="mapContainer" class="w-full h-full z-10"></div>
                                </div>
                                <div class="bg-gray-100 rounded-lg p-8 text-center">
                                    <p class="text-sm text-gray-400 mb-4">
                                        {{ __t('detail.click_open_maps') }}
                                    </p>
                                    <a 
                                        :href="wisata.maps_link"
                                        target="_blank"
                                        class="inline-flex items-center px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-200"
                                    >
                                        <i class="ti ti-external-link mr-2 text-2xl"></i>
                                        {{ __t('detail.open_google_maps') }}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Sidebar -->
                    <div class="lg:col-span-1">
                        <!-- AI Assistant CTA -->
                        <div class="bg-primary-600 text-white rounded-xl p-6 mb-6 relative overflow-hidden">
                            <div class="absolute top-0 left-0 w-full h-full bg-[url('/assets/images/bg-pattern.png')] z-0 opacity-10"></div>
                            <div class="text-center relative z-10">
                                <div class="w-16 h-16 bg-white ring-4 ring-white rounded-full flex items-center justify-center mx-auto mb-4">
                                    <img :src="'/assets/images/ajelai.png'" alt="" class="w-full">
                                </div>
                                <h3 class="text-lg font-semibold mb-2">
                                    {{ __t('detail.need_more_info') }}
                                </h3>
                                <p class="text-gray-100 text-sm mb-4">
                                    {{ __t('detail.ai_detail_description') }}
                                </p>
                                <Link 
                                    :href="route('chatbot')"
                                    class="inline-flex items-center px-4 py-2 bg-white text-primary-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
                                >
                                    <i class="ti ti-message-circle mr-2 text-2xl"></i>
                                    {{ __t('detail.chat_now') }}
                                </Link>
                            </div>
                        </div>

                        <!-- Share -->
                        <div class="bg-white border border-gray-200 rounded-xl p-6">
                            <h3 class="text-lg font-semibold text-gray-900 mb-4">
                                {{ __t('common.share') }}
                            </h3>
                            <div class="flex space-x-3">
                                <a
                                    :href="`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`"  
                                    target="_blank"
                                    class="flex items-center justify-center py-3 px-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200">
                                    <i class="ti ti-brand-facebook"></i>
                                </a>
                                <a
                                    :href="`https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(wisata.nama)}`"
                                    target="_blank" 
                                    class="flex items-center justify-center py-3 px-3 bg-black text-white rounded-lg transition-colors duration-200">
                                    <i class="ti ti-brand-x"></i>
                                </a>
                                <a
                                    :href="`https://wa.me/?text=${encodeURIComponent(wisata.nama + ' - ' + currentUrl)}`" 
                                    target="_blank" 
                                    class="flex items-center justify-center py-3 px-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-200">
                                    <i class="ti ti-brand-whatsapp"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Related Destinations -->
        <section v-if="relatedWisatas && relatedWisatas.length > 0" class="py-12 bg-gray-50">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 class="text-2xl lg:text-3xl font-bold text-gray-900 mb-8">
                    {{ __t('detail.other_destinations') }}
                </h2>
                
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <Link :href="route('wisata.show', { id: related.slug })"
                        v-for="related in relatedWisatas" 
                        :key="related.id"
                        class="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
                    >
                        <div class="relative h-48">
                            <img 
                                :src="'/storage/' + related.thumbnail || '/images/placeholder.jpg'" 
                                :alt="related.nama"
                                class="w-full h-full object-cover"
                            >
                            <div class="absolute top-4 right-4 bg-white backdrop-blur-sm px-2 py-1 rounded-lg">
                                <div class="flex items-center space-x-1">
                                    <i class="ti ti-star-filled text-yellow-400 text-sm"></i>
                                    <span class="text-sm font-medium">{{ related.rating }}</span>
                                </div>
                            </div>
                        </div>
                        
                        <div class="p-6">
                            <div class="flex items-center text-sm text-gray-500 mb-2">
                                <i class="ti ti-map-pin-filled mr-1 text-lg text-primary-600"></i>
                                {{ related.kabupaten?.nama_kabupaten }}
                            </div>
                            
                            <h3 class="text-lg font-semibold text-gray-900 mb-4">{{ related.nama }}</h3>
                            
                            <Link 
                                :href="route('wisata.show', related.slug)"
                                class="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
                            >
                                {{ __t('common.view_details') }}
                                <i class="ti ti-arrow-right ml-1"></i>
                            </Link>
                        </div>
                    </Link>
                </div>
            </div>
        </section>

        <!-- Floating Chatbot -->
        <div class="fixed bottom-6 right-6 z-40">
            <Link 
                :href="route('chatbot')"
                class="w-14 h-14 bg-white text-white rounded-full flex items-center justify-center shadow-lg ring-4 ring-primary-600 transition-all duration-300 transform hover:scale-110"
            >
                <img :src="'/assets/images/ajelai.png'" alt="" class="w-full">
            </Link>
        </div>
    </AppLayout>
</template>

<style scoped>
.tab-content {
    min-height: 400px;
}

.tab-pane {
    animation: fadeIn 0.3s ease-in-out;
}

@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(10px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.prose {
    max-width: none;
}

.prose h2 {
    margin-top: 0;
}
</style>

<style>
.description-wisata p {
    margin-bottom: 4px;
}
.description-wisata p:last-child {
    margin-bottom: 0;
}
.description-wisata ul, .description-wisata ol {
    list-style: disc;
    padding-left: 20px;
    margin-bottom: 4px;
}
.description-wisata li {
    margin-bottom: 4px;
}
.description-wisata li:last-child {
    margin-bottom: 0
}
.description-wisata hr {
    margin: 8px 0;
}
</style>