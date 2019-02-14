var ctx = document.getElementById("myChartVoorraden").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ["Proteïne", "Fruit", "Water", "Vezels", "Zuivel", "Groente"],
        datasets: [{
            label: 'Voedselvoorraad',
            data: [50, 45, 30, 25, 20, 15],
            backgroundColor: [
                'rgb(214, 238, 255, 0.5)',
                'rgb(63, 111, 145, 0.5)',
                'rgb(3, 94, 112, 0.5)',
                'rgb(158, 238, 255, 0.5)',
                'rgb(0, 144, 255, 0.5)',
                'rgb(7, 36, 58, 0.5)',
                'rgb(214, 238, 255, 0.5)'
            ],
            borderColor: [
                'rgb(0, 82, 136)',
                'rgb(0, 82, 136)',
                'rgb(0, 82, 136)',
                'rgb(0, 82, 136)',
                'rgb(0, 82, 136)',
                'rgb(0, 82, 136)',
                'rgb(0, 82, 136)'
            ],
            borderWidth: 1,
            hoverBorderColor: [
                'rgb(214, 238, 255, 0.5)',
                'rgb(63, 111, 145, 0.5)',
                'rgb(3, 94, 112, 0.5)',
                'rgb(158, 238, 255, 0.5)',
                'rgb(0, 144, 255, 0.5)',
                'rgb(7, 36, 58, 0.5)',
            ],
            hoverBorderWidth: 5

        }]
    },
    options: {
        cutoutPercentage: 35
        // scales: {
        //     yAxes: [{
        //         ticks: {
        //             beginAtZero:true
        //         }
        //     }]
        // }
    }
});