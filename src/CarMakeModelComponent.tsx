import * as React from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { CareMakeEnum, ICarMakeModel, ICarModelValidation, optionsCarMakeAndRegexWithHelperMessage, optionsCarMakeModel } from './Types';

interface ICarMakeModelProps {
    sendKey: number
    carMakeModelCollected: ICarMakeModel
    func: Function
}

const CarMakeModelComponent: React.FunctionComponent<ICarMakeModelProps> = (props) => {
    var { sendKey, carMakeModelCollected, func } = props;
    const [inputCarMake, setInputCarMake] = React.useState<ICarMakeModel>(carMakeModelCollected);
    const [inputCarMakeModelCollected, setInputCarMakeModelCollected] = React.useState<ICarMakeModel>(carMakeModelCollected);
    const [inputModel, setInputModel] = React.useState<string>("");
    const [inputModelVisible, setInputModelVisible] = React.useState<boolean>(false);
    const [inputCarModelValidation, setCarModelValidation] = React.useState<ICarModelValidation>({ value: CareMakeEnum.Default, label: "", regex: /^M?m?\d{3}d?D?i?I?$/ });
    const [isModelValid, setIsModelValid] = React.useState<boolean>(false);

    return (
        <>
            <Grid item xs={12} sm={6}>
                <TextField
                    required
                    select
                    id="carMake"
                    name="carMake"
                    label="Choose a car make"
                    fullWidth
                    variant="standard"
                    value={String(inputCarMake.label)}
                    onChange={(e) => {
                        try {
                            var val = optionsCarMakeModel.find(x => x.label === String(e.target.value)) as ICarMakeModel;
                            var result = { value: val.value, label: val.label, model: inputCarMakeModelCollected.model } as ICarMakeModel
                           if(val.label!==""){
                            setInputModelVisible(true)
                            setCarModelValidation(optionsCarMakeAndRegexWithHelperMessage.find(x=>x.value == val.value) as ICarModelValidation)
                           }else{
                            setInputModelVisible(false)
                            setCarModelValidation({ value: CareMakeEnum.Default, label: "", regex: /^M?m?\d{3}d?D?i?I?$/ })

                           }
                            //carMakeModelCollected = val;
                            setInputCarMake(result);
                            //setInputCarMakeModelCollected(result);
                            func(sendKey, val.value,val.label,"")
                        } catch (error) {
                            console.log(error)
                        }
                    }}
                    SelectProps={{
                        native: true,
                    }}
                >
                    {optionsCarMakeModel.map((option) => (
                        <option key={String(option.label)} value={String(option.label)}>
                            {option.label}
                        </option>
                    ))}
                </TextField>
            </Grid>
            <Grid item xs={12} sm={6}>
               {inputModelVisible? <TextField            
                    required
                    helperText={!isModelValid?inputCarModelValidation.label:""}
                    error={!isModelValid}
                    value={inputModel}
                    id="model"
                    name="model"
                    label="Car Model"
                    fullWidth
                    variant="standard"
                    onChange={(e) => {
                        var result = { value: inputCarMakeModelCollected.value, label: inputCarMakeModelCollected.label, model: e.target.value } as ICarMakeModel
                        console.log("/^M?m?\d{3}d?D?i?I?$/.test(e.target.value)")
                        //console.log(/^M?m?\d{3}d?D?i?I?$/.test(e.target.value))
                       // console.log(optionsCarMakeAndRegexWithHelperMessage.find(x=>x.value == result.value)?.regex.test(e.target.value))
                       
                        setInputModel((e.target.value).toLowerCase())
                        if(inputCarModelValidation.regex.test(e.target.value)){
                            setIsModelValid(true);
                            func(sendKey, "","",(e.target.value).toLowerCase())
                        }else{
                            setIsModelValid(false);
                            func(sendKey, "","","")
                        }
                       
                    }}
                />:<div></div>}
            </Grid>
        </>
    );
}

export default CarMakeModelComponent;