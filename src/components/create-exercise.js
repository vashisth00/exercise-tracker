import React from 'react'
import { Component } from 'react'
import axios from 'axios';

export default class CreateExercises extends Component {
    constructor(props){
        super(props);

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeDuration = this.onChangeDuration.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

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

      onSubmit(e){
          e.preventDefault();
          const exercise  = {
            username: this.state.username,
            description: this.state.description,
            duration: this.state.duration,
            date: this.state.date
          }

          console.log(exercise);

    axios.post('http://localhost:5000/exercises/add', exercise)
      .then(res => console.log(res.data));

    window.location = '/';
      }
    render(){
    return (
        <div>
            <p>vdv</p>
        </div>
    )
}
}
