// ------------------------------- NODE MODULES -------------------------------

import React, { useContext, useState, FormEvent, MouseEvent } from 'react';
import { isISO8601 } from 'validator';

// ------------------------------ CUSTOM MODULES ------------------------------

import classes from './NewIncoming.module.scss';
import { Button } from '../../../ui';
import { Modal } from '../../../components';
import { AppContext } from '../../../contexts';
import { Form, FormFields, FormState } from '../../../ui/Form/Form';

// -------------------------------- VARIABLES ---------------------------------

const fields: FormFields = {
    value: {
        type: 'number',
        placeholder: 'Value',
        initialValue: 1,
        validator: (prevState, newValue) => newValue > 0,
    },
    description: {
        placeholder: 'Description',
    },
    startDate: {
        type: 'date',
        placeholder: 'Start',
        validator: (prevState, newValue) => isISO8601(`${newValue}`, { strict: true }),
    },
    endDate: {
        type: 'date',
        placeholder: 'End',
        validator: (prevState, newValue) => isISO8601(`${newValue}`, { strict: true }),
    },
};

// ----------------------------- FILE DEFINITION ------------------------------

interface NewIncomingProps {
    shown: boolean;
    toggle: () => void;
}

export const NewIncoming = (props: NewIncomingProps): JSX.Element => {
    const { setLoading } = useContext(AppContext);

    const submitNewIncoming = (event?: MouseEvent<HTMLButtonElement>) => {
        if (event) event.preventDefault();

        setLoading(true);

        setTimeout(() => {
            props.toggle();
            setLoading(false);
        }, 1000);
    };

    const [form, setForm] = useState({
        valid: false,
        fields: ({} as unknown) as FormState,
    });

    return (
        <Modal shown={props.shown} toggle={props.toggle}>
            <Form invert onSubmit={submitNewIncoming} data={form} setter={setForm} fields={fields}>
                <div className={classes.ButtonRow}>
                    <Button disabled={!form.valid} onClick={submitNewIncoming} invert>
                        Save
                    </Button>
                    <Button onClick={props.toggle} invert>
                        Cancel
                    </Button>
                </div>
            </Form>
        </Modal>
    );
};
