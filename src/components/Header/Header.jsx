import React,{useState} from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { logoutMember }  from "../../redux/actions/memberActions";
import { withRouter } from "react-router-dom";
import "./header.css";

const Header = (props) => {
    console.log(props)
    const [redirect, setRedirect] = useState(false);
    const {users, logoutMember, history} = props; 
    console.log(users)
// const { user } = users.user;
return (
    <>
    {redirect && <Redirect to="/"/>}
    <div className="header">
        <span className="title">
            <h3>Task Application</h3>
        </span>
        {users ? <div style={{ color: "#fff", marginLeft: "70%"}} >{users.user.user.username}  <button onClick={() => {
            logoutMember()
            setRedirect(true)
            // history.push("/")
            }} type="submit" className="btn btn-primary"> Logout </button>
    </div> : ""}

    </div>
    </>
)
}

const mapStateToProps = ({ users }) => {
    return {
        users
    }
}

const mapDispatchToProps = dispatch => {
return {
    logoutMember: () => dispatch(logoutMember())
}
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));