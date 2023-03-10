import React, { Component, PureComponent, createRef } from "react";
import DefaultApp from "./DefaultComponent";
import { useNavigate } from "react-router-dom";

export default class HomeComponent extends Component{

//compares each state/props with nextstate/props and a replacement of shouldComponentUpdate
//export default class HomeComponent extends PureComponent { 
    constructor(props){
        super();        
        //allows us to manipulate the virtual dom
        this.state = {
            title : "Home Component Title",
            counter : 20,
            address : "Somewhere on earth",
            session : "React intersting session"
        }

        //ref - keyword
        //for creating and accessing html out of react flow
        //as we dont have any html selectors available in react so this provides a reference to html
        this.address = createRef(); 
        this.session = createRef();

        //view is not ready so cannot be accessed
        //this.session.current.value = "This is more interesting now";
        //this.session.current.focus();
    }

    componentDidMount() {
        //view is ready, state changes and api calls can be made

        // setTimeout(() => {
        //     this.session.current.value = "This is more interesting now";
        //     this.session.current.focus();
        // }, 5000);
    }

    //update life cycle method
    shouldComponentUpdate(nextProps, nextState){
        console.log(nextState)
        console.log(nextProps)
        console.log("shouldComponentUpdate - ", this.state.counter);
        if (nextState.counter > 25 && nextState.counter < 30) {//if the updated value of age is same then don't call render method
        //if (nextState.counter == this.state.counter) {
            return false;//it will not call the render method so the new v-dom will not be created
        } 
        return true; //it will invoke the render method
    }

    //can be used restore previos state
    getSnapshotBeforeUpdate(prevState, prevProps){
        console.log("getSnapshotBeforeUpdate");
        console.log("prevState", prevState);
        console.log("prevProps", prevProps);
        return {
            prevState,
            prevProps
        }
    }

    //restore previos state
    componentDidUpdate(prevState, prevProps){
        console.log("componentDidUpdate");
        console.log("prevState",prevState);
        console.log("prevProps", prevProps);
        // this.setState({
        //     //restore previos state
        // })
    }

    //destruction life cycle method
    componentWillUnmount(){
        console.log("componentWillUnmount");

        //clearInterval(this.titleChange);
    }

    // navigateMe = ()=>{
    //     let navigate = useNavigate();
    //     navigate("/about")
    // }

    // titleChange = setInterval(() => {
    //     //this.setState({}) - callback api used to generate new state
    //     this.setState({
    //         //title : "Home Component Title"
    //         title : "Change Title after 10 seconds"
    //     })
    //     console.log(this.state.title);
    // }, 10000);//updating at every 10 seconds

    //event handler
    updateCounter = (counter)=>{
        //alert("Alerted!!" + this.state.counter)

        //setState : an api provided by react to pass the message to react that there is change in state jut re-render
        //the new v-dom will be created and this happens in batch format
        this.setState({
            counter : this.state.counter //+ counter
        })

        //this.state.counter = this.state.counter;

        //this should be avoided
        //this.forceUpdate(); //it skips the other life cycle methods of class component like : shouldComponent

        //evt.preventDefault();//any default behaviour we must stop
    }

    changeHandler = (evt)=>{
        console.log("changed value ", evt.target.value)
        debugger;
        //this.state.address = evt.target.value; //changing the state
        let classList = evt.target.classList;
        
        if (classList.contains("session")) {
            this.setState({
                session : evt.target.value
            })
        } else {
            this.setState({
                address : evt.target.value
            })    
        }
        evt.preventDefault();
    }

    changeHandler_session = (evt)=>{
        console.log("changed value ", evt.target.value)        
        this.setState({
            session : evt.target.value
        })

        evt.preventDefault();
    }

    submitHandler = (evt)=>{
        this.setState({
            address : this.address.current.value,
            session : this.session.current.value
        })

        alert("Form Submitted Successfully!!")
        evt.preventDefault();//stops the default behaviour
    }

    //virtual dom of component // 1 - state  ==>  2 - state
    render(){
        console.log("Render component")
        return(
            <div className={"loadimage form"} >
                <h1>{this.state.title}</h1>
                <b className="feature">{"Product Feature's :"}</b>
                <ul>                     
                    <li>Sign up new users</li>
                    <li>Login existing users.</li>                
                    <li>Allow user's to add to cart.</li>
                    <li>Save the user's cart.</li>
                    <li>Checkout and pay for items.</li>
                    <li>Allow users to cancel the order.</li>
                    <li>Allow users to reorder the cart.</li>
                    <li>Add products/items to create product collection.</li>
                    <li>Allow users to give ratings to each product.</li>
                    <li>Have notifications on top right with logout.</li>
                </ul>
            {/*<div>
                <h1>Home Component</h1>
                {/* controlled component div based structure using fluid model*/}

                {/*<div className="col-md-12 form">
                    <div className="col-md-7">
                        <label>Address : </label>
                        <input type={"text"} value={this.state.address} placeholder="Please Type Your Address" 
                            className="col-md-8 address" onChange={this.changeHandler}></input>
                    </div>
                    <div className="col-md-7">
                        <label>Session : </label>
                        <input type={"text"} value={this.state.session} placeholder="Please Type Your Session" 
                            className="col-md-8 session" onChange={this.changeHandler_session} ></input>
                    </div>
                </div>*/}


                {/*un-controlled component uses form integration*/}
                {/*<form className="form col-md-12" action="user/saveinfo" onSubmit={this.submitHandler}>
                    <section className="col-md-7">
                        <label>Address : </label>
                        <input type={"text"} placeholder="Please Type Your Address" 
                            className="col-md-8 address" ref={this.address} required maxLength={"15"} ></input>
                    </section>
                    <section className="col-md-7">
                        <label>Session : </label>
                        <input type={"text"} placeholder="Please Type Your Session" 
                            className="col-md-8 address" ref={this.session} required maxLength={"15"}></input>
                    </section>

                    <input type={"submit"} value="Submit" ></input>

                </form>*/}



                {/* <label>From Home Class Component</label>
                <h4>{this.state.title}</h4>

                <DefaultApp parentTitle={this.state.title} counter={this.state.counter}
                        clickCounter={this.updateCounter} >
                    <h1>Child HTML 1 Element</h1>
                    <h1>Child HTML 2nd Element</h1>
                    <Footer/>
                </DefaultApp>
                <Footer>
                    <h1>Child HTML 1 Element</h1>
                    <h1>Child HTML 2nd Element</h1>
                </Footer> */}

                {/* <button onClick={this.updateCounter}>Increment Counter</button> */}
                {/* <button onClick={this.navigateMe} >About</button> 
                <input type={"text"} ref={this.session} placeholder="Type Session Value"></input> */}
            </div>
        )
    }
}


//components =>
//class => Component, PureComponent
//functional => normal functions/arrow functions

// Creation Life Cycle - /about => /home
    //a. constructor => view is not ready
    //b. render => first time it creates the V-dom/view
    //c. componentDidMount => view is ready, we can change the state and also make API calls

// Update Life Cycle - editing state of the component
    //a. shouldComponentUpdate - whether to show the change state on UI we can decide
    //b. render - render to show updated virtual dom
    //c. getSanpshotBeforeUpdate
    //d. componentDidMount

// Destruction Life Cycle -
    //a. componentWillUnmount - gets called when we move to next page, should clear all subscription here


//Q1. Create two components using controlled and uncontrolled way of creation