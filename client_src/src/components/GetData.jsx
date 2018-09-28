import React from "react";
import axios from "axios";
import Search from "./Search";
import Cards from "./Cards";

export default class GetData extends React.Component {
  constructor() {
    super();
    this.state = {
      value: [],
      temp: ""
    };
  }

  handleChangeValue = e => {
    setTimeout = (() => {
      this.setState({ value: e.target.value });
    },
    500);

    axios
      .get("http://localhost:3000/api/pokemons")
      .then(res => this.setState({ value: res.data }))
      .catch(err => console.log(err));

    this.setState({ temp: e.target.value });

    e.preventDefault();
  };

  render() {
    const capitalizeStr = str => {
      return str && str[0].toUpperCase() + str.slice(1);
    };

    const filterSearch = this.state.value.filter(poke => {
      return (
        poke.name.includes(this.state.temp) ||
        poke.types.includes(this.state.temp)
      );
    });

    const mapState = filterSearch.map((pokemon, i) => {
      return (
        <Cards
          name={capitalizeStr(pokemon.name)}
          types={pokemon.types.map(type => (
            <li>{capitalizeStr(type)}</li>
          ))}
        />
      );
    });

    return (
      <div>
        <Search onChangeValue={this.handleChangeValue} />
        <div className="boxDisplay">{mapState}</div>
      </div>
    );
  }
}
