import { createApp } from 'vue';
import { createVuetify } from 'vuetify';
import { createI18n } from 'vue-i18n';
import { createRouter, createWebHistory } from 'vue-router';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import { aliases, mdi } from 'vuetify/iconsets/mdi';

// スタイルのインポート
import 'vuetify/styles';
import '@mdi/font/css/materialdesignicons.css';
import '@fontsource/inter/400.css';
import '@fontsource/inter/700.css';
import './style.css';

// ルートコンポーネントのインポート
import App from './App.vue';

// ルーターの設定
import routes from './router';

// 言語ファイルのインポート
import jaMessages from './locales/ja';
import enMessages from './locales/en';

const messages = {
    ja: jaMessages,
    en: enMessages
};

// i18nの設定
const i18n = createI18n({
    legacy: false,
    locale: 'ja',
    fallbackLocale: 'en',
    messages,
    globalInjection: true,
    runtimeOnly: false
});

// Vuetifyの設定
const vuetify = createVuetify({
    components,
    directives,
    icons: {
        defaultSet: 'mdi',
        aliases,
        sets: {
            mdi,
        },
    },
    theme: {
        defaultTheme: 'dark',
        themes: {
            dark: {
                dark: true,
                colors: {
                    background: '#202326',
                    surface: '#2D2D2D',
                    primary: '#DC1E5A',
                    'on-surface': '#CCCCCC',
                    'on-surface-variant': '#FFFFFF',
                },
            },
        },
    },
});

// ルーターの設定
const router = createRouter({
    history: createWebHistory('/ballista-app_wiki/'),
    routes,
});

// アプリケーションの作成
const app = createApp(App);
app.use(i18n);
app.use(vuetify);
app.use(router);

// デバッグ用のコンソールログ
console.log('Current locale:', i18n.global.locale);
console.log('Available locales:', Object.keys(messages));
console.log('Sample translation test:', i18n.global.t('nav.home'));

// アプリをマウント
app.mount('#app');