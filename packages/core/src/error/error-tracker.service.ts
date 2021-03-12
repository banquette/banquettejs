import { injectable } from "inversify";
import { Injector } from "../injector";

@injectable()
export class ErrorTrackerService {
    /**
     * Watch for all uncaught exceptions and log them using the LoggerService.
     * If a server configuration is available, logs may get uploaded to the server.
     */
    public watch(): void {
        window.addEventListener('error', (event: ErrorEvent) => {
            // Ignore errors from cross origin scripts as we can't get an details about them anyway.
            // @see https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onerror#notes
            if (event.message.toLowerCase().indexOf('script error') > -1) {
                return ;
            }

        });

        // window.onerror = function (msg: Event|string, url?: string, lineNo?: number, columnNo?: number, error?: Error) {
        //     var string = msg.toLowerCase();
        //     var substring = "script error";
        //     if (string.indexOf(substring) > -1){
        //         alert('Script Error: See Browser Console for Detail');
        //     } else {
        //         var message = [
        //             'Message: ' + msg,
        //             'URL: ' + url,
        //             'Line: ' + lineNo,
        //             'Column: ' + columnNo,
        //             'Error object: ' + JSON.stringify(error)
        //         ].join(' - ');
        //
        //         alert(message);
        //     }
        //
        //     return false;
        // };
    }
}

export const ErrorTrackerServiceSymbol = Symbol('ErrorTrackerService');
Injector.RegisterService(ErrorTrackerServiceSymbol, ErrorTrackerService);
