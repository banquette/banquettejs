/*!
 * Banquette VueRemixIcons v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { h } from 'vue';

var script = {
    name: 'i-remix-vimeo',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render: function render() {
        var w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
        if (v === 'line')
    { return h('svg',{"viewBox":c ? '0.83 3 21.17 18.47' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M17.993 3.004c2.433 0 4.005 1.512 4.005 4.496 0 1.72-.998 3.94-1.832 5.235-2.789 4.333-6.233 8.74-9.643 8.74-3.706 0-4.67-6.831-5.092-8.432-.422-1.601-.533-2.21-1.17-3.233-.317.22-.76.529-1.33.93a.5.5 0 0 1-.693-.117L.925 8.807a.5.5 0 0 1 .027-.62C3.779 4.915 6.128 3.278 8 3.278c2.392 0 3.124 2.816 3.324 4.223.3 2.117.69 4.738 1.244 5.872.557-.792 2.18-2.888 1.967-3.99-.094-.486-1.317.183-1.887.078-.425-.08-.806-.402-.806-1.026 0-1.31 1.852-5.43 6.151-5.43zm.007 2c-2.195 0-3.251 1.533-3.653 2.208 1.25.046 1.97.818 2.133 1.803.389 2.33-1.916 4.92-2.339 5.565-.396.603-3.061 3.328-4.25-3.36a160.44 160.44 0 0 1-.665-4.186c-.17-1.151-.873-1.763-1.23-1.763-.842 0-1.92.65-3.855 2.515 1.905-.115 2.545 2.276 2.916 3.633.816 2.984 1.571 8.056 3.62 8.056 1.727 0 4.439-2.646 7.37-7.04.209-.311 1.966-3.024 1.966-5.036 0-2.395-1.469-2.395-2.013-2.395z"},[])]); }
return h('svg',{"viewBox":c ? '1 3 21 18.21' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M1.173 8.301c-.281-.413-.252-.413.328-.922 1.232-1.082 2.394-2.266 3.736-3.212 1.215-.852 2.826-1.402 3.927-.047 1.014 1.249 1.038 3.142 1.295 4.65.257 1.564.503 3.164 1.051 4.66.152.421.443 1.217.968 1.284.678.093 1.368-1.096 1.683-1.54.817-1.18 1.925-2.769 1.785-4.286-.138-1.612-1.878-1.309-2.966-.924.175-1.809 1.858-3.843 3.48-4.53 1.72-.714 4.276-.702 5.14 1.237.923 2.102.093 4.543-.912 6.448-1.097 2.068-2.509 3.982-4.018 5.77-1.331 1.588-2.906 3.33-4.89 4.089-2.267.864-3.61-.82-4.382-2.77-.843-2.123-1.262-4.506-1.87-6.717-.256-.934-.56-1.997-1.167-2.768-.792-.995-1.692-.06-2.474.477-.269-.267-.491-.607-.714-.899z"},[])]);
    }
};

export { script as default };
