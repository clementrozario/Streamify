
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer, TooltipProps } from 'recharts';
import { revenueData } from '../../../data/mockData';

type RevenueDataPoint = {
  source:string;
  value:number;
}
  
  const COLORS = ['#3b82f6', '#10b981', '#f59e0b'];

  const formatCurrency = (value:number):string => {
    return `$${(value / 1000).toFixed(0)}K`;
  };

  const CustomTooltip = ({ active, payload }:TooltipProps<number, string>) => {
    if (active && payload?.length) {
      const name = payload[0].name;
      const value = payload[0].value;
      return (
        <div className="bg-white p-2 border border-gray-200 shadow-sm">
          <p className="font-medium">{name}</p>
          <p className="text-blue-600">
            {value !== undefined ? formatCurrency(value):'N/A'}
          </p>
        </div>
      );
    }
    return null;
  };

const RevenueDistributionChart:React.FC = () =>{
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Revenue Distribution</h2>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={revenueData as RevenueDataPoint[]}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
              nameKey="source"
              label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
            >
              {revenueData.map((entry, index) => (
                <Cell key={`cell-${entry.source}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip content={<CustomTooltip />} />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default RevenueDistributionChart;