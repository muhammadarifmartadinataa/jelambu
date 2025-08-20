<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const slider = ref(null)
const interval = ref(null)

const slides = ref([
    {
        id: 1,
        title: 'Pantai Gigi Hiu',
        description: 'Pantai Gigi Hiu, lanskap liar dengan deretan batu tajam menjulang seperti taring raksasa, menyajikan keindahan alam yang eksotis dan belum tersentuh. Tempat yang sempurna bagi pencari ketenangan, fotografer petualang, dan penikmat panorama luar biasa.',
        image: '/assets/images/wisata/pantai-gigi-hiu.jpg',
    },
    {
        id: 2,
        title: 'Pantai Tanjung Setia Krui',
        description: 'Terkenal di kalangan peselancar dunia, Pantai Tanjung Setia menyuguhkan ombak raksasa, pasir putih yang lembut, dan suasana tenang yang jauh dari keramaian. Surga tropis bagi pencinta laut, petualang, dan pencari momen sempurna.',
        image: '/assets/images/wisata/pantai-krui-2.jpg',
    },
    {
        id: 3,
        title: 'Pantai Mutun Pesawaran',
        description: 'Dengan air laut yang tenang, pasir putih, dan akses mudah dari pusat kota, Pantai Mutun jadi pilihan ideal untuk liburan santai bersama keluarga. Lengkap dengan wahana air, kuliner laut, dan panorama tropis yang memikat.',
        image: '/assets/images/wisata/pantai-mutun.jpg',
    },
    {
        id: 4,
        title: 'Pantai Labuhan Jukung Krui',
        description: 'Terkenal dengan garis pantai yang panjang dan matahari terbenam yang memukau, Labuhan Jukung jadi destinasi favorit wisatawan yang ingin bersantai, bermain ombak, atau sekadar menikmati keindahan sore di tepi Samudra Hindia.',
        image: '/assets/images/wisata/pantai-krui.jpg',
    },
    {
        id: 5,
        title: 'Pantai Marina Kalianda',
        description: 'Pantai Marina menawarkan suasana tropis yang segar dengan fasilitas kekinian, cocok untuk piknik keluarga, nongkrong santai, atau berburu foto Instagramable di tepi laut. Akses mudah, pemandangan memukau, dan kenyamanan yang bikin betah.',
        image: '/assets/images/wisata/pantai-marina.jpg',
    },
    {
        id: 6,
        title: 'Pulau Pahawang',
        description: 'Air sebening kaca, terumbu karang warna-warni, dan hamparan pasir putih membuat Pulau Pahawang jadi primadona snorkeling di Lampung. Tempat sempurna untuk melarikan diri dari hiruk pikuk dan tenggelam dalam keindahan laut tropis.',
        image: '/assets/images/wisata/pulau-pahawang.webp',
    },
])

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
                    <h2 class="title text-2xl md:text-3xl lg:text-4xl xl:text-6xl font-bold leading-tight">{{ slide.title }}</h2>
                    <p class="description text-sm md:text-base xl:text-lg my-4 leading-relaxed">{{ slide.description }}</p>
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
    background: rgba(0, 0, 0, 0.4);
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
