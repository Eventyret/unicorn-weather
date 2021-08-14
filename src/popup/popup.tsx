import { Box, Grid, IconButton, InputBase, Paper } from '@material-ui/core';
import { Add as AddIcon } from '@material-ui/icons';
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './popup.css';
import '@fontsource/roboto';
import WeatherCard from './WeatherCard';

const App: React.FC<{}> = () => {
    const [cities, setCities] = useState<string[]>([
        'London',
        'Bournemouth',
    ]);

    const [cityInput, setCityInput] = useState<string>('');
    
    const handleCityButtonClick = (): void => {
        if (cityInput === '') return;
        setCities([...cities, cityInput]);
        setCityInput('');
    };
    const handlecityDeleteClick = (index: number): void => {
        cities.splice(index, 1);
        setCities([...cities]);
    };
    return (
        <Box mx={'8px'} my={'16px'}>
            <Grid container>
                <Grid item>
                    <Paper>
                        <Box px={'8px'} py={'16px'}>
                            <InputBase
                                placeholder="Add a city name"
                                value={cityInput}
                                onChange={(event) => setCityInput(event.target.value)}
                            />
                            <IconButton onClick={handleCityButtonClick}>
                                <AddIcon></AddIcon>
                            </IconButton>
                        </Box>
                    </Paper>
                </Grid>
            </Grid>
            {cities.map((city, index) => (
                <WeatherCard city={city} key={index} onDelete={() =>{}} />
            ))}
            <Box height="16px" />
        </Box>
    );
};

const root = document.createElement('div');
document.body.appendChild(root);
ReactDOM.render(<App />, root);
