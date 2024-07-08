import logo from './logo.svg';
import './App.css';
import Employee from './components/Employee';
import jadeIcon from './images/icon01.png';
import jakeIcon from './images/icon02.png';
import sageIcon from './images/icon3.png';



function App() {

 const employees = [
    {
      img: jadeIcon,
      name: "Jade davey",
      age: "25",
      gender: "Female",
      loc: "Bristol",
      email: "Email.jade@email.co.uk",
      position: "Software Dev"
  
    },
    {
      img: jakeIcon,
      name: "Jake Flintstone",
      age: "30",
      gender: "Male",
      loc: "Bristol",
      email: "Email.jake@email.com",
      position: "Programming Lead"
  
    },
    {
      img: sageIcon,
      name: "Sage McLaughlin",
      age: "21",
      gender: "Non-Binary",
      loc: "Bath",
      email: "Email.sage@email.com",
      position: "Junior Software"
    },
  ]

  return (

    employees.map(employee => {
      return (
<Employee
    img = {employee.img}
    name = {employee.name}
    age = {employee.age}
    gender = {employee.gender}
    loc = {employee.loc}
    email = {employee.email}
    position = {employee.position}
  />
      )
    })
  );
}

export default App;
