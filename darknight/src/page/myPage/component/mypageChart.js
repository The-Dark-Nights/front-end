import styled from "styled-components";
function MyPageChart(){
    return(
        <UserStatistics>
        <img src="/img/user.png" alt="" />
        <div>
          <UserStatisticsTable>
            <colgroup>
              <Col1 />
              <Col2/>
              <Col2/>
            </colgroup>
            <thead>
              <tr>
                <th>레벨</th>
                <th>
                  문제
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <b>Bronze</b>
                </td>
                <td>
                  <b>1,831</b>
                </td>
                <td >
                  <span>14.2%</span>
                </td>
              </tr>
              <tr>
                <td>
                  <b>Silver</b>
                </td>
                <td>
                  <b>2,156</b>
                </td>
                <td>
                  <span>16.7%</span>
                </td>
              </tr>
              <tr>
                <td>
                  <b>Gold</b>
                </td>
                <td>
                  <b>2,601</b>
                </td>
                <td>
                  <span>20.2%</span>
                </td>
              </tr>
              <tr>
                <td>
                  <b>Platinum</b>
                </td>
                <td>
                  <b>2,907</b>
                </td>
                <td>
                  <span>22.6%</span>
                </td>
              </tr>
              <tr>
                <td>
                  <b>Diamond</b>
                </td>
                <td>
                  <b>2,058</b>
                </td>
                <td>
                  <span>16.0%</span>
                </td>
              </tr>
              <tr>
                <td >
                  <b>Ruby</b>
                </td>
                <td >
                  <b>368</b>
                </td>
                <td >
                  <span>2.9%</span>
                </td>
              </tr>
            </tbody>
          </UserStatisticsTable>
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
