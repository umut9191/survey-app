import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Autocomplete from '@mui/material/Autocomplete';
import { useFormControl } from '@mui/material/FormControl';
import { ISurveyData, optionsGender, optionsTrueFalse, IOptionsBoolean, IOptionsNumber, optionsTrueFalseHavingDrivingLicense, AgeEnum } from './Types';

interface ISurveyDataProps {
  surveyDataCollected: ISurveyData
  /*  onSurveyCollectChanged:Function  */
}



const SurveyFormOne: React.FunctionComponent<ISurveyDataProps> = (props) => {
  //const {surveyDataCollected,onSurveyCollectChanged} = props;
  const { surveyDataCollected } = props;
  const [inputValueGender, setInputValueGender] = React.useState(surveyDataCollected.gender);
  const [age, setAge] = React.useState(surveyDataCollected.age);
  const [inputHavingCarDrivingLicense, setInputHavingCarDrivingLicense] = React.useState(surveyDataCollected.havingCarDrivingLicense);
  const [inputIsItYourFirstCar, setInputIsItYourFirstCar] = React.useState(surveyDataCollected.isItYourFirstCar);
  const [askIsItYourFirstCar, setAskIsItYourFirstCar] = React.useState<boolean>(false);

  //optionsGender[0]
  //const [valueGender, setValueGender] = React.useState<string | null>(inputValueGender);

  return (
    <React.Fragment>
      <div>
        {JSON.stringify(surveyDataCollected)}
      </div>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            helperText="Please enter between: 0 - 100"
            inputProps={{ inputMode: "numeric", pattern: "^[1-9][0-9]?$|^99$" }}
            required
            id="age"
            name="age"
            label="Age"
            fullWidth
            /* type="number" */
            autoComplete="age"
            variant="standard"
            value={age}
            onChange={(e) => {
              try {
                const num = Number(e.target.value)
                if (!isNaN(+num)) {
                  if(num !== -1){
                  if(num>=AgeEnum.minAge && num<=AgeEnum.rangeAge){
                    setAskIsItYourFirstCar(true);
                  }else{
                    setAskIsItYourFirstCar(false);
                  }
                  surveyDataCollected.age = num
                  setAge(num);
                }
                }

              } catch (error) {
                console.log(error)
              }


            }}
          />

        </Grid>
        <Grid item xs={12}>
          <TextField
          helperText = {inputValueGender.label==""?"please choose something!":""}
            id="gender"
            select
            required
            fullWidth
            label="Gender"
            value={String(inputValueGender.label)}
            onChange={(e) => {
              try {
                var val = optionsGender.find(x => x.label == String(e.target.value)) as IOptionsNumber;
                surveyDataCollected.gender = val;
                setInputValueGender(val);
              } catch (error) {
                console.log(error)
              }
            }}
            SelectProps={{
              native: true,
            }}
            variant="standard"
          >
            {optionsGender.map((option) => (
              <option key={String(option.label)} value={String(option.label)}>
                {option.label}
              </option>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={12}>

          <TextField
          /* inputProps={{ inputMode: "text", pattern: "[A-Za-z0-9]{1,20}" }} */
            helperText = {inputHavingCarDrivingLicense.label==""?"please choose something!":""}
            id="havingCarDrivingLicense"
            select
            required
            fullWidth
            label="Do you own a car driving license?"
            value={String(inputHavingCarDrivingLicense.label)}
            onChange={(e) => {
              try {
                console.log(e.target.value)
                var val = optionsTrueFalseHavingDrivingLicense.find(x => x.label == String(e.target.value)) as IOptionsBoolean;
                surveyDataCollected.havingCarDrivingLicense = val;
                setInputHavingCarDrivingLicense(val);
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
            {optionsTrueFalseHavingDrivingLicense.map((option) => (
              <option key={String(option.label)} value={String(option.label)}>
                {option.label}
              </option>
            ))}
          </TextField>
        </Grid>
       {askIsItYourFirstCar === true? (<Grid item xs={12}>
          <TextField
            helperText = {inputIsItYourFirstCar.label==""?"please choose something!":""}
            id="isItYourFirstCar"
            select
            required
            fullWidth
            label="İs It Your First Car ?"
            value={String(inputIsItYourFirstCar.label)}
            onChange={(e) => {
              try {
                var val = optionsTrueFalse.find(x => x.label == String(e.target.value)) as IOptionsBoolean;
                surveyDataCollected.isItYourFirstCar = val;
                setInputIsItYourFirstCar(val);
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
        </Grid>): (<Grid></Grid>)
        }
      </Grid>
    </React.Fragment>
  );
}

export default SurveyFormOne;