import { Injector } from "@banquette/dependency-injection/injector";
import { TableViewModel } from "../src";

describe('Columns', () => {
    const vm = Injector.Get(TableViewModel);

    beforeEach(() => {
        vm.clearColumns();
    });

    test('Default values', () => {
        const column = vm.addColumn({title: 'a'});
        expect(column).toMatchObject({
            id: expect.any(String),
            title: 'a',
            orderingName: null,
            orderingStatus: null,
            visible: true
        });
    });

    test('Add a column', () => {
        expect(vm.columns.length).toEqual(0);
        vm.addColumn({title: 'a'});
        expect(vm.columns.length).toEqual(1);
        expect(vm.columns[0].title).toEqual('a');
    });

    test('Add a column by name only', () => {
        vm.addColumn('Test');
        expect(vm.columns.length).toEqual(1);
        expect(vm.columns[0].title).toEqual('Test');
    });

    test('Remove a column by ref', () => {
        const column = vm.addColumn({title: 'a'});
        vm.removeColumn(column);
        expect(vm.columns.length).toEqual(0);
    });

    test('Remove a column by id', () => {
        const column = vm.addColumn({title: 'a'});
        vm.removeColumn(column.id);
        expect(vm.columns.length).toEqual(0);
    });

    test('Hide a column', () => {
        vm.addColumn({title: 'a'});
        vm.addColumn({title: 'b'});
        expect(vm.visibleColumns.length).toEqual(2);
        vm.hideColumn(vm.columns[1]);
        expect(vm.visibleColumns.length).toEqual(1);
    });

    test('Hide and show a column', () => {
        vm.addColumn({id: 'a', title: 'a'});
        vm.addColumn({id: 'b', title: 'b'});
        vm.hideColumn(vm.columns[1]);
        vm.showColumn('b')
        expect(vm.visibleColumns.length).toEqual(2);
    });
});
