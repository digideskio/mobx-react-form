import serializeTabs from './utils/serializeTabs';
import FormInterface from './FormInterface';

export default class GroupedForm extends FormInterface {
    constructor(schema, data = {}) {
        super();
        
        this.schema = schema;
        this.data = serializeTabs(schema, data);
    }
}
