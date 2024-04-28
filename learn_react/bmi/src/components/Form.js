import React, { Component } from 'react'
import '../styles/styles.css'

export class Form extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         heightFt: '',
         heightIn:'',
         weight:'',
         bmi:''
      }
    }



    handleHeightFit = event =>{
        this.setState({
            heightFt: event.target.value
        })
    }

    handleHeightInch = event =>{
        this.setState({
            heightIn: event.target.value
        })
    }

    handleWeight = event =>{
        this.setState({
            weight: event.target.value
        })
    }

    handleSubmit = event =>{
        this.calculateBmi()
        event.preventDefault()
    }

    calculateBmi =() =>{
        const weight = parseFloat(this.state.weight);
        const heightInMeters = (parseFloat(this.state.heightFt) * 12 + parseFloat(this.state.heightIn)) / 100;
        const Bmi = weight / (heightInMeters * heightInMeters);
        
        this.setState({
            bmi: Bmi
        
        })
    }

  render() {
    return (
      <div className='card'>
        <form onSubmit={this.handleSubmit}>

            <div className='textfield'>
                <label >Height in Fit</label>
                <input type="number" value={this.state.heightFt} onChange={this.handleHeightFit}/>
            </div>

            <div className='textfield'>
                <label >Height in Inch</label>
                <input type="number" value={this.state.heightIn} onChange={this.handleHeightInch}/>
            </div>

            <div className='textfield'>
                <label>Weight</label>
                <input type="number" value={this.state.weight} onChange={this.handleWeight}/>
            </div>

            <button type="submit">Calculate</button>
        </form>

        <div>
            <p>
                Your bmi: {this.state.bmi}
            </p>
        </div>
      </div>
    )
  }
}

export default Form