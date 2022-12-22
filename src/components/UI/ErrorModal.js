import React from 'react';
import Button from './Button';
import Card from './Card';

import classes from './ErrorModal.module.css';

const ErrorModal = (props) => {
    const { title, message, onConfirm } = props;
    return (
        <div>
            <div className={classes.backdrop} onClick={onConfirm} />
            <Card className={classes.modal}>
                <header className={classes.header}>
                    <h1>{title}</h1>
                </header>
                <div className={classes.content}>
                    <p>{message}</p>
                </div>
                <footer className={classes.actions}>
                    <Button onClick={onConfirm}>Okey</Button>
                </footer>
            </Card>
        </div>
    );
};

export default ErrorModal;
