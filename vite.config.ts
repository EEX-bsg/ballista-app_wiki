import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        vue({
            template: {
                compilerOptions: {
                    isCustomElement: (tag) => tag.includes('-')
                }
            }
        })
    ],
    base: '/ballista-app_wiki/',
    define: {
        __VUE_I18N_FULL_INSTALL__: true,
        __VUE_I18N_LEGACY_API__: false,
        __INTLIFY_PROD_DEVTOOLS__: false,
    },
    build: {
        // 本番ビルドを保守的に設定
        minify: 'terser',
        terserOptions: {
            compress: {
                drop_console: false,
            },
        },
        sourcemap: true,
    }
});