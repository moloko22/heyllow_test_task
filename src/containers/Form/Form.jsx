import React, {Component} from 'react';

import './Form.css';
import InputFile from "../../components/InputFile/InputFile";
class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            company: '',
            quantity: '',
            quantityIsValid: '',
            business: '',
            businessIsValid: '',
            description: '',
            descriptionIsValid: '',
            files: [],
            formValid: false,
            formErrors: {quantity: 'This Field is required', business: 'This Field is required', description: 'This Field is required'},
        }
    }
    validateForm(){
        this.setState({
            formValid: this.state.quantityIsValid && this.state.businessIsValid && this.state.descriptionIsValid
        }, () => this.state.formValid);
    }
    validateField(fieldName, value){
        let quantityIsValid = this.state.quantityIsValid;
        let businessIsValid = this.state.businessIsValid;
        let descriptionIsValid = this.state.descriptionIsValid;
        let formErrors = this.state.formErrors;
        switch(fieldName) {
            case 'quantity':
                quantityIsValid = value >= 1 && value <= 99;
                formErrors.quantity = quantityIsValid ? '': 'Enter number from 1 to 99';
                break;
            case 'business':
                businessIsValid = value.length > 0;
                formErrors.business = businessIsValid ? '': 'This Field is required';
                break;
            case 'description': {
                descriptionIsValid = value.length > 0;
                formErrors.description = descriptionIsValid ? '': 'This Field is required';
                break;
            }
            default:
                break;
        }
        this.setState({formErrors: formErrors,
            quantityIsValid: quantityIsValid,
            businessIsValid: businessIsValid,
            descriptionIsValid: descriptionIsValid,
        }, this.validateForm);
    }
    handleOnChange = (e, arg) =>{
        const name = e.target.name;
        this.setState({
            [name]: arg,
        });
    };
    removeError(name, value){
        const nameIsValid = `${name}IsValid`;
        this.setState({
            [nameIsValid]: true,
        })
    }
    handleSubmit = (event) =>{
        event.preventDefault();
        this.validateForm();
        if(!this.state.formValid){
            this.setState({
                quantityIsValid: this.state.quantityIsValid || false,
                businessIsValid: this.state.businessIsValid || false,
                descriptionIsValid: this.state.descriptionIsValid || false,
            });
            return this.validateForm;
        }
        console.log(this.state)
    };
    render() {
        return (
            <section className={'form_step3'}>
                <form action="/">
                    <div className={'form_step3_info'}>
                        <div className={'form_step3_info_first'}>
                            <article>Your company name</article>
                            <input type="text"
                                   onChange={(e) => this.handleOnChange(e, e.target.value)}
                                   name={'company'}
                                   placeholder={'Type Text'}/>
                        </div>
                        <div className={!this.state.quantityIsValid && this.state.quantityIsValid !== ''
                            ? 'quantity_invalid' :
                            'form_step3_info_second'}
                             data-error={this.state.formErrors.quantity}>
                            <article className={'required'}>Number of people</article>
                            <input type="number"
                                   onFocus={(e) => this.removeError(e.target.name, e.target.value)}
                                   onBlur={(e) => this.validateField(e.target.name, e.target.value)}
                                   onChange={(e) => this.handleOnChange(e, e.target.value)}
                                   required
                                   name={'quantity'}
                                   placeholder={'1-99'}/>
                        </div>
                    </div>
                    <div className={!this.state.businessIsValid && this.state.businessIsValid !== ''
                        ? 'business_invalid' :
                        'form_business_area'}
                         data-error={this.state.formErrors.business}>
                        <article className={'required'}
                        >Business area</article>
                        <input type="text"
                               onFocus={(e) => this.removeError(e.target.name, e.target.value)}
                               onBlur={(e) => this.validateField(e.target.name, e.target.value)}
                               onChange={(e) => this.handleOnChange(e, e.target.value)}
                               required
                               name={'business'}
                               placeholder={'Design, Marketing, Development, etc'}/>
                    </div>
                    <div className={!this.state.descriptionIsValid && this.state.descriptionIsValid !== ''
                        ? 'description_invalid' :
                        'form_description'}
                         data-error={this.state.formErrors.description}>
                        <article className={'required'}>Description</article>
                        <textarea name="description"
                                  onFocus={(e) => this.removeError(e.target.name, e.target.value)}
                                  onBlur={(e) => this.validateField(e.target.name, e.target.value)}
                                  onChange={(e) => this.handleOnChange(e, e.target.value)}
                                  id="description"
                                  required
                                  placeholder={'Type Text'}/>
                    </div>
                    <div className={'upload_files_input'}>
                        <svg width="24"
                             height="21"
                             viewBox="0 0 24 21"
                             fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M11.7 3.725H21.6C22.9236 3.725 24 4.8026 24 6.125V18.125C24 19.4486 22.9236 20.525 21.6 20.525H2.4C1.0764 20.525 0 19.4486 0 18.125V2.525C0 1.2026 1.0764 0.125 2.4 0.125H7.8C8.5512 0.125 9.27 0.4838 9.72 1.085L11.7 3.725ZM2.4 2.525V18.125H21.6012L21.6 6.125H11.7C10.9488 6.125 10.23 5.7662 9.78 5.165L7.8 2.525H2.4ZM11.0571 8.35391H12.9428V11.1825H15.7714V13.0682H12.9428V15.8968H11.0571V13.0682H8.22851V11.1825H11.0571V8.35391Z"
                                  fill="#333333"/>
                        </svg>
                        <InputFile handleOnChange={this.handleOnChange}
                                   onChangeHandler={this.onChangeHandler}/>
                    </div>
                    <div>
                        <button type={'submit'}
                                onClick={(e) => this.handleSubmit(e)}>Submit</button>
                    </div>
                </form>
            </section>
        );
    }
}

export default Form;