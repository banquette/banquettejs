import { Injector, throttle } from "@banquette/core";
import { inject, injectable } from "inversify";
import { DomModule } from "../dom-module";
import { DomModulesScanner, DomModulesScannerSymbol } from "../dom-modules-scanner";

@injectable()
class Watcher extends DomModule {
    private scanner: DomModulesScanner;
    private observer: MutationObserver|null ;

    public constructor(@inject(DomModulesScannerSymbol) scanner: DomModulesScanner) {
        super();
        this.scanner = scanner;
        this.observer = null;
    }

    /**
     * @inheritDoc
     */
    protected bind(): any {
        super.bind();
        this.observer = new MutationObserver(throttle(() => {
            this.scanner.scan();
        }, 500));
        this.observer.observe(this.element, {
            childList: true,
            attributes: false,
            subtree: true
        });
    }

    /**
     * @inheritDoc
     */
    public unbind(): void {
        super.unbind();
        if (this.observer !== null) {
            this.observer.disconnect();
        }
    }
}
export const WatcherSymbol = Symbol("Watcher");
Injector.RegisterModule(WatcherSymbol, Watcher);
