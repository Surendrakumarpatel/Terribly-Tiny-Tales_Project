
# Terribly-Tiny-Tales Projects
[Live Project Link](https://frequencyapp.netlify.app/)

 
# Histogram Component
This is a React component that fetches text data from a URL, performs word frequency analysis, and displays the results as a histogram using ApexCharts. It also allows exporting the histogram data as a CSV file.

## Installation
 
1. Install the required dependencies by running the following command:
```bash
npm install axios react-apexcharts react-csv @mui/material
```
# Usage
Import the Histogram component in our React component file:
```bash 
import Histogram from './Histogram';
```
Use the Histogram component in our React component's render method:
```bash
function App() {
  return (
    <div>
      <Histogram />
    </div>
  );
}
```
# Functionality
The **Histogram** component provides the following functionality:

* When the "Submit" button is clicked, it fetches text data from the URL https://www.terriblytinytales.com/test.txt.
* The fetched text data is converted to lowercase and split into words.
* Word frequencies are calculated by counting the occurrences of each word.
* The top 20 most frequent words are selected and sorted in descending order.
* The chartOptions state variable is updated with the necessary configuration for ApexCharts to display a bar chart.
* The csvData state variable is updated with an array of objects containing the label-value pairs for each word frequency.
* The chartOptions and csvData are used to render the histogram chart and the "Export" button.
* Clicking the "Export" button allows downloading the histogram data as a CSV file named "histogram.csv".
# Dependencies
The **Histogram** component uses the following dependencies:

* `axios:` For making HTTP requests to fetch the text data.
* `react-apexcharts:` For rendering the histogram chart.
* `react-csv:` For exporting the histogram data as a CSV file.
* `@mui/material:` For styling the "Submit" and "Export" buttons.
 
 
## Hosting on Netlify:

I deployed my project on Netlify.

