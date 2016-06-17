import { observable } from 'mobx';
import get from 'lodash/get';
import set from 'lodash/set';

function isValid(data, schema) {
    return true;
}

export default class Form {
    constructor(schema, data) {
        if (!isValid(data, schema)) {
            throw Error('data and schema are not compatible');
        }

        this.data = data;
        this.schema = schema;
    }

    @observable data = {};
    @observable schema = {};

    getIn(path) {
        return get(this.data, path);
    }

    setIn(path, value) {
        set(this.data, path, value);
    }
}
