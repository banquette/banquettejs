# [0.2.0](https://github.com/banquette/banquettejs/compare/v0.1.0...v0.2.0) (2022-03-07)


### Bug Fixes

* allow configuration changes to be processed even if already working ([b18d3e0](https://github.com/banquette/banquettejs/commit/b18d3e0895c9f8b9029badd8053f13ca65c87c9c))
* prevent infinite recursion when there is a circular dependency on relations ([8897b6b](https://github.com/banquette/banquettejs/commit/8897b6bf3916bbd1db15ef9149fbceaae94fb6df))
* remove the vue proxy before binding it to the form, so the watcher proxy is inside the vue proxy, otherwise vue will remove it when setting the value ([fde1384](https://github.com/banquette/banquettejs/commit/fde13844afe910f9a63f2ed8d94dc1630c5a7fe6))


### Features

* `flatten` utility now supports depth control (min or max) ([153eaf9](https://github.com/banquette/banquettejs/commit/153eaf9a4b0e64c173bc52cdabdce9246b9044b0))
* add a `tiptap` ui component (wip) ([1c25f58](https://github.com/banquette/banquettejs/commit/1c25f5801aabf409b94e5e76d4e4954ed4d8c99c))
* add the `bt-remote` component ([4104821](https://github.com/banquette/banquettejs/commit/41048215c6098f390da4c371db2d2111b643b298))
* add the `object-observer` package ([fa88956](https://github.com/banquette/banquettejs/commit/fa8895685ef5bd5c747fa04b5ac40014cf4957da))



