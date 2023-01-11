import { Grid, Typography, Button, Dialog, DialogContent, DialogTitle } from '@mui/material'
import React, {useState} from 'react'
import parse from "html-react-parser";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import InfoIcon from '@mui/icons-material/Info';
import DoneIcon from '@mui/icons-material/Done';
import Style from './style';

const CityDataIndex = ({ infoData }) => {
    const [open, setOpen] = useState(false);
    const classes = Style();
    const handleClick = (link) => {
        window.open(link)
    }
    return (
        <Grid container className={classes.main}>
            <Grid item xs={12} className={classes.mainItem}>
                <Grid container>
                    <Grid xs={1}>
                        <Grid className={classes.title}>
                            <Typography>
                                Electricity 
                            </Typography>
                            <Typography className={classes.elctricityInfo} >
                            {infoData.length ? infoData.length : 0}
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container xs={11} className={classes.titleRight}>
                        <Grid item style={{display:'flex'}}>
                            <LocationOnIcon className={classes.locationIcon}/>
                            <Typography >2000, NSW</Typography>
                        </Grid>
                        <Grid item className={classes.iconFilter}>
                            <FilterAltOutlinedIcon className={classes.filterIcon} />
                            <Typography>Filter</Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid xs={12}>
                    <Typography className={classes.heading}>
                        <InfoIcon className={classes.headingInfo}/>
                        <Typography>
                        Initial recommendations are based on avaerage medium usage as determined by relevant energy refulation, please view the information hover next to the estimated cost box for more information. For a more accurate comparison relevant to your circumstances, please use the bill details tab on the results page to enter your most recent energy bill details
                        </Typography>
                    </Typography>
                </Grid>
            </Grid>
            {infoData?.map((plan) => {
                return (
                    <>
                    <Grid item xs={12} className={classes.boxData}>
                        <span>Electricity</span>
                        <Grid container xs={12} spacing={2}>
                            <Grid item xs={4} className={`${classes.details} ${classes.color}`}>
                                <Grid item xs={12}>
                                    <img src={plan.provider_image} alt="img" />
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography onClick={() => setOpen(true)}>View Details</Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography onClick={() => handleClick(plan?.plan_document)}>Baisc Plan Information Document</Typography>
                                </Grid>
                            </Grid>
                            <Grid item xs={4} className={classes.details}>
                                <Grid item xs={12} className={classes.detailsData}>
                                    <Typography>{plan?.dmo_percentage?.Ausgrid}</Typography>
                                    <Typography>the current refernece price</Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography>{parse(plan?.plan_features)}</Typography>
                                </Grid>
                                <Grid item xs={12} className={classes.detailsRight}>
                                    <Typography>Standard feed in tariff: {plan?.expected_annually_discounted_bill_amount_deferit}</Typography>
                                </Grid>
                            </Grid>
                            <Grid item xs={4}>
                                <Grid item xs={12} className={classes.onlineData}>
                                    <Grid xs={12} className={classes.textData}>
                                        <Typography>Estimated Cost</Typography>
                                        <InfoIcon className={classes.infoIcon} />
                                    </Grid>
                                    <Grid xs={12} className={classes.amount}>
                                        <Grid className={classes.annuallyBill}>
                                            <p>${plan?.expected_annually_bill_amount}^</p>
                                            <p>/yr</p>
                                        </Grid>
                                        <Grid className={classes.monthlyBill}>
                                            <p>${plan?.expected_monthly_bill_amount}</p>
                                            <p>/mo</p>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} className={classes.content}>
                            <Typography>{parse(plan?.dmo_content?.Ausgrid)}</Typography>
                        </Grid>
                        <Grid container xs={12} className={classes.offPeriod}>
                            <Grid item xs={8} style={{display:'flex'}}>
                                
                                <Typography>{parse(plan?.cooling_off_period)}</Typography>
                                <DoneIcon className = {classes.doneIcon} />
                            </Grid>
                            <Grid item xs={4}>
                                <Button className={classes.onlineToday}>Connect Online Today</Button>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Dialog onClose={() => setOpen(false)}
                    aria-labelledby="customized-dialog-title"
                    open={open}>
                <DialogTitle>View Details</DialogTitle>
                <DialogContent>
                    <Typography>{parse(plan?.provider?.eic)}</Typography>
                </DialogContent>
            </Dialog>
                    </>
                )
            })}
        </Grid>
    )
}

export default CityDataIndex;