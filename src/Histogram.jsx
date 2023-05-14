import React, { useState } from 'react';
import axios from 'axios';
import Chart from 'react-apexcharts';
import { CSVLink } from 'react-csv';
import Button from '@mui/material/Button';

const Histogram = () => {
    const [chartOptions, setChartOptions] = useState(null);
    const [csvData, setCsvData] = useState(null);

    const fetchData = async () => {
        const response = await axios.get('https://www.terriblytinytales.com/test.txt');
        const text = response.data.toLowerCase();
        const words = text.split(/\s+/);

        const frequencies = {};

        for (let i = 0; i < words.length; i++) {
            const word = words[i];
            if (frequencies[word] === undefined) {
                frequencies[word] = 1;
            } else {
                frequencies[word]++;
            }
        }

        const sortedFrequencies = Object.entries(frequencies).sort((a, b) => b[1] - a[1]).slice(0, 20);
        console.log(sortedFrequencies);
        const labels = sortedFrequencies.map(([word, ]) => word); // counting the first item of touples
        const values = sortedFrequencies.map(([, count]) => count); //  counting the second item of the touple
        console.log(labels, values);
        setChartOptions({
            chart: {
                type: 'bar',
                height: 400,
            },
            series: [{ data: values }],
            xaxis: {
                categories: labels,
            },
            yaxis: {
                title: {
                    text: 'Frequency',
                },
            },
        });

        setCsvData(labels.map((label, index) => ({ label, value: values[index] })));
    };

    return (
        <div>
            <Button onClick={fetchData} variant="contained">Submit</Button>
            {chartOptions && (
                <>
                    <Chart options={chartOptions} series={chartOptions.series} type="bar" height={400} />
                    <Button variant="contained" color="success"><CSVLink style={{ color: "#fff", textDecoration: "none" }} data={csvData} filename={'histogram.csv'}>Export</CSVLink></Button>
                </>
            )}
        </div>
    );
};

export default Histogram;