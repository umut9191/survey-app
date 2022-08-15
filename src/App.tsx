import React from 'react';
import './App.css';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import Typography from '@mui/material/Typography';
import SurveyFormOne from './SurveyFormOne';
import SurveyFormTwo from './SurveyFormTwo';
import { AgeEnum, CareMakeEnum, ICarMakeModel, IOptionsBoolean, IOptionsNumber, ISurveyData, optionsCarMakeModel, optionsDrivetrain, optionsGender, optionsTrueFalse, StepsEnum } from './Types';


const steps = ['Step One', 'Step Two'];



function App() {
  const [activeStep, setActiveStep] = React.useState<number>(0);
  const [showErrorAlert, setShowErrorAlert] = React.useState<boolean>(false);
  const [lastMessage, setlastMessage] = React.useState<string>("");
  const [surveyCollect, setSurveyCollect] = React.useState<ISurveyData>({
    id: 0,
    surveySubmitResult: { success: false, message: "" },
    age: 0,
    gender: (optionsGender.find(x => x.label === "") as IOptionsNumber),
    havingCarDrivingLicense: (optionsTrueFalse.find(x => x.label === "") as IOptionsBoolean),
    isItYourFirstCar: (optionsTrueFalse.find(x => x.label === "") as IOptionsBoolean),
    whichDrivetrainDoYouPrefer: (optionsDrivetrain.find(x => x.label === "") as IOptionsNumber),
    areYouWorriedAboutFuelEmissions: (optionsTrueFalse.find(x => x.label === "") as IOptionsBoolean),
    howManyCarsDoYouHaveInYourFamily: 1,
    careMakesModels : [
      { value: CareMakeEnum.Default, label: "", model: "" }] as ICarMakeModel[]
  });
  function getStepContent(step: number) {
    //onSurveyCollectChanged={setSurveyCollect}
    switch (step) {
      case StepsEnum.fistStep:
        return <SurveyFormOne surveyDataCollected={surveyCollect} />;
      case StepsEnum.secondStep:
        return <SurveyFormTwo surveyDataCollected={surveyCollect} setSurveyCollect={setSurveyCollect}/>;
      default:
        throw new Error('Unknown step');
    }
  }
  const handleNext = () => {
    if (activeStep === StepsEnum.fistStep) {
      if (surveyCollect.havingCarDrivingLicense.label === ""
        || surveyCollect.gender.label === "" || surveyCollect.age>=AgeEnum.maxAgeLimit
        || surveyCollect.age===AgeEnum.minAgeLimit
      ) {
        setShowErrorAlert(true);
      } else if ((surveyCollect.age >= AgeEnum.minAge && surveyCollect.age <= AgeEnum.rangeAge) && surveyCollect.isItYourFirstCar.label === "") {
        setShowErrorAlert(true);
      }
      else {
        setShowErrorAlert(false);
        if (surveyCollect.age < AgeEnum.minAge) {
          setlastMessage("Thank you for taking the time to submit your response")
          setActiveStep(steps.length);
        } else if (surveyCollect.havingCarDrivingLicense.value === false) {
          setlastMessage("Thank you for your interest")
          setActiveStep(steps.length);
        }
        else if (surveyCollect.isItYourFirstCar.value === true) {
          setlastMessage("We are targeting more experienced clients, thank you for your interest")
          setActiveStep(steps.length);
        }
        else {
          setActiveStep(activeStep + 1);
        }
      }

    }
    if (activeStep === StepsEnum.secondStep) {
      if (surveyCollect.areYouWorriedAboutFuelEmissions.label === "") {
        setShowErrorAlert(true);
      } else {
        setShowErrorAlert(false);
        setlastMessage("Thank you for taking the time to submit your response")
        setActiveStep(activeStep + 1);
      }
    }

  };
/*   const handleBack = () => {
    setActiveStep(activeStep - 1);
  }; */
  return (
    <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
      <div>
        {JSON.stringify(surveyCollect)}
      </div>
      <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
        {showErrorAlert ? (<Alert severity="error">Please fill in all fields as requested!</Alert>) : (<div></div>)}
        <Typography component="h1" variant="h4" align="center">
          Customer Survey
        </Typography>
        <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <React.Fragment>
          {activeStep === steps.length ? (
            <React.Fragment>
              <Typography variant="h5" gutterBottom>
                {lastMessage}
              </Typography>
            </React.Fragment>
          ) : (
            <React.Fragment>
              {getStepContent(activeStep)}
              <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                {/*{activeStep !== 0 && (
                  <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                    Back
                  </Button>
                )} */}
                <Button
                  variant="contained"
                  onClick={handleNext}
                  sx={{ mt: 3, ml: 1 }}
                >
                  {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                </Button>
              </Box>
            </React.Fragment>
          )}
        </React.Fragment>
      </Paper>
    </Container>

  );
}

export default App;
