import "./Head.css"
import { CChart } from '@coreui/react-chartjs'
function Progress(props) {


    return (
        <div>

            <div className='oneProgress'>
                <h5>KPI за 3 месяца: {props.KPIS[0].NewOneKPI}%</h5>
                <CChart
                    type="doughnut"
                    data={{
                        datasets: [
                            {
                                backgroundColor: ['#00D8FF', '#000000'],
                                data: [props.KPIS[0].NewOneKPI, 100 - props.KPIS[0].NewOneKPI],
                                radius: 40,
                                weight: 5

                            },
                        ],
                    }}
                />

            </div>
            <div className='twoProgress'>
                <h5>KPI за полугодие: {props.KPIS[0].NewTwoKPI}%</h5>
                <CChart
                    type="doughnut"
                    data={{
                        datasets: [
                            {
                                backgroundColor: ['#00D8FF', '#000000'],
                                data: [props.KPIS[0].NewTwoKPI, 100 - props.KPIS[0].NewTwoKPI],
                                radius: 40

                            },
                        ],
                    }}
                />

            </div>

        </div>
    );
}

export default Progress