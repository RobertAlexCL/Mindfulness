import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Navbar from '../../components/NavBar'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Background from '../../resources/images/moon3.jpg'
import ButtonBase from '@material-ui/core/ButtonBase'
import lebron from '../../resources/images/lebron.jpg'
import { Link } from 'react-router-dom'

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
    },
    image: {
        maxWidth: 700
      }
}))

const Free = () => {
    const classes = useStyles()
    return(<>
    <Navbar/>
    <Container maxWidth={false} className={classes.background}>
    <Grid container direction='row' alignItems='center' spacing={ 4} >
        <Grid item xs={12} sm={8} md={6}>
            <Link target='_blank' to='https://www.latimes.com/sports/lakers/la-sp-lakers-meditation-20181217-story.html'/>
          <ButtonBase target='_blank' href='https://www.latimes.com/sports/lakers/la-sp-lakers-meditation-20181217-story.html'>
            <img className={classes.image} alt='logo' src={lebron} />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm={8} md={6}>
          <Typography variant='h3' className={classes.title}>Mindfulness en tema de interes</Typography>
          <Typography variant='body1' className={classes.bodycolor}>Siempre he sido fan de los deportes, desde las artes marciales mixtas hasta el futbol o el basket, en este caso me cenetraré en cómo los ultimos campeones de la NBA han utilizado técnicas de Mindfulness para mejorar su rendimiento, especificamente me centraré en Lebron James.</Typography>
          <Typography  variant='body1' className={classes.bodycolor}>Quizás uno de los atletas más famosos del mundo en este momento, LeBron James parece desafiar la física con sus volcadas y desafiar al Padre Tiempo con su capacidad para ser el mejor en el juego incluso después de 15 temporadas en la NBA. Gran parte de esta ventaja no solo proviene de su ética de trabajo y su talento natural, sino del hecho de que depende en gran medida de la meditación. James no solo medita con regularidad en la privacidad de su propia casa, durante los Playoffs de la NBA de 2012, es famoso por meditar durante un tiempo fuera para ayudarlo a volver a concentrarse en la tarea que tiene por delante. Este comportamiento parece influir bastante en sus compañeros que lo han estado practicando ultimamente, lo cual les ha brindado grandes resultados consiguiendo así un campeonato.</Typography>
          <Typography variant='body1' className={classes.bodycolor}>Al hacer click en la imagen, se enviará al articulo de referencia.</Typography>
        </Grid>
      </Grid>
        </Container>
    </>)
}

export default Free