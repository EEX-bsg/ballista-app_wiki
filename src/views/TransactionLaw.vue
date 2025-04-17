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
                                    <v-list-item-title class="font-weight-bold">サービス責任者</v-list-item-title>
                                    <v-list-item-subtitle>若林悠斗 (a.k.a. EEX-slime)</v-list-item-subtitle>
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
                                        <v-icon icon="mdi-message-text" color="primary"></v-icon>
                                    </template>
                                    <v-list-item-title class="font-weight-bold">その他の連絡先</v-list-item-title>
                                    <v-list-item-subtitle>Discord: eex_slime</v-list-item-subtitle>
                                    <v-list-item-subtitle>X(Twitter): @EEX_slime</v-list-item-subtitle>
                                </v-list-item>

                                <v-divider></v-divider>

                                <v-list-item>
                                    <template v-slot:prepend>
                                        <v-icon icon="mdi-credit-card" color="primary"></v-icon>
                                    </template>
                                    <v-list-item-title class="font-weight-bold">お支払い方法</v-list-item-title>
                                    <v-list-item-subtitle>Stripeが対応する決済手段(クレジットカードを想定・開発中につき変更する場合があります)</v-list-item-subtitle>
                                </v-list-item>

                                <v-divider></v-divider>

                                <v-list-item>
                                    <template v-slot:prepend>
                                        <v-icon icon="mdi-truck-delivery" color="primary"></v-icon>
                                    </template>
                                    <v-list-item-title class="font-weight-bold">引き渡し時期</v-list-item-title>
                                    <v-list-item-subtitle>決済完了後、Ballista appの管理サーバーに反映され次第、利用いただけます。</v-list-item-subtitle>
                                </v-list-item>

                                <v-divider></v-divider>

                                <v-list-item>
                                    <template v-slot:prepend>
                                        <v-icon icon="mdi-calendar-refresh" color="primary"></v-icon>
                                    </template>
                                    <v-list-item-title class="font-weight-bold">返品・キャンセルについて</v-list-item-title>
                                    <v-list-item-subtitle>デジタルコンテンツの性質上、購入後の返品・返金は、原則としてお受けしておりません。</v-list-item-subtitle>
                                    <v-list-item-subtitle>ただし、サブスクリプションはいつでも解約可能です。解約後は次回更新日以降の課金は発生しません。</v-list-item-subtitle>
                                </v-list-item>

                                <v-divider></v-divider>

                                <v-list-item>
                                    <template v-slot:prepend>
                                        <v-icon icon="mdi-monitor" color="primary"></v-icon>
                                    </template>
                                    <v-list-item-title class="font-weight-bold">システム要件</v-list-item-title>
                                    <v-list-item-subtitle>Windows11, macOS Sequoia, Ubuntu 24.04LTSをサポート対象とする予定です。(開発中につき変更される場合があります)</v-list-item-subtitle>
                                    <v-list-item-subtitle>それ以外でのOSでの動作は担保しません。大抵の環境で動くと思いますが、自己責任でお願いします。</v-list-item-subtitle>
                                    <v-list-item-subtitle>また今後のBallista appのアップデートにより、システム要件が更新される場合があります。ご了承ください。</v-list-item-subtitle>
                                </v-list-item>
                                
                                <v-divider></v-divider>
                                
                                <v-list-item>
                                    <template v-slot:prepend>
                                        <v-icon icon="mdi-restart" color="primary"></v-icon>
                                    </template>
                                    <v-list-item-title class="font-weight-bold">サブスクリプション契約の自動更新について</v-list-item-title>
                                    <v-list-item-subtitle>月間・年間のサブスクリプション契約の場合、サブスクリプションは自動更新されます。</v-list-item-subtitle>
                                    <v-list-item-subtitle>月間契約の場合は、契約から30日後、年間契約の場合は、契約から365日後が更新日となります。(開発中につき変更される場合があります)</v-list-item-subtitle>
                                </v-list-item>

                                <v-divider></v-divider>

                                <v-list-item>
                                    <template v-slot:prepend>
                                        <v-icon icon="mdi-restart-off" color="primary"></v-icon>
                                    </template>
                                    <v-list-item-title class="font-weight-bold">サブスクリプション契約の停止について</v-list-item-title>
                                    <v-list-item-subtitle>サブスクリプションを停止したい場合は、更新日前にキャンセルを忘れずに行ってください。</v-list-item-subtitle>
                                    <v-list-item-subtitle>契約更新日前にユーザー宛に何かしらの通知を送る予定です。(開発中により方法は検討中)</v-list-item-subtitle>
                                    <v-list-item-subtitle>サブスクリプション契約停止後も、次回更新日まではサブスクリプションサービスを受け続けられます。</v-list-item-subtitle>
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