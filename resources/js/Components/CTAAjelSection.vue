<script setup>
import { ref } from 'vue'
import { Link, router } from '@inertiajs/vue3';

const props = defineProps({
    __t: Function
})

const newMessage = ref('')

const sendToChatbot = () => {
    if (!newMessage.value.trim()) return
    router.visit(route('chatbot', { message: newMessage.value }))
}
</script>

<template>
    <section class="py-20 bg-gradient-to-br from-primary-50 to-secondary-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-5 gap-6 items-center">
                <div class="md:col-span-3 col-span-5 text-center md:text-left">
                    <div class="inline-flex items-center px-4 py-2 bg-primary-100 rounded-full text-primary-800 text-sm font-medium mb-6">
                        <i class="ti ti-sparkles text-base mr-2"></i>
                        AI Assistant
                    </div>
                    <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4" v-html="__t('home.ajelai.title')"></h2>
                    <p class="text-md lg:text-lg text-gray-600 max-w-2xl mb-8" v-html="__t('home.ajelai.description')"></p>
                    <Link :href="route('chatbot')" class="inline-flex items-center px-6 py-2 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors duration-200">
                        <i class="ti ti-message-circle-search text-2xl mr-2 -ms-1"></i>{{ __t('home.ajelai.button') }}
                    </Link>
                </div>
                <div class="md:col-span-2 col-span-5">
                    <div class="relative">
                        <img src="/assets/images/ajelai-full.png" alt="Ajel AI" class="w-full">
                        <div class="flex gap-3 bg-white shadow-2xl rounded-lg p-4 absolute bottom-16 md:bottom-24 right-0">
                            <input 
                                v-model="newMessage"
                                @keypress.enter="sendMessage"
                                type="text" 
                                :placeholder="__t('chatbot.type_message')"
                                class="w-full px-4 py-2 border border-gray-300 text-sm md:text-lg rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                            >
                            <button 
                                @click="sendToChatbot"
                                :disabled="!newMessage.trim()"
                                class="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
                            >
                                <i class="ti ti-sparkles text-xl"></i>
                            </button>
                        </div>
                        <div class="absolute top-0 right-0 w-8 h-8 bg-secondary-400 rounded-full animate-bounce"></div>
                        <div class="absolute -bottom-4 left-0 w-6 h-6 bg-primary-400 rounded-full animate-bounce" style="animation-delay: 0.5s"></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>