import * as React from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { CareMakeEnum, ICarMakeModel, IOptionsBoolean, IOptionsNumber, ISurveyData, optionsCarMakeModel, optionsDrivetrain, optionsTrueFalse } from './Types';
import CarMakeModelComponent from './CarMakeModelComponent';
interface ISurveyDataProps {
  surveyDataCollected: ISurveyData
  setSurveyCollect:Function  
}
const SurveyFormTwo: React.FunctionComponent<ISurveyDataProps> = (props) => {
  const { surveyDataCollected ,setSurveyCollect} = props;
  const [inputWhichDrivetrainDoYouPrefer, setInputWhichDrivetrainDoYouPrefer] = React.useState(surveyDataCollected.whichDrivetrainDoYouPrefer);
  const [inputAreYouWorriedAboutFuelEmissions, setInputAreYouWorriedAboutFuelEmissions] = React.useState(surveyDataCollected.areYouWorriedAboutFuelEmissions);
  const [inputhowManyCarsDoYouHaveInYourFamily, setinputhowManyCarsDoYouHaveInYourFamily] = React.useState(surveyDataCollected.howManyCarsDoYouHaveInYourFamily)
  const runThisFunc = (index:number,value:string,label:string,model:string) => {
    //console.log(e) 
    console.log("*****") 
   console.log(surveyDataCollected.careMakesModels.length)
   console.log(surveyDataCollected.careMakesModels[index])
   
     if (value!=="") {
/*       console.log(value) 
      console.log(label)  */
    surveyDataCollected.careMakesModels[index].label = label 
     /* */surveyDataCollected.careMakesModels[index].value = Number(value) 
    
    }else{
    surveyDataCollected.careMakesModels[index].model = model 
    /* console.log(model)  */
    } 
    //setSurveyCollect(surveyDataCollected)
    console.log(index)
  }
  return (
    <React.Fragment>
  {/*     <div>
        {JSON.stringify(surveyDataCollected)}
      </div> */}
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
           helperText = {inputWhichDrivetrainDoYouPrefer.label===""?"please choose something!":""}
            id="whichDrivetrainDoYouPrefer"
            select
            required
            fullWidth
            label="Which Drivetrain Do You Prefer ?"
            value={String(inputWhichDrivetrainDoYouPrefer.label)}
            onChange={(e) => {
              try {
                var val = optionsDrivetrain.find(x => x.label === String(e.target.value)) as IOptionsNumber;
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
          helperText = {inputAreYouWorriedAboutFuelEmissions.label===""?"please choose something!":""}
            id="areYouWorriedAboutFuelEmissions"
            select
            required
            fullWidth
            label="Are you worried about fuel emissions?  "
            value={String(inputAreYouWorriedAboutFuelEmissions.label)}
            onChange={(e) => {
              try {
                var val = optionsTrueFalse.find(x => x.label === String(e.target.value)) as IOptionsBoolean;
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
                    var careArrayLength = surveyDataCollected.careMakesModels.length
                    if(num>careArrayLength){
                      for (let index = careArrayLength; index < num; index++) {                    
                        surveyDataCollected.careMakesModels.push({ value: CareMakeEnum.Default, label: "", model: "" })
                      }
                    }
                    if(num<careArrayLength){
                      for (let index = num; index < careArrayLength; index++) {                    
                        surveyDataCollected.careMakesModels.pop()
                      }
                    }
                   
                   /*  surveyDataCollected.careMakesModels = [];
                    for (let index = 1; index <= num; index++) {                    
                      surveyDataCollected.careMakesModels.push({ value: CareMakeEnum.Default, label: "", model: "" })
                    } */
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
        {surveyDataCollected.careMakesModels.map((data,index) => (
       <CarMakeModelComponent key={index} sendKey={index} carMakeModelCollected = {data} func = {runThisFunc}/>
      ))}
{/*           <CarMakeModelComponent carMakeModelCollected = {surveyDataCollected.careMakesModels.find(x=>x.label =="") as ICarMakeModel}/>
 */}        
      </Grid>
    </React.Fragment>
  );
}

export default SurveyFormTwo;