import React, { Component } from 'react'

export default class Student extends Component {
    constructor(props) {
        super(props);
        this.state = {
            studentName: props.studentName,
            studentID: props.studentID,
            mobile: props.mobile,
            email: props.email
        }
    }

    onTextChange= (evt) => {
        let target = evt.target;
        let classList = target.classList;
        let value = target.value
        if(classList.contains("studentName")){
            this.setState({
                studentName : value
            })
        } else if(classList.contains("studentID")){
            this.setState({
                studentID : value
            })
        }else if(classList.contains("mobile") && value.length <= 11){
            this.setState({
                mobile : value
            })
        }else if (classList.contains("email")) {
            this.setState({
                mobile: value
            })    
        }
        evt.preventDefault();
    }

    studentSubmit = (evt) => {
        alert("This user will be saved in db "+ JSON.stringify(this.state));
        
        
        this.props.SaveStudentToDB(this.state);
        
        evt.preventDefault();
    }
    render(){
        return(
            <>
                <h1>Student Information</h1>
                <section className={"componentClass"}>
                    <div className="form col-md-8">
                    <div className="col-md-12">
                        <b>Student Name</b>
                        <input type="text" className="form-control col-md-6 studentName" value={this.state.studentName} 
                                placeholder="Student Name" onChange={this.onTextChange} maxLength={40}/>
                            </div>
                    <div className="col-md-12">
                        <b>Student ID</b>
                        <input type="text" className="form-control col-md-6 studentID" value={this.state.studentID} 
                            placeholder="Student ID" onChange={this.onTextChange} maxLength={40}/>
                    </div>
                    <div className="col-md-12">
                    <b>Email </b>
                        <input type="email" className="form-control col-md-6 email" value={this.state.email} 
                                placeholder="Email Address" onChange={this.onTextChange} />
                    </div>
                
                    <div className="col-md-12">
                        <b>Mobile </b>
                        <input type="number" className="form-control col-md-6 mobile" value={this.state.mobile} 
                        placeholder="Mobile" maxLength="11"
                        onChange={this.onTextChange} />
                    </div>

                     <input type="button" className={"btn btn-primary col-md-2 saveUser"} 
                            value={"Submit-Student"} 
                            onClick={this.studentSubmit}/>
                    </div>
                </section>
            </>
        )
    }
}

