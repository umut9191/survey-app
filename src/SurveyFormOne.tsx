import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Autocomplete from '@mui/material/Autocomplete';
import { ISurveyData, optionsGender, optionsTrueFalse ,ITrueFalse} from './Types';

interface ISurveyDataProps{
  surveyDataCollected:ISurveyData
 /*  onSurveyCollectChanged:Function  */
}



const SurveyFormOne:React.FunctionComponent<ISurveyDataProps> =(props) =>{
  //const {surveyDataCollected,onSurveyCollectChanged} = props;
  const {surveyDataCollected} = props;
  const [inputValueGender, setInputValueGender] = React.useState(surveyDataCollected.gender);
  const [age, setAge] = React.useState(surveyDataCollected.age);
  const [inputHavingCarDrivingLicense, setInputHavingCarDrivingLicense] = React.useState(surveyDataCollected.havingCarDrivingLicense);
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
          //helperText="Incorrect entry."
            required
            id="age"
            name="age"
            label="Age"
            type="number"
            fullWidth
            autoComplete="age"
            variant="standard"
            value={age}
            onChange = {(e) =>{
              surveyDataCollected.age = Number(e.target.value)
              setAge(Number(e.target.value));
              //onSurveyCollectChanged(surveyDataCollected);
              console.log(e.target.value)
          }}
          />
        </Grid>
        <Grid item xs={12}>
      <Autocomplete
        value={inputValueGender}
        onChange={(event: any, newValue: string | null) => {       
          //setInputValueGender(newValue);
        }}
        inputValue={inputValueGender}
        onInputChange={(event, newInputValue) => {
          surveyDataCollected.gender = newInputValue;
          setInputValueGender(newInputValue);
        }}
        id="gender"
        options={optionsGender}
        /* sx={{ width: 300 }} */
        renderInput={(params) => <TextField required  {...params} label="Gender" variant="standard" />}
      />
        </Grid>
        <Grid item xs={12}>
        <Autocomplete
        value={String(inputHavingCarDrivingLicense.label)}
        inputValue={String(inputHavingCarDrivingLicense.label)}
        onInputChange={(event, newInputValue) => {                
          const val = optionsTrueFalse.find(x=>x.label==newInputValue) as ITrueFalse;         
          surveyDataCollected.havingCarDrivingLicense = val;
          setInputHavingCarDrivingLicense(val); 
        }}
        id="havingCarDrivingLicense"
        options= {optionsTrueFalse.map((option) => (
            option.label
        ))}
        /* sx={{ width: 300 }} */
        renderInput={(params) => <TextField required  {...params} label="Do you own a car driving license?" variant="standard" />}
      />
     {/*   <TextField
          id="havingCarDrivingLicense"
          select
          label="Do you own a car driving license?"
          value={inputHavingCarDrivingLicense}
          onChange = {(e) =>{
            surveyDataCollected.havingCarDrivingLicense = Boolean(e.target.value)
            setInputHavingCarDrivingLicense(Boolean(e.target.value));
        }}
          SelectProps={{
            native: true,
          }}
          variant="standard"
        >
          {optionsHavingCarDrivingLicense.map((option) => (
            <option key={String(option.value)} value={String(option.value)}>
              {option.label}
            </option>
          ))}
        </TextField> */}
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default SurveyFormOne;