<script setup lang="ts">
import DefaultLayout from '../layouts/DefaultLayout.vue';

</script>

<template>
    <DefaultLayout>
        <v-container class="py-12">
            <v-row justify="center">
                <v-col cols="12" md="10" lg="8">
                    <h2 class="text-h4 text-center section-title mb-6">
                        特定商取引法に関する表記
                    </h2>
                    <v-card class="bg-surface">
                        <v-card-text>
                            <v-list>
                                <v-list-item>
                                    <template v-slot:prepend>
                                        <v-icon icon="mdi-store" color="primary"></v-icon>
                                    </template>
                                    <v-list-item-title class="font-weight-bold">販売事業者・責任者</v-list-item-title>
                                    <v-list-item-subtitle>EEX-slime ※実名は請求があれば遅滞なく開示します</v-list-item-subtitle>
                                </v-list-item>

                                <v-divider></v-divider>

                                <v-list-item>
                                    <template v-slot:prepend>
                                        <v-icon icon="mdi-map-marker" color="primary"></v-icon>
                                    </template>
                                    <v-list-item-title class="font-weight-bold">所在地</v-list-item-title>
                                    <v-list-item-subtitle>請求があれば遅滞なく開示します</v-list-item-subtitle>
                                </v-list-item>

                                <v-divider></v-divider>

                                <v-list-item>
                                    <template v-slot:prepend>
                                        <v-icon icon="mdi-phone" color="primary"></v-icon>
                                    </template>
                                    <v-list-item-title class="font-weight-bold">電話番号</v-list-item-title>
                                    <v-list-item-subtitle>請求があれば遅滞なく開示します</v-list-item-subtitle>
                                </v-list-item>

                                <v-divider></v-divider>

                                <v-list-item>
                                    <template v-slot:prepend>
                                        <v-icon icon="mdi-email" color="primary"></v-icon>
                                    </template>
                                    <v-list-item-title class="font-weight-bold">メールアドレス</v-list-item-title>
                                    <v-list-item-subtitle>exe.ndra314@gmail.com</v-list-item-subtitle>
                                </v-list-item>

                                <v-divider></v-divider>

                                <v-list-item>
                                    <template v-slot:prepend>
                                        <v-icon icon="mdi-credit-card" color="primary"></v-icon>
                                    </template>
                                    <v-list-item-title class="font-weight-bold">お支払い方法</v-list-item-title>
                                    <v-list-item-subtitle>Stripeが対応する決済手段(クレジットカードを想定)</v-list-item-subtitle>
                                </v-list-item>

                                <v-divider></v-divider>

                                <v-list-item>
                                    <template v-slot:prepend>
                                        <v-icon icon="mdi-truck-delivery" color="primary"></v-icon>
                                    </template>
                                    <v-list-item-title class="font-weight-bold">引き渡し時期</v-list-item-title>
                                    <v-list-item-subtitle>決済完了後、サーバーに反映され次第、即座に利用いただけます。</v-list-item-subtitle>
                                </v-list-item>

                                <v-divider></v-divider>

                                <v-list-item>
                                    <template v-slot:prepend>
                                        <v-icon icon="mdi-calendar-refresh" color="primary"></v-icon>
                                    </template>
                                    <v-list-item-title class="font-weight-bold">返品・キャンセルについて</v-list-item-title>
                                    <v-list-item-subtitle>デジタルコンテンツの性質上、購入後の返品・返金はお受けしておりません。</v-list-item-subtitle>
                                    <v-list-item-subtitle>ただし、サブスクリプションはいつでも解約可能です。解約後は次回更新日以降の課金は発生しません。</v-list-item-subtitle>
                                </v-list-item>

                                <v-divider></v-divider>

                                <v-list-item>
                                    <v-list-item-subtitle>Ballista appは2025年5月中にサービス開始予定です。サービス開始までに内容が変更される可能性があります。ご了承ください。</v-list-item-subtitle>
                                </v-list-item>
                            </v-list>
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </DefaultLayout>
</template>

<style scoped>
.section-title::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 50px;
    height: 3px;
    background-color: #dc1e5a;
}
</style>