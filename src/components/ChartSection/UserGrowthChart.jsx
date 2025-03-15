
import { LineChart,Line,XAxis,YAxis,CartesianGrid,Tooltip,Legend,ResponsiveContainer } from "recharts";
import { userGrowthData } from "../../../data/mockData";

function UserGrowthChart(){
    return(
        <div className="bg-white p-4 rounded-lg shawdow-md">
            <h2 className="font-semibold text-xl mb-4">User Growth</h2>
            <div className="h-64">
                <ResponsiveContainer >
                    <LineChart data={userGrowthData} margin={{top:5,right:30,left:20,bottom:5}}>
                    <CartesianGrid strokeDasharray={"3 3"}/>
                    <XAxis dataKey="month" />
                    <YAxis  />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="totalUsers" name="Total Users" stroke="#3b82f6" activeDot={{ r: 8 }} strokeWidth={2} />
                    <Line type="monotone" dataKey="activeUsers" name="Active Users" stroke="#10b981" strokeWidth={2}/>
              </LineChart>
                </ResponsiveContainer> 
            </div>
        </div>
    )
}

export default UserGrowthChart;