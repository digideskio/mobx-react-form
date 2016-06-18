import React, { Component } from 'react';
import { observer } from 'mobx-react';

import { GroupedFormModel, GroupedFormComponent } from '../Form';

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
        form: new GroupedFormModel(schema)
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

                <GroupedFormComponent form={this.state.form} />
            </div>
        );
    }
}

App.childContextTypes = {
    formGet: React.PropTypes.func,
    formSet: React.PropTypes.func
};

export default App;
