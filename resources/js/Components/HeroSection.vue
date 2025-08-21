<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const slider = ref(null)
const interval = ref(null)

const props = defineProps({
    __t: Function
})

const slides = props.__t('home.hero')

function next() {
    const items = slider.value.querySelectorAll('.item')
    if (items.length) {
        slider.value.appendChild(items[0])
    }
}

function prev() {
    const items = slider.value.querySelectorAll('.item')
    if (items.length) {
        slider.value.prepend(items[items.length - 1])
    }
}

onMounted(() => {
    // Auto play setiap 5 detik
    interval.value = setInterval(() => {
        next()
    }, 5000)
})

onBeforeUnmount(() => {
    // Clear interval saat komponen di-unmount
    clearInterval(interval.value)
})
</script>

<template>
    <section class="hero-section h-screen relative overflow-hidden">
        <ul ref="slider" class="slider w-full h-full relative">
            <li v-for="slide in slides" :key="slide.id"
                class="item absolute bg-center bg-cover rounded-lg shadow-lg text-white transition-all duration-700 ease-in-out"
                :style="{ backgroundImage: `url(${slide.image})` }">
                <div class="overlay"></div>
                <div class="content absolute text-white drop-shadow-md left-4 md:left-6 lg:left-8 xl:left-44">
                    <div class="inline-flex items-center px-4 py-2 bg-primary-100 rounded-full text-primary-800 text-xs md:text-sm font-medium mb-3 md:mb-6">
                        <i class="ti ti-star-filled text-sm md:text-base mr-2"></i>
                        Wisata Biru Populer di Lampung
                    </div>
                    <h2 class="title text-2xl md:text-3xl lg:text-4xl xl:text-6xl font-bold leading-tight mb-2 md:mb-6" v-html="slide.title"></h2>
                    <div className="flex items-center gap-2 mb-2 md:mb-6 md:justify-start justify-center">
                        <div class="w-5 h-5 flex justify-senter items-center">
                            <i class="ti ti-map-pin text-secondary-300 text-lg md:text-2xl"></i>
                        </div>
                        <span className="text-white/90 md:text-lg text-sm">{{ slide.regency }}</span>
                    </div>
                    <p class="description text-sm md:text-base xl:text-lg mb-4 leading-relaxed">{{ slide.description }}</p>
                </div>
            </li>
        </ul>

        <!-- Navigasi -->
        <nav class="nav absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex gap-4">
            <button @click="prev" class="w-10 h-10 rounded-full bg-secondary-400 text-white hover:bg-secondary-500 flex items-center justify-center transition-all duration-300"><i class="ti ti-chevron-left text-xl"></i></button>
            <button @click="next" class="w-10 h-10 rounded-full bg-secondary-400 text-white hover:bg-secondary-500 flex items-center justify-center transition-all duration-300"><i class="ti ti-chevron-right text-xl"></i></button>
        </nav>
    </section>
</template>

<style scoped>
.item {
    width: 200px;
    height: 300px;
    top: 50%;
    transform: translateY(-50%);
    background-size: cover;
    transition: transform 0.1s, left 0.75s, top 0.75s, width 0.75s, height 0.75s;
    z-index: 1;
}

.overlay {
    position: absolute;
    inset: 0;
    z-index: 0;
    transition: background 0.5s ease;
}

.item:nth-child(1) .overlay,
.item:nth-child(2) .overlay {
    background: linear-gradient(to right, rgba(0,0,0,.6), rgba(0,0,0,.3));
    inset: 0;
}

.item:nth-child(1),
.item:nth-child(2) {
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    transform: none;
    border-radius: 0;
    box-shadow: none;
    opacity: 1;
}

.item:nth-child(3) {
    left: 53%;
}

.item:nth-child(4) {
    left: calc(53% + 220px);
}

.item:nth-child(5) {
    left: calc(53% + 440px);
}

.item:nth-child(6) {
    left: calc(53% + 660px);
    opacity: 0;
}

.content {
    width: min(30vw, 500px);
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    opacity: 0;
    display: none;
    animation: show 0.9s ease-in-out 0.3s forwards;
}

.item:nth-of-type(2) .content {
    display: block;
}

@keyframes show {
    0% {
        filter: blur(5px);
        transform: translateY(calc(-50% + 75px));
    }

    100% {
        opacity: 1;
        filter: blur(0);
    }
}

@media (width > 650px) and (width < 900px) {
    .item {
        width: 160px;
        height: 270px;
    }

    .item:nth-child(3) {
        left: 50%;
    }

    .item:nth-child(4) {
        left: calc(50% + 170px);
    }

    .item:nth-child(5) {
        left: calc(50% + 340px);
    }

    .item:nth-child(6) {
        left: calc(50% + 510px);
        opacity: 0;
    }
}

@media (max-width: 650px) {
    .item {
        width: 130px;
        height: 170px;
        transform: translateY(0);
        top: 58%;
    }

    .content {
        width: 100%;
        top: 36%;
        left: 0;
        padding: 0 30px;
        text-align: center;
    }

    .item:nth-child(3) {
        left: 33%;
    }

    .item:nth-child(4) {
        left: calc(33% + 140px);
    }

    .item:nth-child(5) {
        left: calc(33% + 280px);
    }

    .item:nth-child(6) {
        left: calc(33% + 420px);
        opacity: 0;
    }
}
</style>
