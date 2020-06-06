export const planetChartData2 = {
    type: 'line',
    name: 'Darstellung 2',
    data: {
        labels: ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus'],
        datasets: [
            { // one line graph
                label: 'Number of Moons',
                type: 'line',
                data: [0, 0, 1, 2, 67, 62, 27],
                backgroundColor: 'rgba(200,0,0,.5)', // Red
                borderColor: '#36495d',
                borderWidth: 3
            },
            { // another line graph
                label: 'Planet Mass (x1,000 km)',
                type: 'line',
                data: [4.8, 12.1, 12.7, 6.7, 139.8, 116.4, 50.7],
                backgroundColor: 'rgba(0, 200,0,.5)', // Green
                borderColor: '#47b784',
                borderWidth: 3
            }
        ]
    },
    options: {
        responsive: true,
        lineTension: 1,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                    padding: 25,
                }
            }]
        }
    }
}

export default planetChartData2;