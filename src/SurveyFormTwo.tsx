import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { IOptionsBoolean, IOptionsNumber, ISurveyData, optionsDrivetrain, optionsTrueFalse } from './Types';
interface ISurveyDataProps {
  surveyDataCollected: ISurveyData
  /*  onSurveyCollectChanged:Function  */
}
const SurveyFormTwo: React.FunctionComponent<ISurveyDataProps> = (props) => {
  const { surveyDataCollected } = props;
  const [inputWhichDrivetrainDoYouPrefer, setInputWhichDrivetrainDoYouPrefer] = React.useState(surveyDataCollected.whichDrivetrainDoYouPrefer);
  const [inputAreYouWorriedAboutFuelEmissions, setInputAreYouWorriedAboutFuelEmissions] = React.useState(surveyDataCollected.areYouWorriedAboutFuelEmissions);
  const [inputhowManyCarsDoYouHaveInYourFamily, setinputhowManyCarsDoYouHaveInYourFamily] = React.useState(surveyDataCollected.howManyCarsDoYouHaveInYourFamily)
  return (
    <React.Fragment>
      <div>
        {JSON.stringify(surveyDataCollected)}
      </div>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
           helperText = {inputWhichDrivetrainDoYouPrefer.label==""?"please choose something!":""}
            id="whichDrivetrainDoYouPrefer"
            select
            required
            fullWidth
            label="Which Drivetrain Do You Prefer ?"
            value={String(inputWhichDrivetrainDoYouPrefer.label)}
            onChange={(e) => {
              try {
                var val = optionsDrivetrain.find(x => x.label == String(e.target.value)) as IOptionsNumber;
                surveyDataCollected.whichDrivetrainDoYouPrefer = val;
                setInputWhichDrivetrainDoYouPrefer(val);
              } catch (error) {
                console.log(error)
              }
            }}
            SelectProps={{
              native: true,
            }}
            variant="standard"
          >
            {optionsDrivetrain.map((option) => (
              <option key={String(option.label)} value={String(option.label)}>
                {option.label}
              </option>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={12}>

          <TextField
          helperText = {inputAreYouWorriedAboutFuelEmissions.label==""?"please choose something!":""}
            id="areYouWorriedAboutFuelEmissions"
            select
            required
            fullWidth
            label="Are you worried about fuel emissions?  "
            value={String(inputAreYouWorriedAboutFuelEmissions.label)}
            onChange={(e) => {
              try {
                var val = optionsTrueFalse.find(x => x.label == String(e.target.value)) as IOptionsBoolean;
                surveyDataCollected.areYouWorriedAboutFuelEmissions = val;
                setInputAreYouWorriedAboutFuelEmissions(val);
                console.log(val)
              } catch (error) {
                console.log(error)
              }
            }}
            SelectProps={{
              native: true,
            }}
            variant="standard"
          >
            {optionsTrueFalse.map((option) => (
              <option key={String(option.label)} value={String(option.label)}>
                {option.label}
              </option>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={12}>
        <TextField
          inputProps={{ inputMode: "numeric", pattern: "^[1-9][0-9]*$" }}
            required
            id="howManyCarsDoYouHaveInYourFamily"
            name="howManyCarsDoYouHaveInYourFamily"
            label="How many cars do you have in your family"     
            fullWidth
            type="number"
            variant="standard"
            value={inputhowManyCarsDoYouHaveInYourFamily}
            onChange = {(e) =>{
              try {
                const num = Number(e.target.value)
                if (!isNaN(+num)) {
                  if(num !== 0){
                    surveyDataCollected.howManyCarsDoYouHaveInYourFamily = num
                    setinputhowManyCarsDoYouHaveInYourFamily(num);
                  }
                }
               
              } catch (error) {
                console.log(error)
              }
          }}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default SurveyFormTwo;