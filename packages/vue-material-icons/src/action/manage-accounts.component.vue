<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IMaterialManageAccounts = /* @__PURE__ */ ((_) => {
    return r('manage-accounts', {
        name: 'i-material-manage-accounts',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'twotone')
    return h('svg',{"viewBox":c ? '2 4 19.83 17' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('circle',{"cx":"10","cy":"8",r:"2","opacity":"0.3"},[]),h('path',{d:"M10 16c0-.34.03-.67.08-.99-.03-.01-.05-.01-.08-.01-1.97 0-3.9.53-5.59 1.54-.25.14-.41.46-.41.81V18h6.29c-.19-.63-.29-1.3-.29-2","opacity":"0.3"},[]),h('path',{d:"M4 18v-.65c0-.34.16-.66.41-.81C6.1 15.53 8.03 15 10 15c.03 0 .05 0 .08.01.1-.7.3-1.37.59-1.98-.22-.02-.44-.03-.67-.03-2.42 0-4.68.67-6.61 1.82-.88.52-1.39 1.5-1.39 2.53V20h9.26c-.42-.6-.75-1.28-.97-2zm6-6c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4m0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2m10.83 6.63-1.45.49q-.48-.405-1.08-.63L18 11h-2l-.3 1.49q-.6.225-1.08.63l-1.45-.49-1 1.73 1.14 1c-.03.21-.06.41-.06.63s.03.42.06.63l-1.14 1 1 1.73 1.45-.49q.48.405 1.08.63L16 21h2l.3-1.49q.6-.225 1.08-.63l1.45.49 1-1.73-1.14-1c.03-.21.06-.41.06-.63s-.03-.42-.06-.63l1.14-1zM17 18c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2"},[])]);
if (v === 'sharp')
    return h('svg',{"viewBox":c ? '2 4 19.83 17' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M10.67 13.02c-.22-.01-.44-.02-.67-.02-2.42 0-4.68.67-6.61 1.82-.88.52-1.39 1.5-1.39 2.53V20h9.26a6.96 6.96 0 0 1-.59-6.98"},[]),h('circle',{"cx":"10","cy":"8",r:"4"},[]),h('path',{d:"M20.75 16c0-.22-.03-.42-.06-.63l1.14-1.01-1-1.73-1.45.49q-.48-.405-1.08-.63L18 11h-2l-.3 1.49q-.6.225-1.08.63l-1.45-.49-1 1.73 1.14 1.01c-.03.21-.06.41-.06.63s.03.42.06.63l-1.14 1.01 1 1.73 1.45-.49q.48.405 1.08.63L16 21h2l.3-1.49q.6-.225 1.08-.63l1.45.49 1-1.73-1.14-1.01c.03-.21.06-.41.06-.63M17 18c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '2 4 19.7 16.99' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M10.67 13.02c-.22-.01-.44-.02-.67-.02-2.42 0-4.68.67-6.61 1.82-.88.52-1.39 1.5-1.39 2.53V19c0 .55.45 1 1 1h8.26a6.96 6.96 0 0 1-.59-6.98"},[]),h('circle',{"cx":"10","cy":"8",r:"4"},[]),h('path',{d:"M20.75 16c0-.22-.03-.42-.06-.63l.84-.73c.18-.16.22-.42.1-.63l-.59-1.02a.49.49 0 0 0-.59-.22l-1.06.36q-.48-.405-1.08-.63l-.22-1.09a.5.5 0 0 0-.49-.4h-1.18c-.24 0-.44.17-.49.4l-.22 1.09q-.6.225-1.08.63l-1.06-.36a.496.496 0 0 0-.59.22l-.59 1.02c-.12.21-.08.47.1.63l.84.73c-.03.21-.06.41-.06.63s.03.42.06.63l-.84.73c-.18.16-.22.42-.1.63l.59 1.02c.12.21.37.3.59.22l1.06-.36q.48.405 1.08.63l.22 1.09c.05.23.25.4.49.4h1.18c.24 0 .44-.17.49-.4l.22-1.09q.6-.225 1.08-.63l1.06.36c.23.08.47-.02.59-.22l.59-1.02c.12-.21.08-.47-.1-.63l-.84-.73c.03-.21.06-.41.06-.63M17 18c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2"},[])]);
if (v === 'outlined')
    return h('svg',{"viewBox":c ? '2 4 19.83 17' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M4 18v-.65c0-.34.16-.66.41-.81C6.1 15.53 8.03 15 10 15c.03 0 .05 0 .08.01.1-.7.3-1.37.59-1.98-.22-.02-.44-.03-.67-.03-2.42 0-4.68.67-6.61 1.82-.88.52-1.39 1.5-1.39 2.53V20h9.26c-.42-.6-.75-1.28-.97-2zm6-6c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4m0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2m10.75 10c0-.22-.03-.42-.06-.63l1.14-1.01-1-1.73-1.45.49q-.48-.405-1.08-.63L18 11h-2l-.3 1.49q-.6.225-1.08.63l-1.45-.49-1 1.73 1.14 1.01c-.03.21-.06.41-.06.63s.03.42.06.63l-1.14 1.01 1 1.73 1.45-.49q.48.405 1.08.63L16 21h2l.3-1.49q.6-.225 1.08-.63l1.45.49 1-1.73-1.14-1.01c.03-.21.06-.41.06-.63M17 18c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2"},[])]);
return h('svg',{"viewBox":c ? '2 4 19.83 17' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('circle',{"cx":"10","cy":"8",r:"4"},[]),h('path',{d:"M10.67 13.02c-.22-.01-.44-.02-.67-.02-2.42 0-4.68.67-6.61 1.82-.88.52-1.39 1.5-1.39 2.53V20h9.26a6.96 6.96 0 0 1-.59-6.98M20.75 16c0-.22-.03-.42-.06-.63l1.14-1.01-1-1.73-1.45.49q-.48-.405-1.08-.63L18 11h-2l-.3 1.49q-.6.225-1.08.63l-1.45-.49-1 1.73 1.14 1.01c-.03.21-.06.41-.06.63s.03.42.06.63l-1.14 1.01 1 1.73 1.45-.49q.48.405 1.08.63L16 21h2l.3-1.49q.6-.225 1.08-.63l1.45.49 1-1.73-1.14-1.01c.03-.21.06-.41.06-.63M17 18c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2"},[])]);
        }
    });
})();

export default IMaterialManageAccounts;
</script>