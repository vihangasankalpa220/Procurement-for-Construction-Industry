import React from "react";
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBAnimation
} from "mdbreact";
import SectionContainer from "../../components/sectionContainer";
import {Bar} from "react-chartjs-2";
// barChart
const dataBar = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
        {
            label: "#1",
            data: [12, 39, 3, 50, 2, 32, 84],
            backgroundColor: "rgba(245, 74, 85, 0.5)",
            borderWidth: 1
        },
        {
            label: "#2",
            data: [56, 24, 5, 16, 45, 24, 8],
            backgroundColor: "rgba(90, 173, 246, 0.5)",
            borderWidth: 1
        },
        {
            label: "#3",
            data: [12, 25, 54, 3, 15, 44, 3],
            backgroundColor: "rgba(245, 192, 50, 0.5)",
            borderWidth: 1
        }
    ]
};
const barChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
        xAxes: [
            {
                barPercentage: 1,
                gridLines: {
                    display: true,
                    color: "rgba(0, 0, 0, 0.1)"
                }
            }
        ],
        yAxes: [
            {
                gridLines: {
                    display: true,
                    color: "rgba(0, 0, 0, 0.1)"
                },
                ticks: {
                    beginAtZero: true
                }
            }
        ]
    }
};

const VendorDashboard = () => {
    return (
        <>
            <MDBContainer className="mt-5">
                <MDBAnimation type="zoomIn" duration="500ms">
                    <MDBContainer>
                        <MDBRow>
                            <MDBCol md="12" className="mx-auto">
                                <SectionContainer header="Dashboard">
                                    <Bar data={dataBar} options={barChartOptions} />
                                </SectionContainer>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                </MDBAnimation>
            </MDBContainer>
        </>
    );
};

export default VendorDashboard;
