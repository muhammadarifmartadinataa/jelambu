<template>
    <section class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-12">
                <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                    {{ __t("home.popular_destinations") }}
                </h2>
                <p class="text-md lg:text-xl text-gray-600 max-w-3xl mx-auto">
                    {{ __t("home.popular_description") }}
                </p>
            </div>

            <!-- Swiper Slider -->
            <div class="swiper py-4 px-4" ref="swiperContainer">
                <div class="swiper-wrapper mb-8">
                    <Link :href="route('wisata.show', wisata.slug)"
                        v-for="wisata in wisatas.slice(0, 6)" 
                        :key="wisata.id"
                        class="swiper-slide"
                    >
                        <div class="bg-white hover:ring-2 hover:ring-primary-600 rounded-xl shadow-sm overflow-hidden h-full hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                            <div class="relative h-48">
                                <img 
                                    :src="'/storage/' + wisata.thumbnail" 
                                    :alt="wisata.nama"
                                    class="w-full h-full object-cover" loading="lazy"
                                >
                                <div class="swiper-lazy-preloader"></div>
                                <div class="absolute top-4 right-4 bg-white backdrop-blur-sm px-2 py-1 rounded-lg">
                                    <div class="flex items-center space-x-1">
                                        <i class="ti ti-star-filled text-yellow-400 text-sm"></i>
                                        <span class="text-sm font-medium">{{ wisata.rating }}</span>
                                    </div>
                                </div>
                            </div>
                            <div class="p-6">
                                <div class="flex items-center text-sm text-gray-500 mb-2">
                                    <i class="ti ti-map-pin-filled mr-1 text-primary-600 text-lg"></i>
                                    {{ wisata.kabupaten?.nama_kabupaten }}
                                </div>
                                <h3 class="text-xl font-semibold text-gray-900 mb-4">{{ wisata.nama }}</h3>
                                <Link 
                                    :href="route(
                                        'wisata.show', 
                                        wisata.slug
                                    )"
                                    class="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
                                >
                                    {{ __t("common.view_details") }}
                                    <i class="ti ti-arrow-right ml-1"></i>
                                </Link>
                            </div>
                        </div>
                    </Link>
                </div>
                <div class="flex justify-between items-center">
                    <div class="flex items-center gap-3">
                        <button class="button-prev px-3 py-1 bg-white ring-1 ring-gray-200 bg-white text-primary-600 hover:bg-primary-600 hover:text-white hover:ring-primary-600 transition-all duration-200 rounded-md"><i class="ti ti-chevron-left text-xl"></i></button>
                        <button class="button-next px-3 py-1 bg-white ring-1 ring-gray-200 bg-white text-primary-600 hover:bg-primary-600 hover:text-white hover:ring-primary-600 transition-all duration-200 rounded-md"><i class="ti ti-chevron-right text-xl"></i></button>
                    </div>
                    <div>
                        <div class="swiper-pagination"></div>
                    </div>
                </div>
            </div>

            <div class="text-center mt-8">
                <Link 
                    :href="route('wisata')"
                    class="inline-flex items-center px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors duration-200"
                >
                    {{ __t("common.view_all") }}
                    <i class="ti ti-arrow-right ml-2"></i>
                </Link>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { Link } from '@inertiajs/vue3'
import { Swiper } from 'swiper'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const props = defineProps({
    wisatas: Array,
    __t: Function
})

const swiperContainer = ref(null)

onMounted(() => {
    if (swiperContainer.value) {
        new Swiper(swiperContainer.value, {
            modules: [Navigation, Pagination, Autoplay],
            slidesPerView: 1,
            spaceBetween: 24,
            loop: true,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.button-next',
                prevEl: '.button-prev',
            },
            breakpoints: {
                640: {
                    slidesPerView: 2,
                },
                1024: {
                    slidesPerView: 3,
                },
            },
        })
    }
})
</script>

<style scoped>
.swiper-pagination-bullet-active {
    background-color: #2371ed !important;
}
.swiper-pagination {
    position: static !important;
}
</style>

