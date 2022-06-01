import React, { useState } from 'react';
import "../Assets/Home.css";
import logo from "../Assets/logo.png";
import profilepic from "../Assets/profilepic.png";
import icon from "../Assets/icon.png"
import icon2 from "../Assets/icon2.png"
import award from "../Assets/award.png"
import htmlpic from "../Assets/html.png"
import ProgressBar from 'react-animated-progress-bar';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


export default function Home() {

    const [rank, setRank] = useState("12,904");
    const [percentile, setPercentile] = useState("37");
    const [score, setScore] = useState(7);
    const rankresult = ("")

    const data =[
        {
            percent: "0%",
            value: "10",
            pv:10
        },
        {
            percent: "20%",
            value: "20",
            pv:70
        },
        {
            percent: "40%",
            value: "40",
            pv:`${percentile}`
        },
        {
            percent: "60%",
            value: "60",
            pv:80
        },
        {
            percent: "80%",
            value: "80",
            pv:20
        },
        {
            percent:"100%",
            value:"100",
            pv:10
        }
    ]

  return (
    <>
    <div className="header">
        <img src={logo} alt="logo" />
        <div className="topbar">
            <div className="profile">
                <img src={profilepic} alt="" />
                <p>Siddharth Jain</p>
            </div>
        </div>
    </div>
    <div className="sider">
           <div className="dashboard" style={{color:"#566474"}}>
               <img src={icon2} alt="" />
               <p>Dashboard</p>
           </div>
           <div className="dashboard" style={{top: "calc(50% - 28px/2 - 82px)", color:"#445EE2"}}>
               <img src={award} alt="" />
               <p><strong>Skill Test</strong></p>
           </div>
           <div className="dashboard" style={{top: "calc(68% - 28px/2 - 82px)", color:"#566474"}}>
               <img src={icon} alt="" />
               <p>Internships</p>
           </div>
    </div>
    <div className='Navbar'></div>
    <div className="Sidebar"></div>
    <div className="skilltestmain">
        <p>Skill Test</p>
    </div>
    <div className="htmlbar">
        <div className="htmlgroup">
            <img src={htmlpic} alt="" />
            <p className='htmltitle'>Hypertext Markup Language</p>
            <p className='htmldetail'>Questions: 08 | Duration: 15 mins | Submitted on 5 June 2021</p>
        </div>
        <button data-bs-toggle="modal" data-bs-target="#exampleModal">Update</button>
    </div>
    <div className="quickstatsbar">
        <p>Quick Statistics</p>
        <div className="quickcircle"><span>🏆</span></div>
        <h6 className='rank'>{rank}</h6>
        <h8 className='ranktext'>YOUR RANK</h8>
        <div className="quickcircle" style={{left:"267px"}}><span>📋</span></div>
        <h6 className='rank' style={{left:"337px"}}>{percentile}%</h6>
        <h8 className='ranktext' style={{left:"337px"}}>PERCENTILE</h8>
        <div className="quickcircle" style={{left:"503px"}}><span>✅</span></div>
        <h6 className='rank' style={{left:"573px"}}>{score} / 15</h6>
        <h8 className='ranktext' style={{left:"573px"}}>CORRECT ANSWERS</h8>
        <div className="horibar" style={{left:"216px"}}></div>
        <div className="horibar"></div>
    </div>
    <div className="compigraphbar">
        <h3>Comparison Graph</h3>
        <p><strong>You scored {percentile}% percentile</strong> which is lower than the average percentile 72% of all the engineers who took this assessment</p>
        <div className="graphicon">
            <span>📈</span>
        </div>
        <div className="actualgraph">
        <LineChart
          width={656}
          height={343}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="percent" />
          <YAxis dataKey="value"/>
          <Tooltip />
          <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
        </LineChart>
        </div>
    </div>
    <div className="syllabusbar">
        <h3>Syllabus wise Analysis</h3>
        <ul>
            <li>HTML Tools, Forms, History
            <ProgressBar
            width="300px"
            height="10px"
            rect
            fontColor="#48AE2C"
            percentage="80"
            rectPadding="1px"
            rectBorderRadius="20px"
            trackBorderRadius="20px"
            trackPathColor="#EDF4FF"
            rectColor="#438AF6"
            bgColor="#438AF6"
            /></li>
            <li style={{top:"167px"}}>Tags & References in HTML
            <ProgressBar
            width="300px"
            height="10px"
            rect
            fontColor="#F32013"
            percentage="24"
            rectPadding="1px"
            rectBorderRadius="20px"
            trackBorderRadius="20px"
            trackPathColor="#EDF4FF"
            rectColor="#438AF6"
            bgColor="#438AF6"
            /></li>
            <li style={{top:"256px"}}>Tables & CSS Basics
            <ProgressBar
            width="300px"
            height="10px"
            rect
            fontColor="#FFD900"
            percentage="60"
            rectPadding="1px"
            rectBorderRadius="20px"
            trackBorderRadius="20px"
            trackPathColor="#EDF4FF"
            rectColor="#438AF6"
            bgColor="#438AF6"
            /></li>
            <li style={{top:"345px"}}>Tables & CSS Basics
            <ProgressBar
            width="300px"
            height="10px"
            rect
            fontColor="#FF6700"
            percentage="40"
            rectPadding="1px"
            rectBorderRadius="20px"
            trackBorderRadius="20px"
            trackPathColor="#EDF4FF"
            rectColor="#438AF6"
            bgColor="#438AF6"
            /></li>
        </ul>
    </div>
    <div className="quesbar">
        <h3>Question Analysis</h3>
        <h4>{score} / 15</h4>
        <p><strong>You scored {score} question correct out of 15.</strong> However it still needs some improvements</p>
        <div className="piechart">
        <CircularProgressbar value={score} minValue={0} maxValue={15} text="🎯" styles={{
            path: {
                strokeLinecap: 'butt',
                stroke: '#438af6',
                width:"90px"
            }

        }}/>
        </div>
    </div>
          <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog">
                  <div class="modal-content" style={{padding:"30px", width:"700px", height:"500px"}}>
                      <div style={{padding:"10px"}}>
                          <h6 class="modal-title" id="exampleModalLabel" className='dtitle'>Update Scores</h6>
                          <img src={htmlpic} alt="html pic"style={{width: "35.56px", height: "50px", left:"600px", position:"absolute"}}/>
                      </div>
                      <div class="modal-body">
                          <div className="line"></div>
                          <div className="dbox">
                              <ul>
                                  <li>1️⃣ Update your rank
                                  <input type="text" onChange={(e)=>{ setRank(e.target.value) }}/></li>
                                  <li style={{top:"130px"}}>2️⃣ Update your percentile
                                  <input type="text" onChange={(e)=>{ setPercentile(e.target.value) }}/></li>
                                  <li style={{top:"200px"}}>3️⃣ Update your current score (out of 15)
                                  <input type="text" onChange={(e)=>{ setScore(e.target.value) }}/></li>
                              </ul>
                              <div className="line" style={{top:"300px"}}></div>
                          </div>
                            <div className='dbuttons'>
                            <button type="button" class="dbutton1" data-bs-dismiss="modal">Save</button>
                            <button type="button" class="dbutton2" data-bs-dismiss="modal">Cancel</button>
                        </div>
                      </div>
                      </div>
                  </div>
              </div>
    </>
  )
}


