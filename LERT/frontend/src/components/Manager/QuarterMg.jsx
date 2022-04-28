import * as React from 'react';
import {
    Chart,
    BarSeries,
    ArgumentAxis,
    ValueAxis,
} from '@devexpress/dx-react-chart-material-ui';
import { Animation } from '@devexpress/dx-react-chart';
import { Typography, Box } from '@mui/material';

const data = [
    { quarter: 'Q1', cost: 2500 },
    { quarter: 'Q2', cost: 3018 },
    { quarter: 'Q3', cost: 5682 },
    { quarter: 'Q4', cost: 7440 },
];

export class QuarterMg extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            data,
        };
    }

    render() {
        const { data: chartData } = this.state;

        return (
            <Box sx={{ background: 'white' }}>
                <Typography
                    component="h1"
                    variant="h3"
                    sx={{
                        marginLeft: 10,
                        paddingTop: 3,
                        paddingBottom: 3,
                        fontWeight: 'Bold',
                    }}
                >
                    Table per Quarter
                </Typography>

                <Box
                    sx={{
                        width: 1050,
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        background: 'white',
                    }}
                >
                    <Chart data={chartData}>
                        <ArgumentAxis />
                        <ValueAxis max={9000} />

                        <BarSeries
                            color="#0F62FE"
                            valueField="cost"
                            argumentField="quarter"
                        />
                        <Animation />
                    </Chart>

                    <Typography
                        component="h1"
                        variant="h5"
                        sx={{
                            paddingTop: 3,
                            paddingBottom: 3,
                            fontWeight: 'Bold',
                            textAlign: 'center',
                        }}
                    >
                        Quarters
                    </Typography>
                </Box>
            </Box>
        );
    }
}
