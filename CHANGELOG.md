# [0.0.0](https://github.com/banquette/banquettejs/compare/v0.0.2...v0.0.0) (2023-04-28)


### Bug Fixes

* fix invalid ctor in the stack ([12a6605](https://github.com/banquette/banquettejs/commit/12a66055b126220007e3bc44ad1bbe6320a126ed))



## [0.0.2](https://github.com/banquette/banquettejs/compare/v0.0.1...v0.0.2) (2022-10-12)


### Bug Fixes

* fix "[Vue warn]: onMounted is called when there is no active component instance to be associated with..." if the watcher triggers before the delayed trigger had the chance to fire. ([0cc2322](https://github.com/banquette/banquettejs/commit/0cc2322356a78779335a1dc1c713af51e4dc5b61))
* SSR support ([b7bbdca](https://github.com/banquette/banquettejs/commit/b7bbdca0e703e8aa8ebe14010fdb3c220ff3b54c))



## [0.0.1](https://github.com/banquette/banquettejs/compare/593597dfd3241b95dbaa17b3018f79c7e6fce7e8...v0.0.1) (2022-10-10)


### Bug Fixes

* `areEqual` and `compareObject` now do a simple comparison of non literal objects ([49cf2e1](https://github.com/banquette/banquettejs/commit/49cf2e14099b80ebedf363ce17efd97fa65f25b3))
* `floatingLabel` was not ignored ([9d23e60](https://github.com/banquette/banquettejs/commit/9d23e60ffae8992d86704dbc076a31f3d02e9567))
* `get` now searches through its parents ([798de39](https://github.com/banquette/banquettejs/commit/798de392291d7b635a036ad1bb7695acdff61b95))
* `immediate` to `false` now works as it should ([0dbae44](https://github.com/banquette/banquettejs/commit/0dbae445571f23cdf378dac21d35ede5a6f0508e))
* `validate()` was not returning `false` when the validation failed in a child component with an async validator ([0de14b1](https://github.com/banquette/banquettejs/commit/0de14b1fc29178831d3b1be535d9168a9c42f0dd))
* active variants were not updated properly when `onChange` was called without anything actually changing ([c9a56f6](https://github.com/banquette/banquettejs/commit/c9a56f689fc4bd5f06149fcc5c65fd27218fac88))
* add a `Canceled` status to the response ([c6b7fe1](https://github.com/banquette/banquettejs/commit/c6b7fe11bacf3d02962f47e3c1b3c5d1e2e17326))
* add a check for the existence of `hasOwnProperty` ([90323b0](https://github.com/banquette/banquettejs/commit/90323b02c3855d5f531185b2dc6267c3a66ab486))
* add missing arguments ([08c82df](https://github.com/banquette/banquettejs/commit/08c82df3430cff2467bf60e27e1b235dee3bbddc))
* add missing transform in the direction form => model for form controls ([a74f08d](https://github.com/banquette/banquettejs/commit/a74f08d0ad216df1bf0ba2a2f45af09e1f2a535c))
* add missing unsubscribe ([e8b8e4b](https://github.com/banquette/banquettejs/commit/e8b8e4bae1535c6b2ce3f0d3f84a664cdf52f3c4))
* add previously ignored icons ([222f758](https://github.com/banquette/banquettejs/commit/222f7582871eafd587cde87e5e49a3aff1dcbcf1))
* allow configuration changes to be processed even if already working ([b18d3e0](https://github.com/banquette/banquettejs/commit/b18d3e0895c9f8b9029badd8053f13ca65c87c9c))
* allow for `null` theme in `bt-theme` + bug fixes ([bb0d40a](https://github.com/banquette/banquettejs/commit/bb0d40aff4829190a2d7119ce8080c8c14cf0c49))
* always delay immediate watchers trigger to the next tick ([1b35102](https://github.com/banquette/banquettejs/commit/1b351021e2570edc2d7fb143659af2368146569a))
* an empty array is not considered a valid value anymore ([8fa0940](https://github.com/banquette/banquettejs/commit/8fa0940e4a9b740009a147896122eb5de03e94a1))
* an item in indeterminate state was not clearing its value from the form control ([e734bb8](https://github.com/banquette/banquettejs/commit/e734bb871b850e916bb5eed9122dd69b38155d7e))
* api transformer now works with relations ([29b6246](https://github.com/banquette/banquettejs/commit/29b6246dc17f070ac9c76fa4f2a9b4f1a591299d))
* avoid doing getPrototypeOf on `null` ([3f7d948](https://github.com/banquette/banquettejs/commit/3f7d9489755c7b1f7e1949bd95f4666fd7939620))
* avoid proxify readonly props ([bafdfca](https://github.com/banquette/banquettejs/commit/bafdfca2aa4979f4e1d4b3b26b25357b01811ed2))
* better handling of null ([c42783b](https://github.com/banquette/banquettejs/commit/c42783bce9aac9b08b575d89db6c36c043979275))
* better type checking ([640fc8c](https://github.com/banquette/banquettejs/commit/640fc8c8afb51cf2f2fb1f56551f122d5ca6dd46))
* better way of mapping Vue methods and attributes, now working with a prod build ([11e5e32](https://github.com/banquette/banquettejs/commit/11e5e327149695ddffd3d4448478450deb68524a))
* bug fix ([b53e664](https://github.com/banquette/banquettejs/commit/b53e6645a13346881248967974b8e62d0423ff70))
* bug fix on the overlay + replace `modelValue` by `visible` ([582bc5f](https://github.com/banquette/banquettejs/commit/582bc5f586bd89a64c153db83e6e50a68ba58668))
* bug fix when cloning arrays ([5907b64](https://github.com/banquette/banquettejs/commit/5907b6474d807e7f7fe7783b7bb8d4ddf9b00d40))
* bug fixes + caching ([3239d11](https://github.com/banquette/banquettejs/commit/3239d11067155af071856986f8f580499da8ad45))
* bug fixes on the new implementation of trim/ltrim/rtrim ([e634c4f](https://github.com/banquette/banquettejs/commit/e634c4fec0c19d3beccc9e38650d83e95922fcb0))
* **build:** fix the builds filtering function ([fc01636](https://github.com/banquette/banquettejs/commit/fc01636681ef371f306460421bcfbc2fba855764))
* cap the last result count to the total number of items ([3a97d38](https://github.com/banquette/banquettejs/commit/3a97d3898b0f9748f889f4f452c025f03e142774))
* check event's type before assigning the response ([048cd7f](https://github.com/banquette/banquettejs/commit/048cd7f2efcc573988508d0cf1e7b74e0ef8def4))
* check that the promise has not already been resolved ([f7488a5](https://github.com/banquette/banquettejs/commit/f7488a546d82a3958b4686bf969f4626aa8622e7))
* check the instance equality instead of the identifier. The identifier can be the same even though the `Choice` instance has changed. ([31a96e5](https://github.com/banquette/banquettejs/commit/31a96e54da1c2e3f55edd054e45988c12e84a9d3))
* child components are now matched by `id` instead of reference to avoid issues when components are proxified ([0bf5381](https://github.com/banquette/banquettejs/commit/0bf53813807988116b5a0910acd1bdd94c185dcb))
* components can now access plugins by doing from their `this` (e.g. `this.$router`, or `this.$store`) ([b908311](https://github.com/banquette/banquettejs/commit/b90831145356e0ab19e70a0df03b81c333e4203d))
* computed with an undefined default value are now correctly created ([91ee446](https://github.com/banquette/banquettejs/commit/91ee44666cf0eb1ff2f2ba95d3272741f3eeafe5))
* configuration was incorrectly extending values ([3b1efc7](https://github.com/banquette/banquettejs/commit/3b1efc7c8d1636fad2799f503e7f0efcad3ccc49))
* controls that become concrete don't trigger a validation anymore ([1a063d4](https://github.com/banquette/banquettejs/commit/1a063d48231279bd9608f049d8723d5649d33c07))
* css fix ([e5d4255](https://github.com/banquette/banquettejs/commit/e5d425593701470f698e35290a186eb4047d9180))
* Dependabot alert [#7](https://github.com/banquette/banquettejs/issues/7) ([6ec968e](https://github.com/banquette/banquettejs/commit/6ec968e36e2e44c987b5c5bc664245414066bb1d))
* directives' instances got messed up when multiple directives were applied on the same component ([98d8787](https://github.com/banquette/banquettejs/commit/98d87879b38226a1aa8e7daee27a5ad15497b5f7))
* dispatch results now properly bubble up errors in the parent chain ([c1ef459](https://github.com/banquette/banquettejs/commit/c1ef4591a85562bb8ed3267b4bb45e77ddb2237a))
* ensure `inlinedChoices` gets its values from the viewData, so proxies are kept ([6f8d483](https://github.com/banquette/banquettejs/commit/6f8d48324c44ea42a37a7e0e7dc398dde075a517))
* ensure a change really occurred when triggering a side effect ([c388e0a](https://github.com/banquette/banquettejs/commit/c388e0a8aea1c8cb92ecbc7134f1621780aade04))
* ensure buttons never trigger when disabled ([b978781](https://github.com/banquette/banquettejs/commit/b97878140141347999987edcf138395eb5f89e6b))
* ensure only the view model from which originated the focus is focused ([445495b](https://github.com/banquette/banquettejs/commit/445495bf7b4735b6c7ecef5bc2645faae3211b6c))
* ensure promises rejections are always caught ([1fb5788](https://github.com/banquette/banquettejs/commit/1fb578842ac71f3f40c62ce14f0d84e91dc00e40))
* ensure promises rejections are always caught ([99c5780](https://github.com/banquette/banquettejs/commit/99c5780a3d916450ed02bf8da3f73cb8a28f3a1c))
* ensure the random is always start with a letter to always have a valid class name ([563c936](https://github.com/banquette/banquettejs/commit/563c9361d7064167c817e5ae9616f086eca9ad15))
* ensure the regex's index is reset between each test ([b25b791](https://github.com/banquette/banquettejs/commit/b25b791f1f490367a6290fa996a5bc6926760632))
* ensure the request is not canceled multiple times ([7c3c82d](https://github.com/banquette/banquettejs/commit/7c3c82ddbf97318dc3faafcb5ca1593e4abd93a5))
* ensure the right render function is assigned when the template is inherited. This bug only appeared in production builds, when the parent component is processed before the child. ([37a6961](https://github.com/banquette/banquettejs/commit/37a696116b1ae502c63da3ead0b89ddb4b6cba22))
* ensure the root element exists before accessing its attributes ([de4fa4f](https://github.com/banquette/banquettejs/commit/de4fa4f8ad31fb24fd2e5948a60f1e62e0977ab8))
* ensure the stack is always cleared when leaving the method ([b26326a](https://github.com/banquette/banquettejs/commit/b26326a7603b36e87faadce0bc7030e941afddae))
* event dispatcher and pipeline can now be mutated while they are running + priority fixes for the pipeline ([c1728bb](https://github.com/banquette/banquettejs/commit/c1728bb1746f7766b031b930f6a582142aab6b9d))
* filtering related fixes ([657f31e](https://github.com/banquette/banquettejs/commit/657f31e9d72c1538670bfc4a2edd7888b06b4557))
* finally creates timing problems, fixed by falling back to a normal then/catch ([834392f](https://github.com/banquette/banquettejs/commit/834392f25f0f630decfc21c3955ac6ee92b7f991))
* fix `:deep` expression parsing to allow for inner parenthesis ([cc275d0](https://github.com/banquette/banquettejs/commit/cc275d01c0354e6ac0d4edea30ab0dd999f70caa))
* fix `require` paths issues with commonjs build ([246d0c4](https://github.com/banquette/banquettejs/commit/246d0c40c9f62a36e6532d0cf82ada7290481fa7))
* fix a bug that created invalid view boxes when the svg contains multiple paths ([8c281c9](https://github.com/banquette/banquettejs/commit/8c281c94cd51d89c985505e4c1ca246848e276a1))
* fix a bug where the selected choice was incorrect if `createSelectedChoice` was called before the choice was added ([65b96f1](https://github.com/banquette/banquettejs/commit/65b96f17056e586e7a3d7ce133bb2a455a796892))
* fix a possible infinite loop between the view model and the control when resetting a field with a value ([e6bb3b8](https://github.com/banquette/banquettejs/commit/e6bb3b82c701683f007d776aed42a2e300c2474b))
* fix a very strange behavior of PopperJS, see comment for details ([3d71eca](https://github.com/banquette/banquettejs/commit/3d71ecad871a54e638d39f2656b466db58314943))
* fix a warning ([1a58771](https://github.com/banquette/banquettejs/commit/1a587710beaaece95eae6a28cac824826e2a4e56))
* fix an error than could occur when unmounted, fix the scrolling when the select's dropdown is first shown ([5c7606e](https://github.com/banquette/banquettejs/commit/5c7606e4ff4ab172d2f5b196a610ff34d5f14450))
* fix bad arrow position and incorrect event unbinding ([5830da2](https://github.com/banquette/banquettejs/commit/5830da2db957dfa89203155dae3872bf22ec60a1))
* fix edge case where `onInputBlur` is called while the component is unmounted, making it fail on the call to the vm. ([c065901](https://github.com/banquette/banquettejs/commit/c065901e49bc1fe1c3d880788a114aa42a9888ab))
* fix error status not being propagated when the transform fails ([b27678b](https://github.com/banquette/banquettejs/commit/b27678b468716b0a9c67781f0a36e3c3c16a815a))
* fix failing test when inheritance is involved ([07fa2d9](https://github.com/banquette/banquettejs/commit/07fa2d95fe26917e21fec4d3cdc5f6de9f99cbe4))
* fix failing tests because of the modification of the default validation strategy for the root component ([ee4fb23](https://github.com/banquette/banquettejs/commit/ee4fb23e154532709e6c253bb595b78eedd2c0af))
* fix floating placeholder overflow ([70afe66](https://github.com/banquette/banquettejs/commit/70afe6605048e44768f6921f4730fcb14e0166ed))
* fix import ([4c28b7f](https://github.com/banquette/banquettejs/commit/4c28b7f6f43fb2b2436f81e239e1411bd27348bd))
* fix import that caused tests to fail ([85ec3ce](https://github.com/banquette/banquettejs/commit/85ec3cef8754eeb68a5433f565c9500a78750729))
* fix imports / exports ([8dd0670](https://github.com/banquette/banquettejs/commit/8dd0670f947bac40c128b595d958644d4a1cba4f))
* fix infinite loop when the model has a relation on itself ([4d75891](https://github.com/banquette/banquettejs/commit/4d758917257965d5a6e9082a7b21b736e77d29d6))
* fix infinite recursion and remove useless processing ([13114bc](https://github.com/banquette/banquettejs/commit/13114bcaf428b07e3db552918f2b8ad5908a88b9))
* fix interaction between the `validated` and `virtual` states ([a77c22a](https://github.com/banquette/banquettejs/commit/a77c22a528fe7e63948ed59a9aa4a2f9691b9672))
* fix invalid arguments ([26bcf2c](https://github.com/banquette/banquettejs/commit/26bcf2c2cdc258a6ca45c1a9b1f5a3330c140cae))
* fix invalid condition... ([c0ca88e](https://github.com/banquette/banquettejs/commit/c0ca88e64da743ad0e7ed3ea50eb47cdede80d81))
* fix invalid import ([07bf66f](https://github.com/banquette/banquettejs/commit/07bf66fb6176a098996e76259f933156a709864e))
* fix invalid import path ([69028df](https://github.com/banquette/banquettejs/commit/69028df67ba3e4f0aa3542435e182c5b30eb7880))
* fix invalid render function for renderless components ([8f1dc74](https://github.com/banquette/banquettejs/commit/8f1dc74a03da942e0c15c9688b2865643273e139))
* fix invalid test ([89a994e](https://github.com/banquette/banquettejs/commit/89a994eee948941a1becd664c19be00af113647a))
* fix invalid typing ([10f0ed4](https://github.com/banquette/banquettejs/commit/10f0ed427659d0a4f6320b815198eec6e3100765))
* fix min-height no applying to the correct element ([742dfa0](https://github.com/banquette/banquettejs/commit/742dfa02dbcc43e6d889d88016bb67842abd6b6c))
* fix missing export and invalid import ([2fdd44c](https://github.com/banquette/banquettejs/commit/2fdd44c890ad92f0eaa7f89cd633bc721e451f6f))
* fix ordering issues due to the overlay's z-index not updating when the dialog is hidden and not destroyed ([0e589d5](https://github.com/banquette/banquettejs/commit/0e589d57fc751e277c9dc22a810211851875bfc2))
* fix ordering issues due to the overlay's z-index not updating when the dialog is hidden and not destroyed ([22705cc](https://github.com/banquette/banquettejs/commit/22705cc90c29045c46668986b91079e5cc51a11a))
* fix package.json because `import '@banquette/vue-typescript/vue-builder'` was failing with Webpack ([38f6fa7](https://github.com/banquette/banquettejs/commit/38f6fa71516b86ec7f456d74d01fe7c9de8b71f7))
* fix style tags ordering ([055051f](https://github.com/banquette/banquettejs/commit/055051febd6dcec3d308679d7d27d8e7fc4f9697))
* fix the min-width ([a0bb429](https://github.com/banquette/banquettejs/commit/a0bb4290ca3a74beb19625c8f509d7f475e96be9))
* fix validators removal ([5b3e0d7](https://github.com/banquette/banquettejs/commit/5b3e0d7d4735c683a264cd43b6da1c405bd5592a))
* fix watcher not waiting the delayed call in certain cases ([059909f](https://github.com/banquette/banquettejs/commit/059909fe65951a111b3b2b91e3b0eec0f3d5ad80))
* fix wrong numbers when there is 0 results ([11c0e84](https://github.com/banquette/banquettejs/commit/11c0e84a3f9becfeaca6d98ee03e8ea1824ab1c0))
* fix wrong variable in apply implementation ([7145f4a](https://github.com/banquette/banquettejs/commit/7145f4ad4588ad9cb7c608214ba656a2b8323369))
* fixes on filters ([3c1b41f](https://github.com/banquette/banquettejs/commit/3c1b41fd931a35c9590a1d14fd6f0a08d67c01fc))
* force camelCase conversion of aliases to fix a bug if the name of the alias is in kebab-case ([97d1840](https://github.com/banquette/banquettejs/commit/97d1840855d25e338c9e4d033ab28e5413c6eb88))
* give priority to the bindings over existing options + minor adjustments ([e97757f](https://github.com/banquette/banquettejs/commit/e97757f5b4f2c586f3f8efa7ea367623dc0bc591))
* handle events on svg elements ([c134c7a](https://github.com/banquette/banquettejs/commit/c134c7a4af309603521c8c77965af808b5db65d2))
* handling of the remote result was incorrect ([22aca29](https://github.com/banquette/banquettejs/commit/22aca2923cb0d3addc437aad812ef86e2e113dcc))
* huge mistake, the map of transformable properties was mutated by accident... ([b902a09](https://github.com/banquette/banquettejs/commit/b902a09eb2ca4e07d80ec5bb4a3cb64ccecdc2bd))
* huge typo -_- ([e071582](https://github.com/banquette/banquettejs/commit/e071582469a2363392fe254046a2ea46a2b816f2))
* icons don't need a `<span>` wrapper anymore for popovers to work on them ([0d8c060](https://github.com/banquette/banquettejs/commit/0d8c060226d790183204ea60dbc835ee760baa41))
* invalid `@Watch` targets ([c667461](https://github.com/banquette/banquettejs/commit/c667461c195e3db1fbd558b188df414967782655))
* invalid error message ([7064723](https://github.com/banquette/banquettejs/commit/706472313749fd1f34bc2a413256facc03a0edee))
* invalid imports ([f3d9f8a](https://github.com/banquette/banquettejs/commit/f3d9f8a44acc91055f7f9bd371cd3798072b7308))
* invalid type ([7cd0025](https://github.com/banquette/banquettejs/commit/7cd0025c32b13dddea3f9bc8e4802ec0be0abeb9))
* isolate the unsubscribe function of `VueThemes.OnChanged` so it is not called by `computeChanges`... ([f66f6b6](https://github.com/banquette/banquettejs/commit/f66f6b667724aa5acb8784d49bf62d1b5602041b))
* limit the api's requests interception of `bt-table` to the ones it emitted ([6524f96](https://github.com/banquette/banquettejs/commit/6524f96fd5b26f73e8d8609d9902021539a6235f))
* make radios work with `v-model` ([dce3f71](https://github.com/banquette/banquettejs/commit/dce3f711f56d8f7afadbe4f2e3a46daa3649cf62))
* make the `Resolve()` parameter optional ([faa43f1](https://github.com/banquette/banquettejs/commit/faa43f19f8add55322e1378b82b6f8c37d1ccac8))
* make the floating extras interactive again ([8aba61b](https://github.com/banquette/banquettejs/commit/8aba61b21c5a643ceb19f6ad4d7b49722c198627))
* make the value update when the child filter "UpdateValue" is modified ([7bf0d51](https://github.com/banquette/banquettejs/commit/7bf0d51a302d03cde614ebc66e345c21df6aa38e))
* missing `\` on the regex ([594d94b](https://github.com/banquette/banquettejs/commit/594d94bd6ddfe8affa0586e812ac07ed1df2c5b3))
* model transform metadata now works with inherited properties ([77c73b9](https://github.com/banquette/banquettejs/commit/77c73b969a8ff5aaedc24d8e1e7ca43d28d48bd6))
* multiple bug fixes on `throttle` ([bbf54ab](https://github.com/banquette/banquettejs/commit/bbf54ab173b3b73b29875ad97e9bc3374e8563fb))
* multiple bug fixes on themes switching ([2c9ac55](https://github.com/banquette/banquettejs/commit/2c9ac554f3ac41ca189d56055c777d8fcfc9a203))
* old values and `watchEffect` were invalid ([3589769](https://github.com/banquette/banquettejs/commit/358976993c662f05d06524446fb5727294a0a72a))
* only mark form components as `NotValidated` is a validator is defined on reset ([368226f](https://github.com/banquette/banquettejs/commit/368226fc273d21bc1ca3c4493cdd1baa7ebe7e0f))
* only mark the component as invalid when it has errors of its own ([9fd5f0d](https://github.com/banquette/banquettejs/commit/9fd5f0da533631a9ee10121424b7874b9ec99e62))
* parent component becomes invalid (and validate return `false`) when a child fail to validate ([6a50959](https://github.com/banquette/banquettejs/commit/6a509594e341c514ca83c81396452f6d9d2c36d3))
* path are not forced to start with "/" anymore to get a match ([6d935d0](https://github.com/banquette/banquettejs/commit/6d935d049cd796a9ac31999b83544db2f52c61bf))
* prevent `blur()` from being called for the control gaining focus ([7b78c79](https://github.com/banquette/banquettejs/commit/7b78c79604037b0f803f5722561879a9028cc238))
* prevent choices to be deselected when implicitly selected via `updateChoices` when the select is multiple ([b158697](https://github.com/banquette/banquettejs/commit/b15869741972cf0c74a3639ad5883bad5c56e66e))
* prevent getters from being called when exposed via `@Expose()` ([8706075](https://github.com/banquette/banquettejs/commit/87060759d50ffc65385c8c6d82fbb8ef4716df15))
* prevent infinite recursion when there is a circular dependency on relations ([8897b6b](https://github.com/banquette/banquettejs/commit/8897b6bf3916bbd1db15ef9149fbceaae94fb6df))
* prevent the processing to be done twice ([40b8161](https://github.com/banquette/banquettejs/commit/40b81613b4ee7165c36914fba7c5b957bec12f79))
* prevent the select to show its choices while disabled ([99180b8](https://github.com/banquette/banquettejs/commit/99180b89d64d7e3ad313321ded8eea149e56551e))
* prevent watchers to fire for an unmounted component ([74d3c68](https://github.com/banquette/banquettejs/commit/74d3c68e7eb7c802aca38b4f6fb46c25fed1da71))
* **promise:** progression events are stabilized and better tested ([816f5f2](https://github.com/banquette/banquettejs/commit/816f5f2b560f4e604cf9af0f6617b5f44199bdc7))
* propagate failures up in the parent chain ([6f5714a](https://github.com/banquette/banquettejs/commit/6f5714add812d3438b77ff7e29cb1cbe953c8787))
* proxy was lost when calling a getter, thus losing the ability to call `$` properties inside it ([5a0a998](https://github.com/banquette/banquettejs/commit/5a0a998980f287830750e034d9ae8e930ca776e9))
* rejections are now propagated down the validation result promise chain ([146765f](https://github.com/banquette/banquettejs/commit/146765fa863ebdd5484a045b5eb0fc80160aabee))
* remove circular dependency in imports ([025da2e](https://github.com/banquette/banquettejs/commit/025da2e2b6f458865fddf01f6c54f74ad48fa238))
* remove incorrectly named icon components and fix the generator ([25fa1fa](https://github.com/banquette/banquettejs/commit/25fa1fae90d06fdedbe02c0d1644b3cf4613c96a))
* remove leading "/" that caused an error when components didn't exist yet ([6060c1c](https://github.com/banquette/banquettejs/commit/6060c1c94bba0f152472c137c11ac9d1569c73a6))
* remove the `areObjectsEqual` test which can lead to infinite recursions ([133131a](https://github.com/banquette/banquettejs/commit/133131a4ac5f13838fd2481cc27fbe3ac9f01bbb))
* remove the cache of __vccOpts because it's incompatible with the inner working of the module ([94176a9](https://github.com/banquette/banquettejs/commit/94176a9ead28cab82f8b6fe72f937e233a328d01))
* remove the vue proxy before binding it to the form, so the watcher proxy is inside the vue proxy, otherwise vue will remove it when setting the value ([fde1384](https://github.com/banquette/banquettejs/commit/fde13844afe910f9a63f2ed8d94dc1630c5a7fe6))
* remove the wrapper from the layout by positioning it as `absolute` ([b2eec13](https://github.com/banquette/banquettejs/commit/b2eec136f8024eaa87ebc06023803dfab0412ec9))
* replace `POST` by `PUT` in the `put()` method ([70dabce](https://github.com/banquette/banquettejs/commit/70dabce0403785d434eaa410edd7c69c1ddef00e))
* replace legacy props ([8653e62](https://github.com/banquette/banquettejs/commit/8653e627150f75dfebae75b61b0caaac46cc1202))
* requests can now be replayed + rename of `NoPayloadSymbol` to `AutoPayloadSymbol` + export ([f8ac65e](https://github.com/banquette/banquettejs/commit/f8ac65e1770af32c420f7be991cc81a04a303742))
* requests tags are now forwarded to the Api events ([7a5f2df](https://github.com/banquette/banquettejs/commit/7a5f2dfcaf82f8e5bea0dc7fc9df841de180bbc4))
* response status is now canceled instead of error when in case of a `RequestCanceledException` ([d4141f9](https://github.com/banquette/banquettejs/commit/d4141f97111e81e75253c688d2c36045b9645dba))
* rollback 97d1840855d25e338c9e4d033ab28e5413c6eb88 ([6d1e991](https://github.com/banquette/banquettejs/commit/6d1e991a9f993ea295a9ec5247e4dfca2cac8293))
* sfc and scoped styles should now work ([64e1db4](https://github.com/banquette/banquettejs/commit/64e1db4c1bd5f500d5fb155cea88a03af2dfd061))
* should stop executing computed on initialization ([f859657](https://github.com/banquette/banquettejs/commit/f85965756b065777434724ae8f8155a9899451e6))
* skip the Array constructor from the contexts stack ([07bb682](https://github.com/banquette/banquettejs/commit/07bb682d315a223ccc819e828608cf82a4cecb88))
* stop adding `undefined` to the control when the selected node has no value + fix reactivity ([5244d7a](https://github.com/banquette/banquettejs/commit/5244d7a4f10e25009db882450be59c3ef2b89be7))
* stop cloning popper inner options ([d9029c3](https://github.com/banquette/banquettejs/commit/d9029c3c988b7d5f518894995359ace88e78608c))
* stop exposing the form to the slot, relevant data are now copied into `viewData` ([77ffccb](https://github.com/banquette/banquettejs/commit/77ffccb73c4013bdfe70e73383cd859305d661c7))
* stop hiding the component when visible is `false`, removing the background color and the interaction is enough ([c62aedc](https://github.com/banquette/banquettejs/commit/c62aedc031000afc0f627ada0ef7b51613b4103d))
* stop listening for the subtree ([1a641be](https://github.com/banquette/banquettejs/commit/1a641be9cda74eedc0ee0262f156b35f8bbc6fa1))
* stop the pipeline when an error occurs ([3893201](https://github.com/banquette/banquettejs/commit/389320112d80ebd148a7d665dd536aa3fc510a04))
* stop using the container for `RemoteModule` ([4b74a33](https://github.com/banquette/banquettejs/commit/4b74a33e813a764c06c3a54e6377a4979228ced5))
* temp fix for themeable props ([539f0a5](https://github.com/banquette/banquettejs/commit/539f0a5e5fc442e32fff83a6da2227679edf838d))
* test the case where `:global()` is the whole selector ([a94ebd8](https://github.com/banquette/banquettejs/commit/a94ebd885ad9e4dfce5065046053ea74238bce1f))
* **tests:** fix tests using the old ObservablePromise syntax ([d808740](https://github.com/banquette/banquettejs/commit/d808740fe1f95d4956af35c8228ecf42b7995908))
* the "components" options now handle the case where it gets a __vccOpts object instead of a constructor (because of the cache) ([98a6261](https://github.com/banquette/banquettejs/commit/98a62617e33f6986d411fc233593bfa81dcc4033))
* the `treatAs` transform condition was invalid ([9e946bd](https://github.com/banquette/banquettejs/commit/9e946bdeaee7aaffb5a2e555b7a8252e79d76bba))
* the content type was missing when the payload is empty ([b12092c](https://github.com/banquette/banquettejs/commit/b12092cee19317776325e88cb1142e0b2d9d6ff6))
* the form now ignores canceled validation results ([f0f87cc](https://github.com/banquette/banquettejs/commit/f0f87ccf6ecf8e5db6d844674f7dcce1496d632e))
* the intermediate form used to merge the `loadData` values with the form could override data not defined in `loadData` (like a `null` relation), this fixes it by filtering out of the form's result the values that are not part of `loadData`. ([2f1d7df](https://github.com/banquette/banquettejs/commit/2f1d7dfd6ba2ab53d3dc582ef2c18eebbc95a15c))
* the parent matching now works with non-direct parents ([cbb95ae](https://github.com/banquette/banquettejs/commit/cbb95aeefee19ace169c60a187ccc6696f54769b))
* the progress text is now animated again ([ebcf8f0](https://github.com/banquette/banquettejs/commit/ebcf8f048c58a7fc73c279c22ba9cc49f551d906))
* the prop configuration now totally replaces root attributes instead of extending them ([5bc1719](https://github.com/banquette/banquettejs/commit/5bc1719e239ac7b64843e83a63f0d02bebcad850))
* the proxy now returns the target object's keys and property descriptors ([4e1a8ec](https://github.com/banquette/banquettejs/commit/4e1a8ecf9c8678c6326ce1d9f38a9395fce166ea))
* the slot content is now used when a `bt-form-select-choice` has no value ([08680d7](https://github.com/banquette/banquettejs/commit/08680d79dce7b735e7e9b699d759e49545d404ba))
* the way methods queue was stored could lead to methods being called in the wrong order, fixed by using an array instead ([58125a2](https://github.com/banquette/banquettejs/commit/58125a2603cd6d70784f4ff5f3564ed1077c8830))
* the whole width of the select is now interactive ([3961bb4](https://github.com/banquette/banquettejs/commit/3961bb4fe188ea6de5e19a3f25f9f923e34623d2))
* theme props are now overridable on component use + force computed to update when a theme value changes ([17f2029](https://github.com/banquette/banquettejs/commit/17f2029b8b857f29c6faa722c5a1b4c0126247a3))
* TS1337: An index signature parameter type cannot be a union type. Consider using a mapped object type instead. ([4b4a5fd](https://github.com/banquette/banquettejs/commit/4b4a5fdb57d7794fc34d478682b3bedc17fa21cb))
* typing error ([6f18ce7](https://github.com/banquette/banquettejs/commit/6f18ce7681c8fb601b1c9582113d4bc4f5fe0631))
* typings and unit tests silently failing ([b0340cf](https://github.com/banquette/banquettejs/commit/b0340cf8c97629dc4b776c0a58c61d3597c5ecf2))
* update the loading state **after** `bindModel()` ([900e74c](https://github.com/banquette/banquettejs/commit/900e74cb1e9771b4dfee9ceaad5970a382a1dde0))
* use `watchEffect` instead of `onTrigger` which is not available in production ([ca7deaa](https://github.com/banquette/banquettejs/commit/ca7deaaaf4faf73d1f27debdc5e4832cfab591b1))
* validator was not set when a `FormControl` is given to the factory ([c39e988](https://github.com/banquette/banquettejs/commit/c39e9884de094e31dd13eba0ec68803be7e79f59))
* view model is now updated back if the value is changed in the `BeforeValueChange` event ([aa2e7d6](https://github.com/banquette/banquettejs/commit/aa2e7d6c71b82d559ce7d2b50b24410e8d696270))
* was crashing if `hasSlot` was called too soon ([d76c2ed](https://github.com/banquette/banquettejs/commit/d76c2ed2b92a0ff47ef81bf77e5b9f8c497149c8))
* watch strategy should now work properly ([732552c](https://github.com/banquette/banquettejs/commit/732552c4200b827e326728877ebb16c8711ccd0b))
* watchers on props were failing to trigger in some situations, now watch the prop's ref instead of a function ([95d7fd3](https://github.com/banquette/banquettejs/commit/95d7fd338dd239cdbd39bab61c4cc6819d99d2a3))
* watchers were getting out of sync with the component instance when in a loop ([4af8f1e](https://github.com/banquette/banquettejs/commit/4af8f1e56fff5c64fb51735762e8098a93f199bc))


### chore

* `twoDigits` is now `fixedDigits` ([8299325](https://github.com/banquette/banquettejs/commit/8299325da7a0dfafb46ab1e9901528656b5e1cae))
* add a mandatory `id` attribute to all exceptions ([a466e2e](https://github.com/banquette/banquettejs/commit/a466e2ef3636e95779ac7a667be369effe822925))
* change the way promises are detected to avoid side effects ([7df6532](https://github.com/banquette/banquettejs/commit/7df65326ee04ceedaa46b5d516d64f65f3bc0f43))
* faster `areEqual` ([df5850b](https://github.com/banquette/banquettejs/commit/df5850b590459eb17117a1772435e7fe558ba4af))
* rename `id` into `slug` and make it writeable in all exceptions ([01dc382](https://github.com/banquette/banquettejs/commit/01dc38224ebcfbd63684abb72b06d0a8ddc69b95))
* rename `remoteModel` into `model` and make it work with local data ([77d9eaa](https://github.com/banquette/banquettejs/commit/77d9eaa61d5f66eea15e90bf0641d1542dc53e8e))
* rewrite of the `ValidatorComponent` to be more stable and to work without being in a `bt-form` ([e6ed7a4](https://github.com/banquette/banquettejs/commit/e6ed7a466bdc41b9210e9506efccc270c581fcf7))
* simplify the equality tests when setting a new value of a `FormControl` for performance purposes ([a017dbb](https://github.com/banquette/banquettejs/commit/a017dbb4b1c1e16bfbd20f7b3d5461e676367946))
* stop resolving the vue instance of target elements ([aebbc4a](https://github.com/banquette/banquettejs/commit/aebbc4ab9c1ad89769cc338df4221f84d2ec6675))
* various bug fixes, typos, and micro optimizations. Themes styles are now injected at the beginning of the head, and the styles of the wildcard theme are always first ([ae23ac3](https://github.com/banquette/banquettejs/commit/ae23ac341ccdb7b3ddfc81ebf56ae7bb741cec98))


### Code Refactoring

* `AbstractViewModel` is no longer abstract ([f99636b](https://github.com/banquette/banquettejs/commit/f99636bb0c7d1b895be1a4879db3c9a7613ea469))
* `bt-validate-is-type` now accepts types as string ([513c65b](https://github.com/banquette/banquettejs/commit/513c65b8949362d8fcb66376469e326e43ed00f3))
* `treatAs` is now part of the options object ([efc79d7](https://github.com/banquette/banquettejs/commit/efc79d72791319817384a96687357865c1ca1a2c))
* add support of validation groups + refactoring of the signature of all validators ([49a7f81](https://github.com/banquette/banquettejs/commit/49a7f8189bf1f24c22a2a83801a2210f48f81fbd))
* bi-directional focus + simplification ([c0dbc5a](https://github.com/banquette/banquettejs/commit/c0dbc5a32c18e77e4d8de767aefb0b19c2009842))
* huge refactoring cleaning up several bad design decisions accumulated along the way ([e65fecc](https://github.com/banquette/banquettejs/commit/e65feccf9dc4274266902fed794ee4bbfc767e95))
* huge refactoring of the validation / form validation to integrate validation groups and more ([d798bfa](https://github.com/banquette/banquettejs/commit/d798bfa5c8f3811c3453427f3fead63308175028))
* huge refactoring, utils separated from core ([bdf8013](https://github.com/banquette/banquettejs/commit/bdf801336b8968872eb7d730dc470468f0a33675))
* icons components don't use `VueTypescript` anymore to reduce bundle size. ([5464c3b](https://github.com/banquette/banquettejs/commit/5464c3b64a42fc518163323f79c756e79d2b347a))
* inverse `wildcardTransformer` and `extra` parameters order ([24bf388](https://github.com/banquette/banquettejs/commit/24bf388963ced8b5205a5f90e6a28807f6e87f54))
* make all components validators `.vue` files ([f218e8e](https://github.com/banquette/banquettejs/commit/f218e8ee196049217c6880ee0b4676415f39965d))
* many breaking changes, renaming, refactoring for an easier use by the end-user: ([dbe95c8](https://github.com/banquette/banquettejs/commit/dbe95c8b64a14373f232220ef48af585e044564e))
* multiple renaming and minor additions ([3aff9ce](https://github.com/banquette/banquettejs/commit/3aff9ce4b5c61564d1aecc5803506a57156c5e92))
* refactoring of the icons. Different packages and now support versions (`version` prop). The generator script is also improved for a better cropping. ([c416f7c](https://github.com/banquette/banquettejs/commit/c416f7cd2652b188fe5ada7f5884a8a48fa80dc8))
* remove `core` package. Replaced by `config` and `exception` packages ([c66786f](https://github.com/banquette/banquettejs/commit/c66786f8f2668c977befced221d525ea9a7c4a2d))
* remove dependency between "SharedConfiguration" and "VarHolder" ([978362d](https://github.com/banquette/banquettejs/commit/978362d896e8955a33676bf05b09fe81819305bf))
* remove useless `ModelChangeEvent` ([8ac1588](https://github.com/banquette/banquettejs/commit/8ac1588788f8989c1e9c040bbfac567d6575f66c))
* rename 'flatten' into 'flattenObject' ([515a417](https://github.com/banquette/banquettejs/commit/515a417793d022189447bce4b0e2f87dff341009))
* rename / replace event args + create a `ApiTransformer` that replaces the `HttpTransformer` in the Api listeners ([d8d802c](https://github.com/banquette/banquettejs/commit/d8d802cdb7da144bbebc20f57dc75d6117391cb2))
* rename `rawValue` into `originalValue` in the tree's `Node` object + remove `root` slot ([42461ba](https://github.com/banquette/banquettejs/commit/42461ba3b939177bf21be687b5a809788027fdf5))
* rename `simplifyValidator` into `createValidator` ([bb08d05](https://github.com/banquette/banquettejs/commit/bb08d05d400a699e3d7880cea67f850da0a86427))
* rename `validate` into `transform` and change the purpose of `validate` to take a `ValidatorInterface` ([6eb4676](https://github.com/banquette/banquettejs/commit/6eb46766389fac3a9fe7f7210a23bda767ef6b8a))
* rename all props that use `:` ([3fb6d4f](https://github.com/banquette/banquettejs/commit/3fb6d4fff87c8b95d46d477dcace36a353a4b5a4))
* rename multiple props + better error handling ([b03619b](https://github.com/banquette/banquettejs/commit/b03619b72c1ec964b8943d14fc47ee7f35acb30d))
* rename several services and Vue components + remove the `.ts` files of all Vue components ([e55404a](https://github.com/banquette/banquettejs/commit/e55404af96457d0446aea1847c1d2ba8eb3b927f))
* replace `modelValue` by `data` ([6e7b0d4](https://github.com/banquette/banquettejs/commit/6e7b0d4fcf8a108074c2ecab140cbb354b88b40c))
* replace `modelValue` by `opened` ([eea610d](https://github.com/banquette/banquettejs/commit/eea610ddc47e9b0111a24c68347864587d30d925))
* replace `modelValue` by `visible` ([0b7a86e](https://github.com/banquette/banquettejs/commit/0b7a86e9cb66dff85238e2237151529b02d11558))
* replace `once` by `oncePerCycleProxy` utility function ([5e167c0](https://github.com/banquette/banquettejs/commit/5e167c0e8ac79e1e13d4c825448fa7d3aa64ff02))
* replace the `bt-collapsable` component by a directive ([0b2e4fb](https://github.com/banquette/banquettejs/commit/0b2e4fbc1dcfd18fd632bcde3f5de6254b0bcaad))
* replace the package `vue-material-icons` by `vue-icons` that can contain any number of sets of icons ([d09c5c4](https://github.com/banquette/banquettejs/commit/d09c5c4f8c5ca4ffdca0edea58e2562765521fc8))
* rollback to previous `created` ([e91ffa0](https://github.com/banquette/banquettejs/commit/e91ffa069c5796924ed68aa6d854cc83e66eec6e))
* simplify the css theming ([6c2d0ab](https://github.com/banquette/banquettejs/commit/6c2d0ab058aedbb0a59f74e8053c44c085d24e86))
* typings refactoring and renaming ([7fc54d9](https://github.com/banquette/banquettejs/commit/7fc54d974317cb54ddbc921248c6291003cfa741))
* update the way import prefixes work ([11312ca](https://github.com/banquette/banquettejs/commit/11312caf962ba0ba9eec6bc28aae17690ef4bccb))
* utils split into multiple packages ([919386a](https://github.com/banquette/banquettejs/commit/919386ae5f5652acffe234c000a41a871e28f82f))
* **utils:** rename ConstructorFunction<T> ([4735c80](https://github.com/banquette/banquettejs/commit/4735c802a8b4a721e2ce1840c3c3f9e59bb0506e))


### Features

* "extend" doesn't try to clone constructors anymore ([27a153b](https://github.com/banquette/banquettejs/commit/27a153b8ac5f6ea799edecdebc94ae5e5ff494e4))
* `AbstractVueFormComponent` now search for a parent `bt-form-generic` to automatically assign its form to the proxy ([5b5d3bc](https://github.com/banquette/banquettejs/commit/5b5d3bcaf01f7d89c5e426bc1fd95cfc4d46cfbf))
* `bt-form` now emits events ([bec3d96](https://github.com/banquette/banquettejs/commit/bec3d9628b4918bdbed4727c40e09e4820034108))
* `bt-form` should be production ready ([0e53eb0](https://github.com/banquette/banquettejs/commit/0e53eb07ab4d947ea6335351752f18873bdea605))
* `flatten` utility now supports depth control (min or max) ([153eaf9](https://github.com/banquette/banquettejs/commit/153eaf9a4b0e64c173bc52cdabdce9246b9044b0))
* `getParent` now goes up the prototype chain when searching for a component by name ([64e05cf](https://github.com/banquette/banquettejs/commit/64e05cf5030a729256c6c184a3eac03ae45122e8))
* `inversify` package added ([7a41691](https://github.com/banquette/banquettejs/commit/7a4169143e8c47d87323a01c6d607184e2674bbe))
* `isFunction` is now a proper type guard ([78c9da4](https://github.com/banquette/banquettejs/commit/78c9da4df4c40436d413294bf46a8e275794feb7))
* `searchRemoteParamName` now can accept a function ([818c3bc](https://github.com/banquette/banquettejs/commit/818c3bc055e9b76a48dab093e4a2273eb6f35016))
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
* add a `allowHtml` flag to allow an alert to render a html message/title ([5509a7b](https://github.com/banquette/banquettejs/commit/5509a7b414f98b5861a3a862a8022d1735595a34))
* add a `arrayIntersect` utility ([5e2503d](https://github.com/banquette/banquettejs/commit/5e2503d20c1a3411c6f860c484996eecdea08f5b))
* add a `bt-form-hidden` component ([09b39a1](https://github.com/banquette/banquettejs/commit/09b39a18fc3378a3ea06366e4ffd2ef84582e719))
* add a `clearable` option to the select ([b7ab0d7](https://github.com/banquette/banquettejs/commit/b7ab0d72b56c4501e321699ef462d55088f7b2cb))
* add a `disabled` prop to `bt-form` ([7f41fb5](https://github.com/banquette/banquettejs/commit/7f41fb56b6076cb303856a5910252074bc870fb1))
* add a `doAndRetry` and `doAndRetryFactory` utilities that make it easier to do a task repeatedly while it fails ([6f4d456](https://github.com/banquette/banquettejs/commit/6f4d456efe61e6f2f359ce6fa4b39dabd7bb2401))
* add a `getParent` method to the `Vue` base class to search for a specific type of component in the parents hierarchy ([edbf105](https://github.com/banquette/banquettejs/commit/edbf10565318da568cab0c6f701af8927c98fb32))
* add a `humanSizeToByteCount` utility, and rename `humanFileSize` ([07c2bdb](https://github.com/banquette/banquettejs/commit/07c2bdb20faf00923ec406de7be9699a88b62c5d))
* add a `jsonEncode` and `jsonDecode` utilities that return `null` on error instead of throwing ([84b866a](https://github.com/banquette/banquettejs/commit/84b866ac325d5ca6b30bfe60faba18f3eaf0193c))
* add a `messagesStack` utility getter to all exceptions ([7e25ce5](https://github.com/banquette/banquettejs/commit/7e25ce5672acdca516ad715b7133f032883631a1))
* add a `priority` attribute to better control the variants ordering ([2d20d0d](https://github.com/banquette/banquettejs/commit/2d20d0db089d06bea13b79943af863ee3d0fc700))
* add a `tiptap` ui component (wip) ([1c25f58](https://github.com/banquette/banquettejs/commit/1c25f5801aabf409b94e5e76d4e4954ed4d8c99c))
* add a `Transformable` decorator that is a shorthand to setting multiple transform decorators at once ([d670cef](https://github.com/banquette/banquettejs/commit/d670cefcd6669532e2ff9fb4c1874638b519dc06))
* add a `validate` utility function to easily validate a model manually ([f24ca96](https://github.com/banquette/banquettejs/commit/f24ca9659a24f6aed71864d5c50b6c4ef3e743d5))
* add a `Vue` base class components can (optionally) inherit from to access Vue attributes ([ec43e0e](https://github.com/banquette/banquettejs/commit/ec43e0eca4befed44acaed2697e57a3f92e9e7f3))
* add a new `BeforeValueChange` event to control and manipulate the value change on a `FormControl` ([46b6f9c](https://github.com/banquette/banquettejs/commit/46b6f9cc55ca6d0b6f8f53411568774e3c3d502a))
* add a new `IsType` validator ([2e6969c](https://github.com/banquette/banquettejs/commit/2e6969c60e9c09259b4f35eb3ddb2f1ef1da1246))
* add a new `vue-material-icons` package ([d76c042](https://github.com/banquette/banquettejs/commit/d76c042052105cf7a4ab4273cfbe6aaa0b66891e))
* add a unique id global to the form and expose both ids to the view model ([37e0123](https://github.com/banquette/banquettejs/commit/37e0123ced5bf2368a07285d91eb2925f95ca6ce))
* add an `errorsMap` attribute to `AbstractViewModel` ([e7fe393](https://github.com/banquette/banquettejs/commit/e7fe393388673617169d6672bb2d2fa8a3f0b556))
* add an utility to remove all the keys of an object that are not present in another ([942f958](https://github.com/banquette/banquettejs/commit/942f958784c56d004600abd5fe4ccf745749d6b7))
* add base view models / modules for text, select and checkboxes ([72ab5fc](https://github.com/banquette/banquettejs/commit/72ab5fcca13b6489bfe0c810f3fe90f30211358a))
* add basic support of `:deep()` in custom css overrides ([7be45b6](https://github.com/banquette/banquettejs/commit/7be45b68f9211eac063317a95b3a8e5f69cf0c96))
* add IOException ([902d398](https://github.com/banquette/banquettejs/commit/902d398626fec9adbe731c3a152c5390cd67fd14))
* add new `character-count` and `heading` modules ([889dafd](https://github.com/banquette/banquettejs/commit/889dafd7896796a235632cf71b7c37338cdf0e16))
* add new `history` module ([76bc153](https://github.com/banquette/banquettejs/commit/76bc153aa5eb45db840da2b19f95a7a9e27273f7))
* add new `ValidationStart` and `ValidationEnd` events ([9767c79](https://github.com/banquette/banquettejs/commit/9767c7935ac6988177e54ad3299288c1701fd737))
* add optional global functions to easily make api calls from a template ([3fb0995](https://github.com/banquette/banquettejs/commit/3fb0995cf13f6cfb2c4f40628e6ddae5e1b06eb7))
* add package `vue-form-generic` ([8f95a83](https://github.com/banquette/banquettejs/commit/8f95a833258a7a8b3c6396458aaec6c0a34d15ac))
* add parent matching support for variant selectors ([1a5d49a](https://github.com/banquette/banquettejs/commit/1a5d49aba94c75fcd956315bf80629362f41bb0d))
* add php compatible serialize and unserialize method + a utility to get the size in bytes of an utf8 string ([0092d89](https://github.com/banquette/banquettejs/commit/0092d89df3544dd30902498f011f00a3ea6f7ad4))
* add recursion control utilities ([9c8a3d0](https://github.com/banquette/banquettejs/commit/9c8a3d09da8900297aff5eb8205a24e9c258c10d))
* add size constraints for `bt-form-file`, i18n, better theming and many bug fixes ([fed8545](https://github.com/banquette/banquettejs/commit/fed85455920502ed0fed4f2d08a3b2cc6f8086f0))
* add support for @Assert in constructor parameters ([6a82b85](https://github.com/banquette/banquettejs/commit/6a82b8561c3b1e4e7604c1ede83d3e3b75aaab48))
* add support for a `validate` method in `@Prop` that can verify and/or modify the prop value ([950b502](https://github.com/banquette/banquettejs/commit/950b50292baf5f03b8ecb98dd0c5621946efaa5e))
* add support for an alternative array notation for the input nodes ([0419e7c](https://github.com/banquette/banquettejs/commit/0419e7c15a18e6ef471709e7e98f64741a685828))
* add support for deep set ([435769f](https://github.com/banquette/banquettejs/commit/435769f53b8c95b44251546dd6d74a6d6256ea4c))
* add support for multiple view models per control ([6f357e5](https://github.com/banquette/banquettejs/commit/6f357e51a863843e0a07f49f259b8cd09bd789b1))
* add support for OR condition in variant matches ([a602346](https://github.com/banquette/banquettejs/commit/a602346b7d4cc8f3347a6d5f26184df2f4d94959))
* add support for textarea `autoSize` ([6844b16](https://github.com/banquette/banquettejs/commit/6844b16d4434cef3bdc8c8d1aa7788279727c182))
* add support for the `:global` keyword that make possible to target an element above the root of the component being themed ([87b6840](https://github.com/banquette/banquettejs/commit/87b68409caed8c0dce768643c05bc119f1d105cd))
* add support of draggable dialogs ([9108d9b](https://github.com/banquette/banquettejs/commit/9108d9bb05c83784fedfbf81e21e742dea943561))
* add support of Pojo created with Object.create(null) to isPojo() ([39eb335](https://github.com/banquette/banquettejs/commit/39eb33595353c5983170f92db9ef76a107129c9e))
* add support of props renaming using a new `name` option in the `@Prop` decorator ([a42f30f](https://github.com/banquette/banquettejs/commit/a42f30f1808b625043e5dd42dc27359abf91695d))
* add support of the `@ThemeVar` decorator ([e654d31](https://github.com/banquette/banquettejs/commit/e654d3148396906f52a1d0a4f6985f05c57560d8))
* add support of the `emits` option ([4198608](https://github.com/banquette/banquettejs/commit/41986088753b00fe64b1dc66239fb5fd28c046bc))
* add template inheritance support for components ([8c297e2](https://github.com/banquette/banquettejs/commit/8c297e21714660dbbd6f6f40b13665a0734da9bc))
* add the `@Render`, `@Provide` and `@InjectProvided` decorators + files reorganization ([700fa68](https://github.com/banquette/banquettejs/commit/700fa6872dd082a4baa85b8cc439da6fdeb2e8d4))
* add the `api` package ([442e4e5](https://github.com/banquette/banquettejs/commit/442e4e5f8d7e0a2d82383e44aa2b35c8fa3b225b))
* add the `blockquote`, `list-item`, `separator` and `text-align` modules ([c438b00](https://github.com/banquette/banquettejs/commit/c438b0078e860283f33862023b19142373fd735f))
* add the `bt-call` component ([f8564e2](https://github.com/banquette/banquettejs/commit/f8564e218b770ef02743b919fd6180eecd661228))
* add the `bt-form-file` component ([6c3af93](https://github.com/banquette/banquettejs/commit/6c3af9314944b34467c417c987ffd69be4cda6f9))
* add the `bt-form-tiptap` component ([bf3d27b](https://github.com/banquette/banquettejs/commit/bf3d27bf09d8578ef56e978176a815bc2c12d2f0))
* add the `bt-remote` component ([4104821](https://github.com/banquette/banquettejs/commit/41048215c6098f390da4c371db2d2111b643b298))
* add the `cloneDeepPrimitive` utility ([2b9dea3](https://github.com/banquette/banquettejs/commit/2b9dea3907ed61abbbe86760ddeece0e14e9ce33))
* add the `collapsable` component ([65a88d1](https://github.com/banquette/banquettejs/commit/65a88d1f230c5c72b48e10af21b11e9a5f88a455))
* add the `Complete` and `Modify` utility types ([0905fbf](https://github.com/banquette/banquettejs/commit/0905fbfe9a987fc0ddba7e6945c02b530f7a3211))
* add the `ensureInEnum` utility ([7a8f686](https://github.com/banquette/banquettejs/commit/7a8f6860bc2e52c36572dda91c849fe05d09bbb5))
* add the `EventPipeline` component (wip) ([9b7d57f](https://github.com/banquette/banquettejs/commit/9b7d57f84017d1e9bc2e048ff0c2e6f00e4dfbc8))
* add the `form` package ([b382928](https://github.com/banquette/banquettejs/commit/b382928fea9ad916ff1c793421e69903d99f5f9a))
* add the `getElementOffset` utility ([742a3be](https://github.com/banquette/banquettejs/commit/742a3be61041f3ffe5a631dc60b16f99a7eb67c8))
* add the `getViolationsStringsArray` utility method that flattens violations into an array of strings ([389b578](https://github.com/banquette/banquettejs/commit/389b578d049c7ea7da700420f1cf193555f11fbe))
* add the `insertInString` utility function ([853f8ef](https://github.com/banquette/banquettejs/commit/853f8efe4d21ab9660da839d46f881b4d69f4751))
* add the `model` package and its variants (`model-api`, `model-form` and `model-validation`) ([50bcd00](https://github.com/banquette/banquettejs/commit/50bcd00f37c9cc262df7e0e3560261ae7052907f))
* add the `object-observer` package ([fa88956](https://github.com/banquette/banquettejs/commit/fa8895685ef5bd5c747fa04b5ac40014cf4957da))
* add the `once` utility function ([74cfffa](https://github.com/banquette/banquettejs/commit/74cfffa320fd09c38c64d83bea76c493c60acc45))
* add the `parseCssDuration` and `addEventListener` utilities ([cae868b](https://github.com/banquette/banquettejs/commit/cae868b8ae3a6fbbb55739a96bbdc0e650bc8d30))
* add the `setIntervalWithTimeout` utility ([22d706b](https://github.com/banquette/banquettejs/commit/22d706b96dbf6e565682305d037dfaceddc85eba))
* add the `vue-form` package ([5712f34](https://github.com/banquette/banquettejs/commit/5712f3414cbd8f0c57ca7e714367aafb95558543))
* add the `vue-ui` package ([9463f2f](https://github.com/banquette/banquettejs/commit/9463f2f33d413e7df01592b87f51b67dbfe877e3))
* add the capability to filter subscribers when dispatching ([9207b85](https://github.com/banquette/banquettejs/commit/9207b856cd797586274153220500af8664ef1c48))
* add the capability to tag a request so emitted event can be easily filtered by subscribers ([3046441](https://github.com/banquette/banquettejs/commit/3046441f5925565f8bfc30c644c3606ea60bb7c9))
* add the core package ([593597d](https://github.com/banquette/banquettejs/commit/593597dfd3241b95dbaa17b3018f79c7e6fce7e8))
* add the dom-modules package ([5b1b4b9](https://github.com/banquette/banquettejs/commit/5b1b4b9ef653570046d1d8510ff1dc5c4fe38722))
* add the escapeRegex utility ([4bab226](https://github.com/banquette/banquettejs/commit/4bab226432fe2c034d9c92dabc2fa43652e47922))
* add the event package ([b25fdb3](https://github.com/banquette/banquettejs/commit/b25fdb34480a2fe540170c37188c555a1b4add5e))
* add the fingerprint package ([9032415](https://github.com/banquette/banquettejs/commit/90324159291473966601be40d68197a43cf29656))
* add the http package ([491634c](https://github.com/banquette/banquettejs/commit/491634caba15b0f891206399d197999e3717b3f2))
* add the isIterable utility ([025d334](https://github.com/banquette/banquettejs/commit/025d334fcc13ee149c0fcf2c2338c7af9e61276b))
* add the log package ([418a962](https://github.com/banquette/banquettejs/commit/418a96201f23e3ba7b493a05cf22431500d647b0))
* add the promise package ([5ea375f](https://github.com/banquette/banquettejs/commit/5ea375f9ffb9ba02ca82de0795c3e5a04210b98a))
* add the simple observable utility ([f55928b](https://github.com/banquette/banquettejs/commit/f55928b04131743280cb18c5f677348dbad404c8))
* add the storage package ([a7f13ce](https://github.com/banquette/banquettejs/commit/a7f13ce8fa8067557ea296455fafc798dfd57163))
* add the utils-base64 package ([58a57f8](https://github.com/banquette/banquettejs/commit/58a57f89e977c5f4364ccd5a8603d99a1ed0e938))
* add the utils-color package ([484b195](https://github.com/banquette/banquettejs/commit/484b195b61ee8034e5b67722f09a900bc6e4d5b1))
* add the utils-crypto package ([8823a46](https://github.com/banquette/banquettejs/commit/8823a46d7fe3c91dc8e0b6b5d4520124d2cbf743))
* add the utils-easing package ([a3e6b9c](https://github.com/banquette/banquettejs/commit/a3e6b9cacc03e0670ea9acbd1e0d4779ee43f86c))
* add the utils-json package ([6d4e83c](https://github.com/banquette/banquettejs/commit/6d4e83ce13dbf57609ecb68dcab2a6640d81f126))
* add the validation package ([12b576e](https://github.com/banquette/banquettejs/commit/12b576ed768c987d5027c749914160be0b63875f))
* add theming support for components ([826cb8a](https://github.com/banquette/banquettejs/commit/826cb8a3fa52f792123f1472865063f4a388cf6d))
* add utilities to work with scalars and compounds types ([6af540c](https://github.com/banquette/banquettejs/commit/6af540cba65c314b3a4067f1be81d07d670042ab))
* add utility functions to make an object reassignable ([0c3f1f8](https://github.com/banquette/banquettejs/commit/0c3f1f81abb7417995201d4238c4e0ac031c6870))
* add utility methods to easily assign errors to child components ([133cad9](https://github.com/banquette/banquettejs/commit/133cad9b6e1f8873e5c8488ab745c059bdeef834))
* api requests now support a different model for the request and the response ([ea4bb27](https://github.com/banquette/banquettejs/commit/ea4bb27e1a8d9d22857eaef9022bc710a14cafe4))
* automatically reassign to the Vue's proxy any ref with a reassignable proxy as value ([62f7f90](https://github.com/banquette/banquettejs/commit/62f7f902b80293b63640029100d8a3d9f734ac54))
* automatically resolves vue typescript instances when accessing templates refs set on components ([9b8a258](https://github.com/banquette/banquettejs/commit/9b8a2584637b0940bb177ccc4608418aa15cd559))
* css selectors can now define regexes and can be combined when used ([6cef0b3](https://github.com/banquette/banquettejs/commit/6cef0b36035680a88f5a50155e18c161d7360bc7))
* events can now optionally trigger on parent components ([0e72dec](https://github.com/banquette/banquettejs/commit/0e72dec6f546938ecae85010482324f46bfec5f6))
* expose a `refresh` method to `bt-remote` that allows the slot to redo the request ([eac4c90](https://github.com/banquette/banquettejs/commit/eac4c9086bf68e062942f7aa095954d45659cdf4))
* form text are now `clearable` ([ac5f9d7](https://github.com/banquette/banquettejs/commit/ac5f9d72a48820475fd5509998d90a51297cd00f))
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
* new `bt-tree` and `bt-form-tree` components + their headless view model ([73d703a](https://github.com/banquette/banquettejs/commit/73d703a314a58957787188234666132fa5f829e2))
* new utility to convert enums to arrays ([3a24521](https://github.com/banquette/banquettejs/commit/3a2452136966195f92470152cd225c66dfbac0e3))
* now `Transformable` is working on constructor parameters + add the `propertyDecorator` utility ([e437791](https://github.com/banquette/banquettejs/commit/e43779166ab455184208426a835f124495486f18))
* ObservablePromise now behave exactly like a promise, and supports async/await syntax. ([ddff7c2](https://github.com/banquette/banquettejs/commit/ddff7c254f2c65fd5c19e7d565197f0370774806))
* pagination/filtering/ordering of `bt-table` are now fully supported and can each be local or remote independently ([8065847](https://github.com/banquette/banquettejs/commit/8065847ee67f16ead8d0fa71467a81ba73845351))
* **promise:** add support of catchNotOf() which works the same as catchOf() but with inversed condition ([eff47fb](https://github.com/banquette/banquettejs/commit/eff47fb324d11795ec3a8fe5fa0f272d200f9b1c))
* **promise:** add support of catchOf() to limit catch to certain type of errors ([b6d20f5](https://github.com/banquette/banquettejs/commit/b6d20f57d8c12ed23c745c916d169beb1f925300))
* **promise:** make catchNotOf() allow for non object rejections. ([e6a7a70](https://github.com/banquette/banquettejs/commit/e6a7a70ac92368998d8cc05a7c83576c4ec45d37))
* refactoring or SimpleObservable ([73d3eba](https://github.com/banquette/banquettejs/commit/73d3eba9e07e9ac721557c823342955f9678d85f))
* rewrite on the trim utility and add ltrim and rtrim + tests ([ff0f8dc](https://github.com/banquette/banquettejs/commit/ff0f8dc9a0cfec5a3a6809d0b94505fb9b96a0a9))
* separate the `BindModel` event into two events: `BeforeBindModel` and `AfterBindModel` ([d3b09f5](https://github.com/banquette/banquettejs/commit/d3b09f58a75e9da071daad50321ca1abed49cd36))
* some refactoring and add the ability to use the observable as a promise ([ff96813](https://github.com/banquette/banquettejs/commit/ff96813365bc8b3b67091c529c1f6fb57d77d7e4))
* support pojo as load data with a model type defined ([9c9e9ee](https://github.com/banquette/banquettejs/commit/9c9e9ee7fd7ff6f1137c05aca20ee06853feb6c2))
* the `Primitive` transformer can take a different type depending on the transform direction ([cf91779](https://github.com/banquette/banquettejs/commit/cf917790bca5f035d0991f1e82c5d1e06465550c))
* the event dispatcher now always returns a synchronous result (DispatchResult) that can optionally contain a promise ([756ef68](https://github.com/banquette/banquettejs/commit/756ef68fbbaf664dca279ee43119b893a9a1289d))
* the event dispatcher now uses SimpleObservable instead of Promise ([6485be6](https://github.com/banquette/banquettejs/commit/6485be66d30bf027e59e97735b7e15587ddf1b5b))
* the storage can now emit events to notify of changes ([b64829f](https://github.com/banquette/banquettejs/commit/b64829f1d10cb27eee4b8a2ca456675be385c1b5))
* the variant matching now works on any prop ([63a12c9](https://github.com/banquette/banquettejs/commit/63a12c9d4fdf3447bdebc54d8d4c179341fd4c5c))
* theme class name is now automatically injector in themeable components' styles ([9d0fcc2](https://github.com/banquette/banquettejs/commit/9d0fcc2e483a26cb3c7e87cce81e13ec4d20ed06))
* url parameters are automatically inferred from the url when an endpoint is created ([ab27a11](https://github.com/banquette/banquettejs/commit/ab27a11a9caea79f82975cc69f6bd5b2e1973d2b))
* **utils-reflection:** add utility methods to get constructors arguments types and names ([f7a412f](https://github.com/banquette/banquettejs/commit/f7a412fe7482980385fdae00251b1d90742443f6))
* **utils:** add "isNonEmptyString" utility function and simplify "isEmptyString" ([aeaf976](https://github.com/banquette/banquettejs/commit/aeaf97625542e13c0bbe29feac89bd1e01523f32))
* variants can now match any html attribute ([802d9f5](https://github.com/banquette/banquettejs/commit/802d9f50585cda1e5b1c8d5a33dc18ed43e79507))


### BREAKING CHANGES

* `Max(10, 'string')` is now `Max(10, {treatAs: 'string'})`, same for `Min(...)`
* the `remote-model` prop is now `model`
* the events (`tabCreated`, `tabRemoved`, `focusChanged`) have been removed
* - `ApiEndpointStorage` is now `ApiEndpointStorageService`
- `SharedConfiguration` is now `ConfigurationService`
- `DomModulesScanner` is now `DomModulesScannerService`
- `bt-dropdown-divider` and `bt-dropdown-item` have been moved in their parent folder
- `BaseInputComponent` is now `BaseFormInputComponent`
- `TextComponent` is now `FormTextComponent`
- `SelectComponent` is now `FormSelectComponent`
- `HiddenComponent` is now `FormHiddenComponent`
- `TiptapConfigurationStorage` is now `TiptapConfigurationService`
- `FormStorage` is now `FormStorageService`
* components validators are now `.vue` files
* `v-model` is now `v-model:visible` to control the visibility
* `bt-collapsable` component is now `v-bt-collapsable` (directive)
* `target` prop has been renamed `allowed`
*  - `FormActionErrorEventArg` is now `ActionErrorEventArg`
 - `FormAfterPersistEventArg` is now `AfterPersistEventArg`
 - `FormAfterRemotePersistEventArg` is now `AfterRemotePersistEventArg`
 - `FormBeforePersistEventArg` is now `BeforePersistEventArg`
 - `ValidateSuccess` and `ValidateError` events have been replaced by `AfterValidate`
* `Remix` icons now have versions like `Material`. So `i-remix-home-fill` and `i-remix-home-line` are now both in `i-remix-home`, you can chose the version using the `version` prop: `<i-remix-home version="line"/>`.
* `v-model` becomes `v-model:data` to control the content of the tree
* `v-model` becomes `v-model:opened` to control the collapsed status
* `v-model` becomes `v-model:visible` to control the visibility of the alert
*  - `rawValue` has been renamed `originalValue`
 - the `root` slot has been removed, use the `node` slot instead with a test on `node.parent` to test for the root
* `humanFileSize` is now named `byteCountToHumanSize`, the signature and functionalities stay the same
* the popover's target is not resolved anymore, it will always be the parent DOM element.
* base input css variables are not duplicated in the concrete component anymore.
So to override a base input variable, instead of doing:

```
body {
    --bt-form-select-background-color: red;
}
```
override the base input variables in the correct context:
```
.bt-form-select {
    --bt-form-base-input-background-color: red;
}
```
* the `@Render()` callback doesn't take the component's instance as first parameter anymore, but as last.
* `areObjectsEqual` has been removed, use `areEqual` instead
* `BindModel` is now `AfterBindModel`
* Only primitive values are tested for equality. Objects are now always considered different to avoid recursively check the whole data structure.
* An object literal with a `then()` function is not detected as a promise anymore.
Only objects with `Promise` in their string representation are.
* `twoDigits(4)` is now `fixedDigits(4, 2)`
*  - `vue-icons` is now replaced by `vue-material-icons` and `vue-remix-icons`
 - the `icon` component is now in `vue-ui`
 - the `size` prop has been replaced by a `width` and `height` props
*  - all `icon-*` have been renamed `i-material-*`
 - all imports from `@banquette/vue-material-icons` are now from `@banquette/vue-icons/material`
* the signature of almost all decorators have changed
* validators' common options are now defined through an object (expect for `message`)
* the `bindingUpdated` hook is removed
* all props with `:` in their name have it replaced by `-`:
examples:
  - `remote:url` => `remote-url`
  - `remote:node-url-param` => `remote-node-url-param`
* - the default prefix doesn't use ':' anymore, but put the first letter of the prefixed attribute in uppercase instead
- the alias map doesn't exclude missing elements anymore, but include them with their original name instead
- the alias map accepts `false` as value to exclude the element
* `validate` option of `@Prop` is renamed `transform`
*  - `BeforeResponseEvent` is now used instead of `ResponseEvent` in `BeforeResponse` events,
 - `ResponseEvent` is now used instead of `RequestEvent` in `RequestSuccess` and `RequestFailure` events.
* `ModelChangeEvent` is now replaced with `MutationEvent`
*  - merge `choicesLabelProperty` and `choicesLabelPropertyExpr` into a single `choicesLabel`
 - rename `choicesIdentifierProperty` into `choicesIdentifier`
 - rename `choicesValueProperty` into `choicesValue`
 - rename `choicesDisabledProperty` into `choicesDisabled`
 - rename `choicesGroupProperty` into `choicesGroup`
* 'flatten' is now 'flattenObject'
* `once` renamed `oncePerCycleProxy`
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



