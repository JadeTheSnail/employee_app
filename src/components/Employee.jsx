import '../Employee.css'

export default function Employee(props) {
    return (

        <div className="Employee">
            <h1 id="employeeName">{props.name}</h1>
            <div id='employeeContents'>
                <img src={props.img} />

            <dl>
                <dt>
                    <p className='employeeInfo'>Age: {props.age}</p>
                </dt>
                <dt>
                    <p className='employeeInfo' > Gender: {props.gender}</p>
                </dt>
                <dt>
                    <p className='employeeInfo'>Location: {props.loc}</p>
                </dt>
                <dt>
                    <p className='employeeInfo'> Email: {props.email}</p>
                </dt>
                <dt>
                    <p className='employeeInfo'>Position: {props.position}</p>
                </dt>
            </dl>
            </div>
        </div>
    )
}