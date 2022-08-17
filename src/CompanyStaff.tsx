import React from 'react'
import {  Box,Container, Grid, } from '@mui/material';
import { AgeEnum, DrivetrainEnum, ISurveyDataStorage } from './Types';
import CountedParticipatedComponent from './components/CountedParticipatedComponent';
import { createTrue } from 'typescript';
import Percentages from './components/Percentages';
import CarMakeModelDistribution from './components/CarMakeModelDistribution';
interface ISurveyDataProps {
  surveyDataStorage: ISurveyDataStorage[]
 
}
const CompanyStaff: React.FunctionComponent<ISurveyDataProps> = (props) => {
  const { surveyDataStorage } = props;
  const [surveyDataStorageState, setSurveyDataStorageState] = React.useState<ISurveyDataStorage[]>(surveyDataStorage)
  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 1
      }}
    >
      <Container maxWidth={false}>
        <Grid
          container
          spacing={3}
        >

          <Grid
            item
            xl={3}
            lg={3}
            sm={6}
            xs={12}
          >
            <CountedParticipatedComponent iconAverage={false}  text={"Adolescents"}  numberDataStorage = {surveyDataStorageState.filter(x=>x.age<18).length}/>
          </Grid>
          <Grid
            item
            xl={3}
            lg={3}
            sm={6}
            xs={12}
          >
            <CountedParticipatedComponent iconAverage={false}  text={"Unlicensed"} numberDataStorage = {surveyDataStorageState.filter(x=>x.havingCarDrivingLicense == false).length}/>
          </Grid>
          <Grid
            item
            xl={3}
            lg={3}
            sm={6}
            xs={12}
          >
            <CountedParticipatedComponent iconAverage={false}  text={"first-timers"}   
            numberDataStorage = {surveyDataStorageState.filter(x=>(x.age <AgeEnum.rangeAge&&x.age>AgeEnum.minAge) && x.isItYourFirstCar ==true).length}/>
          </Grid>
          <Grid
            item
            xl={3}
            lg={3}
            sm={6}
            xs={12}
          >
            <CountedParticipatedComponent iconAverage={false}  text={"Targetables"} numberDataStorage = {surveyDataStorageState.filter(x=>x.isSurveyCompleted).length}/>
          </Grid>
        </Grid>

        <Grid
          
          spacing={3}
        >
        <Grid
            item
            xl={3}
            lg={3}
            sm={6}
            xs={12}
            sx={{
              flexGrow: 1,
              py: 1
            }}
          >
            <CountedParticipatedComponent iconAverage={true} text={"Average amount of cars in a family"} numberDataStorage = {Number((surveyDataStorageState.reduce((a,object)=> {
  return a + object.howManyCarsDoYouHaveInYourFamily;
}, 0)/surveyDataStorageState.filter(x=>x.isSurveyCompleted).length).toFixed(2))}/>
            </Grid>
            </Grid>
      </Container>
  
      <Container maxWidth={false}>

        <Grid
          container
          spacing={3}
          sx={{
            flexGrow: 1,
            py: 1
          }}
        >

          <Grid
            item
            xl={6}
            lg={6}
            sm={6}
            xs={12}
          >
            <Percentages iconFuel={true}  text={"Care about fuel emissions"}  numberDataStorage = {(surveyDataStorageState.filter(x=>x.areYouWorriedAboutFuelEmissions==true).length/surveyDataStorageState.filter(x=>x.isSurveyCompleted).length)*100}/>
          </Grid>
          <Grid
            item
            xl={6}
            lg={6}
            sm={6}
            xs={12}
          >
            <Percentages iconFuel={false} text={"FWD or “I don’t know”"}  numberDataStorage = {(surveyDataStorageState.filter(x=>x.whichDrivetrainDoYouPrefer==DrivetrainEnum.FWD ||x.whichDrivetrainDoYouPrefer==DrivetrainEnum.IDontKnow).length/surveyDataStorageState.filter(x=>x.isSurveyCompleted).length)*100}/>
          </Grid>

        </Grid>
        <Grid>
        <CarMakeModelDistribution   surveyDataStorage = {surveyDataStorageState.filter(x=>x.isSurveyCompleted)}/>

        </Grid>
        </Container>

    </Box>
  )
}
export default  CompanyStaff;