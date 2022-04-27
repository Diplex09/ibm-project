import * as React from 'react';
import Paper from '@mui/material/Paper';
import {
    Chart,
    BarSeries,
    Title,
    ArgumentAxis,
    ValueAxis,
} from '@devexpress/dx-react-chart-material-ui';
import { Animation } from '@devexpress/dx-react-chart';

const data = [
    { year: 'Q1', population: 2500 },
    { year: 'Q2', population: 3018 },
    { year: 'Q3', population: 5682 },
    { year: 'Q4', population: 7440 },
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
            <Paper>
                <Chart data={chartData}>
                    <ArgumentAxis />
                    <ValueAxis max={9000} />

                    <BarSeries valueField="population" argumentField="year" />

                    <Title text="Table Per Quarter" />
                    <Animation />
                </Chart>
            </Paper>
        );
    }
}
