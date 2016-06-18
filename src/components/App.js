import React, { Component } from 'react';
import { observer } from 'mobx-react';

import {
    FormModel,
    GroupedFormModel,
    FormComponent,
    GroupedFormComponent
} from '../Form';

const schema = {
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

function copy(object) {
    return JSON.parse(JSON.stringify(object));
}

const Pre = observer(({ data }) => {
    return <pre>{
        JSON.stringify(data, null, 2)
    }</pre>;
});

@observer
class App extends Component {
    state = {
        groupedForm: new GroupedFormModel(copy(schema)),
        form: new FormModel(copy(schema.tab1.controls))
    };

    render() {
        return (
            <div>
                <Pre data={this.state.groupedForm.data} />
                <Pre data={this.state.form.data} />

                <FormComponent form={this.state.form} />
                <br />
                <br />
                <br />
                <GroupedFormComponent form={this.state.groupedForm} />
            </div>
        );
    }
}

App.childContextTypes = {
    formGet: React.PropTypes.func,
    formSet: React.PropTypes.func
};

export default App;
