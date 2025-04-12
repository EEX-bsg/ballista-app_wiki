<script setup lang="ts">
import { ref, computed } from 'vue';
import { useI18n } from 'vue-i18n';
import LogoComponent from '../components/LogoComponent.vue';

const { t, locale } = useI18n();

const drawer = ref(false);
const currentLocale = computed(() => locale.value);

const toggleLocale = () => {
    locale.value = locale.value === 'ja' ? 'en' : 'ja';
};
</script>

<template>
    <v-app>
        <!-- アプリバー -->
        <v-app-bar color="background" density="compact" elevation="1">
            <v-app-bar-title>
                <div class="d-flex align-center">
                    <LogoComponent />
                </div>
            </v-app-bar-title>

            <v-spacer></v-spacer>

            <!-- デスクトップ用ナビゲーション -->
            <div class="d-none d-md-flex">
                <v-btn variant="text" to="/">{{ t('nav.home') }}</v-btn>
                <v-btn variant="text" href="#about">{{ t('nav.about') }}</v-btn>
                <v-btn variant="text" href="#features">{{
                    t('nav.features')
                }}</v-btn>
                <v-btn variant="text" href="#contact">{{
                    t('nav.contact')
                }}</v-btn>
                <v-btn variant="text" @click="toggleLocale">
                    {{ currentLocale === 'ja' ? 'English' : '日本語' }}
                </v-btn>
            </div>

            <!-- モバイル用メニューボタン -->
            <v-app-bar-nav-icon
                class="d-md-none"
                @click="drawer = !drawer"
            ></v-app-bar-nav-icon>
        </v-app-bar>

        <!-- モバイル用ナビゲーションドロワー -->
        <v-navigation-drawer v-model="drawer" temporary>
            <v-list>
                <v-list-item to="/" prepend-icon="mdi-home" :key="'logo'">
                    <template v-slot:title>
                        <LogoComponent />
                    </template>
                </v-list-item>
                <v-divider></v-divider>
                <v-list-item
                    :title="t('nav.about')"
                    prepend-icon="mdi-information"
                    href="#about"
                    @click="drawer = false"
                    :key="'about'"
                ></v-list-item>
                <v-list-item
                    :title="t('nav.features')"
                    prepend-icon="mdi-puzzle"
                    href="#features"
                    @click="drawer = false"
                    :key="'features'"
                ></v-list-item>
                <v-list-item
                    :title="t('nav.contact')"
                    prepend-icon="mdi-email"
                    href="#contact"
                    @click="drawer = false"
                    :key="'contact'"
                ></v-list-item>
                <v-divider></v-divider>
                <v-list-item
                    :title="t('nav.language')"
                    prepend-icon="mdi-translate"
                    @click="toggleLocale"
                    :key="'language'"
                >
                    <template v-slot:append>
                        <v-chip size="small">{{
                            currentLocale === 'ja' ? '日本語' : 'English'
                        }}</v-chip>
                    </template>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>

        <!-- メインコンテンツ -->
        <v-main>
            <slot></slot>
        </v-main>

        <!-- フッター -->
        <v-footer class="bg-background">
            <div class="w-100 text-center">
                <p class="mb-0">{{ t('footer.copyright') }}</p>
                <p class="mb-0 text-caption">{{ t('footer.developedBy') }}</p>
                <p class="mb-0 text-caption">{{ t('footer.besiegeCopyright') }}</p>
            </div>
        </v-footer>
    </v-app>
</template>
