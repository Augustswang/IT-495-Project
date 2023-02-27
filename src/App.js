import React from 'react';


export default function App() {
  return (
    <div className = 'main'>
    <Nav />
    <Header />
    <Login />
    <Footer />
    </div>
  );
}

function Nav(props) {
  return (
    <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>                        
            </button>
            <a className="navbar-brand" href="index.html"><img src="https://wtsevent.org/faceofamerica/wp-content/uploads/sites/2/2022/02/WTS-FOA-Lockup-Stacked-2color-RGB.gif" alt="LOGO" width="200px" length="100px" /></a>
          </div>
          <div className="collapse navbar-collapse" id="myNavbar">
            <ul className="nav navbar-nav navbar-right">
              <li><a href="Stop.html">STOP INFOMATION</a></li>
              <li><a href="#services">MECHANIC INFOMATION</a></li>
              <li><a href="#portfolio">REPAIR INFOMATION</a></li>
              <li><a href="#pricing">CONTACT</a></li>
            </ul>
          </div>
        </div>
      </nav>
  )
}

function Header(props) {
  return(
    <div className="jumbotron text-center">
    <h1>Face of America</h1> 
    <p>Mechanic Record System</p> 
    <form>
      <div className="input-group">
        <input type="email" class="form-control" size="50" placeholder="Email Address" required />
        <div className="input-group-btn">
          <button type="button" class="btn">Subscribe</button>
        </div>
      </div>
    </form>
  </div>
  )
}

function Login(props) {
  return(
    <div className="login">
      <h1 className="central">Central login</h1>
      <div className="container-fluid" style ={{paddingTop: '3%'}}>
      <div className="row">
        <div className="col-sm-6">
          <h1 className = "Admin" >Admin</h1>
          <a href="AddStop.html">
            <span className="glyphicon glyphicon-user" style={{color:'black',paddingLeft:'35%',fontSize:'200px', paddingTop:'3%'}}></span>
          </a>
          <h2 className="adminh">Log in as a system administrator, who has the authority to add, delete, and modify Stop Information, Mechanic Information, and Repair Status</h2>
          <a href="AddStop.html">
            <button className="button button1" style={{height: '80px', width:'150px', marginLeft:'38%'}}>Login</button>
          </a>
        </div>
        <div className="col-sm-6">
          <h1 style={{paddingLeft: '37%', color: '#008CBA'}}>Mechanic</h1>
          <a href="#">
            <span className="glyphicon glyphicon-wrench" style={{color: '#008CBA', paddingLeft:'35%',fontSize:'200px', paddingTop:'3%'}}></span>
          </a>
          <h2 className="Mechanic">Log in as a mechanic, who has the authority to add, delete, and modify Mechanic Information, and Repair Status</h2>
          <a href="#">
          <button className="button button2" style={{height:'80px', width:'150px',marginLeft:'38%',marginTop:'3.5%'}}>Login</button>
          </a>
        </div>
      </div>
      </div>
    </div>
  )
}

function Footer(props){
  return(
    <footer className="container-fluid bg-4 text-center">
    <p>Mechanic Record System Made By Team Eagles</p> 
  </footer>
  )
}