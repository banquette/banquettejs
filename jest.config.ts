/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

export default {
    // All imported modules in your tests should be mocked automatically
    // automock: false,

    // Stop running tests after `n` failures
    // bail: 0,

    // The directory where Jest should store its cached dependency information
    // cacheDirectory: "/tmp/jest_rs",

    // Automatically clear mock calls, instances, contexts and results before every test
    clearMocks: true,

    // Indicates whether the coverage information should be collected while executing the test
    collectCoverage: true,

    // An array of glob patterns indicating a set of files for which coverage information should be collected
    // collectCoverageFrom: undefined,

    // The directory where Jest should output its coverage files
    coverageDirectory: 'coverage',

    // An array of regexp pattern strings used to skip coverage collection
    coveragePathIgnorePatterns: ['/node_modules/'],

    // Indicates which provider should be used to instrument code for coverage
    coverageProvider: 'v8',

    // A list of reporter names that Jest uses when writing coverage reports
    // coverageReporters: [
    //   "json",
    //   "text",
    //   "lcov",
    //   "clover"
    // ],

    // An object that configures minimum threshold enforcement for coverage results
    // coverageThreshold: undefined,

    // A path to a custom dependency extractor
    // dependencyExtractor: undefined,

    // Make calling deprecated APIs throw helpful error messages
    // errorOnDeprecated: false,

    // The default configuration for fake timers
    // fakeTimers: {
    //   "enableGlobally": false
    // },

    // Force coverage collection from ignored files using an array of glob patterns
    // forceCoverageMatch: [],

    // A path to a module which exports an async function that is triggered once before all test suites
    // globalSetup: undefined,

    // A path to a module which exports an async function that is triggered once after all test suites
    // globalTeardown: undefined,

    // A set of global variables that need to be available in all test environments
    // globals: {},

    // The maximum amount of workers used to run your tests. Can be specified as % or a number. E.g. maxWorkers: 10% will use 10% of your CPU amount + 1 as the maximum worker number. maxWorkers: 2 will use a maximum of 2 workers.
    // maxWorkers: "50%",

    // An array of directory names to be searched recursively up from the requiring module's location
    // moduleDirectories: [
    //   "node_modules"
    // ],

    // An array of file extensions your modules use
    moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'vue'],

    // A map from regular expressions to module names or to arrays of module names that allow to stub out resources with a single module
    moduleNameMapper: {
        "@banquette/api$": "<rootDir>/packages/api/src",
        "@banquette/config$": "<rootDir>/packages/config/src",
        "@banquette/dependency-injection$": "<rootDir>/packages/dependency-injection/src",
        "@banquette/dom-modules$": "<rootDir>/packages/dom-modules/src",
        "@banquette/event$": "<rootDir>/packages/event/src",
        "@banquette/exception$": "<rootDir>/packages/exception/src",
        "@banquette/fingerprint$": "<rootDir>/packages/fingerprint/src",
        "@banquette/form$": "<rootDir>/packages/form/src",
        "@banquette/http$": "<rootDir>/packages/http/src",
        "@banquette/inversify$": "<rootDir>/packages/inversify/src",
        "@banquette/log$": "<rootDir>/packages/log/src",
        "@banquette/model$": "<rootDir>/packages/model/src",
        "@banquette/model-form$": "<rootDir>/packages/model-form/src",
        "@banquette/model-validation$": "<rootDir>/packages/model-validation/src",
        "@banquette/object-observer$": "<rootDir>/packages/object-observer/src",
        "@banquette/promise$": "<rootDir>/packages/promise/src",
        "@banquette/storage$": "<rootDir>/packages/storage/src",
        "@banquette/ui$": "<rootDir>/packages/ui/src",
        "@banquette/utils-array$": "<rootDir>/packages/utils-array/src",
        "@banquette/utils-crypto$": "<rootDir>/packages/utils-crypto/src",
        "@banquette/utils-date$": "<rootDir>/packages/utils-date/src",
        "@banquette/utils-dom$": "<rootDir>/packages/utils-dom/src",
        "@banquette/utils-easing$": "<rootDir>/packages/utils-easing/src",
        "@banquette/utils-glob$": "<rootDir>/packages/utils-glob/src",
        "@banquette/utils-misc$": "<rootDir>/packages/utils-misc/src",
        "@banquette/utils-object$": "<rootDir>/packages/utils-object/src",
        "@banquette/utils-random$": "<rootDir>/packages/utils-random/src",
        "@banquette/utils-reflection$": "<rootDir>/packages/utils-reflection/src",
        "@banquette/utils-string$": "<rootDir>/packages/utils-string/src",
        "@banquette/utils-type$": "<rootDir>/packages/utils-type/src",
        "@banquette/validation$": "<rootDir>/packages/validation/src",
        "@banquette/vue-dom-module$": "<rootDir>/packages/vue-dom-module/src",
        "@banquette/vue-material-icons$": "<rootDir>/packages/vue-material-icons/src",
        "@banquette/vue-remix-icons$": "<rootDir>/packages/vue-remix-icons/src",
        "@banquette/vue-typescript$": "<rootDir>/packages/vue-typescript/src",
        "@banquette/vue-ui$": "<rootDir>/packages/vue-ui/src"
    },

    // An array of regexp pattern strings, matched against all module paths before considered 'visible' to the module loader
    modulePathIgnorePatterns: [
        '__mocks__',
        'unused-packages',
        '^(?!.*\\.test\\.(?:t|j)s$).+$',
    ],

    // Activates notifications for test results
    // notify: false,

    // An enum that specifies notification mode. Requires { notify: true }
    // notifyMode: "failure-change",

    // A preset that is used as a base for Jest's configuration
    preset: 'ts-jest/presets/js-with-ts',

    // Run tests from one or more projects
    // projects: undefined,

    // Use this configuration option to add custom reporters to Jest
    // reporters: undefined,

    // Automatically reset mock state before every test
    // resetMocks: false,

    // Reset the module registry before running each individual test
    // resetModules: false,

    // A path to a custom resolver
    // resolver: undefined,

    // Automatically restore mock state and implementation before every test
    // restoreMocks: false,

    // The root directory that Jest should scan for tests and modules within
    //rootDir: './packages',

    // A list of paths to directories that Jest should use to search for files in
    roots: [
        "<rootDir>/packages/api/__tests__",
        '<rootDir>/packages/event/__tests__',
        "<rootDir>/packages/form/__tests__",
        '<rootDir>/packages/http/__tests__',
        "<rootDir>/packages/model/__tests__",
        "<rootDir>/packages/model-form/__tests__",
        "<rootDir>/packages/model-validation/__tests__",
        "<rootDir>/packages/object-observer/__tests__",
        '<rootDir>/packages/promise/__tests__',
        "<rootDir>/packages/storage/__tests__",
        "<rootDir>/packages/ui/__tests__",
        '<rootDir>/packages/utils-array/__tests__',
        '<rootDir>/packages/utils-glob/__tests__',
        '<rootDir>/packages/utils-object/__tests__',
        '<rootDir>/packages/utils-random/__tests__',
        '<rootDir>/packages/utils-string/__tests__',
        '<rootDir>/packages/utils-type/__tests__',
        "<rootDir>/packages/validation/__tests__"
    ],

    // Allows you to use a custom runner instead of Jest's default test runner
    // runner: "jest-runner",

    // The paths to modules that run some code to configure or set up the testing environment before each test
    // setupFiles: [],

    // A list of paths to modules that run some code to configure or set up the testing framework before each test
    setupFilesAfterEnv: ['jest-extended'],

    // The number of seconds after which a test is considered as slow and reported as such in the results.
    // slowTestThreshold: 5,

    // A list of paths to snapshot serializer modules Jest should use for snapshot testing
    // snapshotSerializers: [],

    // The test environment that will be used for testing
    testEnvironment: 'jsdom',

    // Options that will be passed to the testEnvironment
    // testEnvironmentOptions: {},

    // Adds a location field to test results
    // testLocationInResults: false,

    // The glob patterns Jest uses to detect test files
    testMatch: ['**/__tests__/**/*.ts'],

    // An array of regexp pattern strings that are matched against all test paths, matched tests are skipped
    // testPathIgnorePatterns: [
    //   "/node_modules/"
    // ],

    // The regexp pattern or array of patterns that Jest uses to detect test files
    // testRegex: [],

    // This option allows the use of a custom results processor
    // testResultsProcessor: undefined,

    // This option allows use of a custom test runner
    // testRunner: "jest-circus/runner",

    // A map from regular expressions to paths to transformers
    transform: {
        '^.+\\.[tj]sx?$': ['ts-jest', { tsconfig: 'tsconfig.test.json' }],
        '^.+\\.vue$': '@vue/vue3-jest',
    },

    // An array of regexp pattern strings that are matched against all source file paths, matched files will skip transformation
    // transformIgnorePatterns: [
    //   "/node_modules/",
    //   "\\.pnp\\.[^\\/]+$"
    // ],

    // An array of regexp pattern strings that are matched against all modules before the module loader will automatically return a mock for them
    unmockedModulePathPatterns: ['<rootDir>/node_modules/'],

    // Indicates whether each individual test should be reported during the run
    // verbose: undefined,

    // An array of regexp patterns that are matched against all source file paths before re-running tests in watch mode
    // watchPathIgnorePatterns: [],

    // Whether to use watchman for file crawling
    // watchman: true,
};
