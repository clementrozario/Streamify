import React from 'react'
import Header from './components/Header/Header'
import MetricsSection from './components/MetricsSection/MetricsSection';
import UserGrowthChart from './components/ChartSection/UserGrowthChart';
import RevenueDistributionChart from './components/ChartSection/RevenueDistributionChart';
import TopSongsChart from './components/ChartSection/TopSongsChart';
import DataTable from './components/DataTable/DataTable';

function App() {
  return (
    <div className='min-h-screen bg-gray-100'>
      <Header />

      <main className='cointainer mx-auto px-4 py-6'>
        <MetricsSection />

        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-6'>
        <UserGrowthChart />
        <RevenueDistributionChart />
        </div>

        <div className='mt-6'>
          <TopSongsChart />
        </div>

        <div className='mt-6'>
           <DataTable /> 
        </div>

        </main>
    </div>
  )
}

export default App;