import React from "react";
import API from "../../utils/API";
import "./style.css";

class Main extends React.Component {
  state = {
    employees: [],
    sort: "descending",
    sortNameArrow: "",
    sortDobArrow: "",
  };
  componentDidMount() {
    API.search()
      .then((res) => {
        this.setState({ employees: res.data.results });
      })
      .catch((err) => console.log(err));
  }

  filterEmps = () => {
    return this.state.employees.filter((employee) => {
      return (
        employee.name.first
          .toLowerCase()
          .startsWith(this.props.search.toLowerCase()) ||
        employee.name.last
          .toLowerCase()
          .startsWith(this.props.search.toLowerCase())
      );
    });
  };
  // https://www.smashingmagazine.com/2020/03/sortable-tables-react/

  sortedFirstNames = () => {
    this.setState({ sortDobArrow: "" });
    this.setState({ sortLastNameArrow: "" });
    let sortedEmployees = this.state.employees;
    let sort = sortedEmployees.sort((a, b) => {
      if (a.name.first < b.name.first) {
        return -1;
      }
      if (a.name.first > b.name.first) {
        return 1;
      }
      return 0;
    });
    if (this.state.sort === "descending") {
      this.setState({ sort: "ascending" });
      this.setState({ sortFirstNameArrow: "▲" });
    } else {
      this.setState({ sort: "descending" });
      this.setState({ sortFirstNameArrow: "▼" });
      sort.reverse();
    }
    this.setState({ employee: sortedEmployees });
  };

  sortedLastNames = () => {
    this.setState({ sortDobArrow: "" });
    this.setState({ sortFirstNameArrow: "" });
    let sortedEmployees = this.state.employees;
    let sort = sortedEmployees.sort((a, b) => {
      if (a.name.last < b.name.last) {
        return -1;
      }
      if (a.name.last > b.name.last) {
        return 1;
      }
      return 0;
    });
    if (this.state.sort === "descending") {
      this.setState({ sort: "ascending" });
      this.setState({ sortLastNameArrow: "▲" });
    } else {
      this.setState({ sort: "descending" });
      this.setState({ sortLastNameArrow: "▼" });
      sort.reverse();
    }
    this.setState({ employee: sortedEmployees });
  };

  sortedDob = () => {
    this.setState({ sortFirstNameArrow: "" });
    this.setState({ sortLastNameArrow: "" });
    let sortedEmployees = this.state.employees;
    let sort = sortedEmployees.sort((a, b) => {
      if (a.dob.date < b.dob.date) {
        return -1;
      }
      if (a.dob.date > b.dob.date) {
        return 1;
      }
      return 0;
    });
    if (this.state.sort === "descending") {
      this.setState({ sort: "ascending" });
      this.setState({ sortDobArrow: "▲" });
    } else {
      this.setState({ sort: "descending" });
      this.setState({ sortDobArrow: "▼" });
      sort.reverse();
    }
    this.setState({ employee: sortedEmployees });
  };

  formatDob = (date) => {
    const dob = date.substring(0, 10);
    const arrDate = dob.split("-");
    const year = arrDate[0];
    const month = arrDate[1];
    const day = arrDate[2];
    return `${month}/${day}/${year}`;
  };

  renderContent = () => {
    return this.filterEmps().map((employee) => {
      return (
        <tr key={employee.login.uuid}>
          <td>
            <img
              alt={`${employee.name.first} ${employee.name.last}`}
              src={employee.picture.large}
              className="img-fluid emp-image"
            />
          </td>
          <td>{employee.name.first}</td>
          <td>{employee.name.last}</td>
          <td>
            <a href={`mailto:${employee.email}`}>{employee.email}</a>
          </td>
          <td>{employee.phone}</td>
          <td>{this.formatDob(employee.dob.date)}</td>
        </tr>
      );
    });
  };

  render() {
    return (
      <main className="wrapper">
        <div>
          <div className="container" style={{ minHeight: "80%" }}>
            <table style={{ width: "100%" }}>
              <tbody>
                <tr className="table-header-row">
                  <th></th>
                  <th
                    className="sorter"
                    onClick={this.sortedFirstNames}
                    title="click to sort by First Name"
                  >
                    FIRST NAME {this.state.sortFirstNameArrow}
                  </th>
                  <th
                    className="sorter"
                    onClick={this.sortedLastNames}
                    title="click to sort by Last Name"
                  >
                    LAST NAME {this.state.sortLastNameArrow}
                  </th>
                  <th>EMAIL</th>
                  <th>PHONE</th>
                  <th
                    className="sorter"
                    onClick={this.sortedDob}
                    title="click to sort by Date of Birth"
                  >
                    DATE OF BIRTH {this.state.sortDobArrow}
                  </th>
                </tr>
                {this.renderContent()}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    );
  }
}

export default Main;
