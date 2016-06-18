import serializeControls from './utils/serializeControls';
import FormInterface from './FormInterface';

export default class Form extends FormInterface {
    constructor(schema, data = {}) {
        super();

        this.schema = schema;
        this.data = serializeControls(schema, data);
    }
}
