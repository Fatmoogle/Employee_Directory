import React from "react";
import "../styles/table.css"
import axios from "axios";

class Table extends React.Component {

    state = {
        employees: []
    };

    componentDidMount() {
        axios.get("https://randomuser.me/api/?results=50").then(response => {
            console.log(response.data.results);
            this.setState({
                employees: response.data.results
            })
        })
    }



    render() {
        return (
            <table className="table table-striped">
        <thead>
            <tr>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Email</th>
            <th scope="col">Age</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <td>Mark</td>
            <td>Otto</td>
            <td>mark92@gmail.com</td>
            <td>28</td>
            </tr>
            {this.state.employees.map(emp => (
                <>
                <tr>
                <td>{emp.name.first}</td>
                <td>{emp.name.last}</td>
                <td>{emp.email}</td>
                <td>{emp.dob.age}</td>
                </tr>
                </>
            ))}
        </tbody>
        </table>
        )
    }
}

// function Table(props) {
//     return (
//         <table className="table table-striped">
//         <thead>
//             <tr>
//             <th scope="col">Id</th>
//             <th scope="col">Name</th>
//             <th scope="col">Email</th>
//             <th scope="col">Age</th>
//             </tr>
//         </thead>
//         <tbody>
//             <tr>
//             <th scope="row">1</th>
//             <td>Mark</td>
//             <td>Otto</td>
//             <td>@mdo</td>
//             </tr>
//         </tbody>
//         </table>
//     );
// }

export default Table;
