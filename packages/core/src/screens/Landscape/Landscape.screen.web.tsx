import React from 'react';
import {View, Text, Platform} from 'react-native';
import style from './Landscape.style';

import {Link} from '../../components/Link'
import {routesMap} from '../../utils/router'

import { AreaChart, BarChart, PieChart, Grid } from 'react-native-svg-charts'
import * as shape from 'd3-shape'

import AppHeader from '../../components/Header/AppHeader'

import GoogleLogin from 'react-google-login';

const responseGoogle = (response: any) => {
  console.log(response);

}

const responseGoogle2 = (response: any) => {
  console.log(response);
}

export function Landscape() {
  const isWEB = Platform.OS === 'web'
  const aFlexDirection = isWEB ? 'row' : 'column'

  const color_0 = '#1d4f5f'
  const data_0 = [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80]

  const color_1 = '#411461'
  const data_1 = [50, 10, 40, 95, -4, -24, null, 85, undefined, 0, 35, 53, -53, 24, 50, -20, -80]

  const data_2 = [ 50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80 ]
  const randomColor = () => ('#' + (Math.random() * 0xFFFFFF << 0).toString(16) + '000000').slice(0, 7)

  const pieData = data_2
            .filter(value => value > 0)
            .map((value, index) => ({
                value,
                svg: {
                    fill: randomColor(),
                    onPress: () => console.log('press', index),
                },
                key: `pie-${index}`,
            }))

  return (
<>
<AppHeader/>
    <View style={style.container}>
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
      <PieChart
                      style={ { width:200, height: 200 } }
                      data={ pieData }
                  />
    </View>
    </>
  );
}
