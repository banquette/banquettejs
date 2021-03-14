/**
 * Extensions of the Object interface.
 * Here are regrouped all utilities directly integrated to the Object prototype.
 */
if (!Object.keys) {
    Object.keys = (obj: any) => {
        const keys: any[] = [];
        for (const k in obj) {
            if (obj.hasOwnProperty(k)) {
                keys.push(k);
            }
        }
        return keys;
    };
}

export {}
