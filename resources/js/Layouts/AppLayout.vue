<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { Link, usePage, Head } from '@inertiajs/vue3'

const showMobileMenu = ref(false)
const showLanguageDropdown = ref(false)
const languageDropdown = ref(null)

const props = defineProps({
    currentLang: {
        type: String,
        default: 'id'
    }
})

const page = usePage()

// Translation helper
const __t = (key) => {
    const translations = page.props.translations || {}
    return key.split('.').reduce((obj, part) => obj && obj[part], translations) || key
}

const switchLanguage = (lang) => {
    showLanguageDropdown.value = false
    window.location.href = `${window.location.pathname}?lang=${lang}`
}

// Close dropdowns when clicking outside
const handleClickOutside = (event) => {
    if (languageDropdown.value && !languageDropdown.value.contains(event.target)) {
        showLanguageDropdown.value = false
    }
}

onMounted(() => {
    document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
    document.removeEventListener('click', handleClickOutside)
})
</script>
<template>
    <Head>
        <meta head-key="description" name="description" content="Temukan keindahan wisata biru Lampung yang menakjubkan. Dari pantai eksotis hingga laut yang memukau." />
    </Head>

    <div class="min-h-screen bg-gray-50 font-sans">
        <!-- Navigation -->
        <nav class="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200/50 shadow-sm">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex justify-between items-center h-20">
                    <!-- Logo -->
                    <Link :href="route('beranda')">
                        <img src="/assets/images/logo/logo-jelambu.svg" alt="Jelambu" class="h-16">
                    </Link>

                    <!-- Desktop Navigation -->
                    <div class="hidden md:flex items-center space-x-8">
                        <Link 
                            :href="route('beranda')" 
                            class="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200"
                            :class="{ 'text-primary-600': $page.component === 'Beranda' }"
                        >
                            {{ __t('nav.home') }}
                        </Link>
                        <Link 
                            :href="route('kabupaten')" 
                            class="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200"
                            :class="{ 'text-primary-600': $page.component === 'Kabupaten' }"
                        >
                            {{ __t('nav.regencies') }}
                        </Link>
                        <Link 
                            :href="route('wisata')" 
                            class="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200"
                            :class="{ 'text-primary-600': $page.component === 'Wisata/Index' || $page.component === 'Wisata/Show' }"
                        >
                            {{ __t('nav.destinations') }}
                        </Link>
                        <Link 
                            :href="route('chatbot')" 
                            class="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200"
                            :class="{ 'text-primary-600': $page.component === 'Chatbot' }"
                        >
                            {{ __t('nav.chatbot') }}
                        </Link>
                        <Link 
                            :href="route('reviews')" 
                            class="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200"
                            :class="{ 'text-primary-600': $page.component === 'Reviews' }"
                        >
                            {{ __t('nav.reviews') }}
                        </Link>
                    </div>

                    <!-- Language Switcher & Mobile Menu -->
                    <div class="flex items-center space-x-4">
                        <!-- Language Switcher -->
                        <div class="relative" ref="languageDropdown">
                            <button 
                                @click="showLanguageDropdown = !showLanguageDropdown"
                                class="flex items-center space-x-2 px-3 py-2 rounded-lg border border-gray-200 hover:border-primary-300 transition-colors duration-200"
                            >
                                <span class="text-sm font-medium">{{ currentLang.toUpperCase() }}</span>
                                <i class="ti ti-chevron-down text-sm"></i>
                            </button>
                            
                            <div 
                                v-show="showLanguageDropdown"
                                class="absolute right-0 mt-2 w-32 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-50"
                            >
                                <button 
                                    @click="switchLanguage('id')"
                                    class="w-full text-left px-4 py-2 text-sm hover:bg-gray-50 transition-colors duration-200"
                                    :class="{ 'text-primary-600 bg-primary-50': currentLang === 'id' }"
                                >
                                    🇮🇩 Indonesia
                                </button>
                                <button 
                                    @click="switchLanguage('en')"
                                    class="w-full text-left px-4 py-2 text-sm hover:bg-gray-50 transition-colors duration-200"
                                    :class="{ 'text-primary-600 bg-primary-50': currentLang === 'en' }"
                                >
                                    🇺🇸 English
                                </button>
                            </div>
                        </div>

                        <!-- Mobile Menu Button -->
                        <button 
                            @click="showMobileMenu = !showMobileMenu"
                            class="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                        >
                            <i class="ti ti-menu-2 text-xl"></i>
                        </button>
                    </div>
                </div>

                <!-- Mobile Navigation -->
                <div 
                    v-show="showMobileMenu"
                    class="md:hidden py-4 border-t border-gray-200"
                >
                    <div class="space-y-2">
                        <Link 
                            :href="route('beranda')" 
                            class="block px-4 py-2 text-gray-700 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-colors duration-200"
                            :class="{ 'text-white bg-primary-600': $page.component === 'Beranda' }"
                            @click="showMobileMenu = false"
                        >
                            {{ __t('nav.home') }}
                        </Link>
                        <Link 
                            :href="route('kabupaten')" 
                            class="block px-4 py-2 text-gray-700 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-colors duration-200"
                            :class="{ 'text-white bg-primary-600': $page.component === 'Kabupaten' }"
                            @click="showMobileMenu = false"
                        >
                            {{ __t('nav.regencies') }}
                        </Link>
                        <Link 
                            :href="route('wisata')" 
                            class="block px-4 py-2 text-gray-700 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-colors duration-200"
                            :class="{ 'text-white bg-primary-600': $page.component === 'Wisata/Index' || $page.component === 'Wisata/Show' }"
                            @click="showMobileMenu = false"
                        >
                            {{ __t('nav.destinations') }}
                        </Link>
                        <Link 
                            :href="route('chatbot')" 
                            class="block px-4 py-2 text-gray-700 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-colors duration-200"
                            :class="{ 'text-white bg-primary-600': $page.component === 'Chatbot' }"
                            @click="showMobileMenu = false"
                        >
                            {{ __t('nav.chatbot') }}
                        </Link>
                        <Link 
                            :href="route('reviews')" 
                            class="block px-4 py-2 text-gray-700 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-colors duration-200"
                            :class="{ 'text-white bg-primary-600': $page.component === 'Reviews' }"
                            @click="showMobileMenu = false"
                        >
                            {{ __t('nav.reviews') }}
                        </Link>
                    </div>
                </div>
            </div>
        </nav>

        <!-- Main Content -->
        <main>
            <slot />
        </main>

        <!-- Footer -->
        <footer class="bg-gray-900 text-white">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <!-- Brand -->
                    <div class="md:col-span-2">
                        <Link :href="route('beranda')" class="mb-4 d-inline-block">
                            <img src="/assets/images/logo/logo-jelambu-light.svg" alt="Jelambu" class="h-16">
                        </Link>
                        <p class="text-gray-300 mb-4">
                            {{ __t('footer.description') }}
                        </p>
                        <p class="text-sm text-gray-400">
                            {{ __t('footer.made_with_love') }}
                        </p>
                    </div>

                    <!-- Quick Links -->
                    <div>
                        <h4 class="text-lg font-semibold mb-4">{{ __t('common.quick_links') }}</h4>
                        <div class="space-y-2">
                            <Link :href="route('beranda')" class="block text-gray-300 hover:text-white transition-colors duration-200">
                                {{ __t('nav.home') }}
                            </Link>
                            <Link :href="route('kabupaten')" class="block text-gray-300 hover:text-white transition-colors duration-200">
                                {{ __t('nav.regencies') }}
                            </Link>
                            <Link :href="route('wisata')" class="block text-gray-300 hover:text-white transition-colors duration-200">
                                {{ __t('nav.destinations') }}
                            </Link>
                            <Link :href="route('chatbot')" class="block text-gray-300 hover:text-white transition-colors duration-200">
                                {{ __t('nav.chatbot') }}
                            </Link>
                            <Link :href="route('reviews')" class="block text-gray-300 hover:text-white transition-colors duration-200">
                                {{ __t('nav.reviews') }}
                            </Link>
                        </div>
                    </div>

                    <!-- Contact -->
                    <div>
                        <h4 class="text-lg font-semibold mb-4">{{ __t('common.contact') }}</h4>
                        <div class="space-y-2 text-gray-300">
                            <p class="flex items-center space-x-2">
                                <i class="ti ti-mail text-primary-600"></i>
                                <span>info@jelambu.com</span>
                            </p>
                            <p class="flex items-center space-x-2">
                                <i class="ti ti-phone text-primary-600"></i>
                                <span>+62 812 3456 7890</span>
                            </p>
                            <p class="flex items-center space-x-2">
                                <i class="ti ti-map-pin text-primary-600"></i>
                                <span>Bandar Lampung, Indonesia</span>
                            </p>
                        </div>
                    </div>
                </div>

                <div class="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
                    <p>&copy; 2024 Jelambu. {{ __t('footer.all_rights_reserved') }}</p>
                </div>
            </div>
        </footer>
    </div>
</template>

