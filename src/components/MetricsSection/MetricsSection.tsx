
import MetricCard from './MetricCard';
import { metricsData } from '../../../data/mockData';

function MetricsSection() {
  
  const formatLargeNumber = (num:number):string => {
    if (num >= 1_000_000) {
      return (num / 1_000_000).toFixed(1) + 'M';
    }
    if (num >= 1_000) {
      return (num / 1_000).toFixed(1) + 'K';
    }
    return num.toString();
  };

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4'>
      <MetricCard 
        title="Total Users" 
        value={formatLargeNumber(metricsData.totalUsers)} 
        icon="👥" 
      />
      <MetricCard 
        title="Active Users" 
        value={formatLargeNumber(metricsData.activeUsers)} 
        icon="👤" 
      />
      <MetricCard 
        title="Total Streams" 
        value={formatLargeNumber(metricsData.totalStreams)} 
        icon="🎵" 
      />
      <MetricCard 
        title="Revenue" 
        value={"$" + formatLargeNumber(metricsData.revenue)} 
        icon="💰" 
      />
      <MetricCard 
        title="Top Artist" 
        value={metricsData.topArtist} 
        icon="🌟" 
      />
    </div>
  );
}

export default MetricsSection;