import React, { useState } from 'react';

import { Container } from './styles'

const ToggleSwitch: React.FC = () => {
    // eslint-disable-next-line
    const [isChecked, setChecked] = useState(false);

    const handleCheck = () => {
        setChecked((prevState) => !prevState);
    }

    return (
        <Container>

            <input type="checkbox" onClick={handleCheck} />
            <span />


        </Container>

    );
}

export default ToggleSwitch;
