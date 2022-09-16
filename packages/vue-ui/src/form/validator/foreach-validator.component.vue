<script lang="ts">
import { UsageException } from "@banquette/exception/usage.exception";
import { Foreach } from "@banquette/validation/type/foreach";
import { Valid } from "@banquette/validation/type/valid";
import { ValidatorInterface } from "@banquette/validation/validator.interface";
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Render } from "@banquette/vue-typescript/decorator/render.decorator";
import { VNodeChild } from "@vue/runtime-core";
import { renderSlot } from "vue";
import { ContainerValidatorComponent } from "./container-validator.component";

@Component('bt-validate-foreach')
export default class ValidateForeachComponent extends ContainerValidatorComponent {
    /**
     * @inheritDoc
     */
    protected buildValidator(): ValidatorInterface {
        const children: ValidatorInterface[] = this.children;
        if (children.length > 1) {
            throw new UsageException(`"validate-foreach" can only have 1 child.`);
        }
        if (children.length > 0) {
            return Foreach(children[0]);
        }
        return Valid();
    }

    @Render() public render(context: any): VNodeChild {
        return renderSlot(context.$slots, 'default');
    }
}
</script>
