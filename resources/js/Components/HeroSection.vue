<template>
    <section class="hero-section h-screen relative overflow-hidden">
        <div class="swiper w-full h-full heroSwiper" ref="swiperContainer">
            <div class="swiper-wrapper">
                <!-- Slide 1 -->
                <div v-for="slide in slides" :key="slide.id" class="swiper-slide flex relative items-center justify-center overflow-hidden cursor-grab">
                    <div class="super-flow-image">
                        <img :src="slide.image" :alt="slide.alt">
                        <div class="super-flow-fragments">
                            <div :class="`super-flow-fragment-border fragment-1-border`"></div>
                            <img :src="slide.image" class="super-flow-fragment fragment-1">
                            
                            <div class="super-flow-fragment-border fragment-2-border"></div>
                            <img :src="slide.image" class="super-flow-fragment fragment-2">
                            
                            <div class="super-flow-fragment-border fragment-3-border"></div>
                            <img :src="slide.image" class="super-flow-fragment fragment-3">
                            
                            <div class="super-flow-fragment-border fragment-4-border"></div>
                            <img :src="slide.image" class="super-flow-fragment fragment-4">
                            
                            <div class="super-flow-fragment-border fragment-5-border"></div>
                            <img :src="slide.image" class="super-flow-fragment fragment-5">
                            
                            <div class="super-flow-fragment-border fragment-6-border"></div>
                            <img :src="slide.image" class="super-flow-fragment fragment-6">
                        </div>
                    </div>
                    <div class="super-flow-content max-w-xs md:max-w-3xl absolute z-10 text-center transition-all duration-[6000ms] ease-linear">
                        <h1 class="mb-4 text-2xl md:text-4xl lg:text-5xl text-white font-bold leading-tight">
                            {{ __t('home.hero_title') }}<br>
                            <span class="">{{ __t('home.hero_subtitle') }}</span>
                        </h1>
                        <p class="text-sm md:text-lg lg:text-xl text-gray-200 leading-tight">
                            {{ __t('home.hero_description') }}
                        </p>
                    </div>
                </div>
            </div>
            <div class="swiper-pagination"></div>
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { Link, usePage } from '@inertiajs/vue3'
import { Swiper } from 'swiper'
import { Pagination, Autoplay, EffectCreative } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-creative'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const page = usePage()
const swiperContainer = ref(null)

const __t = (key) => {
    const translations = page.props.translations || {}
    return key.split(".").reduce((obj, part) => obj && obj[part], translations) || key
}

const slides = ref([
    {
        id: 1,
        image: '/assets/images/wisata/pantai-krui.jpg',
        alt: 'Pantai Krui',
    },
    {
        id: 2,
        image: '/assets/images/wisata/pantai-krui-2.jpg',
        alt: 'Pantai Krui Surfing',
    },
    {
        id: 3,
        image: '/assets/images/wisata/pantai-gigi-hiu.jpg',
        alt: 'Pantai Gigi Hiu',
    },
])

onMounted(() => {
    if (swiperContainer.value) {
        new Swiper(swiperContainer.value, {
            modules: [Pagination, Autoplay, EffectCreative],
            loop: true,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            speed: 1000,
            effect: 'creative',
            creativeEffect: {
                prev: {
                    translate: ['-100%', 0, 0],
                },
                next: {
                    translate: [100, 0, -1],
                },
            },
            slidesPerView: 1
        });
    }
})
</script>

<style>
.super-flow-content {
    transform: translate(0%, 0px) scale(1.0);
}

.super-flow-image {
    position: absolute;
    width: 100%;
    height: 100%;
    transition: all 6000ms linear;
    transform: scale(1.1) translate(0%, 0px);
    clip-path: polygon(0% 0%, 100% 0%, 95.8615% 100%, 0% 100%);
}

.super-flow-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all 6000ms linear;
}

.super-flow-fragments {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: all 6000ms linear;
    transform: scale(0.95) translate(5%, 0px);
}

.super-flow-fragment {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all 6000ms linear;
}

.super-flow-fragment-border {
    position: absolute;
    width: 100%;
    height: 100%;
    background: #ffffff40;
    transition: all 6000ms linear;
}

/* Fragment styles for left side */
.fragment-1 {
    clip-path: polygon(0% 0%, 21.5117% 0%, 8.61825% 100%, 0% 100%);
    transform: translate(0px, 0px) scale(1.0);
}

.fragment-1-border {
    clip-path: polygon(0% 0%, 21.5117% 0%, 8.61825% 100%, 0% 100%);
    transform: translate(2px, 0px) scale(1.0);
}

.fragment-2 {
    clip-path: polygon(0% 0%, 8.7936% 0%, 18.8873% 100%, 0% 100%);
    transform: translate(0px, 0px) scale(1.15);
}

.fragment-2-border {
    clip-path: polygon(0% 0%, 8.7936% 0%, 18.8873% 100%, 0% 100%);
    transform: translate(2px, 0px) scale(1.15);
}

.fragment-3 {
    clip-path: polygon(0% 0%, 16.5847% 0%, 7.16057% 100%, 0% 100%);
    transform: translate(0px, 0px) scale(1.2);
}

.fragment-3-border {
    clip-path: polygon(0% 0%, 16.5847% 0%, 7.16057% 100%, 0% 100%);
    transform: translate(2px, 0px) scale(1.2);
}

/* Fragment styles for right side */
.fragment-4 {
    clip-path: polygon(100% 0%, 92.729% 0%, 75.1973% 100%, 100% 100%);
    transform: translate(0px, 0px) scale(1.0);
}

.fragment-4-border {
    clip-path: polygon(100% 0%, 92.729% 0%, 75.1973% 100%, 100% 100%);
    transform: translate(-2px, 0px) scale(1.0);
}

.fragment-5 {
    clip-path: polygon(100% 0%, 85.0484% 0%, 91.1183% 100%, 100% 100%);
    transform: translate(0px, 0px) scale(1.15);
}

.fragment-5-border {
    clip-path: polygon(100% 0%, 85.0484% 0%, 91.1183% 100%, 100% 100%);
    transform: translate(-2px, 0px) scale(1.15);
}

.fragment-6 {
    clip-path: polygon(100% 0%, 98.3906% 0%, 74.4343% 100%, 100% 100%);
    transform: translate(0px, 0px) scale(1.25);
}

.fragment-6-border {
    clip-path: polygon(100% 0%, 98.3906% 0%, 74.4343% 100%, 100% 100%);
    transform: translate(-2px, 0px) scale(1.25);
}

/* Active slide animations */
.hero-section .swiper-slide-active .super-flow-image {
    transform: scale(1.2) translate(0%, 0px);
    clip-path: polygon(0% 0%, 100% 0%, 90% 100%, 0% 100%);
}

.hero-section .swiper-slide-active .super-flow-fragments {
    transform: scale(1.0) translate(0%, 0px);
}

.hero-section .swiper-slide-active .super-flow-content {
    transform: translate(0%, 0px) scale(1.3);
}

/* Fragment gambar */
.hero-section .swiper-slide-active .fragment-1 {
    transform: translate(0px, 0px) scale(1.1);
}
.hero-section .swiper-slide-active .fragment-2 {
    transform: translate(0px, 0px) scale(1.25);
}
.hero-section .swiper-slide-active .fragment-3 {
    transform: translate(0px, 0px) scale(1.3);
}
.hero-section .swiper-slide-active .fragment-4 {
    transform: translate(0px, 0px) scale(1.1);
}
.hero-section .swiper-slide-active .fragment-5 {
    transform: translate(0px, 0px) scale(1.25);
}
.hero-section .swiper-slide-active .fragment-6 {
    transform: translate(0px, 0px) scale(1.35);
}

/* Fragment border */
.hero-section .swiper-slide-active .fragment-1-border {
    transform: translate(2px, 0px) scale(1.1);
}
.hero-section .swiper-slide-active .fragment-2-border {
    transform: translate(2px, 0px) scale(1.25);
}
.hero-section .swiper-slide-active .fragment-3-border {
    transform: translate(2px, 0px) scale(1.3);
}
.hero-section .swiper-slide-active .fragment-4-border {
    transform: translate(-2px, 0px) scale(1.1);
}
.hero-section .swiper-slide-active .fragment-5-border {
    transform: translate(-2px, 0px) scale(1.25);
}
.hero-section .swiper-slide-active .fragment-6-border {
    transform: translate(-2px, 0px) scale(1.35);
}


/* Pagination styles */
.hero-section .swiper-pagination {
    bottom: 50px;
    width: auto;
    left: 50%;
    transform: translate(-50%);
    padding: 8px 14px;
    background: #c8c8c840;
    border-radius: 999px;
    backdrop-filter: blur(16px);
    white-space: nowrap;
}

.hero-section .swiper-pagination-bullet {
    width: 8px;
    height: 8px;
    background: rgba(255, 255, 255, 0.5);
    opacity: 1;
}

.hero-section .swiper-pagination-bullet-active {
    background: white;
    transform: scale(1.2);
}

/* Responsive */
@media (max-width: 480px) {
    .hero-section .swiper-pagination {
        padding: 8px;
    }

    .hero-section .swiper-pagination-bullet {
        width: 8px;
        height: 8px;
    }
}
</style>
