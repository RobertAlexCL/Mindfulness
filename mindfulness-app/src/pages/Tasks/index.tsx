import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Navbar from '../../components/NavBar'
import Background from '../../resources/images/Meditation-Center.jpg'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import ButtonBase from '@material-ui/core/ButtonBase'
import ideas from '../../resources/images/ideasirracionales.jpg'
import lab1 from '../../resources/images/lab11.jpg'
import lab2 from '../../resources/images/lab2.jpg'

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
        height: '400vh'
    },
    bottom: {
        backgroundColor: theme.palette.primary.contrastText
      },
      textbottom: {
        color: theme.palette.primary.main,
        margin: (40)
      },
      image: {
        maxWidth: 615
      }
}))

const Tasks = () => {
    const classes = useStyles()
    return(<>
    <Navbar/>
    <Container maxWidth={false}>
    <Grid container direction='row' style={{ textAlign: 'center' }} >
        <Grid item xs={12} sm={8} md={6}>
          <ButtonBase>
            <img className={classes.image} alt='logo' src={lab1} />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm={8} md={6} className={classes.bottom}>
          <Typography variant='h3' className={classes.textbottom}>Laboratorio 1</Typography>
          <Typography variant='body1' className={classes.textbottom}>El primer laboratorio resultó ser de mi agrado ya que fue de mis primeras experiencias tratando la meditación de forma más formal, siento que avancé mucho en una semana y comencé a notar lo efectos positivos de esta..</Typography>
        </Grid>
        <Grid item xs={12} sm={8} md={6} className={classes.bottom}>
          <Typography variant='h3' className={classes.textbottom}>Laboratorio 2</Typography>
          <Typography variant='body1' className={classes.textbottom}>Esta actividad fue muy especial para mí ya que las diferentes actividades que se realizaron fueron bastante enriquecedoras y me dieron otra percepción de algunos puntos de vista en mi interior, personalmente la actividad que mas impacto me causó fue "el niño que hay en mi".</Typography>
        </Grid>
        <Grid item xs={12} sm={8} md={6}>
          <ButtonBase>
            <img className={classes.image} alt='logo' src={lab2} />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm={8} md={6}>
          <ButtonBase>
            <img className={classes.image} alt='logo' src={ideas} />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm={8} md={6} className={classes.bottom}>
          <Typography variant='h3' className={classes.textbottom}>Registro individual de ideas irracionales</Typography>
          <Typography variant='body1' className={classes.textbottom}>Ya había leido bastante de esta práctica, recuerdo leerlo en un libro sobre a terapia cognitiva conductual, ahora mismo el autor no lo tengo presente pero se me hizo una práctica muy similar que no solo funciona para las personas ansiosas o depresivas, sino a todo el mundo le es muy útil.</Typography>
        </Grid>
      </Grid>
        </Container>
    </>)
}

export default Tasks