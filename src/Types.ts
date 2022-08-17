export interface ISurveyDataStorage {
    isSurveyCompleted: boolean
    age: number
    gender: number
    havingCarDrivingLicense: boolean
    isItYourFirstCar: any
    whichDrivetrainDoYouPrefer: any
    areYouWorriedAboutFuelEmissions: any
    howManyCarsDoYouHaveInYourFamily: number
    careMakesModels : ICarMakeModel[]
}


export interface ISurveyData {
    surveySubmitResult: ISubmitResult
    age: number
    gender: IOptionsNumber
    havingCarDrivingLicense: IOptionsBoolean
    isItYourFirstCar: IOptionsBoolean
    whichDrivetrainDoYouPrefer: IOptionsNumber
    areYouWorriedAboutFuelEmissions: IOptionsBoolean
    howManyCarsDoYouHaveInYourFamily: number
    careMakesModels : ICarMakeModel[]

}

export interface ISubmitResult {
    success: boolean;
    message: string;
}
export interface IOptionsBoolean {
    value: boolean;
    label: string;
}
export interface IOptionsNumber {
    value: number;
    label: string;
}
export interface IOptionsNumber {
    value: number;
    label: string;
}
export interface ICarMakeModel {
    value: number;
    label: string;
    model: string;
}
export interface ICarModelValidation {
     value: number
     label: string
     regex: RegExp
}
//export const optionsGender = ["",'M', 'F', 'Other'];
enum GenderEnum {
    Default = 0,
    Male = 1,
    Fmale = 2,
    Other = 3,
}
export enum CompanyStaffSurveyEnum{
    CompanyStaff =1,
    Survey = 2
}
export enum AgeEnum {
    minAgeLimit = 0,
    maxAgeLimit = 100,
    minAge = 18,
    rangeAge = 25
}
export enum DrivetrainEnum {
    Default = 0,
    FWD = 1,
    RWD = 2,
    IDontKnow = 3,
}
export enum CareMakeEnum {
    Default = 0,
    BMW = 1,
    AUDI = 2,
    MERCEDES = 3,
}
export enum StepsEnum {
    fistStep = 0,
    secondStep = 1,
}
export const optionsDrivetrain = [
    { value: DrivetrainEnum.Default, label: "" },
    { value: DrivetrainEnum.FWD, label: "FWD" },
    { value: DrivetrainEnum.RWD, label: "RWD" },
    { value: DrivetrainEnum.IDontKnow, label: "I don’t know" }
];
export const optionsGender = [
    { value: GenderEnum.Default, label: "" },
    { value: GenderEnum.Male, label: "Male" },
    { value: GenderEnum.Fmale, label: "Fmale" },
    { value: GenderEnum.Other, label: "Other" }
];
export const optionsTrueFalse = [
    { value: false, label: "" },
    { value: false, label: "No" },
    { value: true, label: "Yes" }
];

export const optionsTrueFalseHavingDrivingLicense = [
    { value: false, label: "" },
    { value: true, label: "Yes" },
    { value: false, label: "No, I prefer using other transport" }
];

export const optionsCarMakeModel = [
    { value: CareMakeEnum.Default, label: "", model: "" },
    { value: CareMakeEnum.MERCEDES, label: "MERCEDES", model: "" },
    { value: CareMakeEnum.BMW, label: "BMW", model: "" },
    { value: CareMakeEnum.AUDI, label: "AUDI", model: "" }
];
//label: "Starts with “A”,“B”,“C”,“E” and 3 Numbers" , regex: /^((A|a|B|b|c|C|E|e)\d{3}$)/},
//label: "Starts with “M” (optional)- 3 Numbers- Ends with “d” or ”i” (optional) Or Starts with “X” OR “Z”- 1 Number" , regex: /(^M?m?\d{3}d?D?i?I?$)|(^(X|x|Z|z)\d$)/ },
export const optionsCarMakeAndRegexWithHelperMessage = [
    { value: CareMakeEnum.MERCEDES, label: "Starts with “A”,“B”,“C”,“E” and 3 Numbers" , regex: /^((A|a|B|b|c|C|E|e)\d{3}$)/},
    { value: CareMakeEnum.BMW,      label: "Starts with “M” (optional)- 3 Numbers- Ends with “d” or ”i” (optional) Or Starts with “X” OR “Z”- 1 Number" , regex: /(^M?m?\d{3}d?D?i?I?$)|(^(X|x|Z|z)\d$)/ },
    { value: CareMakeEnum.AUDI,     label: "a and a number from 3 to 8 Or Q and a number from 2 to 8", regex: /(^(a|A)[3-8]$)|(^(q|Q)[2-8]$)/ }
];