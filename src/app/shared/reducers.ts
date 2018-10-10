import { Action, build } from '@caiu/library';

import { Config } from './models';

export class ConfigActions {
    static INITIALIZE = '[Config] Initialize Configuration';

    static initialize(config: Config): Action {
        return {
            type: ConfigActions.INITIALIZE,
            payload: config
        };
    }
}

export function configReducer(state: Config = new Config(), action: Action): Config {
    switch (action.type) {

        case ConfigActions.INITIALIZE:
            return build(Config, state, action.payload);

        default:
            return state;
    }
}
