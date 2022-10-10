/*!
 * Banquette Inversify v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { Injector } from '@banquette/dependency-injection/injector';
import { InversifyAdapter } from './injector.js';

/**
 * Use inversify as the dependency injection container for all tools.
 * You can give it an existing container so services will register onto it.
 */
function useInversifyContainer(container) {
    Injector.UseAdapter(new InversifyAdapter(container));
}

export { useInversifyContainer };
