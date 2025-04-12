/// <reference types="vite/client" />

declare module '*.vue' {
    import type { DefineComponent } from 'vue';
    const component: DefineComponent<{}, {}, any>;
    export default component;
}

// Vuetify
declare module 'vuetify/components' {
    const components: any;
    export = components;
}

declare module 'vuetify/directives' {
    const directives: any;
    export = directives;
}

declare module 'vuetify/iconsets/mdi' {
    export const mdi: any;
    export const aliases: any;
}

declare module 'vuetify/styles' {}
