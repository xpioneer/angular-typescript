/**
 * echarts
 */
// const Echarts = require('echarts/lib/echarts');
import * as Echarts from 'echarts/core'
import { VisualMapComponentOption, TitleComponentOption } from 'echarts/components'
import {
  TitleComponent,
  TooltipComponent,
  ToolboxComponent,
  LegendComponent,
  LegendScrollComponent,
  VisualMapComponent,
} from 'echarts/components'
import { CanvasRenderer } from 'echarts/renderers'

Echarts.use([
  CanvasRenderer,
  TitleComponent,
  TooltipComponent,
  ToolboxComponent,
  LegendComponent,
  LegendScrollComponent,
  VisualMapComponent,
])

export {
  Echarts,
};
