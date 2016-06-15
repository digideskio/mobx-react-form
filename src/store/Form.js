import { observable } from 'mobx';
import get from 'lodash/get';
import set from 'lodash/set';

export default class Form {
    getIn(path) {
        return get(this.data, path);
    }

    setIn(path, value) {
        set(this.data, path, value);
    }

    @observable data = {
        tab1: {
            title: 'hello world',
            description: 'this is a revolution',
            slides: [
                {title: 'slide1 title', description: 'slide1 description'},
                {title: 'slide2 title', description: 'slide2 description'}
            ]
        }
    };

    @observable schema = {
        tab1: {
            label: 'Tab 1',
            controls: {
                title: { label: 'Title', type: 'text', default: '' },
                description: { label: 'Description', type: 'textarea', default: '' },
                slides: {
                    label: 'Slides',
                    type: 'group-repeater',
                    default: [
                        { title: 'slide 1 title', 'description': 'slide 1 desc' }
                    ],
                    schema: {
                        title: { label: 'Title', type: 'text', default: '' },
                        description: { label: 'Description', type: 'textarea', default: '' }
                    }
                }
            }
        }
    };
}
