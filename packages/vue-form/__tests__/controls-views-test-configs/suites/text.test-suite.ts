import TextComponent from "../../../src/component/text/text.component";
import { ControlViewTestSuiteInterface } from "../control-view-test-suite.interface";
import { VueWrapper } from "@vue/test-utils";

interface TextAutocompletePlugin {
    search: string;
}

interface TextViewDataInterface {
    help: string;
    multiline: boolean;
    plugins: {
        autocomplete: TextAutocompletePlugin
    }
}

export const TextTestSuite: ControlViewTestSuiteInterface<TextViewDataInterface> = {
    name: 'Text',
    component: TextComponent,
    tests: [
        {
            name: 'Is disabled',
            v: {
                disabled: true,
                help: '',
                plugins: {
                    autocomplete: {
                        search: ''
                    }
                }
            },
            // @ts-ignore
            check: (wrapper: VueWrapper<TextComponent>) => {
                expect(wrapper.find('[data-control]').attributes('disabled')).toBe(true);
            }
        },
        {
            name: 'Is valid',
            v: {valid: true}
        },
        {
            name: 'Is invalid',
            v: {invalid: true}
        },
        {
            name: 'Is busy',
            v: {busy: true}
        },
        {
            name: 'Has focus',
            v: {focused: true}
        },
        {
            name: 'Has default value',
            v: {}
        },
        {
            name: 'Has value',
            v: {}
        },
        {
            name: 'Value changed',
            v: {changed: true}
        },
        {
            name: 'Is valid',
            v: {valid: true}
        },
    ]
};
