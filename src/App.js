import React, { Component } from 'react';
import './Form.css'

class AppForm extends Component {
    state = {
        userfirstname: '',
        userlastname: '',
        useremail: '',
        rules: false,
        message: "",

        errors: {
            user: false,
            useremail: false,
            rules: false
         }
     }

     messages = {
        user_incorrect: "! Imie i nazwisko musi zawierać minimum po 3 znaki i nie zawierać spacji",
        useremail_incorrect: "! adres e-mail musi składać się z @ i domeny dostawcy usług e-mail",
        rules_incorrect: "! Musisz zaakceptować regulami"
     }



     handleChange = (e) => {
        let type = e.target.id
        if(type === "rules") {
            this.setState({
                [type]: !this.state.rules
            })
        }
        else {
        this.setState({
            [type]: e.target.value
        })
     }}

     handleValidation = () => {
        let user = true;
        let useremail = true;
        let rules = true;
        let correct = false;

        if((this.state.userfirstname.length >= 3 && !this.state.userfirstname.includes(' ')) && (this.state.userlastname.length >= 3 && !this.state.userlastname.includes(' '))) {
            user = false
        }

        if(this.state.useremail.includes("@") && this.state.useremail.includes(".")) {useremail = false}
        if(this.state.rules === true) {rules = false}
        if(!user && !useremail && !rules) {correct = true}
        return ({
            user,
            useremail,
            rules,
            correct
        })
     }


     handleSubmit = (e) => {
        e.preventDefault()
        const valid = this.handleValidation();
        if(valid.correct){
            this.setState({
                userfirstname: '',
                userlastname: '',
                useremail: '',
                rules: false,
                message: "Dane zostały wysłane!",

                errors: {
                    user: false,
                    useremail: false,
                    rules: false
                 }
            })
            setTimeout(()=>{this.setState({message: ""})}, 1000)
        }
        else {this.setState({
            errors: {
                user: valid.user,
                useremail: valid.useremail,
                rules: valid.rules
             }
        })}
    }


    render() {
        return (
            <section className="formBox">
                <form onSubmit={this.handleSubmit} className="form" noValidate>
                    <label htmlFor="userfirstname">Imię:</label>
                    <input type="text" id="userfirstname" name="username" title="Imie i nazwisko musi zawierać minimum po 3 znaki i nie zawierać spacji!" value={this.state.userfirstname} onChange={this.handleChange}/>
                    <label htmlFor="userlastname">Nazwisko:</label>
                    <input type="text" id="userlastname" name="username" title="Imie i nazwisko musi zawierać minimum po 3 znaki i nie zawierać spacji!" value={this.state.userlastname} onChange={this.handleChange}/>
                    <label htmlFor="useremail">E-mail:</label>
                    <input type="email" id="useremail" name="username" title="adres e-mail musi składać się z @ i domeny dostawcy usług e-mail!" value={this.state.useremail} onChange={this.handleChange}/>
                    <label><input type="checkbox" id="rules" name="rules" title="akceptacja regulaminu jest wymagana" checked={this.state.rules} onChange={this.handleChange}/> Akceptuje regulamin </label>
                    <div className="errorSection">
                    {this.state.errors.user ? <p>{this.messages.user_incorrect}</p> : null}
                    {this.state.errors.useremail ? <p>{this.messages.useremail_incorrect}</p> : null}
                    {this.state.errors.rules ? <p>{this.messages.rules_incorrect}</p> : null}
                    </div>
                    <section><span>{this.state.message}</span><button type="submit">Wyślij</button></section>
                </form>
            </section>
         );
    }
}

export default AppForm;
