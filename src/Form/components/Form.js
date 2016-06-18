import React, { Component } from 'react';
import { observer } from 'mobx-react';
import Controls from './Controls';

@observer
class Form extends Component {
    getChildContext() {
        const { form } = this.props;

        return {
            formGet: path => form.getIn(path),
            formSet: (path, value) => form.setIn(path, value)
        };
    }

    render() {
        const { form } = this.props;

        return (
            <div className="form">
                <Controls controls={form.schema} />
            </div>
        );
    }
}

Form.childContextTypes = {
    formGet: React.PropTypes.func,
    formSet: React.PropTypes.func
};

export default Form;
