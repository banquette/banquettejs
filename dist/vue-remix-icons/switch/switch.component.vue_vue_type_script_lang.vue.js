/*!
 * Banquette VueRemixIcons v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { h } from 'vue';

var script = {
    name: 'i-remix-switch',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render: function render() {
        var w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
        if (v === 'line')
    { return h('svg',{"viewBox":c ? '3 3 18 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M12 3v18H7.6A4.6 4.6 0 0 1 3 16.4V7.6A4.6 4.6 0 0 1 7.6 3H12zm-2 2H7.6A2.6 2.6 0 0 0 5 7.6v8.8A2.6 2.6 0 0 0 7.6 19H10V5zm-2.5 5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zM14 3h2.4A4.6 4.6 0 0 1 21 7.6v8.8a4.6 4.6 0 0 1-4.6 4.6H14V3zm3 11.7a1.8 1.8 0 1 0 0-3.6 1.8 1.8 0 0 0 0 3.6z"},[])]); }
return h('svg',{"viewBox":c ? '3 3 18 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M13.619 21c-.085 0-.141-.057-.127-.127V3.127c0-.056.042-.113.113-.113h2.785A4.61 4.61 0 0 1 21 7.624v8.766A4.61 4.61 0 0 1 16.39 21h-2.77zm3.422-9.926c-1.004 0-1.824.82-1.824 1.824s.82 1.824 1.824 1.824 1.824-.82 1.824-1.824-.82-1.824-1.824-1.824zM5.8 8.4a1.7 1.7 0 0 1 1.696-1.696A1.7 1.7 0 0 1 9.193 8.4c0 .934-.763 1.697-1.697 1.697A1.702 1.702 0 0 1 5.8 8.401zM11.54 3c.085 0 .142.057.128.127V20.86c0 .07-.057.127-.128.127H7.61A4.61 4.61 0 0 1 3 16.376V7.61A4.61 4.61 0 0 1 7.61 3h3.93zm-1.315 16.544V4.442H7.61c-.849 0-1.64.34-2.235.933a3.088 3.088 0 0 0-.933 2.235v8.766c0 .849.34 1.64.933 2.234a3.088 3.088 0 0 0 2.235.934h2.615z"},[])]);
    }
};

export { script as default };
