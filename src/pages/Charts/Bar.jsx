import React from 'react';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Category, Tooltip, ColumnSeries, DataLabel } from '@syncfusion/ej2-react-charts';

import { barCustomSeries, barPrimaryYAxis, barPrimaryXAxis } from '../../data/dummy';
import { ChartsHeader } from '../../components';
import { useStateContext } from '../../contexts/ContextProvider';

function Bar() {
  const { currentMode } = useStateContext();  
  
  return (
  <div  className='m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
    <ChartsHeader category='Bar' title='Olympic Medal Counts' />
    <div className='w-full'>
     <ChartComponent
      id='charts'
      primaryXAxis={barPrimaryXAxis}
      primaryYAxis={barPrimaryYAxis}
      chartArea={{ border: { width: 0 }}}
      tooltip={{ enable: true }}
      background={currentMode === 'Dark' ? '#33373E' : '#fff'}
      legendSettings={{ background: 'white' }}
     >
      <Inject services={[ColumnSeries, Legend, Tooltip, Category, DataLabel]} />
      <SeriesCollectionDirective>
        {barCustomSeries.map((item, index) => <SeriesDirective key={index} {...index} />)}
      </SeriesCollectionDirective>
     </ChartComponent>
    </div>
  </div> 
  );
};

export default Bar;