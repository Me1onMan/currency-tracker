import React, { Component, createRef } from "react";

import { Input, ResultItem, SearchContainer, SearchResults } from "./styled";

interface IProps {
  searchWord: string;
  handleChange: (newWord: string) => void;
}

interface ICurrency {
  meta: { last_updated_at: string };
  data: {
    [currencyCode: string]: {
      code: string;
      value: number;
    };
  };
}

interface IState {
  сurrencyCodes: string[];
}

class CurrencySearchBar extends Component<IProps, IState> {
  searchRef: React.RefObject<HTMLInputElement | null>;

  constructor(props: IProps) {
    super(props);
    this.searchRef = createRef();
    this.state = {
      сurrencyCodes: this.getCurrenciesCodes(),
    };
    this.handleClick = this.handleClick.bind(this);
  }

  getCurrenciesCodes = () => {
    const currenciesResponse: ICurrency = JSON.parse(
      localStorage.getItem("currencyData"),
    );
    const currenciesCodes = [];
    for (const currency in currenciesResponse.data) {
      currenciesCodes.push(currenciesResponse.data[currency].code);
    }
    return currenciesCodes;
  };

  handleClick = (code: string) => {
    const { handleChange } = this.props;
    handleChange(code);
  };

  render() {
    const { handleChange, searchWord } = this.props;
    return (
      <SearchContainer>
        <Input
          placeholder="Search currency"
          value={searchWord}
          onChange={() => handleChange(this.searchRef.current.value)}
          ref={this.searchRef}
        />
        {this.state.сurrencyCodes && (
          <SearchResults>
            {this.state.сurrencyCodes
              .filter((code) => !code.search(new RegExp(searchWord, "gi")))
              .map((code) => (
                <ResultItem onClick={() => this.handleClick(code)} key={code}>
                  {code}
                </ResultItem>
              ))}
          </SearchResults>
        )}
      </SearchContainer>
    );
  }
}

export default CurrencySearchBar;
