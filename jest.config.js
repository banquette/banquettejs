module.exports = {
    "preset": "ts-jest/presets/js-with-ts",
    "moduleFileExtensions": ["js", "jsx", "ts", "tsx", "vue"],
    "transform": {
        "^.+\\.vue$": "@vue/vue3-jest"
    },
    "testEnvironment": "jsdom",
    "setupFilesAfterEnv": ["jest-extended"],
    "globals": {"ts-jest": {"tsconfig": "./tsconfig.test.json"}},
    "moduleNameMapper": {
        "@banquette/api/(.*)$": "<rootDir>/packages/api/src/$1",
        "@banquette/config/(.*)$": "<rootDir>/packages/config/src/$1",
        "@banquette/dependency-injection/(.*)$": "<rootDir>/packages/dependency-injection/src/$1",
        "@banquette/dom-modules/(.*)$": "<rootDir>/packages/dom-modules/src/$1",
        "@banquette/event/(.*)$": "<rootDir>/packages/event/src/$1",
        "@banquette/exception/(.*)$": "<rootDir>/packages/exception/src/$1",
        "@banquette/fingerprint/(.*)$": "<rootDir>/packages/fingerprint/src/$1",
        "@banquette/form/(.*)$": "<rootDir>/packages/form/src/$1",
        "@banquette/http/(.*)$": "<rootDir>/packages/http/src/$1",
        "@banquette/inversify/(.*)$": "<rootDir>/packages/inversify/src/$1",
        "@banquette/log/(.*)$": "<rootDir>/packages/log/src/$1",
        "@banquette/model/(.*)$": "<rootDir>/packages/model/src/$1",
        "@banquette/model-api/(.*)$": "<rootDir>/packages/model-api/src/$1",
        "@banquette/model-form/(.*)$": "<rootDir>/packages/model-form/src/$1",
        "@banquette/model-validation/(.*)$": "<rootDir>/packages/model-validation/src/$1",
        "@banquette/promise/(.*)$": "<rootDir>/packages/promise/src/$1",
        "@banquette/storage/(.*)$": "<rootDir>/packages/storage/src/$1",
        "@banquette/utils-array/(.*)$": "<rootDir>/packages/utils-array/src/$1",
        "@banquette/utils-crypto/(.*)$": "<rootDir>/packages/utils-crypto/src/$1",
        "@banquette/utils-date/(.*)$": "<rootDir>/packages/utils-date/src/$1",
        "@banquette/utils-dom/(.*)$": "<rootDir>/packages/utils-dom/src/$1",
        "@banquette/utils-easing/(.*)$": "<rootDir>/packages/utils-easing/src/$1",
        "@banquette/utils-glob/(.*)$": "<rootDir>/packages/utils-glob/src/$1",
        "@banquette/utils-misc/(.*)$": "<rootDir>/packages/utils-misc/src/$1",
        "@banquette/utils-object/(.*)$": "<rootDir>/packages/utils-object/src/$1",
        "@banquette/utils-random/(.*)$": "<rootDir>/packages/utils-random/src/$1",
        "@banquette/utils-reflection/(.*)$": "<rootDir>/packages/utils-reflection/src/$1",
        "@banquette/utils-string/(.*)$": "<rootDir>/packages/utils-string/src/$1",
        "@banquette/utils-type/(.*)$": "<rootDir>/packages/utils-type/src/$1",
        "@banquette/validation/(.*)$": "<rootDir>/packages/validation/src/$1",
        "@banquette/vue-dom-module/(.*)$": "<rootDir>/packages/vue-dom-module/src/$1",
        "@banquette/vue-form/(.*)$": "<rootDir>/packages/vue-form/src/$1",
        "@banquette/vue-form-generic/(.*)$": "<rootDir>/packages/vue-form-generic/src/$1",
        "@banquette/vue-material-icons/(.*)$": "<rootDir>/packages/vue-material-icons/src/$1",
        "@banquette/vue-typescript/(.*)$": "<rootDir>/packages/vue-typescript/src/$1",
        "@banquette/vue-ui/(.*)$": "<rootDir>/packages/vue-ui/src/$1"
    },
    "modulePathIgnorePatterns": [
        "__mocks__",
        "unused-packages",
        "^(?!.*\\.test\\.(?:t|j)s$).+$"
    ],
    transformIgnorePatterns: [
        '<rootDir>/node_modules/(?!object-observer)'
    ],
    "unmockedModulePathPatterns": ["<rootDir>/node_modules/"]
}
