import { Doughnut } from 'react-chartjs-2';
import { Box, Card, CardContent, CardHeader, Divider, Typography, useTheme } from '@mui/material';
import React from 'react';
import EvStationIcon from '@mui/icons-material/EvStation';
import ElectricCarIcon from '@mui/icons-material/ElectricCar';
import { ISurveyDataStorage ,DrivetrainEnum} from '../Types';
import {Chart, ArcElement} from 'chart.js'
import { People } from '@mui/icons-material';
Chart.register(ArcElement);
interface ISurveyDataProps {
    numberDataStorage: number
    text:string
    iconFuel:boolean
  }
const Percentages: React.FunctionComponent<ISurveyDataProps> = (props) => {
   const {numberDataStorage,text,iconFuel} = props; 
   const dataNum = Math.round(numberDataStorage)
   const othersData = Math.round(100-numberDataStorage)
   const [others, setOthers] = React.useState(othersData)
   const [value, setValue] = React.useState(dataNum)
  const theme = useTheme();
  React.useEffect(() => {
   if (isNaN(+value)) 
   {
    setValue(0);
   }
   if (isNaN(+others)) 
   {
    setOthers(0);
   }
   }, []) 
  const data = {
    datasets: [
      {
        data: [value,others ],
        backgroundColor: ['#3F51B5', '#e53935'],
        borderWidth: 8,
        borderColor: '#FFFFFF',
        hoverBorderColor: '#FFFFFF'
      }
    ],
    labels: [{text}, 'Others']
  };

  const options = {
   // animation: false,
    cutoutPercentage: 80,
    layout: { padding: 0 },
    legend: {
      display: false
    },
    maintainAspectRatio: false,
    responsive: true,
    tooltips: {
      backgroundColor: theme.palette.background.paper,
      bodyFontColor: theme.palette.text.secondary,
      borderColor: theme.palette.divider,
      borderWidth: 1,
      enabled: true,
      footerFontColor: theme.palette.text.secondary,
      intersect: false,
      mode: 'index',
      titleFontColor: theme.palette.text.primary
    }
  };

  const devices = [
    {
      title: text,
      value: value,
      icon: iconFuel?EvStationIcon:ElectricCarIcon,
      color: '#3F51B5'
    },
    {
      title: 'Others',
      value: others,
      icon: People,
      color: '#E53935'
    }
  ];

  return (
    <Card >
      <CardContent>
        <Box
          sx={{
            height: 300,
            position: 'relative'
          }}
        >
          <Doughnut
            data={data}
            options={options}
          />
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            pt: 2
          }}
        >
          {devices.map(({
            color,
            icon: Icon,
            title,
            value
          }) => (
            <Box
              key={title}
              sx={{
                p: 1,
                textAlign: 'center'
              }}
            >
              <Icon color="action" />
              <Typography
                color="textPrimary"
                variant="body1"
              >
                {title}
              </Typography>
              <Typography
                style={{ color }}
                variant="h4"
              >
                {value}
                %
              </Typography>
            </Box>
          ))}
        </Box>
      </CardContent>
    </Card>
  );
}
export default Percentages;