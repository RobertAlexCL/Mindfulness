import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Navbar from '../../components/NavBar'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Background from '../../resources/images/meditation.jpg'

const useStyles = makeStyles((theme) => ({
    title: {
        color: theme.palette.primary.contrastText
    },
    title2: {
        color: theme.palette.primary.contrastText,
        padding: theme.spacing(2)
    },
    bodycolor: {
        color: theme.palette.primary.light,
        padding: theme.spacing(4)
    },
    background: {
        backgroundImage: `url(${Background})`,
        backgroundRepeat: 'no-repeat',
        height: '100vh'
    }

}))

const Home = () => {
    const classes = useStyles()
    return (<>
        <Navbar />
        <Container maxWidth={false} className={classes.background}>
            <Grid container direction='column' spacing={2} alignItems={'center'} justify={'center'} >
                <Grid item xs={12} sm={6}>
                    <Typography variant='body1' className={classes.bodycolor}>Hola, mi nombre es</Typography>
                    <Typography variant='h2' className={classes.title}>Roberto Castillo</Typography>
                    <Typography variant='body1' className={classes.bodycolor}>y este es mi</Typography>
                    <Typography variant='h2' className={classes.title2}>Diario Reflexivo</Typography>
                </Grid>
            </Grid>
        </Container>
    </>)
}

export default Home