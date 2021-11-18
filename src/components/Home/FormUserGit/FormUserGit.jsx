import React from 'react'
import {Form,  Button} from 'react-bootstrap'
const FormUserGit = ({HandleUserdata, HandleSearchUser}) => {
    return (
        <Form className="d-flex"
        onSubmit={e => HandleSearchUser(e)}
        >
        <Form.Control id="inlineFormInputName" 
        placeholder="Ingrese el usuario" 
        onChange={({target}) => HandleUserdata(target)}
        />
        <Button  type="submit">Submit</Button>
        </Form>
    ) 
}

export default FormUserGit;