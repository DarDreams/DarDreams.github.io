//import "./employers-add-form.css"
import "./employers-add-form.scss"
import { Component } from "react"

class EmployersAddForm extends Component {

        state = {
            name: '',
            salary: ''
        }
        
    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault()
        if (this.state.name !== '' && this.state.salary !== '') {
            this.props.onAdd(this.state.name, this.state.salary)
            this.setState({
                name: '',
                salary: ''
            })
        }
    }
    
    static onLog = () => {
        console.log('hey');
    }

    static logged = 'on';

    render(){
        const {name, salary} = this.state

        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form className="add-form d-flex"
                onSubmit = {this.onSubmit}>
                    <input 
                        type="text" 
                        className="form-control new-post-label"
                        placeholder="Как его зовут?"
                        name="name"
                        value={name}
                        onChange={this.onValueChange}
                    />
                    <input
                        type="number"
                        className="form-control new-post-label"
                        placeholder="З/П в $?"
                        name="salary"
                        value={salary}
                        onChange={this.onValueChange}
                    />
    
                    <button 
                        type="submit"
                        className="btn btn-outline-light"
                    >Добавить
                    </button>
                </form>
            </div>
        )
    }
}

EmployersAddForm.onLog();
console.log(EmployersAddForm.logged);

export default EmployersAddForm