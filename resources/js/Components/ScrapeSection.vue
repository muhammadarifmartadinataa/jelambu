<script setup>
import { Link, router } from '@inertiajs/vue3'
import { ref, onMounted, computed, onBeforeUnmount } from 'vue'
import { Swiper } from 'swiper'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'vue-select/dist/vue-select.css'

const props = defineProps({
    __t: Function,
    destinations: Array,
    keywords: Array,
})

const swiperContainer = ref(null)
const selectedWisata = ref(null)
const searchQuery = ref('')
const showDropdown = ref(false)
const dropdownRef = ref(null)

const sampleComments = [
    {
        user: 'backpacker_id',
        text: 'Pulau Pahawang tuh indah banget! Airnya bening dan cocok buat snorkeling 🌊✨'
    },
    {
        user: 'dolanlampung',
        text: 'Teluk Kiluan pas sunrise itu juara banget vibes-nya 🔥'
    },
    {
        user: 'jelajah_nusantara',
        text: 'Baru dari Tanjung Setia, ombaknya keren buat surfing 🏄‍♂️!'
    },
    {
        user: 'traveling_id',
        text: 'Pantai Pasir Putih di Lampung Selatan tuh mantap! Pasir putihnya mirip seperti di Bali 😍'
    },
    {
        user: 'wisata_lampung',
        text: 'Lampung Selatan punya Pantai Klara yang kece! Airnya jernih dan banyak spot foto yang instagrammable 📸'
    },
]

const filteredKeywords = computed(() => {
  if (!searchQuery.value) return props.keywords
  return props.keywords.filter(k =>
    k.toLowerCase().includes(searchQuery.value.toLowerCase())
  )
})

const filteredDestinations = computed(() => {
  if (!searchQuery.value) return props.destinations
  return props.destinations.filter(d =>
    d.toLowerCase().includes(searchQuery.value.toLowerCase())
  )
})

function selectItem(item) {
  selectedWisata.value = item
  searchQuery.value = item
  showDropdown.value = false
}

onMounted(() => {
    console.log(props.keywords);
    
    if (swiperContainer.value) {
        new Swiper(swiperContainer.value, {
            modules: [Autoplay],
            loop: true,
            autoplay: { delay: 3000 },
            grabCursor: false,
            direction: 'vertical',
            slidesPerView: 3,
            spaceBetween: 14,
            allowTouchMove: false,
        })
    }

    document.addEventListener('click', handleClickOutside)
})

function telusuriKomentar() {
    if (selectedWisata.value) {
        router.visit(route('reviews', { query: selectedWisata.value }))
    }
}

function handleClickOutside(e) {
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
  showDropdown.value = true
}
</script>

<template>
    <section class="py-16 bg-secondary-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-5 gap-16 items-center">
            <div class="col-span-5 md:col-span-2 relative">
                <div class="swiper h-96 overflow-hidden px-1" ref="swiperContainer">
                    <div class="swiper-wrapper">
                        <div v-for="(comment, index) in sampleComments" :key="index" class="swiper-slide bg-white rounded-lg p-5 shadow-sm flex gap-3">
                            <img :src="`https://ui-avatars.com/api/?name=${comment.user}&background=fbb41e&color=fff`" alt="user" class="w-10 h-10 rounded-full">
                            <p class="text-sm text-gray-800">
                                <span class="font-semibold text-secondary-400">@{{ comment.user }}</span><br>{{ comment.text }}
                            </p>
                        </div>
                    </div>
                </div>
                <div class="absolute z-10 top-0 left-0 right-0 h-20 bg-gradient-to-b from-secondary-50 to-transparent pointer-events-none"></div>
                <div class="absolute z-10 bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-secondary-50 to-transparent pointer-events-none"></div>
            </div>
            <div class="col-span-5 md:col-span-3 text-center md:text-left">
                <h2 class="text-3xl font-bold text-gray-900 mb-4">{{ __t('home.scrape.title') }}</h2>
                <p class="text-md md:text-lg text-gray-600 max-w-3xl mx-auto mb-6">
                    {{ __t('home.scrape.description') }}
                </p>
                <div class="flex flex-col sm:flex-row gap-4">
                    <div class="relative w-full" ref="dropdownRef">
                        <input
                            type="text"
                            v-model="searchQuery"
                            @focus="showDropdown = true"
                            @input="showDropdown = true"
                            :placeholder="__t('home.scrape.placeholder')"
                            class="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-secondary-400 focus:border-secondary-400"
                        />

                        <button
                            v-if="searchQuery"
                            @click="clearSearch"
                            type="button"
                            class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                        >
                            <i class="ti ti-x"></i>
                        </button>

                        <div
                            v-show="showDropdown && (filteredKeywords.length || filteredDestinations.length)"
                            class="absolute z-10 mt-1 w-full bg-white border border-gray-200 rounded-md shadow-lg max-h-60 overflow-auto p-4 space-y-3"
                        >
                            <!-- Keywords -->
                            <div v-if="filteredKeywords.length">
                                <h4 class="text-sm text-gray-500 mb-1">Kata Kunci</h4>
                                <div class="flex flex-wrap gap-2">
                                    <button
                                        v-for="(kw, i) in filteredKeywords"
                                        :key="`kw-${i}`"
                                        @click="selectItem(kw)"
                                        :class="[
                                            'px-3 py-1 text-xs rounded-full border transition',
                                            selectedWisata === kw
                                            ? 'bg-primary-600 text-white'
                                            : 'hover:bg-gray-100 text-gray-700'
                                        ]"
                                        >
                                        {{ kw }}
                                    </button>
                                </div>
                            </div>

                            <!-- Destinations -->
                            <div v-if="filteredDestinations.length">
                                <h4 class="text-sm text-gray-500 mt-2 mb-1">Destinasi</h4>
                                <div class="flex flex-wrap gap-2">
                                    <button
                                        v-for="(dst, i) in filteredDestinations"
                                        :key="`dst-${i}`"
                                        @click="selectItem(dst)"
                                        :class="[
                                            'px-3 py-1 text-xs rounded-full border transition',
                                            selectedWisata === dst
                                            ? 'bg-primary-600 text-white'
                                            : 'hover:bg-gray-100 text-gray-700'
                                        ]"
                                        >
                                        {{ dst }}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button @click="telusuriKomentar" class="justify-center text-nowrap flex items-center bg-secondary-400 text-white font-medium py-3 px-6 rounded-lg hover:bg-secondary-500 transition duration-200">
                        <i class="ti ti-search mr-2"></i> {{ __t('home.scrape.button') }}
                    </button>
                </div>
            </div>
        </div>
    </section>
</template>