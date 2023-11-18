import React from "react";
import { PieChart, Pie, ResponsiveContainer } from 'recharts';


const data = [
  { name: "Desktop", value: 20 },
  { name: "Tablet", value: 15 },
  { name: "Mobile", value: 65 },
];

const DeviceSessions = () => {
  return (
    
    <div className="w-[25%] p-[20px] bg-white rounded-xl border border-gray">
      <h2 className="text-dark text-xl font-medium"> Device Session </h2>
     
      <ResponsiveContainer  width="100%" height="55%">
          <PieChart width={400}>
            <Pie data={data} label dataKey="value" cx="50%" cy="50%" outerRadius={60} fill="#8884d8" />
          </PieChart>
      </ResponsiveContainer> 
      <div className={styles.info}>
        <h2 className={styles.infoTitle}> {data[0].name} </h2>
        <p className={`${styles.infoDesc} bg-light_green`}> {data[0].value}% </p>
      </div>
      <div className={styles.info}>
        <h2 className={styles.infoTitle}> {data[1].name} </h2>
        <p className={`${styles.infoDesc} bg-indigo`}> {data[1].value}% </p>
      </div>
      <div className={`${styles.info} border-b-0`}>
        <h2 className={styles.infoTitle}> {data[2].name} </h2>
        <p className={`${styles.infoDesc} bg-pink`}> {data[2].value}% </p>
      </div>
    </div>
  );
};


const styles ={
  info: "py-4 border-b border-gray px-6 flex items-center justify-between",
  infoTitle: "text-dark",
  infoDesc: "text-white py-[2px] text-[12px] px-2 rounded-md"
}

export default DeviceSessions;
