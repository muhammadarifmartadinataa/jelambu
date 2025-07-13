<script setup>
import { Link } from '@inertiajs/vue3'

defineProps({
    __t: Function
})
</script>

<template>
    <section class="py-16 bg-primary-600 text-white relative overflow-hidden">
        <div class="absolute top-0 left-0 w-full h-full bg-[url('/assets/images/bg-pattern.png')] z-0 opacity-5"></div>
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <div class="max-w-3xl mx-auto">
                <h2 class="text-3xl lg:text-4xl font-bold mb-4">
                    {{ __t('home.need_help_planning') }}
                </h2>
                <p class="text-md lg:text-xl text-blue-100 mb-8">
                    {{ __t('home.jelambu_description') }}
                </p>
                <Link 
                    :href="route('chatbot')"
                    class="inline-flex items-center px-5 py-3 bg-white text-primary-600 font-semibold rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                    <div class="w-10 h-10 mr-2 -ms-1">
                        <img :src="'/assets/images/ajelai.png'" alt="" class="w-full">
                    </div>
                    {{ __t('home.chat_with_jelambu') }}
                </Link>
                <div class="flex items-center justify-center space-x-8 mt-8 text-blue-100">
                    <div class="flex items-center space-x-2">
                        <i class="ti ti-clock text-white text-lg"></i>
                        <span>{{ __t('home.available_24_7') }}</span>
                    </div>
                    <div class="flex items-center space-x-2">
                        <i class="ti ti-world text-white text-lg"></i>
                        <span>{{ __t('home.multi_language') }}</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>