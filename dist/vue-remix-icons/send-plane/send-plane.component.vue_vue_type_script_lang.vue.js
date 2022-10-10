/*!
 * Banquette VueRemixIcons v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { h } from 'vue';

var script = {
    name: 'i-remix-send-plane',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render: function render() {
        var w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
        if (v === 'line')
    { return h('svg',{"viewBox":c ? '1.55 2.27 20.22 20.19' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M1.923 9.37c-.51-.205-.504-.51.034-.689l19.086-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.475.553-.717.07L11 13 1.923 9.37zm4.89-.2 5.636 2.255 3.04 6.082 3.546-12.41L6.812 9.17z"},[])]); }
return h('svg',{"viewBox":c ? '1.55 2.27 20.21 20.18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"},[])]);
    }
};

export { script as default };
