import styled from "styled-components";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);
function MyPageChart(){
 const data={
  labels: ['Thing 1', 'Thing 2', 'Thing 3', 'Thing 4', 'Thing 5', 'Thing 6'],
  datasets: [
    {
      label: '',
      data: [2, 9, 3, 5, 2, 3],
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 1,
    },
  ],
 }
    return(
        <UserStatistics>
        <img src="/img/user.png" alt="" />
        <div>
        <Radar data={data}/>
        </div>
      </UserStatistics>
    )
}
export default MyPageChart;

let UserStatistics=styled.div`
box-shadow: 0px 8px 5px rgba(0, 0, 0, 0.2), 0 2px 2px rgba(0, 0, 0, 0.02);
margin-top: 50px;
display: flex;
justify-content: space-around;
align-items: center;
& >img{
    width:300px;
  margin-bottom: 35px;
}
`
let UserStatisticsTable=styled.table`
position: relative;
min-width: 480px;
& >thead>tr{
    border-bottom: 1px solid black;
}

`
let Col1=styled.col`
width: 60%;
`
let Col2=styled.col`
width: 20%;
`
