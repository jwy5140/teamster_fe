import React, { useEffect, useContext, Fragment } from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardHeader from '@material-ui/core/CardHeader'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

import { AuthUser } from '../App'
import { ViewState } from '../App'

const Main = () => {

    const [user, setUser] = useContext(AuthUser)
    const [view, setView] = useContext(ViewState)
    
    return <Fragment>
        <Card style={{gridArea: '1/2/span 3/span 3'}} id='main-header'>
            <CardContent>
                <CardHeader title={`Hello ${user.first_name}.`} className='main-header'>
                </CardHeader>
                <Typography variant="body1" color="inherit" component="p">
                    What would you like to do today?
                </Typography>
            </CardContent>
        </Card>
        <Card style={{gridArea: '5/1/span 4/span 2'}}>
                <CardContent>
                    <CardHeader title={'Goals'}>
                    </CardHeader>
                </CardContent>
                <CardActions>
                    <Button size='medium' variant='outlined' color='inherit' onClick={()=>setView('goals-container')}>
                        View Goals
                    </Button>
                    <Button size='medium' variant='outlined' color='inherit' onClick={()=>setView('goals-form')}>
                        Create Goals
                    </Button>
                    <Button size='medium' variant='outlined' color='inherit'>
                        History
                    </Button>
                </CardActions>
        </Card>
        <Card style={{gridArea: '5/4/span 4/span 2'}}>
                <CardContent>
                    <CardHeader title={'Network'}>
                    </CardHeader>
                </CardContent>
                <CardActions>
                <Button size='medium' variant='outlined' color='inherit' onClick={()=>setView('network-container')}>
                        Your Networks
                    </Button>
                    <Button size='medium' variant='outlined' color='inherit'>
                        Network Goals
                    </Button>
                    <Button size='medium' variant='outlined' color='inherit'>
                        Placeholder 1
                </Button>
                </CardActions>
        </Card>
        <Card style={{gridArea: '10/2/span 4/span 3'}}>
            <CardActionArea onClick={()=>setView('calendar')}>
                    <CardHeader title={'Calendar'} style={{marginTop: '3.25%', paddingBottom: '10%'}}>
                    </CardHeader>
            </CardActionArea>
        </Card>
        <Card style={{gridArea: '15/2/span 4/span 3'}}>
            <CardActionArea>
                    <CardHeader title={'Stats'} style={{marginTop: '3.25%', paddingBottom: '10%'}}>
                    </CardHeader>
            </CardActionArea>
        </Card>
    </Fragment>
}

export default Main