import React, { Component } from 'react';
import { observer } from 'mobx-react';

@observer
class Textarea extends Component {
    render() {
        const { config, path, formGet, formSet } = this.props;

        return (
            <div>
                <label htmlFor={path}>{config.label}</label>
                <textarea
                    id={path}
                    value={formGet(path)}
                    onChange={e => formSet(path, e.target.value)}
                />
            </div>
        );
    }
}

Textarea.propTypes = {};
Textarea.defaultProps = {};

export default Textarea;
