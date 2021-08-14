import React, { useState } from 'react';
import '@fontsource/roboto';
import ReactDOM from 'react-dom';
import { Box, InputBase, IconButton, Paper, Grid } from '@material-ui/core';
import { Add as AddIcon } from '@material-ui/icons';
import WeatherCard from './WeatherCard';
import WeatherCardContainer from './WeatherCardContainer';
import './popup.css';

const App: React.FC<{}> = () => {
    const [cities, setCities] = useState<string[]>([
        'London',
        'Bournemouth',
        'Errori'
    ]);

    const [cityInput, setCityInput] = useState<string>('');
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
                            <IconButton>
                                <AddIcon></AddIcon>
                            </IconButton>
                        </Box>
                    </Paper>
                </Grid>
            </Grid>
            {cities.map((city, index) => (
                <WeatherCard city={city} key={index} />
            ))}
        </Box>
    );
};

const root = document.createElement('div');
document.body.appendChild(root);
ReactDOM.render(<App />, root);
