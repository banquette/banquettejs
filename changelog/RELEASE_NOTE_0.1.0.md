# [0.1.0](https://github.com/banquette/banquettejs/compare/v0.0.5...v0.1.0) (2022-02-19)


### Bug Fixes

* `areEqual` and `compareObject` now do a simple comparison of non literal objects ([49cf2e1](https://github.com/banquette/banquettejs/commit/49cf2e14099b80ebedf363ce17efd97fa65f25b3))
* `validate()` was not returning `false` when the validation failed in a child component with an async validator ([0de14b1](https://github.com/banquette/banquettejs/commit/0de14b1fc29178831d3b1be535d9168a9c42f0dd))
* active variants were not updated properly when `onChange` was called without anything actually changing ([c9a56f6](https://github.com/banquette/banquettejs/commit/c9a56f689fc4bd5f06149fcc5c65fd27218fac88))
* add a `Canceled` status to the response ([c6b7fe1](https://github.com/banquette/banquettejs/commit/c6b7fe11bacf3d02962f47e3c1b3c5d1e2e17326))
* always delay immediate watchers trigger to the next tick ([1b35102](https://github.com/banquette/banquettejs/commit/1b351021e2570edc2d7fb143659af2368146569a))
* api transformer now works with relations ([29b6246](https://github.com/banquette/banquettejs/commit/29b6246dc17f070ac9c76fa4f2a9b4f1a591299d))
* avoid doing getPrototypeOf on `null` ([3f7d948](https://github.com/banquette/banquettejs/commit/3f7d9489755c7b1f7e1949bd95f4666fd7939620))
* better handling of null ([c42783b](https://github.com/banquette/banquettejs/commit/c42783bce9aac9b08b575d89db6c36c043979275))
* better way of mapping Vue methods and attributes, now working with a prod build ([11e5e32](https://github.com/banquette/banquettejs/commit/11e5e327149695ddffd3d4448478450deb68524a))
* bug fixes + caching ([3239d11](https://github.com/banquette/banquettejs/commit/3239d11067155af071856986f8f580499da8ad45))
* bug fixes on the new implementation of trim/ltrim/rtrim ([e634c4f](https://github.com/banquette/banquettejs/commit/e634c4fec0c19d3beccc9e38650d83e95922fcb0))
* **build:** fix the builds filtering function ([fc01636](https://github.com/banquette/banquettejs/commit/fc01636681ef371f306460421bcfbc2fba855764))
* cap the last result count to the total number of items ([3a97d38](https://github.com/banquette/banquettejs/commit/3a97d3898b0f9748f889f4f452c025f03e142774))
* check that the promise has not already been resolved ([f7488a5](https://github.com/banquette/banquettejs/commit/f7488a546d82a3958b4686bf969f4626aa8622e7))
* child components are now matched by `id` instead of reference to avoid issues when components are proxified ([0bf5381](https://github.com/banquette/banquettejs/commit/0bf53813807988116b5a0910acd1bdd94c185dcb))
* computed with an undefined default value are now correctly created ([91ee446](https://github.com/banquette/banquettejs/commit/91ee44666cf0eb1ff2f2ba95d3272741f3eeafe5))
* configuration was incorrectly extending values ([3b1efc7](https://github.com/banquette/banquettejs/commit/3b1efc7c8d1636fad2799f503e7f0efcad3ccc49))
* controls that become concrete don't trigger a validation anymore ([1a063d4](https://github.com/banquette/banquettejs/commit/1a063d48231279bd9608f049d8723d5649d33c07))
* directives' instances got messed up when multiple directives were applied on the same component ([98d8787](https://github.com/banquette/banquettejs/commit/98d87879b38226a1aa8e7daee27a5ad15497b5f7))
* ensure only the view model from which originated the focus is focused ([445495b](https://github.com/banquette/banquettejs/commit/445495bf7b4735b6c7ecef5bc2645faae3211b6c))
* ensure promises rejections are always caught ([1fb5788](https://github.com/banquette/banquettejs/commit/1fb578842ac71f3f40c62ce14f0d84e91dc00e40))
* ensure promises rejections are always caught ([99c5780](https://github.com/banquette/banquettejs/commit/99c5780a3d916450ed02bf8da3f73cb8a28f3a1c))
* ensure the random is always start with a letter to always have a valid class name ([563c936](https://github.com/banquette/banquettejs/commit/563c9361d7064167c817e5ae9616f086eca9ad15))
* event dispatcher and pipeline can now be mutated while they are running + priority fixes for the pipeline ([c1728bb](https://github.com/banquette/banquettejs/commit/c1728bb1746f7766b031b930f6a582142aab6b9d))
* finally creates timing problems, fixed by falling back to a normal then/catch ([834392f](https://github.com/banquette/banquettejs/commit/834392f25f0f630decfc21c3955ac6ee92b7f991))
* fix `:deep` expression parsing to allow for inner parenthesis ([cc275d0](https://github.com/banquette/banquettejs/commit/cc275d01c0354e6ac0d4edea30ab0dd999f70caa))
* fix a possible infinite loop between the view model and the control when resetting a field with a value ([e6bb3b8](https://github.com/banquette/banquettejs/commit/e6bb3b82c701683f007d776aed42a2e300c2474b))
* fix failing tests because of the modification of the default validation strategy for the root component ([ee4fb23](https://github.com/banquette/banquettejs/commit/ee4fb23e154532709e6c253bb595b78eedd2c0af))
* fix import ([4c28b7f](https://github.com/banquette/banquettejs/commit/4c28b7f6f43fb2b2436f81e239e1411bd27348bd))
* fix import that caused tests to fail ([85ec3ce](https://github.com/banquette/banquettejs/commit/85ec3cef8754eeb68a5433f565c9500a78750729))
* fix imports / exports ([8dd0670](https://github.com/banquette/banquettejs/commit/8dd0670f947bac40c128b595d958644d4a1cba4f))
* fix infinite loop when the model has a relation on itself ([4d75891](https://github.com/banquette/banquettejs/commit/4d758917257965d5a6e9082a7b21b736e77d29d6))
* fix interaction between the `validated` and `virtual` states ([a77c22a](https://github.com/banquette/banquettejs/commit/a77c22a528fe7e63948ed59a9aa4a2f9691b9672))
* fix invalid condition... ([c0ca88e](https://github.com/banquette/banquettejs/commit/c0ca88e64da743ad0e7ed3ea50eb47cdede80d81))
* fix invalid render function for renderless components ([8f1dc74](https://github.com/banquette/banquettejs/commit/8f1dc74a03da942e0c15c9688b2865643273e139))
* fix invalid typing ([10f0ed4](https://github.com/banquette/banquettejs/commit/10f0ed427659d0a4f6320b815198eec6e3100765))
* fix missing export and invalid import ([2fdd44c](https://github.com/banquette/banquettejs/commit/2fdd44c890ad92f0eaa7f89cd633bc721e451f6f))
* fix wrong numbers when there is 0 results ([11c0e84](https://github.com/banquette/banquettejs/commit/11c0e84a3f9becfeaca6d98ee03e8ea1824ab1c0))
* fix wrong variable in apply implementation ([7145f4a](https://github.com/banquette/banquettejs/commit/7145f4ad4588ad9cb7c608214ba656a2b8323369))
* handling of the remote result was incorrect ([22aca29](https://github.com/banquette/banquettejs/commit/22aca2923cb0d3addc437aad812ef86e2e113dcc))
* huge mistake, the map of transformable properties was mutated by accident... ([b902a09](https://github.com/banquette/banquettejs/commit/b902a09eb2ca4e07d80ec5bb4a3cb64ccecdc2bd))
* huge typo -_- ([e071582](https://github.com/banquette/banquettejs/commit/e071582469a2363392fe254046a2ea46a2b816f2))
* invalid imports ([f3d9f8a](https://github.com/banquette/banquettejs/commit/f3d9f8a44acc91055f7f9bd371cd3798072b7308))
* invalid type ([7cd0025](https://github.com/banquette/banquettejs/commit/7cd0025c32b13dddea3f9bc8e4802ec0be0abeb9))
* make the value update when the child filter "UpdateValue" is modified ([7bf0d51](https://github.com/banquette/banquettejs/commit/7bf0d51a302d03cde614ebc66e345c21df6aa38e))
* missing `\` on the regex ([594d94b](https://github.com/banquette/banquettejs/commit/594d94bd6ddfe8affa0586e812ac07ed1df2c5b3))
* model transform metadata now works with inherited properties ([77c73b9](https://github.com/banquette/banquettejs/commit/77c73b969a8ff5aaedc24d8e1e7ca43d28d48bd6))
* old values and `watchEffect` were invalid ([3589769](https://github.com/banquette/banquettejs/commit/358976993c662f05d06524446fb5727294a0a72a))
* only mark form components as `NotValidated` is a validator is defined on reset ([368226f](https://github.com/banquette/banquettejs/commit/368226fc273d21bc1ca3c4493cdd1baa7ebe7e0f))
* parent component becomes invalid (and validate return `false`) when a child fail to validate ([6a50959](https://github.com/banquette/banquettejs/commit/6a509594e341c514ca83c81396452f6d9d2c36d3))
* path are not forced to start with "/" anymore to get a match ([6d935d0](https://github.com/banquette/banquettejs/commit/6d935d049cd796a9ac31999b83544db2f52c61bf))
* prevent the select to show its choices while disabled ([99180b8](https://github.com/banquette/banquettejs/commit/99180b89d64d7e3ad313321ded8eea149e56551e))
* **promise:** progression events are stabilized and better tested ([816f5f2](https://github.com/banquette/banquettejs/commit/816f5f2b560f4e604cf9af0f6617b5f44199bdc7))
* rejections are now propagated down the validation result promise chain ([146765f](https://github.com/banquette/banquettejs/commit/146765fa863ebdd5484a045b5eb0fc80160aabee))
* remove circular dependency in imports ([025da2e](https://github.com/banquette/banquettejs/commit/025da2e2b6f458865fddf01f6c54f74ad48fa238))
* remove incorrectly named icon components and fix the generator ([25fa1fa](https://github.com/banquette/banquettejs/commit/25fa1fae90d06fdedbe02c0d1644b3cf4613c96a))
* remove leading "/" that caused an error when components didn't exist yet ([6060c1c](https://github.com/banquette/banquettejs/commit/6060c1c94bba0f152472c137c11ac9d1569c73a6))
* remove the cache of __vccOpts because it's incompatible with the inner working of the module ([94176a9](https://github.com/banquette/banquettejs/commit/94176a9ead28cab82f8b6fe72f937e233a328d01))
* requests can now be replayed + rename of `NoPayloadSymbol` to `AutoPayloadSymbol` + export ([f8ac65e](https://github.com/banquette/banquettejs/commit/f8ac65e1770af32c420f7be991cc81a04a303742))
* response status is now canceled instead of error when in case of a `RequestCanceledException` ([d4141f9](https://github.com/banquette/banquettejs/commit/d4141f97111e81e75253c688d2c36045b9645dba))
* sfc and scoped styles should now work ([64e1db4](https://github.com/banquette/banquettejs/commit/64e1db4c1bd5f500d5fb155cea88a03af2dfd061))
* **tests:** fix tests using the old ObservablePromise syntax ([d808740](https://github.com/banquette/banquettejs/commit/d808740fe1f95d4956af35c8228ecf42b7995908))
* the "components" options now handle the case where it gets a __vccOpts object instead of a constructor (because of the cache) ([98a6261](https://github.com/banquette/banquettejs/commit/98a62617e33f6986d411fc233593bfa81dcc4033))
* the form now ignores canceled validation results ([f0f87cc](https://github.com/banquette/banquettejs/commit/f0f87ccf6ecf8e5db6d844674f7dcce1496d632e))
* theme props are now overridable on component use + force computed to update when a theme value changes ([17f2029](https://github.com/banquette/banquettejs/commit/17f2029b8b857f29c6faa722c5a1b4c0126247a3))
* use `watchEffect` instead of `onTrigger` which is not available in production ([ca7deaa](https://github.com/banquette/banquettejs/commit/ca7deaaaf4faf73d1f27debdc5e4832cfab591b1))
* validator was not set when a `FormControl` is given to the factory ([c39e988](https://github.com/banquette/banquettejs/commit/c39e9884de094e31dd13eba0ec68803be7e79f59))
* view model is now updated back if the value is changed in the `BeforeValueChange` event ([aa2e7d6](https://github.com/banquette/banquettejs/commit/aa2e7d6c71b82d559ce7d2b50b24410e8d696270))
* was crashing if `hasSlot` was called too soon ([d76c2ed](https://github.com/banquette/banquettejs/commit/d76c2ed2b92a0ff47ef81bf77e5b9f8c497149c8))
* watch strategy should now work properly ([732552c](https://github.com/banquette/banquettejs/commit/732552c4200b827e326728877ebb16c8711ccd0b))
* watchers on props were failing to trigger in some situations, now watch the prop's ref instead of a function ([95d7fd3](https://github.com/banquette/banquettejs/commit/95d7fd338dd239cdbd39bab61c4cc6819d99d2a3))
* watchers were getting out of sync with the component instance when in a loop ([4af8f1e](https://github.com/banquette/banquettejs/commit/4af8f1e56fff5c64fb51735762e8098a93f199bc))


### chore

* add a mandatory `id` attribute to all exceptions ([a466e2e](https://github.com/banquette/banquettejs/commit/a466e2ef3636e95779ac7a667be369effe822925))
* rename `id` into `slug` and make it writeable in all exceptions ([01dc382](https://github.com/banquette/banquettejs/commit/01dc38224ebcfbd63684abb72b06d0a8ddc69b95))
* rewrite of the `ValidatorComponent` to be more stable and to work without being in a `bt-form` ([e6ed7a4](https://github.com/banquette/banquettejs/commit/e6ed7a466bdc41b9210e9506efccc270c581fcf7))


### Code Refactoring

* `AbstractViewModel` is no longer abstract ([f99636b](https://github.com/banquette/banquettejs/commit/f99636bb0c7d1b895be1a4879db3c9a7613ea469))
* huge refactoring cleaning up several bad design decisions accumulated along the way ([e65fecc](https://github.com/banquette/banquettejs/commit/e65feccf9dc4274266902fed794ee4bbfc767e95))
* huge refactoring, utils separated from core ([bdf8013](https://github.com/banquette/banquettejs/commit/bdf801336b8968872eb7d730dc470468f0a33675))
* inverse `wildcardTransformer` and `extra` parameters order ([24bf388](https://github.com/banquette/banquettejs/commit/24bf388963ced8b5205a5f90e6a28807f6e87f54))
* multiple renaming and minor additions ([3aff9ce](https://github.com/banquette/banquettejs/commit/3aff9ce4b5c61564d1aecc5803506a57156c5e92))
* remove `core` package. Replaced by `config` and `exception` packages ([c66786f](https://github.com/banquette/banquettejs/commit/c66786f8f2668c977befced221d525ea9a7c4a2d))
* remove dependency between "SharedConfiguration" and "VarHolder" ([978362d](https://github.com/banquette/banquettejs/commit/978362d896e8955a33676bf05b09fe81819305bf))
* rename `simplifyValidator` into `createValidator` ([bb08d05](https://github.com/banquette/banquettejs/commit/bb08d05d400a699e3d7880cea67f850da0a86427))
* typings refactoring and renaming ([7fc54d9](https://github.com/banquette/banquettejs/commit/7fc54d974317cb54ddbc921248c6291003cfa741))
* utils split into multiple packages ([919386a](https://github.com/banquette/banquettejs/commit/919386ae5f5652acffe234c000a41a871e28f82f))
* **utils:** rename ConstructorFunction<T> ([4735c80](https://github.com/banquette/banquettejs/commit/4735c802a8b4a721e2ce1840c3c3f9e59bb0506e))


### Features

* "extend" doesn't try to clone constructors anymore ([27a153b](https://github.com/banquette/banquettejs/commit/27a153b8ac5f6ea799edecdebc94ae5e5ff494e4))
* `AbstractVueFormComponent` now search for a parent `bt-form-generic` to automatically assign its form to the proxy ([5b5d3bc](https://github.com/banquette/banquettejs/commit/5b5d3bcaf01f7d89c5e426bc1fd95cfc4d46cfbf))
* `getParent` now goes up the prototype chain when searching for a component by name ([64e05cf](https://github.com/banquette/banquettejs/commit/64e05cf5030a729256c6c184a3eac03ae45122e8))
* `inversify` package added ([7a41691](https://github.com/banquette/banquettejs/commit/7a4169143e8c47d87323a01c6d607184e2674bbe))
* `isFunction` is now a proper type guard ([78c9da4](https://github.com/banquette/banquettejs/commit/78c9da4df4c40436d413294bf46a8e275794feb7))
* `setDefaultValue` not available on containers + reset doesn't trigger a validation anymore ([f9973c3](https://github.com/banquette/banquettejs/commit/f9973c3bc5840e5f13f1442abc44fbce0e98c4a6))
* `vue-dom-module` package added ([535401d](https://github.com/banquette/banquettejs/commit/535401de1180aa67e4f315eabd8f017a52fedd7d))
* `vue-typescript` package added ([45f15cd](https://github.com/banquette/banquettejs/commit/45f15cd0c9c64aed7fc98c0c6bf56fd166ff3962))
* add `dependency-injection` package ([7b18ba8](https://github.com/banquette/banquettejs/commit/7b18ba8ebe5c6e6e1c86f3738d0a66b9ac89a1d6))
* add `getValidatedExtra` method offering the ability to run validators when getting extras ([00dd095](https://github.com/banquette/banquettejs/commit/00dd09570d881b42a302c5d0f48aa8c88c92ffd8))
* add `SameProperties` and `SamePropertiesAndType` type utilities ([b20a943](https://github.com/banquette/banquettejs/commit/b20a943bb9c21f5ed0e88c4c79e99a0c03990155))
* add a 'arrayUnique' utility function ([5f1471c](https://github.com/banquette/banquettejs/commit/5f1471c5e05afed384522311125bf703ed451960))
* add a 'uniqueId' utility function ([2e17e47](https://github.com/banquette/banquettejs/commit/2e17e473d21906e144403513cd3a4bd55065c0a2))
* add a "Not" utility that negate the return of a function. ([e1f8256](https://github.com/banquette/banquettejs/commit/e1f8256168ddda370b40c45a9ba49be79dde5f56))
* add a "resolve" and "reject" methods to comply with the Promises/A+ specification ([59fb73c](https://github.com/banquette/banquettejs/commit/59fb73c0145203ef9f301aa8925d3e14c56fb51e))
* add a `arrayIntersect` utility ([5e2503d](https://github.com/banquette/banquettejs/commit/5e2503d20c1a3411c6f860c484996eecdea08f5b))
* add a `getParent` method to the `Vue` base class to search for a specific type of component in the parents hierarchy ([edbf105](https://github.com/banquette/banquettejs/commit/edbf10565318da568cab0c6f701af8927c98fb32))
* add a `messagesStack` utility getter to all exceptions ([7e25ce5](https://github.com/banquette/banquettejs/commit/7e25ce5672acdca516ad715b7133f032883631a1))
* add a `validate` utility function to easily validate a model manually ([f24ca96](https://github.com/banquette/banquettejs/commit/f24ca9659a24f6aed71864d5c50b6c4ef3e743d5))
* add a `Vue` base class components can (optionally) inherit from to access Vue attributes ([ec43e0e](https://github.com/banquette/banquettejs/commit/ec43e0eca4befed44acaed2697e57a3f92e9e7f3))
* add a new `BeforeValueChange` event to control and manipulate the value change on a `FormControl` ([46b6f9c](https://github.com/banquette/banquettejs/commit/46b6f9cc55ca6d0b6f8f53411568774e3c3d502a))
* add a new `IsType` validator ([2e6969c](https://github.com/banquette/banquettejs/commit/2e6969c60e9c09259b4f35eb3ddb2f1ef1da1246))
* add a new `vue-material-icons` package ([d76c042](https://github.com/banquette/banquettejs/commit/d76c042052105cf7a4ab4273cfbe6aaa0b66891e))
* add a unique id global to the form and expose both ids to the view model ([37e0123](https://github.com/banquette/banquettejs/commit/37e0123ced5bf2368a07285d91eb2925f95ca6ce))
* add an `errorsMap` attribute to `AbstractViewModel` ([e7fe393](https://github.com/banquette/banquettejs/commit/e7fe393388673617169d6672bb2d2fa8a3f0b556))
* add base view models / modules for text, select and checkboxes ([72ab5fc](https://github.com/banquette/banquettejs/commit/72ab5fcca13b6489bfe0c810f3fe90f30211358a))
* add basic support of `:deep()` in custom css overrides ([7be45b6](https://github.com/banquette/banquettejs/commit/7be45b68f9211eac063317a95b3a8e5f69cf0c96))
* add IOException ([902d398](https://github.com/banquette/banquettejs/commit/902d398626fec9adbe731c3a152c5390cd67fd14))
* add new `ValidationStart` and `ValidationEnd` events ([9767c79](https://github.com/banquette/banquettejs/commit/9767c7935ac6988177e54ad3299288c1701fd737))
* add package `vue-form-generic` ([8f95a83](https://github.com/banquette/banquettejs/commit/8f95a833258a7a8b3c6396458aaec6c0a34d15ac))
* add parent matching support for variant selectors ([1a5d49a](https://github.com/banquette/banquettejs/commit/1a5d49aba94c75fcd956315bf80629362f41bb0d))
* add recursion control utilities ([9c8a3d0](https://github.com/banquette/banquettejs/commit/9c8a3d09da8900297aff5eb8205a24e9c258c10d))
* add support for @Assert in constructor parameters ([6a82b85](https://github.com/banquette/banquettejs/commit/6a82b8561c3b1e4e7604c1ede83d3e3b75aaab48))
* add support for a `validate` method in `@Prop` that can verify and/or modify the prop value ([950b502](https://github.com/banquette/banquettejs/commit/950b50292baf5f03b8ecb98dd0c5621946efaa5e))
* add support for deep set ([435769f](https://github.com/banquette/banquettejs/commit/435769f53b8c95b44251546dd6d74a6d6256ea4c))
* add support for multiple view models per control ([6f357e5](https://github.com/banquette/banquettejs/commit/6f357e51a863843e0a07f49f259b8cd09bd789b1))
* add support for OR condition in variant matches ([a602346](https://github.com/banquette/banquettejs/commit/a602346b7d4cc8f3347a6d5f26184df2f4d94959))
* add support of Pojo created with Object.create(null) to isPojo() ([39eb335](https://github.com/banquette/banquettejs/commit/39eb33595353c5983170f92db9ef76a107129c9e))
* add support of props renaming using a new `name` option in the `@Prop` decorator ([a42f30f](https://github.com/banquette/banquettejs/commit/a42f30f1808b625043e5dd42dc27359abf91695d))
* add support of the `@ThemeVar` decorator ([e654d31](https://github.com/banquette/banquettejs/commit/e654d3148396906f52a1d0a4f6985f05c57560d8))
* add support of the `emits` option ([4198608](https://github.com/banquette/banquettejs/commit/41986088753b00fe64b1dc66239fb5fd28c046bc))
* add template inheritance support for components ([8c297e2](https://github.com/banquette/banquettejs/commit/8c297e21714660dbbd6f6f40b13665a0734da9bc))
* add the `@Render`, `@Provide` and `@InjectProvided` decorators + files reorganization ([700fa68](https://github.com/banquette/banquettejs/commit/700fa6872dd082a4baa85b8cc439da6fdeb2e8d4))
* add the `api` package ([442e4e5](https://github.com/banquette/banquettejs/commit/442e4e5f8d7e0a2d82383e44aa2b35c8fa3b225b))
* add the `cloneDeepPrimitive` utility ([2b9dea3](https://github.com/banquette/banquettejs/commit/2b9dea3907ed61abbbe86760ddeece0e14e9ce33))
* add the `Complete` and `Modify` utility types ([0905fbf](https://github.com/banquette/banquettejs/commit/0905fbfe9a987fc0ddba7e6945c02b530f7a3211))
* add the `ensureInEnum` utility ([7a8f686](https://github.com/banquette/banquettejs/commit/7a8f6860bc2e52c36572dda91c849fe05d09bbb5))
* add the `EventPipeline` component (wip) ([9b7d57f](https://github.com/banquette/banquettejs/commit/9b7d57f84017d1e9bc2e048ff0c2e6f00e4dfbc8))
* add the `form` package ([b382928](https://github.com/banquette/banquettejs/commit/b382928fea9ad916ff1c793421e69903d99f5f9a))
* add the `getElementOffset` utility ([742a3be](https://github.com/banquette/banquettejs/commit/742a3be61041f3ffe5a631dc60b16f99a7eb67c8))
* add the `getViolationsStringsArray` utility method that flattens violations into an array of strings ([389b578](https://github.com/banquette/banquettejs/commit/389b578d049c7ea7da700420f1cf193555f11fbe))
* add the `model` package and its variants (`model-api`, `model-form` and `model-validation`) ([50bcd00](https://github.com/banquette/banquettejs/commit/50bcd00f37c9cc262df7e0e3560261ae7052907f))
* add the `once` utility function ([74cfffa](https://github.com/banquette/banquettejs/commit/74cfffa320fd09c38c64d83bea76c493c60acc45))
* add the `vue-form` package ([5712f34](https://github.com/banquette/banquettejs/commit/5712f3414cbd8f0c57ca7e714367aafb95558543))
* add the `vue-ui` package ([9463f2f](https://github.com/banquette/banquettejs/commit/9463f2f33d413e7df01592b87f51b67dbfe877e3))
* add the capability to filter subscribers when dispatching ([9207b85](https://github.com/banquette/banquettejs/commit/9207b856cd797586274153220500af8664ef1c48))
* add the capability to tag a request so emitted event can be easily filtered by subscribers ([3046441](https://github.com/banquette/banquettejs/commit/3046441f5925565f8bfc30c644c3606ea60bb7c9))
* add the escapeRegex utility ([4bab226](https://github.com/banquette/banquettejs/commit/4bab226432fe2c034d9c92dabc2fa43652e47922))
* add the isIterable utility ([025d334](https://github.com/banquette/banquettejs/commit/025d334fcc13ee149c0fcf2c2338c7af9e61276b))
* add the promise package ([5ea375f](https://github.com/banquette/banquettejs/commit/5ea375f9ffb9ba02ca82de0795c3e5a04210b98a))
* add the simple observable utility ([f55928b](https://github.com/banquette/banquettejs/commit/f55928b04131743280cb18c5f677348dbad404c8))
* add the validation package ([12b576e](https://github.com/banquette/banquettejs/commit/12b576ed768c987d5027c749914160be0b63875f))
* add theming support for components ([826cb8a](https://github.com/banquette/banquettejs/commit/826cb8a3fa52f792123f1472865063f4a388cf6d))
* add utilities to work with scalars and compounds types ([6af540c](https://github.com/banquette/banquettejs/commit/6af540cba65c314b3a4067f1be81d07d670042ab))
* add utility methods to easily assign errors to child components ([133cad9](https://github.com/banquette/banquettejs/commit/133cad9b6e1f8873e5c8488ab745c059bdeef834))
* automatically resolves vue typescript instances when accessing templates refs set on components ([9b8a258](https://github.com/banquette/banquettejs/commit/9b8a2584637b0940bb177ccc4608418aa15cd559))
* events can now optionally trigger on parent components ([0e72dec](https://github.com/banquette/banquettejs/commit/0e72dec6f546938ecae85010482324f46bfec5f6))
* full support of parent matching (variant / props) + custom callback to test if props match ([39d04d3](https://github.com/banquette/banquettejs/commit/39d04d36e7f777a2f02a3628452e433dc7501e51))
* generalization of the glob pattern matching of the validation into a separate package (`utils-glob`) ([17f1a86](https://github.com/banquette/banquettejs/commit/17f1a860d7b61fd7fd9f32e8c7dbef8a2e95bc14))
* generic type support for InjectableIdentifier ([0e9fba1](https://github.com/banquette/banquettejs/commit/0e9fba1744ae35528cf8b95798ad5d85372dc208))
* generic value type support for `VarHolder` ([5d02b86](https://github.com/banquette/banquettejs/commit/5d02b8691492617780f164a3ff2273f184d15a29))
* GenericCallback now can define the arg and return types ([b35a3c9](https://github.com/banquette/banquettejs/commit/b35a3c93cf47a5f2d42d59c9c6b6597a8aa45df0))
* **http:** add file upload support ([4c7fd85](https://github.com/banquette/banquettejs/commit/4c7fd85b49b562b2bc97857fcbc5db86b6f064f4))
* **http:** add FormData and Raw encoders. ([50e0bbd](https://github.com/banquette/banquettejs/commit/50e0bbdbd6ddc93c68b63d0410319fc76884be68))
* **http:** add support of the PATCH http method ([66b95bc](https://github.com/banquette/banquettejs/commit/66b95bc7bb84ec6b9a9dcd08476fd7a641dd4629))
* **http:** better file upload support and progression tracking ([d38f0e0](https://github.com/banquette/banquettejs/commit/d38f0e04c71bc24e238d9533b89d287cb74a4867))
* **http:** queue priority, retry delay, limit on simultaneous requests, with credentials + some refactoring... ([3096701](https://github.com/banquette/banquettejs/commit/309670195842c63ef2bb48da1eb29d738683dfcf))
* make `getMultiple` react to tags changes ([6008609](https://github.com/banquette/banquettejs/commit/6008609ab80957826e83e6494741d26e9ed28be8))
* **model-api:** the `ApiTransformer` transform inverse now converts an HttpResponse into a model ([d50448b](https://github.com/banquette/banquettejs/commit/d50448b1d6b7ab2544dbbca7d5f8e9e554cde770))
* new utility to convert enums to arrays ([3a24521](https://github.com/banquette/banquettejs/commit/3a2452136966195f92470152cd225c66dfbac0e3))
* now `Transformable` is working on constructor parameters + add the `propertyDecorator` utility ([e437791](https://github.com/banquette/banquettejs/commit/e43779166ab455184208426a835f124495486f18))
* ObservablePromise now behave exactly like a promise, and supports async/await syntax. ([ddff7c2](https://github.com/banquette/banquettejs/commit/ddff7c254f2c65fd5c19e7d565197f0370774806))
* pagination/filtering/ordering of `bt-table` are now fully supported and can each be local or remote independently ([8065847](https://github.com/banquette/banquettejs/commit/8065847ee67f16ead8d0fa71467a81ba73845351))
* **promise:** add support of catchNotOf() which works the same as catchOf() but with inversed condition ([eff47fb](https://github.com/banquette/banquettejs/commit/eff47fb324d11795ec3a8fe5fa0f272d200f9b1c))
* **promise:** add support of catchOf() to limit catch to certain type of errors ([b6d20f5](https://github.com/banquette/banquettejs/commit/b6d20f57d8c12ed23c745c916d169beb1f925300))
* **promise:** make catchNotOf() allow for non object rejections. ([e6a7a70](https://github.com/banquette/banquettejs/commit/e6a7a70ac92368998d8cc05a7c83576c4ec45d37))
* refactoring or SimpleObservable ([73d3eba](https://github.com/banquette/banquettejs/commit/73d3eba9e07e9ac721557c823342955f9678d85f))
* rewrite on the trim utility and add ltrim and rtrim + tests ([ff0f8dc](https://github.com/banquette/banquettejs/commit/ff0f8dc9a0cfec5a3a6809d0b94505fb9b96a0a9))
* some refactoring and add the ability to use the observable as a promise ([ff96813](https://github.com/banquette/banquettejs/commit/ff96813365bc8b3b67091c529c1f6fb57d77d7e4))
* support pojo as load data with a model type defined ([9c9e9ee](https://github.com/banquette/banquettejs/commit/9c9e9ee7fd7ff6f1137c05aca20ee06853feb6c2))
* the `Primitive` transformer can take a different type depending on the transform direction ([cf91779](https://github.com/banquette/banquettejs/commit/cf917790bca5f035d0991f1e82c5d1e06465550c))
* the event dispatcher now always returns a synchronous result (DispatchResult) that can optionally contain a promise ([756ef68](https://github.com/banquette/banquettejs/commit/756ef68fbbaf664dca279ee43119b893a9a1289d))
* the event dispatcher now uses SimpleObservable instead of Promise ([6485be6](https://github.com/banquette/banquettejs/commit/6485be66d30bf027e59e97735b7e15587ddf1b5b))
* the variant matching now works on any prop ([63a12c9](https://github.com/banquette/banquettejs/commit/63a12c9d4fdf3447bdebc54d8d4c179341fd4c5c))
* theme class name is now automatically injector in themeable components' styles ([9d0fcc2](https://github.com/banquette/banquettejs/commit/9d0fcc2e483a26cb3c7e87cce81e13ec4d20ed06))
* url parameters are automatically inferred from the url when an endpoint is created ([ab27a11](https://github.com/banquette/banquettejs/commit/ab27a11a9caea79f82975cc69f6bd5b2e1973d2b))
* **utils-reflection:** add utility methods to get constructors arguments types and names ([f7a412f](https://github.com/banquette/banquettejs/commit/f7a412fe7482980385fdae00251b1d90742443f6))
* **utils:** add "isNonEmptyString" utility function and simplify "isEmptyString" ([aeaf976](https://github.com/banquette/banquettejs/commit/aeaf97625542e13c0bbe29feac89bd1e01523f32))
* variants can now match any html attribute ([802d9f5](https://github.com/banquette/banquettejs/commit/802d9f50585cda1e5b1c8d5a33dc18ed43e79507))


### BREAKING CHANGES

* validators components have move out of the `bt-form` dir, because they are not related to it anymore
* packages removed: `vue-form`, `vue-for-generic`, `model-api`
packages created: `ui`

`ui` now centralizes the generic view models of all ui components
`vue-ui` now contains all ui components (form included)
`bt-form-generic` is now `bt-form` (included in `ui`)
* `$parent` doesn't resolve the component instance anymore, use `$resolvedParent` instead
* `AbstractViewModel` is renamed `ViewModel`
* `id` is now `slug`
* all exceptions now require an `id` attribute to be defined
* there are now two types of tags: `filtering tags` and `propagation tags`,
the signature of `subscribe` has changed accordingly
*   - `extra` is now the 3rd parameter
  - `wildcardTransformer` is now the last parameter
*   - `addError` now takes a type and message instead of a `FormError`
  - rename `add` as `append` in `FormComponentsCollection`
  - rename `merge` as `concat` in `FormComponentsCollection`
  - rename `setChildrenFilters` as `setGroupFilters`
  - rename `ConfigurableChildrenFilterType` as `FilterGroup`
*   - the dispatcher now responds with a DispatchResult
  - progress is not tracked anymore
  - it will never throw, the error in stored the result object instead
* `simplifyValidator` doesn't exist anymore
* replace the `core` injector, a specialisation of the one in `dependency-injection`
* many utils have a different location/name
* `core` package doesn't exist anymore.
* all configurations must now implement the "ConfigurationInterface" interface. The storage configuration doesn't allow for a concrete class for the adapter anymore.
* **utils:** ConstructorFunction<T> has been renamed Constructor<T>.
* **http:** default payload encoder is now FormData instead of Json.
* **promise:** `ObservablePromise.Wait` has been renamed `ObservablePromise.ResolveAfterDelay` and now takes the delay as first parameter instead on second.
* utilities that were in "core/utils" have been moved in their own package "utils", accessible through "@banquette/utils".
* The executor function now receive callbacks separately instead of an "observer" object.
* SimpleObservable is now named ObservablePromise. The observer events also change to `resolve`, `reject` and `progress`.
* all alternative dispatch methods have been removed (except "dispatchSafe"). `dispatch` now handle both sync and async calls and returns an observable so intermediate results are accessible.



