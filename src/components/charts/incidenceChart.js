
import React from 'react'
import {
    Chart,
    Partition,
} from '@elastic/charts'
import {
  EuiTitle
} from '@elastic/eui'
import { euiPaletteColorBlind } from '@elastic/eui/lib/services/color'

const IncidenceChart = ({data,title="Sample Title", height=400}) => {
  return (
    <>
      <EuiTitle size="xxs">
        <h4>{title}</h4>
      </EuiTitle>
      <Chart size={{height}}>
        
        <Partition
          id={title}
          data={data}
          valueAccessor={d => Number(d.count)}
          
          
          layers={[
            {
              groupByRollup: d => d.label,
              shape: {
                fillColor: d => euiPaletteColorBlind()[d.sortIndex],
              },
            },
          ]}
          config={{
            emptySizeRatio: 0.4,
            clockwiseSectors: false,
          }}
        />
      </Chart>
    </>
  )
}

export default IncidenceChart