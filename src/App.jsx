
import './App.css'
import Barchart from './components/BarChart/Barchart'
import ChartCard from './components/ChartCard/ChartCard'
import RaderChart from './components/RaderChart/RaderChart'

function App() {


  return (
    <>
      <h1>Charts Dashboard</h1>
      <ChartCard></ChartCard>
      <Barchart></Barchart>
      <RaderChart></RaderChart>
    </>
  )
}

export default App
