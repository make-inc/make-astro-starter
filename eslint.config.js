import astroPlugin from 'eslint-plugin-astro';
import astroParser from 'astro-eslint-parser';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';

export default [
    {
        files: ['**/*.astro'],
        plugins: {
            astro: astroPlugin,
            '@typescript-eslint': tseslint
        },
        languageOptions: {
            parser: astroParser,
            parserOptions: {
                parser: tsParser,
                extraFileExtensions: ['.astro']
            }
        },
        rules: {
            ...astroPlugin.configs.recommended.rules
        }
    }
]; 