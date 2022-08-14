import * as React from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { ICarMakeModel, optionsCarMakeModel } from './Types';

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
                            var val = optionsCarMakeModel.find(x => x.label == String(e.target.value)) as ICarMakeModel;
                            var result = { value: val.value, label: val.label, model: inputCarMakeModelCollected.model } as ICarMakeModel
                            //carMakeModelCollected = val;
                            setInputCarMake(result);
                            setInputCarMakeModelCollected(result);
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
                <TextField
                    required
                    value={inputModel}
                    id="model"
                    name="model"
                    label="Car Model"
                    fullWidth
                    variant="standard"
                    onChange={(e) => {

                        var result = { value: inputCarMakeModelCollected.value, label: inputCarMakeModelCollected.label, model: e.target.value } as ICarMakeModel
                        setInputModel(e.target.value)
                        setInputCarMakeModelCollected(result)
                        //func(sendKey, inputCarMakeModelCollected)
                        func(sendKey, "","",e.target.value)

                    }}
                />
            </Grid>
        </>
    );
}

export default CarMakeModelComponent;