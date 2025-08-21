<script setup>
import { Link } from '@inertiajs/vue3'

defineProps({
    __t: Function
})
</script>

<template>
    <section class="py-20 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
            <div class="max-w-3xl mx-auto">
                <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6" v-html="__t('home.cta.need_help_planning')"></h2>
                <p class="text-md lg:text-xl text-primary-100 mb-8 leading-relaxed">
                    {{ __t('home.cta.jelambu_description') }}
                </p>
                <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
                    <div
                        class="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 group">
                        <div
                            class="bg-white/20 p-4 rounded-full inline-flex mb-4 group-hover:scale-110 transition-transform">
                            <div class="w-8 h-8 flex justify-center items-center">
                                <i class="ti ti-message-circle text-white text-4xl"></i>
                            </div>
                        </div>
                        <h3 class="text-white font-semibold mb-2">{{ __t('home.cta.chat.title') }}</h3>
                        <p class="text-primary-100 text-sm">{{ __t('home.cta.chat.description') }}</p>
                    </div>

                    <div
                        class="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 group">
                        <div
                            class="bg-white/20 p-4 rounded-full inline-flex mb-4 group-hover:scale-110 transition-transform">
                            <div class="w-8 h-8 flex justify-center items-center">
                                <i class="ti ti-phone text-white text-4xl"></i>
                            </div>
                        </div>
                        <h3 class="text-white font-semibold mb-2">{{ __t('home.cta.call.title') }}</h3>
                        <p class="text-primary-100 text-sm">{{ __t('home.cta.call.description') }}</p>
                    </div>

                    <div
                        class="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 group">
                        <div
                            class="bg-white/20 p-4 rounded-full inline-flex mb-4 group-hover:scale-110 transition-transform">
                            <div class="w-8 h-8 flex justify-center items-center">
                                <i class="ti ti-mail text-white text-4xl"></i>
                            </div>
                        </div>
                        <h3 class="text-white font-semibold mb-2">{{ __t('home.cta.email.title') }}</h3>
                        <p class="text-primary-100 text-sm">{{ __t('home.cta.email.description') }}</p>
                    </div>
                </div>
                <div class="inline-flex">
                    <Link :href="route('chatbot')" class="bg-secondary-500 hover:bg-secondary-600 text-white px-12 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl">
                        {{ __t('home.cta.chat_with_jelambu') }}
                    </Link>
                </div>
                <div class="flex items-center justify-center gap-8 mt-8 text-primary-200 text-sm">
                    <div class="flex items-center gap-2">
                        <div class="w-2 h-2 bg-green-400 rounded-full"></div>
                        <span>{{ __t('home.cta.available_24_7') }}</span>
                    </div>
                    <div class="flex items-center gap-2">
                        <div class="w-2 h-2 bg-green-400 rounded-full"></div>
                        <span>{{ __t('home.cta.multi_language') }}</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>