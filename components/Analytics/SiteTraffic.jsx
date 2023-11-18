import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  {
    name: "Jan",
    uv: 4000,
  },
  {
    name: "Feb",
    uv: 3000,
  },
  {
    name: "Mar",
    uv: 2000,
  },
  {
    name: "Apr",
    uv: 2780,
  },
  {
    name: "May",
    uv: 1890,
  },
  {
    name: "June",
    uv: 2390,
  },
  {
    name: "July",
    uv: 3490,
  },
  {
    name: "Aug",
    uv: 3490,
  },
  {
    name: "Sept",
    uv: 3490,
  },
  {
    name: "Oct",
    uv: 3490,
  },
  {
    name: "Nov",
    uv: 3490,
  },
  {
    name: "Dec",
    uv: 5000,
  },
];

const SiteTraffic = () => {
  return (
    <div className="w-[75%] bg-white p-[20px] rounded-xl border border-gray">
      <div className="flex justify-between mb-14">
        <h2 className="text-dark text-xl font-medium"> Site Traffic </h2>
        <select className="text-sm outline-none rounded-md bg-background text-dark_gray px-3 py-2">
          <option selected disabled> Select Year <MdOutlineKeyboardArrowDown /> </option>
          <option>2022</option>
          <option>2023</option>
        </select>
      </div>

      <ResponsiveContainer width="100%" height="80%">
        <AreaChart width={500} height={400} data={data} margin={{ top: 10,right: 30,left: 0,bottom: 0,}}>
            <CartesianGrid strokeDasharray={[3,3]} />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SiteTraffic;
