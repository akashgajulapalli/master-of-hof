import React, { Component } from "react";

class Higher extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: [
        { id: "1", name: "Joe", user_type: "Developer", age: 31, years: 11 },
        { id: "2", name: "Hill", user_type: "Designer", age: 26, years: 4 },
        { id: "3", name: "John", user_type: "Teacher", age: 24, years: 2 },
        { id: "4", name: "Sam", user_type: "Entreprenuer", age: 58, years: 25 },
        { id: "5", name: "Jack", user_type: "Designer", age: 43, years: 18 },
      ],
    };
  }
  componentDidMount() {
    // Filtering based on User Type
    //
    //   let filteredData = this.state.userData.filter((item) => {
    //       return item.user_type === "Designer"
    //   })
    //   this.setState({
    //       userData: filteredData
    //   });
    //FILTER ALL DATA STARTING WITH THE LETTER `J`
    //
    //    let filteredData = this.state.userData.filter((item) => {
    //       return item.name.charAt(0) === "J"
    //     });
    //     this.setState({
    //       userData: filteredData,
    //     });
    // FILTER DATA BASED ON AGE
    
      //  let filteredData = this.state.userData.filter((item) => {
      //         return item.age > 28 && item.age <= 50
      //       });
      //       this.setState({
      //         userData: filteredData,
      //       });
    
    
    let filteredData = this.state.userData.filter((item) => {
        return item.age > 28 && item.age <= 50
      });
      this.setState({
        userData: filteredData,
      });

  }
  render() {
    const { userData } = this.state;
    return (
      <div>
        <h1>Display All Items</h1>
        <table className="container">
          <tbody>
            {userData.length > 0
              ? userData.map((item) => {
                  return (
                    <tr>
                      <td>Id:{item.id}</td>
                      <td>Name:{item.name}</td>
                      <td>User Type:{item.user_type}</td>
                    </tr>
                  );
                })
              : null}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Higher;
