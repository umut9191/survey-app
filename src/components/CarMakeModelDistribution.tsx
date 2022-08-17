
import { Bar } from 'react-chartjs-2';
import { Box, Card, CardContent, CardHeader, Divider, useTheme } from '@mui/material';
import { CategoryScale } from 'chart.js';
import Chart from 'chart.js/auto'
import { CareMakeEnum, ICarMakeModel, ISurveyDataStorage, optionsCarMakeModel } from '../Types';
import React from 'react';



Chart.register(CategoryScale);

interface ISurveyDataProps {
    surveyDataStorage: ISurveyDataStorage[]
}
interface ICarMakeModelHelper {
    value: number;
    label: string;
    model: string;
}
const CarMakeModelDistribution: React.FunctionComponent<ISurveyDataProps> = (props) => {
    const { surveyDataStorage } = props;
    const theme = useTheme();
   const dataToFill = {
        datasets: [
            {
                backgroundColor: '#3F51B5',
                barPercentage: 0.5,
                barThickness: 12,
                borderRadius: 4,
                categoryPercentage: 0.5,
                data: [18, 5, 19, 27, 29, 19, 20],
                label: 'z',
                maxBarThickness: 10
            },
            {
                backgroundColor: '#EEEEEE',
                barPercentage: 0.5,
                barThickness: 12,
                borderRadius: 4,
                categoryPercentage: 0.5,
                data: [500],
                label: 'y',
                maxBarThickness: 10
            },
            {
                backgroundColor: '#EEEE99',
                barPercentage: 0.5,
                barThickness: 12,
                borderRadius: 4,
                categoryPercentage: 0.5,
                data: [11, 20, 12, 29, 30, 25, 13],
                label: 'x',
                maxBarThickness: 10
            }
        ],
        labels: optionsCarMakeModel.filter(x => x.value != CareMakeEnum.Default).map(a => a.label)
    };  
    const [datas, setData] = React.useState(dataToFill)

    const groupBy = (key: any, arr: any[]) => arr
        .reduce((cache: any[], array: any[]) => {
            const property = array[key]
            if (property in cache) {
                return { ...cache, [property]: cache[property].concat(array) }
            }
            return { ...cache, [property]: [array] }
        }, {}
        )
    React.useEffect(() => {
        dataToFill.datasets = []
        dataToFill.labels = []
        var array: ICarMakeModel[] = []
        var arrayOfArrays = surveyDataStorage.map(x => x.careMakesModels)
        arrayOfArrays.forEach(element => {
            element.forEach(elementInside => {
                array.push(elementInside)
            });

        });
        var result = groupBy("value", array) as Object[]
        var i:number =0
        
        for (var key in result) {
            i++
         
            var valuex = result[key] as ICarMakeModelHelper[]
            var resultForModels = groupBy("model", valuex as any[]) as Object[]
            var carMakeName: string = ""
            for (var key in resultForModels) {
                var valuey = resultForModels[key] as ICarMakeModelHelper[]
                carMakeName = valuey.map((x) => x.label)[0]
                var numberOfModelArray: number[] = []
                numberOfModelArray[i - 1] = valuey.length
                var randomColor = Math.floor(Math.random()*16777215).toString(16);
                dataToFill.datasets.push(
                    {
                        backgroundColor: '#'+randomColor,
                        barPercentage: 0.5,
                        barThickness: 12,
                        borderRadius: 4,
                        categoryPercentage: 0.5,
                        data: numberOfModelArray,
                        label: valuey.map((x) => x.model)[0],
                        maxBarThickness: 10
                    },
                )
                setData(dataToFill)
            }
            dataToFill.labels.push(carMakeName)
            setData(dataToFill)

        }
    }, [])
    const options = {
        // animation: false,
        cornerRadius: 20,
        layout: { padding: 0 },
        legend: { display: false },
        maintainAspectRatio: false,
        responsive: true,
        xAxes: [
            {
                ticks: {
                    fontColor: theme.palette.text.secondary
                },
                gridLines: {
                    display: false,
                    drawBorder: false
                }
            }
        ],
        yAxes: [
            {
                ticks: {
                    fontColor: theme.palette.text.secondary,
                    beginAtZero: true,
                    min: 0
                },
                gridLines: {
                    borderDash: [2],
                    borderDashOffset: [2],
                    color: theme.palette.divider,
                    drawBorder: false,
                    zeroLineBorderDash: [2],
                    zeroLineBorderDashOffset: [2],
                    zeroLineColor: theme.palette.divider
                }
            }
        ],
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

    return (
        <Card >
            <CardHeader
                title="The Car Make And Model Distribution"
            />
            <Divider />
            <CardContent>
                <Box
                    sx={{
                        height: 400,
                        position: 'relative'
                    }}
                >
                    <Bar
                        data={datas}
                        options={options}
                    />
                </Box>
            </CardContent>

        </Card>
    );
}
export default CarMakeModelDistribution;