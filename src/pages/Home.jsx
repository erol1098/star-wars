import React from "react";
import RenderTable from "../components/RenderTable";
import SearchBar from "../components/SearchBar";
import Login from "./Login";

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      gender: "all",
      query: "",
      isLogin: false,
    };
  }
  setGender = (item) => {
    this.setState({ gender: item });
  };
  setQuery = (item) => {
    this.setState({ query: item });
  };
  setIsLogin = (item) => {
    this.setState({ isLogin: !this.state.isLogin });
  };
  render() {
    if (this.state.isLogin) {
      return (
        <>
          <SearchBar
            gender={this.state.gender}
            query={this.state.query}
            setGender={this.setGender}
            setQuery={this.setQuery}
          />
          <RenderTable gender={this.state.gender} query={this.state.query} />
        </>
      );
    } else return <Login setIsLogin={this.setIsLogin} />;
  }
}
export default Home;
