import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vite.dev/config/
export default defineConfig({
    plugins: [vue()],
    base: '/ballista-app_wiki/',
    build: {
        assetsInlineLimit: 0,
        sourcemap: true,
    },
    define: {
        __VUE_I18N_FULL_INSTALL__: true,
        __VUE_I18N_LEGACY_API__: true,
        __INTLIFY_PROD_DEVTOOLS__: false,
    }
});
