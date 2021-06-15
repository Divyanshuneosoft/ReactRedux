import React,{useEffect, useState} from 'react';
import { TextField,Button,Grid,Container } from '@material-ui/core'
const AddPostView = ({submit,updatedData}) => {
    const post = {title:'',content:'',author:''}
    const [formData,setFormData] = useState(post)
    const onChange = (e)=>{
       setFormData({
           ...formData,
           [e.target?.name]:e.target?.value
       })
    }
    const submitForm = (e)=>{
        e.preventDefault()
        let data = {};
        Object.keys(formData).forEach(key=>{
            formData[key] && (data[key] = formData[key])
        })
        setFormData(post)
        submit(data)
    }
    useEffect(()=>{
       if(updatedData) setFormData(updatedData)
    },[updatedData])
 
    return (
        <Container maxWidth="xs">
        <form onSubmit={submitForm}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField fullWidth label="title" name="title" size="small" variant="outlined" value={formData?.title}  onChange={onChange}
/>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="content"
                  name="content"
                  fullWidth
                  size="small"
                  onChange={onChange}
                  value={formData?.content}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="author"
                  name="author"
                  fullWidth
                  size="small"
                  onChange={onChange}
                  value={formData?.author}
                  variant="outlined"
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Button color="secondary" fullWidth type="submit" variant="contained">
                Post
            </Button>
          </Grid>
        </Grid>

        </form>
            
        </Container>
    )
}

export default AddPostView
