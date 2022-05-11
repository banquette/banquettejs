import { UsageException } from "@banquette/exception/usage.exception";
import { enumToArray } from "@banquette/utils-array/enum-to-array";
import { ensureString } from "@banquette/utils-type/ensure-string";
import { IsType, Type } from "@banquette/validation/type/is-type";
import { ValidatorInterface } from "@banquette/validation/validator.interface";
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";
import { ValidatorComponent } from "./validator.component";

@Component({name: 'bt-validate-is-type', template: false})
export default class ValidateIsTypeComponent extends ValidatorComponent {
    @Prop({type: String, required: true, transform: (value: any) => {
        if (enumToArray(Type).indexOf(value) < 0) {
            throw new UsageException(`Invalid type "${ensureString(value)}", should be one of: ${enumToArray(Type).join(',')}.`);
        }
    }}) public target!: Type;

    /**
     * @inheritDoc
     */
    protected buildValidator(): ValidatorInterface {
        return IsType(this.target, {message: this.message, type: this.type, tags: this.tags, groups: this.groups});
    }
}
