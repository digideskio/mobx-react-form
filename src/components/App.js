import React, { Component } from 'react';
import { observer } from 'mobx-react';

import { FormModel, FormComponent } from '../Form';

const data = {
    tab1: {
        title: 'hello world',
        description: 'this is a revolution',
        slides: [
            {title: 'slide1 title', description: 'slide1 description'},
            {title: 'slide2 title', description: 'slide2 description'}
        ]
    }
};

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

@observer
class App extends Component {
    state = {
        form: new FormModel(schema, data)
    };

    renderData = () => {
        return <pre>{
            JSON.stringify(this.state.form.data, null, 2)
        }</pre>;
    };

    render() {
        return (
            <div>
                {this.renderData()}

                <FormComponent form={this.state.form} />
            </div>
        );
    }
}

App.childContextTypes = {
    formGet: React.PropTypes.func,
    formSet: React.PropTypes.func
};

export default App;
