import { observable, action } from 'mobx';
import get from 'lodash/get';
import set from 'lodash/set';

export default class Form {
    @observable data = {};
    @observable schema = {};

    getIn(path) {
        return get(this.data, path);
    }

    @action setIn(path, value) {
        set(this.data, path, value);
    }
}
