import React, { Component } from 'react';

export default function withFormManager(Form, model, submitter){
    return class FormManager extends Component{
        constructor(props){
            super(props)
            this.state = {
                error: '',
                ...model.defaultState
            }
        }

        handleChange = event => {
            this.setState({
                [event.target.name]: event.target.value
            })
        }

        handleSubmit = ev => {
            ev.preventDefault()

            let error = model.validate(this.state);

            if(error){
                this.setState({error})
            }

            submitter.send(this.state)
            .then(submitter.success)
            .catch(submitter.fail)
        }

        render = () => 
        <Form 
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        {...this.state} />
    }
}