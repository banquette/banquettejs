import { Compose } from "@banquette/validation/type/compose";
import { Valid } from "@banquette/validation/type/valid";
import { ValidatorInterface } from "@banquette/validation/validator.interface";
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Render } from "@banquette/vue-typescript/decorator/render.decorator";
import { VNodeChild } from "@vue/runtime-core";
import { renderSlot } from "vue";
import { ContainerValidatorComponent } from "./container-validator.component";

@Component('bt-validate-compose')
export default class ValidateComposeComponent extends ContainerValidatorComponent {
    /**
     * @inheritDoc
     */
    protected buildValidator(): ValidatorInterface {
        const children: ValidatorInterface[] = this.children;
        if (children.length > 0) {
            return Compose.apply(null, children);
        }
        return Valid();
    }

    @Render() public render(context: any): VNodeChild {
        return renderSlot(context.$slots, 'default');
    }
}
