export interface ISurveyData{
    id:number
    surveySubmitResult:ISubmitResult
    age:number
    gender:string
    havingCarDrivingLicense:ITrueFalse
    isItYourFirstCar:boolean
    whichDrivetrainDoYouPrefer:string
    areYouWorriedAboutFuelEmissions:boolean
    howManyCarsDoYouHaveInYourFamily:number


}

export interface ISubmitResult {
    success: boolean;
    message: string;
  }
  export interface ITrueFalse{
    value: boolean;
    label: string;
  }
  export const optionsGender = ["",'M', 'F', 'Other'];
  export const optionsTrueFalse = [
    { value: false, label: "" },
    { value: true, label: "Yes" },
    { value: false, label: "No"}

   
    ];