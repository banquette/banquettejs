<script lang="ts">
import { And } from "@banquette/validation/type/and";
import { Valid } from "@banquette/validation/type/valid";
import { ValidatorInterface } from "@banquette/validation/validator.interface";
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Render } from "@banquette/vue-typescript/decorator/render.decorator";
import { VNodeChild } from "@vue/runtime-core";
import { renderSlot } from "vue";
import { ContainerValidatorComponent } from "./container-validator.component";

@Component('bt-validate-and')
export default class ValidateAndComponent extends ContainerValidatorComponent {
    /**
     * @inheritDoc
     */
    protected buildValidator(): ValidatorInterface {
        const children: ValidatorInterface[] = this.children;
        if (children.length > 0) {
            return And.apply(null, children);
        }
        return Valid();
    }

    @Render() public render(context: any): VNodeChild {
        return renderSlot(context.$slots, 'default');
    }
}
</script>
