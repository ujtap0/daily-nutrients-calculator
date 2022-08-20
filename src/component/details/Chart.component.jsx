import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getDietByDate } from '../../features/Diet/slice';
import { calculator } from '../../utils/calNutrient.js';
import ReactApexChart from 'react-apexcharts';

const Chart = () => {
  const { day } = useParams();
  const data = useSelector((state) => getDietByDate(state, day))
  const mealForADay = [
    ...data.breakfast,
    ...data.lunch,
    ...data.dinner,
  ]
  const [totalNutrient, setTotalNutrient] = useState(calculator(mealForADay))

  const donutOptions = {
    series: [totalNutrient.calbonate, totalNutrient.protein, totalNutrient.fat, totalNutrient.sugar, totalNutrient.cholesterol, totalNutrient.natrium, totalNutrient.saturatedFattyAcid],
    options : {
      labels: ["탄수화물", "단백질", "지방", "당류", "콜레스테롤", "나트륨", "지방산"],
      chart : {
        type: 'donut'
      },
      theme: {
        palette: 'palette5'
      },
      dataLabels: {
        dropShadow: {
          enabled: false
        }
      },
      tooltip: {
        enabled: false
      },
      legend: {
        position: 'bottom'
      },
      responsive: [{
        breakpoint: 480,
      }],
      plotOptions: {
        pie: {
          donut: {
            labels: {
              show: true,
              value: {
                show: true,
                color: 'black',
                formatter: function(val) {
                  return val + 'g'
                }
              }
            }
          }
        }
      },
    }
  }

  return(
    <div>
      <ReactApexChart
        options={donutOptions.options}
        series={donutOptions.series}
        type='donut'
        width='500'
      />
    </div>
  )
}
export default Chart;