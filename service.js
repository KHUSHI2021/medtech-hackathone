
let isMonitoring = false;
let intervalId;

// Temperature measurement
document.querySelectorAll('.start-button')[0].addEventListener("click", function () {
    if (!isMonitoring) {
        isMeasuring = true;
        document.querySelectorAll('.start-button')[0].innerText = "Stop Monitoring";
        startTemperatureMonitoring();
    } else {
        isMonitoring = false;
        document.querySelectorAll('.start-button')[0].innerText = "Start Monitoring";
        stopMonitoring();
    }
});

// Heart rate measurement
document.querySelectorAll('.start-button')[1].addEventListener("click", function () {
    if (!isMonitoring) {
        isMonitoring = true;
        document.querySelectorAll('.start-button')[1].innerText = "Stop Monitoring";
        startHeartRateMonitoring();
    } else {
        isMonitoring = false;
        document.querySelectorAll('.start-button')[1].innerText = "Start Monitoring";
        stopMonitoring();
    }
});

// Electrolyte levels measurement
document.querySelectorAll('.start-button')[2].addEventListener("click", function () {
    if (!isMonitoring) {
        isMonitoring = true;
        document.querySelectorAll('.start-button')[2].innerText = "Stop Monitoring";
        startElectrolyteMonitoring();
    } else {
        isMonitoring = false;
        document.querySelectorAll('.start-button')[2].innerText = "Start Monitoring";
        stopMonitoring();
    }
});

function startTemperatureMonitoring() {
    intervalId = setInterval(function () {
        const temperature = (Math.random() * (25 - 18) + 18).toFixed(2);
        document.getElementById("temperature-level").textContent = temperature + "°C";
    }, 2000);
}

function startHeartRateMonitoring() {
    intervalId = setInterval(function () {
        const heartRate = Math.floor(Math.random() * (100 - 60 + 1)) + 60;
        document.getElementById("heart-rate-level").textContent = heartRate;
    }, 2000);
}

function startElectrolyteMonitoring() {
    intervalId = setInterval(function () {
        const sodiumLevel = (Math.random() * 10 + 135).toFixed(2);
        const potassiumLevel = (Math.random() * 2 + 3.5).toFixed(2);
        const chlorideLevel = (Math.random() * 5 + 95).toFixed(2);

        document.getElementById("sodium-level").textContent = sodiumLevel;
        document.getElementById("potassium-level").textContent = potassiumLevel;
        document.getElementById("chloride-level").textContent = chlorideLevel;
    }, 2000);
}

function stopMonitoring() {
    clearInterval(intervalId);
}


var ctx4 = document.getElementById('myChart4').getContext('2d');
var data4 = {
    labels: ['0', '1', '2', '3', '4', '5', '6'], // x-axis labels in hours
    datasets: [
        {
            label: 'Temperature (°F)',
            data: [98.6, 99.0, 99.4, 99.8, 100.2, 100.6, 101.0],
            borderColor: 'orange',
            borderWidth: 3,
            fill: false
        }
    ]
};
var myChart4 = new Chart(ctx4, {
    type: 'line',
    data: data4,
    options: {
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Temperature (°F)',
                    color: 'black', // Change title text color to white
                    font: {
                        weight: 'bold' // Make the title text bold
                    }
                },
                ticks: {
                    color: 'black', // Change y-axis label text color to white
                    font: {
                        weight: 'bold' // Make y-axis label text bold
                    }
                },
            },
            x: {
                title: {
                    display: true,
                    text: 'Time (hours)',
                    color: 'black', // Change title text color to white
                    font: {
                        weight: 'bold' // Make the title text bold
                    }
                },
                ticks: {
                    color: 'black', // Change y-axis label text color to white
                    font: {
                        weight: 'bold' // Make y-axis label text bold
                    }
                },
            },
        },
        responsive: true,
        plugins: {
            legend: {
                labels: {
                    color: 'black', // Change legend text color to white
                    font: {
                        weight: 'bold' // Make legend text bold
                    }
                }
            }
        }

    },
});

// JavaScript code for the heart rate chart
var ctx3 = document.getElementById('myChart3').getContext('2d');
var data3 = {
    labels: ['0', '1', '2', '3', '4', '5', '6'], // x-axis labels in hours
    datasets: [
        {
            label: 'Heart rate (beats per minute)',
            data: [72, 75, 78, 81, 84, 87, 90],
            borderColor: 'purple',
            fill: false
        }
    ]
};
var myChart3 = new Chart(ctx3, {
    type: 'line',
    data: data3,
    options: {
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Heart rate (bpm)',
                    color: 'black', // Change title text color to white
                    font: {
                        weight: 'bold' // Make the title text bold
                    }
                },
                ticks: {
                    color: 'black', // Change y-axis label text color to white
                    font: {
                        weight: 'bold' // Make y-axis label text bold
                    }
                },
            },
            x: {
                title: {
                    display: true,
                    text: 'Time (hours)',
                    color: 'black', // Change title text color to white
                    font: {
                        weight: 'bold' // Make the title text bold
                    }
                },
                ticks: {
                    color: 'black', // Change y-axis label text color to white
                    font: {
                        weight: 'bold' // Make y-axis label text bold
                    }
                },
            },
        },
        responsive: true,
        plugins: {
            legend: {
                labels: {
                    color: 'black', // Change legend text color to white
                    font: {
                        weight: 'bold' // Make legend text bold
                    }
                }
            }
        }

    },
});

// JavaScript code for the ion electrolyte chart
var ctx = document.getElementById('myChart').getContext('2d');
var data = {
    labels: ['0', '30', '60', '90', '120', '150', '180'],
    // x-axis labels in minutes
    datasets: [
        {
            label: 'Sodium (mmol/L)',
            data: [140, 142, 141, 139, 138, 137, 136],
            borderColor: 'blue',
            fill: false
        },
        {
            label: 'Potassium (mmol/L)',
            data: [4.0, 4.2, 4.1, 3.9, 3.8, 3.7, 3.6],
            borderColor: 'red',
            fill: false
        },
        {
            label: 'Chloride (mmol/L)',
            data: [103, 104, 105, 102, 101, 100, 99],
            borderColor: 'green',
            fill: false
        }
    ]
};
var myChart = new Chart(ctx, {
    type: 'line',
    data: data,
    options: {
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Electrolyte level (mmol/L)',
                    color: 'black', // Change title text color to white
                    font: {
                        weight: 'bold' // Make the title text bold
                    }
                },
                ticks: {
                    color: 'black', // Change y-axis label text color to white
                    font: {
                        weight: 'bold' // Make y-axis label text bold
                    }
                },
            },
            x: {
                title: {
                    display: true,
                    text: 'Time (minutes)',
                    color: 'black', // Change title text color to white
                    font: {
                        weight: 'bold' // Make the title text bold
                    }
                },
                ticks: {
                    color: 'black', // Change y-axis label text color to white
                    font: {
                        weight: 'bold' // Make y-axis label text bold
                    }
                },
            },
        },
        responsive: true,
        plugins: {
            legend: {
                labels: {
                    color: 'black', // Change legend text color to white
                    font: {
                        weight: 'bold' // Make legend text bold
                    }
                }
            }
        }

    },
});
