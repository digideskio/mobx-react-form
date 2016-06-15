import React, { Component } from 'react';
import { observer } from 'mobx-react';

@observer
class Provider extends Component {
    getChildContext() {
        const { store } = this.props;
        return { store };
    }

    render() {
        return React.cloneElement(this.props.children, { store });
    }
}

Provider.propTypes = {
    store: React.PropTypes.object
};

Provider.childContextTypes = {
    store: React.PropTypes.object
};

export default Provider;
