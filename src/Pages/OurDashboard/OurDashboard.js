// import React from 'react';
// import './OurDashBoard.css';
// import { FaHouseDamage, FaGripHorizontal, FaBookmark, FaUserAlt,FaScribd, FaSearch, FaStripeS} from "react-icons/fa";
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
//   ResponsiveContainer,
//    Pie, 
//    Sector,
//     Cell,
//   PieChart,
// } from 'recharts';




// const OurDashboard = () => {

//   const [expanded, setExpanded] = React.useState(false);

//   // const handleChange =
//   //   (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
//   //     setExpanded(isExpanded ? panel : false);
//   //   };

   
// const data = [
//   {
//     name: "Page A",
//     uv: 590,
//     pv: 800,
//     amt: 1400,
//     cnt: 490
//   },
//   {
//     name: "Page B",
//     uv: 868,
//     pv: 967,
//     amt: 1506,
//     cnt: 590
//   },
//   {
//     name: "Page C",
//     uv: 1397,
//     pv: 1098,
//     amt: 989,
//     cnt: 350
//   },
//   {
//     name: "Page D",
//     uv: 1480,
//     pv: 1200,
//     amt: 1228,
//     cnt: 480
//   },
//   {
//     name: "Page E",
//     uv: 1520,
//     pv: 1108,
//     amt: 1100,
//     cnt: 460
//   },
//   {
//     name: "Page F",
//     uv: 1400,
//     pv: 680,
//     amt: 1700,
//     cnt: 380
//   }
// ];

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
//       {/* <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
//         <AccordionSummary
//           expandIcon={<ExpandMoreIcon />}
//           aria-controls="panel1bh-content"
//           id="panel1bh-header"
//         >
//           <Typography sx={{ width: '33%', flexShrink: 0 }}>
//            <FaHouseDamage/>
//           </Typography>
//           <Typography sx={{ color: 'text.secondary' }}> Dashboard </Typography>
//         </AccordionSummary>
//         <AccordionDetails>
//           <Typography>
//             Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
//             Aliquam eget maximus est, id dignissim quam.
//           </Typography>
//         </AccordionDetails>
//       </Accordion>
//       <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
//         <AccordionSummary
//           expandIcon={<ExpandMoreIcon />}
//           aria-controls="panel2bh-content"
//           id="panel2bh-header"
//         >
//           <Typography sx={{ width: '33%', flexShrink: 0 }}> <FaGripHorizontal/> </Typography>
//           <Typography sx={{ color: 'text.secondary' }}>
//             Components
//           </Typography>
//         </AccordionSummary>
//         <AccordionDetails>
//           <Typography>
//             Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus,
//             varius pulvinar diam eros in elit. Pellentesque convallis laoreet
//             laoreet.
//           </Typography>
//         </AccordionDetails>
//       </Accordion>
//       <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
//         <AccordionSummary
//           expandIcon={<ExpandMoreIcon />}
//           aria-controls="panel3bh-content"
//           id="panel2bh-header"
//         >
//           <Typography sx={{ width: '33%', flexShrink: 0 }}> <FaBookmark/> </Typography>
//           <Typography sx={{ color: 'text.secondary' }}>
//             Pages
//           </Typography>
//         </AccordionSummary>
//         <AccordionDetails>
//           <Typography>
//             Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus,
//             varius pulvinar diam eros in elit. Pellentesque convallis laoreet
//             laoreet.
//           </Typography>
//         </AccordionDetails>
//       </Accordion>
//       <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
//         <AccordionSummary
//           expandIcon={<ExpandMoreIcon />}
//           aria-controls="panel4bh-content"
//           id="panel2bh-header"
//         >
//           <Typography sx={{ width: '33%', flexShrink: 0 }}> <FaUserAlt/> </Typography>
//           <Typography sx={{ color: 'text.secondary' }}>
//             Authentication
//           </Typography>
//         </AccordionSummary>
//         <AccordionDetails>
//           <Typography>
//             Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus,
//             varius pulvinar diam eros in elit. Pellentesque convallis laoreet
//             laoreet.
//           </Typography>
//         </AccordionDetails>
//       </Accordion>
//       <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
//         <AccordionSummary
//           expandIcon={<ExpandMoreIcon />}
//           aria-controls="panel2bh-content"
//           id="panel2bh-header"
//         >
//           <Typography sx={{ width: '33%', flexShrink: 0 }}> <FaScribd/> </Typography>
//           <Typography sx={{ color: 'text.secondary' }}>
//             Layout
//           </Typography>
//         </AccordionSummary>
//         <AccordionDetails>
//           <Typography>
//             Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus,
//             varius pulvinar diam eros in elit. Pellentesque convallis laoreet
//             laoreet.
//           </Typography>
//         </AccordionDetails>
//       </Accordion>
//       <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
//         <AccordionSummary
//           expandIcon={<ExpandMoreIcon />}
//           aria-controls="panel4bh-content"
//           id="panel4bh-header"
//         >
//           <Typography sx={{ width: '33%', flexShrink: 0 }}>Personal data</Typography>
//         </AccordionSummary>
//         <AccordionDetails>
//           <Typography>
//             Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
//             amet egestas eros, vitae egestas augue. Duis vel est augue.
//           </Typography>
//         </AccordionDetails>
//       </Accordion> */}
//      <div className="leftSideBar">
//      <div>Dashboard</div>
//       <div>All Seller</div>
//       <div>Buyer</div>
//       <div>User</div>
//       <div>Reviewer</div>
//      </div>
//       <button className='dashBoardBtn'>Customize</button>
//     </div>
//                 </div>
//                 <div className="dashBoardRight  col-span-9">
//                    <div className="nameWrap px-3 py-3">
//                    <div className="projectName">
//                       <h2>Seller Dashboard </h2>
//                     </div>
//                     <div className="dashBoardIcons">
//                       <div className="iconsWrap flex">
//                         <span> <img src={notify} alt="" /> </span>
//                          <span><img src={setting} alt="" /> </span>
//                         <span> <img src={users} alt="" /> </span>                        
//                       </div>
//                     </div>
//                    </div>
//                    {/* <div className="nameWrap downWrap py-5 px-3">
//                    <div className="projectName">
//                       <h2 className='text-black'>Dashboard</h2>
//                     </div>
//                     <div className="dashBoardIcons">
//                       <div className="iconsWrap flex">
//                       <button className="btn btn-secondary text-white bg-[#6D28D9]">View on Github</button>
                        
//                       </div>
//                     </div>
//                    </div> */}
//                     <div className="nameWrap downWrap py-5 px-3 mb-5">
//                         <div className="value">
//                           <div className="valueWrap">
//                           <div className="leftValue">
//                           <div className=''>Value</div>
//                           <span className='text-black font-bold text-xl'>$50,000</span>
//                           <span className='bg-[#D1FAE5] p-1 rounded ml-3'>+4.4%</span>
//                          </div>
//                          <div className="valueRight">
//                             <img src={dolar} alt="" />
//                          </div>
//                           </div>
//                         </div>
//                         <div className="value">
//                           <div className="valueWrap">
//                           <div className="leftValue">
//                           <div>Value</div>
//                           <span className='text-black font-bold text-xl'>$80,550</span>
//                           <span className='bg-[#D1FAE5] p-1 rounded ml-3'>+7.8%</span>
//                          </div>
//                          <div className="valueRight">
//                             <img src={user} alt="" />
//                          </div>
//                           </div>
//                         </div>
//                         <div className="value">
//                           <div className="valueWrap">
//                           <div className="leftValue">
//                           <div>Value</div>
//                           <span className='text-black font-bold text-xl'>$65,000</span>
//                           <span className='bg-[#D1FAE5] p-1 rounded ml-3'>+5.9%</span>
//                          </div>
//                          <div className="valueRight">
//                             <img src={bar} alt="" />
//                          </div>
//                           </div>
//                         </div>
//                         <div className="value">
//                           <div className="valueWrap">
//                           <div className="leftValue">
//                           <div>Value</div>
//                           <span className='text-black font-bold text-xl'>$99,000</span>
//                           <span className='bg-[#D1FAE5] p-1 rounded ml-3'>+3.4%</span>
//                          </div>
//                          <div className="valueRight">
//                             <img src={ticket} alt="" />
//                          </div>
//                           </div>
//                         </div>
//                    </div>
//                    <div className="chart">
                   
//                     <div className="barChart">
//                     <ComposedChart
//       width={500}
//       height={400}
//       data={data}
//       margin={{
//         top: 20,
//         right: 20,
//         bottom: 20,
//         left: 20
//       }}
//     >
//       <CartesianGrid stroke="#f5f5f5" />
//       <XAxis dataKey="name" />
//       <YAxis />
//       <Tooltip />
//       <Legend />
//       <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" />
//       <Bar dataKey="pv" barSize={20} fill="#413ea0" />
//       <Line type="monotone" dataKey="uv" stroke="#ff7300" />
//       <Scatter dataKey="cnt" fill="red" />
//     </ComposedChart>
//     <h2 className='text-xl centerText font-bold text-[#6D28D9]'>Appartments Rent Chart </h2>
//                     </div>
//                     <div className="pieChart">
//                     <PieChart width={400} height={400}>
//       <Pie
//         data={data01}
//         dataKey="value"
//         cx={200}
//         cy={200}
//         outerRadius={100}
//         fill="#8884d8"
//       />
//       <Pie
//         data={data02}
//         dataKey="value"
//         cx={200}
//         cy={200}
//         innerRadius={100}
//         outerRadius={120}
//         fill="#82ca9d"
//         label
//       />
//     </PieChart>
//     <h2 className='text-xl centerText center font-bold text-[#6D28D9]'>All Viewer Chart </h2>
//                     </div>
//                    </div>
                  
//                 </div>
//             </div>
//         </div>
//     )
// };

// export default OurDashboard;