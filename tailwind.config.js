import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './app/Filament/**/*.php',
        './resources/views/**/*.blade.php',
        './vendor/filament/**/*.blade.php',
        './resources/js/**/*.vue',
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Poppins', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                primary: {
                    '50': '#eff7ff',
                    '100': '#dbedfe',
                    '200': '#bfe0fe',
                    '300': '#92cdfe',
                    '400': '#5fb0fb',
                    '500': '#3a90f7',
                    '600': '#2371ed',
                    '700': '#1c5bd9',
                    '800': '#1e4db7',
                    '900': '#1d428b',
                    '950': '#172954',
                },
            },
        },
    },
    plugins: [forms],
}
