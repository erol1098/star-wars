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
      side: "",
      page: 1,
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
  setSide = (item) => {
    this.setState({ side: item });
  };
  setPage = (item) => {
    this.setState({ page: item });
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
            setPage={this.setPage}
          />
          <RenderTable
            gender={this.state.gender}
            query={this.state.query}
            side={this.state.side}
            page={this.state.page}
          />
        </>
      );
    } else return <Login setIsLogin={this.setIsLogin} onSide={this.setSide} />;
  }
}
export default Home;
