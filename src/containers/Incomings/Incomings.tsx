// ------------------------------- NODE MODULES -------------------------------

import React, { useState, KeyboardEvent, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

// ------------------------------ CUSTOM MODULES ------------------------------

import classes from './Incomings.module.scss';
import { Incoming } from './Incoming/Incoming';
import { Button, FieldSet } from '../../ui';
import { Modal } from '../../components';
import { AppContext } from '../../contexts';

// -------------------------------- VARIABLES ---------------------------------

const exampleData = [
    {
        id: 1,
        userId: 1,
        amount: 1000.0,
        frequency: 'monthly',
        description: 'Salary',
        salary: false,
        startDate: new Date('2019-05-27T16:42:02.000Z'),
        createdAt: new Date('2019-05-27T16:43:35.000Z'),
        updatedAt: new Date('2019-05-27T16:43:35.000Z'),
    },
    {
        id: 2,
        userId: 1,
        amount: 550.5,
        frequency: 'monthly',
        description: 'Side job',
        salary: false,
        startDate: new Date('2019-05-27T16:42:02.000Z'),
        endDate: new Date('2020-05-27T16:42:02.000Z'),
        createdAt: new Date('2019-05-27T16:43:35.000Z'),
        updatedAt: new Date('2019-05-27T16:43:35.000Z'),
    },
];

// ----------------------------- FILE DEFINITION ------------------------------

export const Incomings = (): JSX.Element => {
    const [showModal, setShowModal] = useState(false);
    const { setLoading } = useContext(AppContext);

    const toggleModal = () => setShowModal(prevState => !prevState);

    const submitNewIncoming = () => {
        setLoading(true);

        setTimeout(() => {
            setShowModal(false);
            setLoading(false);
        }, 1000);
    };

    // const confirmDelete = (
    //     <form className={classes.DeleteModal}>
    //         <p>Are you sure you would like to remove this incoming?</p>
    //         <div className={classes.ButtonRow}>
    //             <Button invert>Yes</Button>
    //             <Button invert>No</Button>
    //         </div>
    //     </form>
    // );

    const isEnterPressed = (event: KeyboardEvent<HTMLDivElement>) => event.key === 'Enter';

    const newIncoming = (
        <div
            onKeyDown={event => (isEnterPressed(event) ? submitNewIncoming() : null)}
            className={classes.NewIncomingModal}
        >
            <FieldSet autoFocus invert placeholder="Value" value={100} onChange={() => {}} />
            <FieldSet invert placeholder="Description" value="Testing" onChange={() => {}} />
            <FieldSet invert placeholder="Start" type="Date" value="2019-01-01" onChange={() => {}} />
            <FieldSet invert placeholder="End" type="Date" value="2019-12-31" onChange={() => {}} />
            <div className={classes.ButtonRow}>
                <Button onClick={submitNewIncoming} invert>
                    Save
                </Button>
                <Button onClick={toggleModal} invert>
                    Cancel
                </Button>
            </div>
        </div>
    );

    return (
        <>
            <Modal shown={showModal} toggle={toggleModal}>
                {newIncoming}
            </Modal>
            <div className={classes.Incomings}>
                {exampleData.map(incoming => (
                    <Incoming key={incoming.id} {...incoming} />
                ))}
                <Button onClick={toggleModal}>
                    Add
                    <FontAwesomeIcon icon={faPlus} />
                </Button>
            </div>
        </>
    );
};
