import 'reflect-metadata';
import { ControlsViewsTestsConfigs } from "./controls-views-test-configs/controls-views-tests-configs";

// The outer describe is only here so the IDE sees there are tests in the file...
describe('Testing components\' view', () => {
    for (const suite of ControlsViewsTestsConfigs) {
        describe(suite.name, () => {
            for (const testItem of suite.tests) {
                test(testItem.name, async () => {
                    /**
                     * TODO: investigate
                     * Test failing, probably because of a bug in the "components" option.
                     */
                    // const wrapper = mount(suite.component, testItem.props || {});
                    // await nextTick();
                    // VTest.CreateAndAssign(testItem.v, wrapper);
                    // if (isFunction(testItem.check)) {
                    //     testItem.check.apply(this, [wrapper as any])
                    // }
                });
            }
        });
    }
});
