import { Avatar, Card, CardContent, Grid, Typography } from '@mui/material';
import FunctionsIcon from '@mui/icons-material/Functions';
import PeopleIcon from '@mui/icons-material/PeopleOutlined';
import React, { useState } from 'react';
import { ISurveyDataStorage } from '../Types';
interface ISurveyDataProps {
  numberDataStorage: number
  text:string
  iconAverage:boolean
}
const CountedParticipatedComponent: React.FunctionComponent<ISurveyDataProps> = (props) => {
  const { numberDataStorage ,text,iconAverage} = props;
 const [numberData, setNumberData] = useState(numberDataStorage)
 React.useEffect(() => {
  if (isNaN(+numberData)) 
  {
    setNumberData(0);
  }
  
  }, []) 
return (
  <Card>
    <CardContent>
      <Grid
        container
        spacing={3}
        sx={{ justifyContent: 'space-between' }}
      >
        <Grid item>
          <Typography
            color="textSecondary"
            gutterBottom
            variant="overline"
          >
            {text}
          </Typography>
          <Typography
            color="textPrimary"
            variant="h4"
          >
           {numberData}
          </Typography>
        </Grid>
        <Grid item>
          <Avatar
            sx={{
              backgroundColor: "warning.main",
              height: 56,
              width: 56
            }}
          >
            {iconAverage?<FunctionsIcon/>:<PeopleIcon />}
          </Avatar>
        </Grid>
      </Grid>

    </CardContent>
  </Card>)
}
export default CountedParticipatedComponent;