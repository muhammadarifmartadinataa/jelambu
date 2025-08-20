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
                secondary: {
                    '50': '#fffaeb',
                    '100': '#fef1c7',
                    '200': '#fde18a',
                    '300': '#fccc4d',
                    '400': '#fbb41e',
                    '500': '#f5940b',
                    '600': '#d96e06',
                    '700': '#b44c09',
                    '800': '#923a0e',
                    '900': '#78310f',
                    '950': '#451703',
                },

            },
        },
    },
    plugins: [forms],
}
