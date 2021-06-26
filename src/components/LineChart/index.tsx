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

    const lineChartLabels = (): string[] => {
      let dateLabel: string[] = [];
      dateLabel[0] = dataEvent[0].date;

      for (let i = 0; i < dataEvent.length-2; i++) {
        
        for (let j = 1; j <= dataEvent.length-1; j++) {
          
          if (dateLabel[i] !== dataEvent[j].date && !dateLabel.includes(dataEvent[j].date)) {
            dateLabel.push(dataEvent[j].date);
          }
        }
      }

      return dateLabel;
    }
    
    const totalEventsPerDay = (): number[] => {
      let occurrence: number[] = [];
      let count = 0;

      lineChartLabels().forEach(label => {
        dataEvent.forEach(event => {
          if (label === event.date) count++;
        });  
        occurrence.push(count);
        count = 0;
      }); 
  
      return occurrence;
    }
   
    setLineChartData({
      labels: lineChartLabels(),
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
            text: 'Datas dos eventos'
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