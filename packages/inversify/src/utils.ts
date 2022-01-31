import { Injector } from "@banquette/dependency-injection/injector";
import { Container } from "inversify";
import { InversifyAdapter } from "./injector";

/**
 * Use inversify as the dependency injection container for all tools.
 * You can give it an existing container so services will register onto it.
 */
export function useInversifyContainer(container?: Container): void {
    Injector.UseAdapter(new InversifyAdapter(container));
}
