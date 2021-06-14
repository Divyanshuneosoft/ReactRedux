import React from 'react';
import { Card, Container, Grid, Typography } from '@material-ui/core'
import { makeStyles } from "@material-ui/core/styles";
import { Link } from 'react-router-dom';

const PostView = ({ data }) => {
    const useStyles = makeStyles({
        card: {
            textAlign: 'center',
            boxShadow: "0 5px 8px 0 rgba(0, 0, 0, 0.3)",
            backgroundColor: "#fafafa",
        },
        container: {
            marginLeft: '30%'
        }

    })
    const classes = useStyles()
    return (
        <Container maxWidth="lg" className={classes.container}>
            <Grid item xs={12} sm={4}>
                {data.map(item => (
                    <Card className={classes.card} key={item._id}>
                        <Typography color="primary" variant="h5" >
                            Title: {item.title}
                        </Typography>
                        <Typography color="textSecondary" variant="subtitle2" >
                            Content: {item.content}
                        </Typography>
                        <Typography color="textSecondary" variant="subtitle2" >
                            Author: {item.author}
                        </Typography>
                        <Typography color="textSecondary" variant="subtitle2" >
                           Published: {`${new Date(item.addedAt).toLocaleDateString()}`}
                        </Typography>
                        <Link to={`/edit/${item._id}`}>
                            Edit
                        </Link>
                    </Card>

                ))}
            </Grid>

        </Container>
    )
}

export default PostView
