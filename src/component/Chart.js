import React, { useEffect } from 'react'
import {Bar} from 'react-chartjs-2'


export const CompanyChart = (props) => {
  const {
    collection
  } = props
  const [chartData, setChartData] = React.useState({})
  const [isLoading, setLoadingState] = React.useState(false)
  useEffect(() => {
    let chartMap = new Map()
      const data = {
          labels: [],
          datasets: [{
              label: 'Years of foundation',
              data: [
              ],
              backgroundColor:[]
          }]
      }
      // Itterate the collection and save as value the number of time a duplicate value is found
      for (let i in collection) {
          if (chartMap.has(collection[i].founded)) {
              chartMap.set(collection[i].founded, chartMap.get(collection[i].founded) + 1)
          } else {
              chartMap.set(collection[i].founded, 1)
          }
      }
      // Parse the map and populate chart dataset
      chartMap.forEach((key, value) => {
          if (value === '') {
            data.labels.push('No Date')
          } else {
            data.labels.push(value)
          }
          data.datasets[0].data.push(key)
          // Generate a random color for each year entry
          data.datasets[0].backgroundColor.push(`rgba(${generateColor()}, ${generateColor()}, ${generateColor()}, 0.7)`)
      })
      setChartData(data)
      setLoadingState(true)
  }, [])
  const generateColor = () => {
      return Math.floor(Math.random() * 255)
  }

  if (!isLoading) {
    return(
      <></>
    )
  }
  return (
    <div className="chart">
      <Bar data={chartData} />
    </div>
  )
}