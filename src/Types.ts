export interface ISurveyData {
    id: number
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
//export const optionsGender = ["",'M', 'F', 'Other'];
enum GenderEnum {
    Default = 0,
    Male = 1,
    Fmale = 2,
    Other = 3,
}
export enum AgeEnum {
    minAgeLimit = 0,
    maxAgeLimit = 100,
    minAge = 18,
    rangeAge = 25
}
enum DrivetrainEnum {
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