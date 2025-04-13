<script setup lang="ts">
import DefaultLayout from '../layouts/DefaultLayout.vue';

const features = [
    {
        icon: 'mdi-file-xml-box',
        key: 'modManagement',
    },
    {
        icon: 'mdi-playlist-check',
        key: 'presets',
    },
    {
        icon: 'mdi-share-variant',
        key: 'sharing',
    },
    {
        icon: 'mdi-magnify',
        key: 'detection',
    },
    {
        icon: 'mdi-chart-bar',
        key: 'stats',
    },
    {
        icon: 'mdi-laptop',
        key: 'multiplatform',
    },
];
</script>

<template>
    <DefaultLayout>
        <!-- ヒーローセクション -->
        <v-container fluid class="hero-section pa-0">
            <div class="hero-bg">
                <div class="hero-overlay"></div>
                <div
                    class="d-flex flex-column align-center justify-center fill-height text-center pa-4"
                    style="min-height: 500px"
                >
                    <h1 class="text-h2 font-weight-bold text-white mb-4">
                        {{ $t('home.hero.title') }}
                    </h1>
                    <p class="text-h6 text-white mb-8">
                        {{ $t('home.hero.subtitle') }}
                    </p>
                    <v-btn
                        color="primary"
                        size="large"
                        variant="elevated"
                        href="#about"
                    >
                        {{ $t('home.hero.cta') }}
                    </v-btn>
                </div>
            </div>
        </v-container>

        <!-- 概要セクション -->
        <v-container id="about" class="py-12">
            <v-row justify="center">
                <v-col cols="12" md="10" lg="8">
                    <h2 class="text-h4 text-center section-title">
                        {{ $t('home.about.title') }}
                    </h2>
                    <v-card class="bg-surface">
                        <v-card-text>
                            <p class="text-body-1 mb-4">
                                {{ $t('home.about.description') }}
                            </p>
                            <v-divider class="my-4"></v-divider>
                            <div class="d-flex flex-wrap justify-space-between">
                                <div class="pa-2">
                                    <v-icon
                                        icon="mdi-account"
                                        class="mr-2"
                                        color="primary"
                                    ></v-icon>
                                    <span>{{ $t('home.about.developer') }}</span>
                                </div>
                                <div class="pa-2">
                                    <v-icon
                                        icon="mdi-progress-check"
                                        class="mr-2"
                                        color="primary"
                                    ></v-icon>
                                    <span>{{ $t('home.about.status') }}</span>
                                </div>
                                <div class="pa-2">
                                    <v-icon
                                        icon="mdi-calendar"
                                        class="mr-2"
                                        color="primary"
                                    ></v-icon>
                                    <span>{{
                                        $t('home.about.releaseDate')
                                    }}</span>
                                </div>
                            </div>
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>

        <!-- 機能セクション -->
        <v-container id="features" class="py-12 bg-background">
            <v-row justify="center">
                <v-col cols="12" md="10">
                    <h2 class="text-h4 text-center section-title">
                        {{ $t('home.features.title') }}
                    </h2>
                    <v-row>
                        <v-col
                            v-for="(feature, index) in features"
                            :key="index"
                            cols="12"
                            sm="6"
                            md="4"
                        >
                            <v-hover>
                                <template v-slot="{ isHovering, props }">
                                    <v-card
                                        v-bind="props"
                                        :elevation="isHovering ? 8 : 2"
                                        :class="{ 'on-hover': isHovering }"
                                        class="feature-card h-100"
                                    >
                                        <v-card-item>
                                            <v-avatar
                                                class="mb-4"
                                                color="primary"
                                                size="64"
                                                rounded
                                            >
                                                <v-icon
                                                    :icon="feature.icon"
                                                    size="36"
                                                    color="white"
                                                ></v-icon>
                                            </v-avatar>
                                            <v-card-title class="text-h6">
                                                {{
                                                    $t(
                                                        `home.features.${feature.key}.title`
                                                    )
                                                }}
                                            </v-card-title>
                                            <v-card-text>
                                                {{
                                                    $t(
                                                        `home.features.${feature.key}.description`
                                                    )
                                                }}
                                            </v-card-text>
                                        </v-card-item>
                                    </v-card>
                                </template>
                            </v-hover>
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>
        </v-container>

        <!-- お問い合わせセクション -->
        <v-container id="contact" class="py-12">
            <v-row justify="center">
                <v-col cols="12" md="8" lg="6">
                    <h2 class="text-h4 text-center section-title">
                        {{ $t('home.contact.title') }}
                    </h2>
                    <v-card class="bg-surface">
                        <v-card-text>
                            <div class="d-flex align-center mb-4">
                                <v-icon
                                    icon="mdi-message-text"
                                    size="32"
                                    class="mr-4"
                                    color="primary"
                                ></v-icon>
                                <span class="text-body-1">{{
                                    $t('home.contact.discord')
                                }}</span>
                            </div>
                            <div class="d-flex align-center">
                                <v-icon
                                    icon="mdi-email"
                                    size="32"
                                    class="mr-4"
                                    color="primary"
                                ></v-icon>
                                <span class="text-body-1">{{
                                    $t('home.contact.email')
                                }}</span>
                            </div>
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </DefaultLayout>
</template>

<style scoped>
.hero-section {
    position: relative;
}

.hero-bg {
    position: relative;
    background-color: #202326;
    background-image:
        radial-gradient(
            circle at 10% 20%,
            rgba(220, 30, 90, 0.05) 0%,
            transparent 20%
        ),
        radial-gradient(
            circle at 90% 30%,
            rgba(220, 30, 90, 0.05) 0%,
            transparent 20%
        ),
        radial-gradient(
            circle at 30% 70%,
            rgba(220, 30, 90, 0.05) 0%,
            transparent 20%
        ),
        radial-gradient(
            circle at 70% 80%,
            rgba(220, 30, 90, 0.05) 0%,
            transparent 20%
        );
}

.hero-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(32, 35, 38, 0.3);
}

.feature-card {
    transition: all 0.3s;
}

.feature-card.on-hover {
    transform: translateY(-8px);
}
</style>
