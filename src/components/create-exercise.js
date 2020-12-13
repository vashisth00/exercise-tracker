import React from 'react'
import { Component } from 'react'
import { render } from 'react-dom'

export default class CreateExercises extends Component {
    constructor(props){
        super(props);

        this.state = {
            usernanme: '',
            description: '',
            duration: 0,
            date: new Date(),
            users: []
        }
    }


    onChangeUsername(e) {
        this.setState({
          username: e.target.value
        })
      }
    
      onChangeDescription(e) {
        this.setState({
          description: e.target.value
        })
      }
    
      onChangeDuration(e) {
        this.setState({
          duration: e.target.value
        })
      }
    
      onChangeDate(date) {
        this.setState({
          date: date
        })
      }
    render(){
    return (
        <div>
            <p>vdv</p>
        </div>
    )
}
}
