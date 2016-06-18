import { observable, action } from 'mobx';
import get from 'lodash/get';
import set from 'lodash/set';
import serializeTabs from './utils/serializeTabs';

export default class Form {
    @observable data = {};
    @observable schema = {};

    constructor(schema, data = {}) {
        this.schema = schema;
        this.data = serializeTabs(schema, data);
    }

    getIn(path) {
        return get(this.data, path);
    }

    @action setIn(path, value) {
        set(this.data, path, value);
    }
}
