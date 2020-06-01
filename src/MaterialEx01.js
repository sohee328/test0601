import React from 'react';
import Button from '@material-ui/core/Button';

const MaterialEx01=()=>{
    return(
        <div>
            <Button variant="outlined">DEfault</Button>
            <Button variant="outlined" color="primary">Primary</Button>
            <Button variant="contained">Contained</Button>
            <Button variant="contained" disabled>Disabled</Button>
            <Button color="primary" href="#">Link</Button>
            <Button variant="outlined" color="secondary">Secondary</Button>

            <h3>Size</h3>
            <Button variant="outlined" color="primary" size="small">Primary small</Button><br/>
            <Button variant="outlined" color="primary" size="medium">Primary medium</Button><br/>
            <Button variant="outlined" color="primary" size="large">Primary large</Button><br/>
        </div>
    )
}

export default MaterialEx01;