import { Action } from '@caiu/library';

import { Docs } from './docs.model';

export class DocsActions {
    static LOAD = '[Docs] LOAD';
}

export function docsReducer(state: Docs = new Docs(), action: Action): Docs {
    switch (action.type) {

        case DocsActions.LOAD:
            console.dir(action.payload);
            return state;

        default:
            return state;
    }
}
