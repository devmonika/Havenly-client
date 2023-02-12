// import React from 'react';
// // import './OurDashBoard.css';
// import { FaHouseDamage, FaGripHorizontal, FaChartLine, FaBookmark, FaHandHoldingUsd, FaUserAlt,FaScribd, FaSearch,FaUsers, FaStripeS} from "react-icons/fa";
// import dolar from '../../images/dolar2.jpg';
// import user from '../../images/user.png';
// import bar from '../../images/bar.jpg';
// import ticket from '../../images/ticket.jpg';
// import setting from '../../images/setting.png';
// import notify from '../../images/notify2.png';
// import users from '../../images/users.png';
// import {
//   ComposedChart,
//   Line,
//   Area,
//   Bar,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
//   Scatter,
//    Pie, 
//    Sector,
//     Cell,
//   PieChart,
//   BarChart,
//   ResponsiveContainer
// } from 'recharts';

// import './OurDashBoard.css'



// const OurDashboard = () => {

//   const [expanded, setExpanded] = React.useState(false);   
//   const data = [
//     {
//       name: "Page A",
//       uv: 4000,
//       pv: 2400,
//       amt: 2400
//     },
//     {
//       name: "Page B",
//       uv: 3000,
//       pv: 1398,
//       amt: 2210
//     },
//     {
//       name: "Page C",
//       uv: 2000,
//       pv: 9800,
//       amt: 2290
//     },
//     {
//       name: "Page D",
//       uv: 2780,
//       pv: 3908,
//       amt: 2000
//     },
//     {
//       name: "Page E",
//       uv: 1890,
//       pv: 4800,
//       amt: 2181
//     },
//     {
//       name: "Page F",
//       uv: 2390,
//       pv: 3800,
//       amt: 2500
//     },
//     {
//       name: "Page G",
//       uv: 3490,
//       pv: 4300,
//       amt: 2100
//     }
//   ];

// const data01 = [
//   { name: "Group A", value: 400 },
//   { name: "Group B", value: 300 },
//   { name: "Group C", value: 300 },
//   { name: "Group D", value: 200 }
// ];
// const data02 = [
//   { name: "A1", value: 100 },
//   { name: "A2", value: 300 },
//   { name: "B1", value: 100 },
//   { name: "B2", value: 80 },
//   { name: "B3", value: 40 },
//   { name: "B4", value: 30 },
//   { name: "B5", value: 50 },
//   { name: "C1", value: 100 },
//   { name: "C2", value: 200 },
//   { name: "D1", value: 150 },
//   { name: "D2", value: 50 }
// ];
// const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

// const RADIAN = Math.PI / 180;
// const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
//   const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
//   const x = cx + radius * Math.cos(-midAngle * RADIAN);
//   const y = cy + radius * Math.sin(-midAngle * RADIAN);

//   return (
//     <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
//       {`${(percent * 100).toFixed(0)}%`}
//     </text>
//   );
// };


   
    
//     return (
//         <div className='my-24'>
//             <div className=" ourDashboard grid grid-cols-12">
//                 <div className="dashBoardLeft  col-span-3">
//                 <div>

//                 <div className="leftSideBar">
//                 <div>Dashboard</div>
//                   <div>All Seller</div>
//                   <div>Buyer</div>
//                   <div>User</div>
//                   <div>Reviewer</div>
//                 </div>
//                   <button className='dashBoardBtn'>Setting</button>
//                 </div>
//                 </div>
                
//             </div>
//         </div>
//     )
// };

// export default OurDashboard;