import mapValues from 'lodash/mapValues';
import isArray from 'lodash/isArray';
import some from 'lodash/some';
import isString from 'lodash/isString';
import isObject from 'lodash/isObject';
import isUndefined from 'lodash/isUndefined';

export default function serializeControls(controls, data = {}) {
    return mapValues(controls, (control, cid) => {
        if (transformers[control.type]) {
            return transformers[control.type](control, data[cid]);
        }

        return data[cid];
    });
}

const transformers = {
    text: stringControls,
    textarea: stringControls,
    checkbox: booleanControls,
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

function booleanControls(config, value) {
    return isUndefined(value) ? config.default : Boolean(value);
}

function groupRepeaterControl(config, groups) {
    if (isArrayOfObjects(groups)) {
        return config.default;
    }

    return groups.map(group => {
        return mapValues(config.schema, (control, cid) => {
            if (this[control.type]) {
                return this[control.type](control, group[cid]);
            }

            return group[cid];
        });
    });
}
