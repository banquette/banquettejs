<script>
import { h } from 'vue';
import { r } from "../utils.js";

export default /* @__PURE__ */ ((_) => {
    return r('coreos', {
        name: 'i-remix-coreos',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '1.97 1.99 20 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M9.42 4.4a8 8 0 1 0 10.202 9.91c-3.4 1.46-7.248 1.98-11.545 1.565-.711-4.126-.264-7.95 1.343-11.475zm2.448-.414a16.805 16.805 0 0 0-1.542 3.769 5.98 5.98 0 0 1 4.115 1.756 5.977 5.977 0 0 1 1.745 3.861c1.33-.341 2.589-.82 3.78-1.433a7.994 7.994 0 0 0-8.098-7.953zM4.895 19.057C.99 15.152.99 8.82 4.895 4.915c3.905-3.905 10.237-3.905 14.142 0 3.905 3.905 3.905 10.237 0 14.142-3.905 3.905-10.237 3.905-14.142 0zm5.02-9.293a17.885 17.885 0 0 0-.076 4.229 23.144 23.144 0 0 0 4.36-.22 3.988 3.988 0 0 0-1.172-2.848 3.99 3.99 0 0 0-3.112-1.161z"},[])]);
return h('svg',{"viewBox":c ? '2 2 20 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-3.671-9.696c-.04.85.037 1.697.118 2.544.005.06.027.074.08.08.406.054.813.102 1.222.127.964.061 1.928.139 2.896.085.55-.03 1.1-.048 1.648-.095a20.59 20.59 0 0 0 2.33-.312c.958-.194 1.907-.425 2.8-.845.406-.19.79-.415 1.114-.736.238-.235.408-.507.41-.86a8.92 8.92 0 0 0-.045-.94 9.022 9.022 0 0 0-.481-2.18c-.584-1.618-1.51-2.989-2.826-4.07a8.87 8.87 0 0 0-3.851-1.863c-.5-.105-1.006-.144-1.514-.18-.573-.041-1.064.12-1.488.514-.495.457-.837 1.024-1.122 1.633-.667 1.427-.973 2.954-1.166 4.508a15.215 15.215 0 0 0-.125 2.59zm3.57-5.03c.959.03 1.77.324 2.494.856a4.326 4.326 0 0 1 1.714 2.612c.068.304.097.612.103.922.005.209-.11.362-.262.49-.307.258-.67.401-1.05.508-.74.207-1.496.326-2.265.366-.5.026-1 .035-1.5.01-.192-.01-.385-.024-.577-.032-.06-.002-.08-.02-.084-.081-.023-.434-.057-.868-.05-1.302.016-1.026.094-2.045.397-3.034.1-.329.223-.65.42-.936.173-.25.378-.437.66-.38z"},[])]);
        }
    });
})();
</script>