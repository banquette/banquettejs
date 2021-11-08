import 'reflect-metadata';
import { Injector } from "@banquette/dependency-injection";
import {
    AdapterInterface,
    SynchronousAdapterInterface,
    StorageService,
    CookiesAdapter,
    LocalStorageAdapter
} from "../src";

test('default adapter (async)', async () => {
    const storage = Injector.Get<StorageService>(StorageService);
    await testAdapter(storage.getDefaultAdapter());
});

test('cookie adapter (async)', async () => {
    const storage = Injector.Get<StorageService>(StorageService);
    await testAdapter(storage.use(CookiesAdapter));
});

test('local storage adapter (async)', async () => {
    const storage = Injector.Get<StorageService>(StorageService);
    await testAdapter(storage.use(LocalStorageAdapter));
});

test('cookie adapter (sync)', () => {
    const storage = Injector.Get<StorageService>(StorageService);
    testAdapterSync(storage.use<CookiesAdapter>(CookiesAdapter));
});

test('local storage adapter (sync)',  () => {
    const storage = Injector.Get<StorageService>(StorageService);
    testAdapterSync(storage.use<LocalStorageAdapter>(LocalStorageAdapter));
});

async function testAdapter(adapter: AdapterInterface): Promise<void> {
    // Clear the storage
    await adapter.clear();
    expect((await adapter.keys()).length).toBe(0);

    // Test nonexistence of a value.
    expect(await adapter.get('test')).toBe(null);
    expect(await adapter.get('test', 'unknown')).toBe('unknown');

    // Set a string value and check it then
    await adapter.set('str', 'I\'m a string');
    expect(await adapter.get('str')).toBe('I\'m a string');

    // Set a float value and check it then
    await adapter.set('float', 14.5);
    expect(await adapter.get('float')).toBe(14.5);

    // Test boolean values
    await adapter.set('boolean', false);
    expect(await adapter.get('boolean')).toBe(false);
    await adapter.set('boolean', true);
    expect(await adapter.get('boolean')).toBe(true);
    await adapter.remove('boolean');
    expect(await adapter.get('boolean', 'missing')).toBe('missing');

    // Test objects
    await adapter.set('object', {value: 2});
    expect(await adapter.get('object')).toStrictEqual({value: 2});
    await adapter.set('object', {value: 2, fn: () => 2});
    expect(await adapter.get('object')).toStrictEqual({value: 2});
    await adapter.set('object', {str: 'str', number: 12.2, sub: ['a', {b: []}, true]});
    expect(await adapter.get('object')).toStrictEqual({str: 'str', number: 12.2, sub: ['a', {b: []}, true]});
}

function testAdapterSync(adapter: SynchronousAdapterInterface): void {
    // Clear the storage
    adapter.clearSync();
    expect((adapter.keysSync()).length).toBe(0);

    // Test nonexistence of a value.
    expect(adapter.getSync('test')).toBe(null);
    expect(adapter.getSync('test', 'unknown')).toBe('unknown');

    // Set a string value and check it then
    adapter.setSync('str', 'I\'m a string');
    expect(adapter.getSync('str')).toBe('I\'m a string');

    // Set a float value and check it then
    adapter.setSync('float', 14.5);
    expect(adapter.getSync('float')).toBe(14.5);

    // Test boolean values
    adapter.setSync('boolean', false);
    expect(adapter.getSync('boolean')).toBe(false);
    adapter.setSync('boolean', true);
    expect(adapter.getSync('boolean')).toBe(true);
    adapter.removeSync('boolean');
    expect(adapter.getSync('boolean', 'missing')).toBe('missing');

    // Test objects
    adapter.setSync('object', {value: 2});
    expect(adapter.getSync('object')).toStrictEqual({value: 2});
    adapter.setSync('object', {value: 2, fn: () => 2});
    expect(adapter.getSync('object')).toStrictEqual({value: 2});
    adapter.setSync('object', {str: 'str', number: 12.2, sub: ['a', {b: []}, true]});
    expect(adapter.getSync('object')).toStrictEqual({str: 'str', number: 12.2, sub: ['a', {b: []}, true]});
}
