<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixHandCoin = /* @__PURE__ */ ((_) => {
    return r('hand-coin', {
        name: 'i-remix-hand-coin',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '1 2 22.52 19' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M5 9a1 1 0 0 1 1 1 6.97 6.97 0 0 1 4.33 1.5h2.17c1.333 0 2.53.58 3.354 1.5H19a5 5 0 0 1 4.516 2.851C21.151 18.972 17.322 21 13 21c-2.79 0-5.15-.603-7.06-1.658A1 1 0 0 1 5 20H2a1 1 0 0 1-1-1v-9a1 1 0 0 1 1-1zm1.001 3L6 17.022l.045.032C7.84 18.314 10.178 19 13 19c3.004 0 5.799-1.156 7.835-3.13l.133-.133-.12-.1a3 3 0 0 0-1.643-.63L19 15h-2.111q.11.483.111 1v1H8v-2l6.79-.001-.034-.078a2.5 2.5 0 0 0-2.092-1.416L12.5 13.5H9.57A5 5 0 0 0 6.002 12zM4 11H3v7h1zm14-6a3 3 0 1 1 0 6 3 3 0 0 1 0-6m0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-7-5a3 3 0 1 1 0 6 3 3 0 0 1 0-6m0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2"},[])]);
return h('svg',{"viewBox":c ? '1 2 22.52 19' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M9.33 11.5h2.17A4.5 4.5 0 0 1 16 16H8.999L9 17h8v-1a5.6 5.6 0 0 0-.886-3H19a5 5 0 0 1 4.516 2.851C21.151 18.972 17.322 21 13 21c-2.761 0-5.1-.59-7-1.625v-9.304A6.97 6.97 0 0 1 9.33 11.5M5 19a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-9a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1zM18 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6m-7-3a3 3 0 1 1 0 6 3 3 0 0 1 0-6"},[])]);
        }
    });
})();

export default IRemixHandCoin;
</script>