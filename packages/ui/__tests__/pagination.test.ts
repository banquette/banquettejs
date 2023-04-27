import { Injector } from "@banquette/dependency-injection";
import { getObjectKeys } from "@banquette/utils-object";
import { PaginationStrategy } from "../src/table/pagination/constant";
import { PaginationModule } from "../src/table/pagination/pagination.module";

describe('Properties', () => {
    const pagination = Injector.Get(PaginationModule);
    const defaultValues: Partial<Record<keyof PaginationModule, any>> = {
        enabled: true,
        page: 1,
        pageId: null,
        itemsPerPage: 20,
        allowedItemsPerPage: [10, 20, 30, 50, 100],
        allowFirstPage: true,
        allowLastPage: true,
        allowPageInput: true,
        strategy: PaginationStrategy.Offset
    };

    test('defaultValues', () => {
        for (const key of getObjectKeys(defaultValues)) {
            expect(pagination[key]).toStrictEqual(defaultValues[key]);
        }
    });

    test('itemsPerPage', () => {
        const tests = [
            [-10, 10],
            [0, 10],
            [25, 20],
            [55, 50],
            [95, 100],
            [500, 100]
        ];
        for (const item of tests) {
            pagination.itemsPerPage = item[0];
            expect(pagination.itemsPerPage).toEqual(item[1]);
        }
        pagination.itemsPerPage = defaultValues.itemsPerPage;
    });
});
