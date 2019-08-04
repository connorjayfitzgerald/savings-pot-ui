// ------------------------------- NODE MODULES -------------------------------

import React, { ChangeEvent, Dispatch, useEffect } from 'react';

// ------------------------------ CUSTOM MODULES ------------------------------

import { FieldSet } from '../FieldSet/FieldSet';
import { isEnterPressed } from '../../utils';

// -------------------------------- VARIABLES ---------------------------------

type ValidatorFunction = (prevState: FormState, newValue: string | number) => boolean;

interface FormItem {
    validator?: ValidatorFunction;
    invert?: boolean;
    autoFocus?: boolean;
    placeholder: string;
    type?: string;
    initialValue?: string | number;
    monitors?: string[];
}

export interface FormFields {
    [key: string]: FormItem;
}

export interface FormState {
    [key: string]: {
        value: string | number;
        valid: boolean;
        validator?: ValidatorFunction;
        touched: boolean;
        placeholder: string;
        type?: string;
        monitors?: string[];
    };
}

interface FormData {
    valid: boolean;
    fields: FormState;
}

interface FormProps {
    fields: FormFields;
    data: FormData;
    setter: Dispatch<React.SetStateAction<FormData>>;
    onSubmit: () => void;
    invert?: boolean;
    className?: string;
    children?: any;
}

// ----------------------------- FILE DEFINITION ------------------------------

const createInitialState = (fields: FormFields): FormState => {
    const fieldKeys = Reflect.ownKeys(fields).map(key => String(key));

    const state: FormState = {};

    fieldKeys.forEach(key => {
        const { validator, placeholder, initialValue, type, monitors } = fields[key];

        let valid = true;

        if (validator && !validator(state, initialValue || '')) {
            valid = false;
        }

        state[key] = {
            value: initialValue || '',
            valid,
            validator,
            touched: initialValue || !validator ? true : false,
            placeholder,
            type,
            monitors,
        };
    });

    return state;
};

export const Form = (props: FormProps): JSX.Element => {
    useEffect(() => {
        props.setter(prevState => ({
            ...prevState,
            fields: createInitialState(props.fields),
        }));
    }, [props.fields]);

    const fieldKeys = Reflect.ownKeys(props.data.fields).map(key => String(key));

    const createChangeHandler = (key: string) => (event: ChangeEvent<HTMLInputElement>): void => {
        const newValue = event.currentTarget.value;

        props.setter(prevState => {
            const { validator, monitors } = prevState.fields[key];

            const valid = validator ? validator(prevState.fields, newValue) : true;

            const updatedFields = {
                [key]: {
                    ...prevState.fields[key],
                    valid,
                    value: newValue as string | number,
                    touched: true,
                },
            };

            if (monitors && monitors.length > 0) {
                monitors.forEach(monitor => {
                    const fieldToMonitor = prevState.fields[monitor];

                    updatedFields[monitor] = {
                        ...fieldToMonitor,
                        valid: fieldToMonitor.validator
                            ? fieldToMonitor.validator(updatedFields, fieldToMonitor.value)
                            : true,
                        touched: true,
                    };
                });
            }

            const newState = {
                fields: {
                    ...prevState.fields,
                    ...updatedFields,
                },
                valid: false,
            };

            newState.valid = fieldKeys.every(key => {
                const formItem = newState.fields[key];

                return formItem.touched && formItem.valid;
            });

            return newState;
        });
    };

    return (
        <div onKeyDown={event => (isEnterPressed(event) ? props.onSubmit() : null)} className={props.className}>
            {fieldKeys.map(key => {
                const { placeholder, value, valid, type, touched } = props.data.fields[key];

                return (
                    <FieldSet
                        key={key}
                        placeholder={placeholder}
                        invalid={!valid && touched}
                        value={value}
                        onChange={createChangeHandler(key)}
                        type={type}
                        invert={props.invert}
                    />
                );
            })}
            {props.children}
        </div>
    );
};
