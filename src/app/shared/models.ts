export class Config {
    dev?= false;
    test?= false;
    staging?= false;
    production = false;
    apiBase = '';
    token = '';
}

export class Image {
    id = 0;
    src = '';
}

export class DialogAction {
    label = '';
    value: any = {};
}
