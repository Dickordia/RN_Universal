import React from 'react';
import {View, Text, Platform} from 'react-native';
import style from './Landscape.style';

import {Link} from '../../components/Link'
import {routesMap} from '../../utils/router'

import { AreaChart, BarChart, Grid } from 'react-native-svg-charts'
import * as shape from 'd3-shape'

export function Landscape() {
  const isWEB = Platform.OS === 'web'
  const aFlexDirection = isWEB ? 'row' : 'column'

  const color_0 = '#1d4f5f'
  const data_0 = [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80]

  const color_1 = '#411461'
  const data_1 = [50, 10, 40, 95, -4, -24, null, 85, undefined, 0, 35, 53, -53, 24, 50, -20, -80]

  return (


    <View style={style.container}>
      <Text style={style.text}>Landscape WEB</Text>
      <Link style={style.buttonContainer}
            routeName={routesMap.login.root.path}>
        <Text style={style.buttonText}>LOGOUT</Text>
      </Link>

      <View style={{flexDirection: aFlexDirection}}>
      <AreaChart
                style={{ width: 300, height: 200 }}
                data={data_0}
                contentInset={{ top: 30, bottom: 30 }}
                curve={shape.curveNatural}
                svg={{ fill: color_0 }}
      >
        <Grid />
      </AreaChart>

      <BarChart style={{ width: 300, height: 200 , left: isWEB ? 100 : 0}}
                data={data_1}
                svg={{ fill: color_1 }}
                contentInset={{ top: 30, bottom: 30 }}
      >
        <Grid />
      </BarChart>
      </View>

    </View>
  );
}
