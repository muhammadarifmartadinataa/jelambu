<script setup>
import { Link, router } from '@inertiajs/vue3'
import { ref, onMounted, computed, onBeforeUnmount } from 'vue'
import { Swiper } from 'swiper'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'vue-select/dist/vue-select.css'

const props = defineProps({
    __t: Function,
    destinations: Array
})

const swiperContainer = ref(null)
const selectedWisata = ref(null)
const searchQuery = ref('')
const showDropdown = ref(false)

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

const filteredList = computed(() => {
  if (!searchQuery.value) return []
  return props.destinations.filter(item =>
    item.toLowerCase().includes(searchQuery.value.toLowerCase())
  )
})

function selectItem(item) {
  selectedWisata.value = item
  searchQuery.value = item
  showDropdown.value = false
}

onMounted(() => {
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

const dropdownRef = ref(null)

function handleClickOutside(e) {
  if (dropdownRef.value && !dropdownRef.value.contains(e.target)) {
    showDropdown.value = false
  }
}

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>

<template>
    <section class="py-16 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-5 gap-16 items-center">
            <div class="col-span-5 md:col-span-2 relative">
                <div class="swiper h-96 overflow-hidden px-1" ref="swiperContainer">
                    <div class="swiper-wrapper">
                        <div v-for="(comment, index) in sampleComments" :key="index" class="swiper-slide bg-white rounded-lg p-5 shadow-sm flex gap-3">
                            <img :src="`https://ui-avatars.com/api/?name=${comment.user}&background=2371ED&color=fff`" alt="user" class="w-10 h-10 rounded-full">
                            <p class="text-sm text-gray-800">
                                <span class="font-semibold text-primary-600">@{{ comment.user }}</span><br>{{ comment.text }}
                            </p>
                        </div>
                    </div>
                </div>
                <div class="absolute z-10 top-0 left-0 right-0 h-20 bg-gradient-to-b from-gray-50 to-transparent pointer-events-none"></div>
                <div class="absolute z-10 bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-gray-50 to-transparent pointer-events-none"></div>
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
                            class="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-primary-500 focus:border-primary-500"
                        />

                        <ul
                            v-show="showDropdown && filteredList.length"
                            class="absolute z-10 mt-1 w-full bg-white border border-gray-200 rounded-md shadow-lg max-h-40 overflow-auto"
                        >
                            <li
                                v-for="(item, index) in filteredList"
                                :key="index"
                                @click="selectItem(item)"
                                class="px-4 py-2 hover:bg-primary-100 hover:text-primary-800 cursor-pointer"
                            >
                                {{ item }}
                            </li>
                        </ul>
                    </div>
                    <button @click="telusuriKomentar" class="justify-center text-nowrap flex items-center bg-primary-600 text-white font-medium py-3 px-6 rounded-lg hover:bg-primary-700 transition duration-200">
                        <i class="ti ti-search mr-2"></i> {{ __t('home.scrape.button') }}
                    </button>
                </div>
            </div>
        </div>
    </section>
</template>