// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import js from "@eslint/js";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import eslintPluginSimpleImportSort from "eslint-plugin-simple-import-sort";
import storybook from "eslint-plugin-storybook";
import globals from "globals";

export default [
    { ignores: ["dist"] },
    {
        files: ["**/*.{js,jsx}"],
        languageOptions: {
            ecmaVersion: 2020,
            globals: {
                ...globals.browser,
                React: true,
                __APP_VERSION__: "readonly",
                __APP_COMMIT__: "readonly",
                __BUILD_TIME__: "readonly",
            },
            parserOptions: {
                ecmaVersion: "latest",
                ecmaFeatures: { jsx: true },
                sourceType: "module",
            },
        },
        settings: {
            "import/resolver": {
                node: {
                    extensions: [".js", ".jsx", ".ts", ".tsx", ".mjs"],
                },
            },
        },
        plugins: {
            "react-hooks": reactHooks,
            "react-refresh": reactRefresh,
            "simple-import-sort": eslintPluginSimpleImportSort,
        },
        rules: {
            "simple-import-sort/imports": [
                "error",
                {
                    groups: [
                        // React-related packages
                        ["^react", "^@?\\w"],
                        // Absolute imports (ví dụ alias @features, @components)
                        ["^(@features|@components)(/.*|$)"],
                        // Relative imports
                        ["^\\."],
                    ],
                },
            ],
            "simple-import-sort/exports": "warn",
            "react-hooks/rules-of-hooks": "error",
            "react-hooks/exhaustive-deps": [
                "warn",
                {
                    additionalHooks: "(useRecoilCallback|useRecoilTransaction_UNSTABLE)",
                },
            ],
            ...js.configs.recommended.rules,
            ...reactHooks.configs.recommended.rules,
            "no-unused-vars": [
                "warn",
                { varsIgnorePattern: ".*", argsIgnorePattern: ".*" },
            ],
            "react-refresh/only-export-components": [
                "warn",
                {
                    allowConstantExport: true,
                },
            ],
        },
    },
    ...storybook.configs["flat/recommended"],
];
