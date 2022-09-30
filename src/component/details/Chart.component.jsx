import { useSelector } from 'react-redux';
import ReactApexChart from 'react-apexcharts';
import { dietSelector } from '../../features/Diet/slice';
import { calculator } from '../../utils/calNutrient';

const Chart = () => {
  const dailyTotalDiet = useSelector(dietSelector.dailyNutrient);
  const caculatedDailyNutrient = calculator(dailyTotalDiet);
  console.log(typeof(+caculatedDailyNutrient.fat.toFixed(2)))
  const donutOptions = {
    series: [
      caculatedDailyNutrient.calbonate, 
      caculatedDailyNutrient.protein, 
      caculatedDailyNutrient.fat, 
      caculatedDailyNutrient.sugar, 
      caculatedDailyNutrient.cholesterol, 
      caculatedDailyNutrient.natrium, 
      caculatedDailyNutrient.saturatedFattyAcid
    ],
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
      {dailyTotalDiet.length > 0 ?
        <ReactApexChart
          options={donutOptions.options}
          series={donutOptions.series}
          type='donut'
          width='500'
        />
        :
        null
    }
    </div>
  )
}
export default Chart;