import React from "react";
import "../styles/table.css"
import axios from "axios";


class Table extends React.Component {

    state = {
        employees: [],
        filteredEmployees: [],
        search: ""
    };

    componentDidMount() {
        axios.get("https://randomuser.me/api/?seed=foobar&results=15&nat=us").then(response => {
            console.log(response.data.results);
            this.setState({
                employees: response.data.results,
                filteredEmployees: response.data.results
            })
        })
    }

    onInputChange = event => {
        const value = event.target.value;
        console.log(value);
        const name = event.target.name;

        this.setState({
            [name]: value
        });

        const searchTerm = value.toLowerCase();

        const filteredEmployees = this.state.employees.filter(emp => emp.name.first.toLowerCase().startsWith(searchTerm) || emp.name.last.toLowerCase().startsWith(searchTerm));
        console.log(filteredEmployees);

        this.setState({ filteredEmployees });
    }

    render() {
        return (
            <>
                <form>
                    <div className="searchbar">
                        <input 
                        name="search"
                        value={this.state.search}
                        className="form-control" 
                        type="text" 
                        placeholder="Employee Name" 
                        aria-label="Search" 
                        onChange={this.onInputChange}
                        />
                    </div>
                </form>
                <table className="table table-striped">
                    <thead>
                        <tr>
                        <th scope="col"></th>
                        <th scope="col">Name</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Email</th>
                        <th scope="col">Age</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.filteredEmployees.map(emp => (
                            <tr>
                            <img alt={emp.name.first + " " + emp.name.last} src={emp.picture.thumbnail}></img>
                            <td>{emp.name.first + " " + emp.name.last}</td>
                            <td>{emp.cell}</td>
                            <td>{emp.email}</td>
                            <td>{emp.dob.age}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </>
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

// function ResultList(props) {
//     return (
//       <ul className="list-group">
//         {props.results.map(result => (
//           <li className="list-group-item" key={result.id}>
//             <img alt={result.title} className="img-fluid" src={result.images.original.url} />
//           </li>
//         ))}
//       </ul>
//     );
//   }
  