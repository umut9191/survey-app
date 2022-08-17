import './App.css';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import SurveyPassage from './SurveyPassage';
import CompanyStaff from './CompanyStaff';
import { CompanyStaffSurveyEnum, ISurveyDataStorage } from './Types';
import React from 'react';

function App() {
  const [whichPage, setWhichPage] = React.useState(0)
  const [surveyDataStorage, setSurveyDataStorage] = React.useState<ISurveyDataStorage[]>([])
  function getComponent(pageToGo: number) {
    switch (pageToGo) {
      case CompanyStaffSurveyEnum.Survey:
        setWhichPage(CompanyStaffSurveyEnum.Survey)
        break;
      case CompanyStaffSurveyEnum.CompanyStaff:
        var datasInStorage = localStorage.getItem('surveyCollect');
        if(datasInStorage !=null){
         setSurveyDataStorage(JSON.parse(datasInStorage) as ISurveyDataStorage[]);
         } 
        setWhichPage(CompanyStaffSurveyEnum.CompanyStaff)

    }
  }
  return (
    <>
      <Paper variant="outlined" sx={{ my: { xs: 0, md: 0 }, p: { xs: 2, md: 3 } }}>
        <Typography component="h1" variant="h4" align="center">
          <Button
            variant="contained"
            onClick={(e) => getComponent(CompanyStaffSurveyEnum.CompanyStaff)}
            sx={{ mt: 0, ml: 1 }}
          >
            Company Staff
          </Button>
          <Button
            variant="contained"
            onClick={(e) => getComponent(CompanyStaffSurveyEnum.Survey)}
            sx={{ mt: 0, ml: 1 }}
          >
           Customer Survey
          </Button>
        </Typography>
   
      {whichPage === CompanyStaffSurveyEnum.CompanyStaff ? <CompanyStaff surveyDataStorage ={surveyDataStorage} /> : whichPage === CompanyStaffSurveyEnum.Survey ? <SurveyPassage /> : <div></div>}
      </Paper>
    </>

  );
}

export default App;
