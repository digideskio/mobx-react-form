import React, { Component } from 'react';
import { observer } from 'mobx-react';
import Tabs from './Tabs';

@observer
class GroupedForm extends Component {
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
                <Tabs tabs={form.schema} />
            </div>
        );
    }
}

GroupedForm.childContextTypes = {
    formGet: React.PropTypes.func,
    formSet: React.PropTypes.func
};

export default GroupedForm;
