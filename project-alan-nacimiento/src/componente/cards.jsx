import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography'
import { Card, CardHeader, CardContent, CardActions, ButtonBase, Button } from '@material-ui/core';

export default function Cards() {
    return(
        <Grid container spacing={5} alignItems="flex-end">
            <Grid item xs={12} sm={6} md={4}>
                <Card>
                    <CardHeader>
                        <CardContent>
                            <Typography variant="h1" color="initial">Hola</Typography>
                        </CardContent>
                    </CardHeader>
                    <CardContent>
                        <Typography variant="h3" color="textPrimary">$0</Typography>
                        <Typography variant="h6" color="textSecondary">/mo</Typography>
                    </CardContent>
                    <CardActions>
                        <ButtonBase>
                            <Button variant="outlined" color="primary">
                                SING UP FOR FREE
                            </Button>
                        </ButtonBase>
                    </CardActions>
                </Card>
            </Grid>
        </Grid>
    )
}