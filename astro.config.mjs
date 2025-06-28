// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import { visualEditorPlugin } from 'makelabs/vite'


import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
    server: {
        host: '0.0.0.0',
        allowedHosts: true
    },

    vite: {
        plugins: [tailwindcss(), visualEditorPlugin()],
        server: {
            allowedHosts: true
        }
    },

    integrations: [react()]
});