import React from 'react';
import './App.css';

import { TextField, Typography } from '@material-ui/core';
import { KeyboardDatePicker, KeyboardTimePicker } from '@material-ui/pickers';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      content: "",
      startDate: null,
      startTime: null,
      endDate: null,
      endTime: null,
    }
  }

  checkValidate() {
    const {
      title,content, startDate, startTime, endDate, endTime
    } = this.state;
    if(!title || !content || !startDate || !startTime || !endDate || !endTime){
      return false
    }
    return true
  }

  savaTodoList() {
    if(this.checkValidate()){
      const { todoList, title, content, startDate, startTime, endDate, endTime } = this.state;
      todoList.push({title: title.trim(), content: content.trim(), startDate, startTime, endDate, endTime});
      this.setState({
        todolist,
        title: "",
        content: "",
        startDate: null,
        startTime: null,
        endDate: null,
        endTime: null,
      });
    }else{
      console.log("error");
    }
  }

  render() {
    return (
      <div className="App">
        <div className="header">TODO LIST</div>
        <div className="input_area">
          <TextField
            label="제목" size="normal" margin="normal" fullWidth required 
            value={this.state.title}
            onChange={(e)=> this.setState({content:e.target.value})}
          />
          <TextField
            label="상세내용" size="normal" margin="normal" fullWidth multiline
            onChange={(e)=> this.setState({content:e.target.value})}
          />
          <KeyboardDatePicker
            disableToolbar
            variant="inline"
            format="yyyy/MM/DD"
            margin="normal"
            label="시작 예정일"
            onChange={(value) => console.log(value)}
            style={{ width: '50%' }}
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
          />
          <KeyboardTimePicker
            margin="normal"
            label="시작시간"
            variant="inline"
            onChange={(value) => console.log(value)}
            style={{ width: '50%' }}
            KeyboardButtonProps={{
              'aria-label': 'change time',
            }}
          />
          <Button
            variant="outlined"
            startIcon={<SaveIcon />}
            style={{float:'right'}}
            onClick={()=>this.saveTodoList()}
          >
            Save
          </Button>
        </div>
        <div className="list_area">
          <List>

          </List>
        </div>
        <Typography variant="body2" color="textSecondary" align="center">
          {'Copyright © 황수연 ' + new Date().getFullYear() + '.'}
        </Typography>
      </div>
    );
  }

}

export default App;