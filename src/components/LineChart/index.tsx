import { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Event } from 'types/event';

interface IDatasets {
  label: string;
  data: number[];
  fill: boolean;
  borderColor: string;
  tension: number;
}

type DataChart = {
  labels: Array<string>;
  datasets: Array<IDatasets>
}

type Props = {
  dataEvent: Event[];
}

const LineChart = ({dataEvent}: Props) => {

  /*const dataChart = {
    labels: ['Primeira', 'Segunda', 'Terceira', 'Quarta', 'Quinta', 'Sexta', 'Sétima'],
    datasets: [{
      label: 'Nº de eventos',
      data: [65, 59, 80, 81, 56, 55, 40],
      fill: false,
      borderColor: '#333584A9',
      tension: 0.25
    }]
  };*/

  const [lineChartData, setLineChartData] = useState<DataChart>({
    labels: [],
    datasets: [{
      label: 'Nº de eventos',
      data: [],
      fill: false,
      borderColor: '#333584A9',
      tension: 0.25
    }]
  });

  useEffect(() => {

    const dates = dataEvent.map(event => event.date);
    
    const totalEventsPerDay = (): number[] => {
      var occurrence: number[] = [];
      var count = 0;
  
      for (var i = 0; i < dataEvent.length; i++) {
        for (var j = 1; j < dataEvent.length-1; j++) {
          if (dataEvent[i].date === dataEvent[j].date) count++;
        }
  
        occurrence.push(count);
        count = 0;
      }
  
      return occurrence;
    }

    setLineChartData({
      labels: dates,
      datasets: [{
        label: 'Nº de eventos',
        data: totalEventsPerDay(),
        fill: false,
        borderColor: '#333584A9',
        tension: 0.25
      }]
    });
  }, [dataEvent]);

  const options= {
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: 'Estatísticas'
        },
      },
      interaction: {
        mode: 'index',
        intersect: false
      },
      scales: {
        x: {
          display: true,
          title: {
            display: true,
            text: 'Data'
          }
        },
        y: {
          display: true,
          title: {
            display: true,
            text: 'Total de eventos'
          }
        }
      }
  };

  return(  
    <Line
      type='line'
      data={ lineChartData }
      options={options}
      height={150}
      width={500}
    />
  );
}

export default LineChart;