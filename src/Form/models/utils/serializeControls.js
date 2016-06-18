import mapValues from 'lodash/mapValues';
import isArray from 'lodash/isArray';
import some from 'lodash/some';
import isString from 'lodash/isString';
import isObject from 'lodash/isObject';

export default function serializeControls(controls, data = {}) {
    return mapValues(controls, (control, cid) => {
        return transformers[control.type](control, data[cid]);
    });
}

const transformers = {
    text: stringControls,
    textarea: stringControls,
    'group-repeater': groupRepeaterControl
};

/**
 * if the groups var is not an array or some of the group is not an object
 * @param groups
 * @returns {boolean}
 */
function isArrayOfObjects(groups) {
    return !isArray(groups) || some(groups, group => !isObject(group));
}

function stringControls(config, value) {
    return isString(value) ? value : config.default;
}

function groupRepeaterControl(config, groups) {
    if (isArrayOfObjects(groups)) {
        return config.default;
    }

    return groups.map(group => {
        return mapValues(config.schema, (control, cid) => {
            return transformers[control.type](control, group[cid]);
        });
    });
}
