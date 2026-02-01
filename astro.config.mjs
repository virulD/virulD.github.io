// @ts-check
import { defineConfig } from 'astro/config';
import process from 'node:process';

// https://astro.build/config
export default defineConfig({
    site: 'https://virulD.github.io',
    base: process.env.GITHUB_ACTIONS ? '/virulD.github.io/' : '/',
});
