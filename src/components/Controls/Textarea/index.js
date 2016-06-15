import React, { Component } from 'react';
import { observer } from 'mobx-react';

@observer
class Textarea extends Component {
    render() {
        const { config, path, formGet, formSet } = this.props;

        return (
            <div>
                <label htmlFor={this.id}>{config.label}</label>
                <textarea
                    id={this.id}
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
