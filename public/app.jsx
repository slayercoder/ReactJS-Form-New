class Form extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name : {
                first : '',
                last : ''
            },
            company : '',
            email : '',
            submit : false


        }
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeCompany = this.handleChangeCompany.bind(this);
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangeAbout = this.handleChangeAbout.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChangeName(arg){
        this.setState(
            {
                name : {
                    first : arg.first,
                    last : arg.last
                }
            }
        );
    }
    handleChangeCompany(arg){
        this.setState({company : arg});
    }

    handleChangeEmail(arg){
        this.setState({email : arg});
    }
    handleChangeAbout(arg){
        this.setState({about : arg});
    }
    handleClick(){
            window.alert('Form Submitted')
        }


    render(){

        return(
            <div>
                <div></div>
                <Name name = {this.handleChangeName}/>
                <Company comp = {this.handleChangeCompany}/>
                <Email email = {this.handleChangeEmail}/>
                <About about = {this.handleChangeAbout}/>
                <Button button = {this.handleClick}/>
                <hr/>
                <h2>You Final Details</h2>
                <Result name = {this.state.name} cname = {this.state.company} email = {this.state.email} about = {this.state.about}/>
            </div>
        );
    }
}
class Button extends React.Component{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(){
        this.props.button();
    }
    render(){
        return(
            <button onClick = {this.handleClick}>Submit</button>
        );
    }
}
class About extends React.Component{
    constructor(props){
        super(props);
        this.handleChangeAbout = this.handleChangeAbout.bind(this);
    }
    handleChangeAbout(){
        this.props.about(this.refs.textarea.value);
    }
    render(){
        return(
            <div>
                <h4>Tell us About Yourself</h4>
                <textarea ref = "textarea" onChange = {this.handleChangeAbout} placeholder = "Tell Us About Yourself" rows = "10" cols = "30"/>
            </div>
        );
    }
}
class Name extends React.Component{
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(){
        var obj = {
            first : this.refs.fname.value,
            last  :this.refs.lname.value
        }
        this.props.name(obj);
    }
    render(){
        return(
                <div>
                    <h3>First Name: <input type = "text" onChange = {this.handleChange} ref = 'fname' required/><br/></h3>
                    <h3>Last Name: <input type = "text" onChange = {this.handleChange} ref = 'lname' required/><br/></h3>
                </div>

            );
    }
}

class Company extends React.Component{
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(){
        this.props.comp(this.refs.cname.value);
    }
    render(){
        return(
            <div>
                <h3>Company : <input ref = 'cname' type = 'text' onChange = {this.handleChange}/></h3>
            </div>
        );
    }
}

class Email extends React.Component{
    constructor(props){
        super(props);
        this.handleEmail = this.handleEmail.bind(this);
    }
    handleEmail(){
        this.props.email(this.refs.email.value);
    }
    render(){
        return(
            <h3>Email-ID : <input type = 'text' ref = 'email' onChange = {this.handleEmail}/></h3>
        );
    }
}

function Result(props){
    return(
        <div style = {{display : "inline-block"}}>
            <h3>Full Name: {props.name.first + " " + props.name.last}</h3>
            <h3>Company : {props.cname}</h3>
            <h3>Email : {props.email}</h3>
            <h3>About Me : </h3>
            <div style = {{border : "1px solid black", width : 300, height : 200}}>{props.about}</div>
        </div>
    );
}

ReactDOM.render(<Form/>,document.getElementById('root'));
