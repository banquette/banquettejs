module.exports = {
    "preset": "ts-jest",
    "moduleFileExtensions": ["js", "jsx", "ts", "tsx", "vue"],
    "transform": {"^.+\\.vue$": "vue-jest", "^.+\\.(js|jsx)?$": "babel-jest"},
    "testEnvironment": "jsdom",
    "setupFilesAfterEnv": ["jest-extended"],
    "globals": {"ts-jest": {"tsconfig": "./tsconfig.test.json"}},
    "moduleNameMapper": {
        "@banquette/core$": "<rootDir>/packages/core/src/index.ts",
        "@banquette/dom-modules$": "<rootDir>/packages/dom-modules/src/index.ts",
        "@banquette/event$": "<rootDir>/packages/event/src/index.ts",
        "@banquette/fingerprint$": "<rootDir>/packages/fingerprint/src/index.ts",
        "@banquette/http$": "<rootDir>/packages/http/src/index.ts",
        "@banquette/log$": "<rootDir>/packages/log/src/index.ts",
        "@banquette/promise$": "<rootDir>/packages/promise/src/index.ts",
        "@banquette/storage$": "<rootDir>/packages/storage/src/index.ts",
        "@banquette/utils$": "<rootDir>/packages/utils/src/index.ts",
        "@banquette/utils-base64$": "<rootDir>/packages/utils-base64/src/index.ts",
        "@banquette/utils-color$": "<rootDir>/packages/utils-color/src/index.ts",
        "@banquette/utils-crypto$": "<rootDir>/packages/utils-crypto/src/index.ts",
        "@banquette/utils-easing$": "<rootDir>/packages/utils-easing/src/index.ts",
        "@banquette/utils-json$": "<rootDir>/packages/utils-json/src/index.ts"
    },
    "modulePathIgnorePatterns": ["__mocks__", "unused-packages"],
    "unmockedModulePathPatterns": ["<rootDir>/node_modules/"]
}
