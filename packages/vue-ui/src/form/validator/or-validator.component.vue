<script lang="ts">
import { Or } from "@banquette/validation/type/or";
import { Valid } from "@banquette/validation/type/valid";
import { ValidatorInterface } from "@banquette/validation/validator.interface";
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Render } from "@banquette/vue-typescript/decorator/render.decorator";
import { VNodeChild } from "@vue/runtime-core";
import { renderSlot } from "vue";
import { ContainerValidatorComponent } from "./container-validator.component";

@Component('bt-validate-or')
export default class ValidateOrComponent extends ContainerValidatorComponent {
    /**
     * @inheritDoc
     */
    protected buildValidator(): ValidatorInterface {
        const children: ValidatorInterface[] = this.children;
        if (children.length > 0) {
            return Or.apply(null, children);
        }
        return Valid();
    }

    @Render() public render(context: any): VNodeChild {
        return renderSlot(context.$slots, 'default');
    }
}
</script>
