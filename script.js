// script.js
document.addEventListener("DOMContentLoaded", () => {
    const ctx = document.getElementById("myChart").getContext("2d");
    new Chart(ctx, {
        type: "line",
        data: {
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
            datasets: [
                {
                    label: "Vendas Mensais",
                    data: [1200, 1900, 3000, 5000, 2300, 4000],
                    borderColor: "#6200ea",
                    backgroundColor: "rgba(98, 0, 234, 0.1)",
                    fill: true,
                },
            ],
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: false,
                    position: "top",
                },
            },
        },
    });
});
