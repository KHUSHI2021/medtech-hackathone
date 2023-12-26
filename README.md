<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="service.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/3.6.2/chart.min.js"></script>
    <title>Health Data Visualization</title>
</head>

<body>
    <!-- First Row for Measurement -->
    <div class="row">
        <div class="column">
            <div class="Monitoring-container">
                <div class="Monitoring-label">Temperature Monitoring(°F)</div>
                <div2 class="Monitoring-item">Temperature: <span id="temperature-level">--</span></div2>
                <button class="start-button">Start Button</button>
            </div>
        </div>
        <div class="column">
            <div class="Monitoring-container">
                <div class="Monitoring-label">Heart Rate Monitoring(BPM)</div>
                <div1 class="Monitoring-item">Heart Rate: <span id="heart-rate-level">--</span></div1>
                <button class="start-button">Start Button</button>
            </div>
        </div>
        <div class="column">
            <div class="Monitoring-container">
                <div class="Monitoring-label">Electrolyte Levels Monitoring (mmole/L)</div>
                <div class="Monitoring-item sodium">Sodium: <span id="sodium-level">--</span></div>
                <div class="Monitoring-item potassium">Potassium: <span id="potassium-level">--</span></div>
                <div class="Monitoring-item chloride">Chloride: <span id="chloride-level">--</span></div>
                <button class="start-button">Start Button</button>
            </div>
        </div>
    </div>

    <!-- Second Row for Charts -->
    <div class="row">
        <div class="column">
            <div class="chart-container">
                <div class="chart" id="temperature-chart">
                    <h2>Temperature(°F)</h2>
                    <canvas id="myChart4" width="400" height="300"></canvas>
                </div>
            </div>
        </div>
        <div class="column">
            <div class="chart-container">
                <div class="chart" id="heart-rate-chart">
                    <h2>Heart Rate (BPM)</h2>
                    <canvas id="myChart3" width="400" height="300"></canvas>
                </div>
            </div>
        </div>
        <div class="column">
            <div class="chart-container">
                <div class="chart" id="ion-electrolyte-chart">
                    <h2>Ion Electrolyte</h2>
                    <canvas id="myChart" width="400" height="300"></canvas>
                </div>
            </div>
        </div>
    </div>
    <script src="service.js"></script>
</body>

</html>
