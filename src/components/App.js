import React, { Component } from 'react';
import { observer } from 'mobx-react';
import Tabs from './Tabs';

@observer
class App extends Component {
    getChildContext() {
        const { store } = this.props;

        return {
            formGet: path => store.form.getIn(path),
            formSet: (path, value) => store.form.setIn(path, value)
        };
    }

    render() {
        console.log('app render..');
        const { store } = this.props;

        return (
            <div>
                <Tabs tabs={store.form.schema} />
            </div>
        );
    }
}

App.childContextTypes = {
    formGet: React.PropTypes.func,
    formSet: React.PropTypes.func
};

export default App;
