<script setup>
import { Link } from '@inertiajs/vue3'

defineProps({
    kabupatens: Array,
    __t: Function
})
</script>

<template>
    <section class="py-16 bg-secondary-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-12">
                <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                    {{ __t('home.regencies_cities') }}
                </h2>
                <p class="text-md lg:text-xl text-gray-600 max-w-3xl mx-auto">
                    {{ __t('home.regencies_description') }}
                </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Link :href="route('wisata', { kabupaten_id: kabupaten.id })"
                    v-for="kabupaten in kabupatens.slice(0, 3)" 
                    :key="kabupaten.id"
                    class="group bg-white rounded-xl shadow-sm hover:shadow-lg hover:ring-2 hover:ring-secondary-400 transition-all duration-300 transform hover:-translate-y-1 overflow-hidden relative"
                >
                    <img :src="'/storage/' + kabupaten.logo" :alt="kabupaten.nama_kabupaten" class="absolute -bottom-10 -right-16 group-hover:bottom-1 group-hover:-right-4 transition-all duration-300 z-0 opacity-10 group-hover:opacity-60">
                    <div class="p-6 relative z-10">
                        <h3 class="text-lg font-semibold text-gray-900 mb-4">{{ kabupaten.nama_kabupaten }}</h3>
                        <p class="text-gray-600 mb-4">
                            {{ kabupaten.wisatas_count || 0 }} {{ __t('regencies.destinations_count') }}
                        </p>
                        <p class="text-sm text-gray-500 mb-4">
                            Temukan berbagai destinasi wisata biru di {{ kabupaten.nama_kabupaten }}.
                        </p>
                        <Link 
                            :href="route('wisata', { kabupaten_id: kabupaten.id })"
                            class="inline-flex items-center text-secondary-400 hover:text-secondary-500 font-medium"
                        >
                            {{ __t('regencies.view_destinations') }}
                            <i class="ti ti-arrow-right ml-1"></i>
                        </Link>
                    </div>
                </Link>
            </div>

            <div class="text-center mt-8">
                <Link 
                    :href="route('kabupaten')"
                    class="inline-flex items-center px-6 py-3 bg-secondary-400 text-white font-semibold rounded-lg hover:bg-secondary-500 transition-colors duration-200"
                >
                    {{ __t('common.view_all') }}
                    <i class="ti ti-arrow-right ml-2"></i>
                </Link>
            </div>
        </div>
    </section>
</template>