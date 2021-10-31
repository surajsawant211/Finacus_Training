import React, { Component } from 'react'

export class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:null,
             country:null,
        }
    }

    submitHnadler =(event) => {
        event.preventDefault()
        console.log(this.state)
        const name= event.target.uname.value
        const country = event.target.country.value
        this.setState({name,country},()=>{
            console.log(this.state)
            event.target.uname.value= ''
            event.target.uname.value=''

        })
    }    
    render() {
        return (
            <div>
                <form action="" onSubmit={this.submitHnadler}>
                <div>
                    <label htmlFor="">Name:</label>
                    <input type="text" name="uname" />
                </div>
                   <div>
                   <label htmlFor="">Country</label>
                   <select name="country" id="">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                    <button type='submit'>Submit</button>
                   </div>
                </form>
            </div>
        )
    }
}

export default Form
