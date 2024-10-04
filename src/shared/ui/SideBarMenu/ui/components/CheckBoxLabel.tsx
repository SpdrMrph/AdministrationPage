import { Checkbox, FormControlLabel, FormGroup } from '@mui/material'
import { Grid } from '@mui/system'

export const CheckBoxLabel = () => {
    return (
        <FormGroup>
            <Grid container spacing={3} flexDirection={'column'}>
                <FormControlLabel
                    control={<Checkbox defaultChecked />}
                    label="INFO"
                />
                <FormControlLabel control={<Checkbox />} label="ERROR" />
                <FormControlLabel control={<Checkbox />} label="WARNING" />
                <FormControlLabel control={<Checkbox />} label="ADMIN" />
            </Grid>
        </FormGroup>
    )
}
