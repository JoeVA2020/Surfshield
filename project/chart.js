// Make sure to include the CanvasJS library in your HTML file
// <script src="https://canvasjs.com/assets/script/canvasjs.min.js"></script>

document.addEventListener("DOMContentLoaded", function() {
    // Create the chart container
    var chartContainer = document.createElement('div');
    chartContainer.id = 'chartContainer';
    chartContainer.style.height = '300px';
    chartContainer.style.width = '100%';
    
    // Append the chart container to the body (you can change the container as needed)
    document.body.appendChild(chartContainer);
    
    // Create a new CanvasJS chart
    var chart = new CanvasJS.Chart('chartContainer', {
        theme: "light2", // You can change the theme to other available themes (light1, dark1, dark2)
        title: {
            text: "Horizontal Bar Chart Example"
        },
        axisX: {
            title: "Values"
        },
        axisY: {
            title: "Categories",
            reversed: true // This will flip the Y-axis so bars start from the bottom
        },
        data: [{
            type: "bar", // Set the chart type to 'bar' for a horizontal bar chart
            dataPoints: [
                { y: 40, label: "Category 1" },
                { y: 60, label: "Category 2" },
                { y: 80, label: "Category 3" },
                { y: 100, label: "Category 4" }
            ]
        }]
    });
    
    // Render the chart
    chart.render();
});
