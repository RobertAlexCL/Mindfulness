import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Navbar from '../../components/NavBar'
import Background from '../../resources/images/ia.jpg'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

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
       // height: '100vh'
       backgroundSize: 'cover',
    }
}))

const Topics = () => {
    const classes = useStyles()
    return(<>
    <Navbar/>
    <Container maxWidth={false} className={classes.background}>
            <Grid container direction='column' spacing={2} alignItems={'center'} justify={'center'} >
                <Grid item xs={12} sm={6}>
                    <Typography variant='h2' className={classes.title}> Temas de Mindfulness que logren relacionar con mi carrera, futuro o actual trabajo</Typography>
                    <Typography variant='body1' className={classes.bodycolor}>Actualmente luego de repasar un poco lo de ideas irracionales y cómo estas pueden estar muy relacionadas a las diferentes distorsiones cognitivas que hay, muchas veces trato de estar pendiente cuando tengo un sentimiento o paso por una mala situación que me afecta, trato de relacionar mi comportamiento para así finalmente dar con mis ideas irracionales y la distorsión que se le asemeje, de esta forma puedo solucionar mi mala situación que atraviese por cualquier tema de estrés que se me presente en la Universidad y el mundo laboral.</Typography>
                    <Typography variant='body1' className={classes.bodycolor}> Es algo que agradezco porque ya puedo manejar mis emociones negativas de mejor manera y así evitar en caer en diferentes espirales que muchas veces pueden hacernos mal no solo mentalmente sino que fisicamente, siento que tener el control sobre uno mismo es algo bastante bueni, sin embargo, creo que esta es una practica un poco dificil de manejar al principio, tienes que ser paciente y practicar bastante.</Typography>
                    <Typography variant='body1' className={classes.bodycolor}>Creo que el Mindfuless como tal es aplicable en cualquier carrera y ambito laboral, siempre se necesita estar concentrado de la mejor forma posible y tener una sanidad mental bastante estable para poder rendir de una mejor forma.</Typography>
                    <Typography variant='body1' className={classes.bodycolor}>Aunque, muchas veces en el mundo de la computación se trabaja por lapsos de tareas en lugar de horas al día, aunque siempre hay una fecha de entrega para estás tareas y para proyectos de software, aveces estás pueden verse perjudicadas por distintos contratiempos o problemas que uno tiene que serolver bajo presión, esto puede ser de un día o una semana entera, por lo que estar en buena sintonía, enfocado y calmado, puede hacer que rindas de una mejor manera y evitar cualquier tipo de percance cómo los mencionados anteriormente.</Typography>
                </Grid>
            </Grid>
        </Container>
    </>)
}

export default Topics