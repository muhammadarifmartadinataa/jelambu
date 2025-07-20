<script setup>
import { ref, nextTick, computed, onMounted, watch } from 'vue'
import { Head, usePage, router } from '@inertiajs/vue3'
import AppLayout from '@/Layouts/AppLayout.vue'
import axios from 'axios'

const props = defineProps({
    currentLang: String,
})

const page = usePage()
const chatContainer = ref(null)
const newMessage = ref('')
const isTyping = ref(false)
const messages = ref([])

onMounted(async () => {
    const savedMessages = localStorage.getItem('ajel_chat')
    if (savedMessages) {
        messages.value = JSON.parse(savedMessages)
    }

    const query = new URLSearchParams(window.location.search)
    const incomingMessage = query.get('message')

    if (incomingMessage) {
        newMessage.value = incomingMessage
        await sendMessage()
        history.replaceState({}, document.title, window.location.pathname)
    }
})

watch(messages, (newVal) => {
    localStorage.setItem('ajel_chat', JSON.stringify(newVal))
}, { deep: true })

const clearChat = () => {
    messages.value = []
    localStorage.removeItem('ajel_chat')
}

// Translation helper
const __t = (key) => {
    const translations = page.props.translations || {}
    return key.split('.').reduce((obj, part) => obj && obj[part], translations) || key
}

const currentTime = computed(() => {
    return new Date().toLocaleTimeString('id-ID', { 
        hour: '2-digit', 
        minute: '2-digit',
    })
})

const quickQuestions = computed(() => [
    __t('chatbot.quick_questions_list.destinations'),
    __t('chatbot.quick_questions_list.pahawang'),
    __t('chatbot.quick_questions_list.dolphins'),
    __t('chatbot.quick_questions_list.snorkeling')
])

const sendMessage = async () => {
    if (!newMessage.value.trim()) return

    const userMessage = {
        id: Date.now(),
        text: newMessage.value,
        isUser: true,
        time: currentTime.value
    }

    messages.value.push(userMessage)
    const question = newMessage.value
    newMessage.value = ''

    // Simulate AI response
    isTyping.value = true
    
    await scrollToBottom()
    
    try {
        const reply = await getAIResponse(question)

        messages.value.push({
            id: Date.now() + 1,
            text: reply,
            isUser: false,
            time: currentTime.value
        })

        await scrollToBottom()
    } finally {
        isTyping.value = false
    }
}

const sendQuickQuestion = (question) => {
    newMessage.value = question
    sendMessage()
}

const getAIResponse = async (question) => {
    try {
        const response = await axios.post('/chatbot/chat', { message: question })
        return response.data.reply
    } catch (error) {
        if (error.response.status === 429) {
            return 'Maaf, Anda telah mencapai batas 3 pertanyaan per menit. Coba beberapa saat lagi ya 😊'
        } else {
            return 'Maaf, saya tidak bisa memproses pertanyaan Anda saat ini. Coba beberapa saat lagi ya 😊'
        }
    }
}

const scrollToBottom = async () => {
    await nextTick()
    if (chatContainer.value) {
        chatContainer.value.scrollTop = chatContainer.value.scrollHeight
    }
}
</script>

<template>
    <AppLayout :current-lang="currentLang">
        <Head :title="__t('nav.chatbot')" />

        <!-- Hero Section -->
        <section class="bg-primary-600 text-white py-16 relative overflow-hidden mt-20">
            <div class="absolute top-0 left-0 w-full h-full bg-[url('/assets/images/bg-pattern.png')] z-0 opacity-10"></div>
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10 relative">
                <div class="w-24 h-24 ring-4 ring-white bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                    <img :src="'/assets/images/ajelai.png'" alt="" class="w-full">
                </div>
                <h1 class="text-4xl lg:text-5xl font-bold mb-4">
                    {{ __t('chatbot.title') }}
                </h1>
                <p class="text-md lg:text-xl text-blue-100 max-w-3xl mx-auto">
                    {{ __t('chatbot.description') }}
                </p>
            </div>
        </section>

        <!-- Chat Interface -->
        <section class="py-12 bg-gray-50">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="bg-white rounded-xl shadow-lg overflow-hidden">
                    <!-- Chat Header -->
                    <div class="bg-primary-600 text-white p-4">
                        <div class="flex items-center gap-3">
                            <div class="w-10 h-10 ring-2 ring-white bg-white rounded-full flex items-center justify-center">
                                <img :src="'/assets/images/ajelai.png'" alt="" class="w-full">
                            </div>
                            <div class="truncate">
                                <h3 class="font-semibold">Ajel AI</h3>
                                <p class="text-sm text-blue-100">{{ __t('chatbot.travel_assistant') }}</p>
                            </div>
                            <div class="ml-auto flex items-center space-x-2">
                                <div class="w-2 h-2 bg-green-400 rounded-full"></div>
                                <span class="text-sm">{{ __t('common.online') }}</span>
                                <button v-if="messages.length > 0"
                                    @click="clearChat"
                                    class="py-2 px-3 text-sm text-white bg-red-500 rounded-lg"
                                    >
                                    <i class="ti ti-trash"></i>
                                </button>
                            </div>
                        </div>
                    </div>

                    <!-- Chat Messages -->
                    <div class="h-96 overflow-y-auto p-4 space-y-4" ref="chatContainer">
                        <!-- Welcome Message -->
                        <div class="flex items-start gap-3">
                            <div class="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                                <img :src="'/assets/images/ajelai.png'" alt="" class="w-full">
                            </div>
                            <div class="bg-gray-100 rounded-lg p-3 max-w-xs lg:max-w-md">
                                <p class="text-gray-800 text-sm sm:text-base">
                                    {{ __t('chatbot.ready_to_help') }}
                                </p>
                                <p class="text-xs text-gray-500 mt-1">{{ currentTime }}</p>
                            </div>
                        </div>

                        <!-- Chat Messages -->
                        <div 
                            v-for="message in messages" 
                            :key="message.id"
                            class="flex items-start space-x-3"
                            :class="{ 'flex-row-reverse space-x-reverse': message.isUser }"
                        >
                            <div 
                                class="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                                :class="message.isUser ? 'bg-primary-600' : 'bg-primary-100'"
                            >
                                <i v-if="message.isUser" class="text-sm ti ti-user text-white"></i>
                                <img v-else :src="'/assets/images/ajelai.png'" alt="" class="w-full">
                            </div>
                            <div 
                                class="rounded-lg p-3"
                                :class="message.isUser ? 'bg-primary-600 text-white max-w-xs lg:max-w-md' : 'bg-gray-100 text-gray-800'"
                            >
                                <div class="text-sm sm:text-base chat-message" v-html="message.text"></div>
                                <p 
                                    class="text-xs mt-1"
                                    :class="message.isUser ? 'text-blue-100' : 'text-gray-500'"
                                >
                                    {{ message.time }}
                                </p>
                            </div>
                        </div>

                        <!-- Typing Indicator -->
                        <div v-if="isTyping" class="flex items-start space-x-3">
                            <div class="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                                <img :src="'/assets/images/ajelai.png'" alt="" class="w-full">
                            </div>
                            <div class="bg-gray-100 rounded-lg p-3">
                                <div class="flex space-x-1">
                                    <div class="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                                    <div class="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style="animation-delay: 0.1s"></div>
                                    <div class="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style="animation-delay: 0.2s"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Quick Questions -->
                    <div class="p-4 border-t border-gray-200">
                        <p class="text-sm text-gray-600 mb-3">{{ __t('chatbot.quick_questions') }}</p>
                        <div class="flex flex-wrap gap-2">
                            <button 
                                v-for="question in quickQuestions" 
                                :key="question"
                                @click="sendQuickQuestion(question)"
                                class="text-start px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-primary-100 hover:text-primary-700 transition-colors duration-200"
                            >
                                {{ question }}
                            </button>
                        </div>
                    </div>

                    <!-- Chat Input -->
                    <div class="p-4 border-t border-gray-200">
                        <div class="flex gap-3">
                            <input 
                                v-model="newMessage"
                                @keypress.enter="sendMessage"
                                type="text" 
                                :placeholder="__t('chatbot.type_message')"
                                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                            >
                            <button 
                                @click="sendMessage"
                                :disabled="!newMessage.trim()"
                                class="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
                            >
                                <i class="ti ti-send"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Features Section -->
        <section class="py-16 bg-white">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center mb-12">
                    <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                        {{ __t('chatbot.what_can_ask') }}
                    </h2>
                    <p class="text-md lg:text-xl text-gray-600 max-w-3xl mx-auto">
                        {{ __t('chatbot.ai_description') }}
                    </p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div class="text-center p-6 bg-gray-50 rounded-xl">
                        <div class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <i class="ti ti-map-pin text-primary-600 text-2xl"></i>
                        </div>
                        <h3 class="text-lg font-semibold text-gray-900 mb-2">
                            {{ __t('chatbot.features.destinations.title') }}
                        </h3>
                        <p class="text-gray-600 text-sm">
                            {{ __t('chatbot.features.destinations.description') }}
                        </p>
                    </div>

                    <div class="text-center p-6 bg-gray-50 rounded-xl">
                        <div class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <i class="ti ti-bulb text-primary-600 text-2xl"></i>
                        </div>
                        <h3 class="text-lg font-semibold text-gray-900 mb-2">
                            {{ __t('chatbot.features.travel_tips.title') }}
                        </h3>
                        <p class="text-gray-600 text-sm">
                            {{ __t('chatbot.features.travel_tips.description') }}
                        </p>
                    </div>

                    <div class="text-center p-6 bg-gray-50 rounded-xl">
                        <div class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <i class="ti ti-heart text-primary-600 text-2xl"></i>
                        </div>
                        <h3 class="text-lg font-semibold text-gray-900 mb-2">
                            {{ __t('chatbot.features.recommendations.title') }}
                        </h3>
                        <p class="text-gray-600 text-sm">
                            {{ __t('chatbot.features.recommendations.description') }}
                        </p>
                    </div>

                    <div class="text-center p-6 bg-gray-50 rounded-xl">
                        <div class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <i class="ti ti-info-circle text-primary-600 text-2xl"></i>
                        </div>
                        <h3 class="text-lg font-semibold text-gray-900 mb-2">
                            {{ __t('chatbot.features.detailed_info.title') }}
                        </h3>
                        <p class="text-gray-600 text-sm">
                            {{ __t('chatbot.features.detailed_info.description') }}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    </AppLayout>
</template>

<style>
.chat-message p {
    margin-bottom: 4px;
}
.chat-message p:last-child {
    margin-bottom: 0;
}
.chat-message ul {
    list-style: disc;
    padding-left: 20px;
    margin-bottom: 4px;
}
.chat-message li {
    margin-bottom: 4px;
}
.chat-message li:last-child {
    margin-bottom: 0
}
.chat-message hr {
    margin: 8px 0;
}
</style>