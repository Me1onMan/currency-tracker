import React, { Component, createRef } from "react";
import { getCurrenciesCodes } from "@utils/getCurrencyCodes";

import { IProps, IState } from "./interfaces";
import { Input, ResultItem, SearchContainer, SearchResults } from "./styled";

class CurrencySearchBar extends Component<IProps, IState> {
  searchRef: React.RefObject<HTMLInputElement | null>;

  constructor(props: IProps) {
    super(props);
    this.searchRef = createRef();
    this.state = {
      сurrencyCodes: getCurrenciesCodes(),
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (code: string) => {
    const { handleChange } = this.props;
    handleChange(code);
  };

  render() {
    const { handleChange, searchWord } = this.props;
    const { сurrencyCodes } = this.state;
    return (
      <SearchContainer>
        <Input
          placeholder="Search currency"
          value={searchWord}
          onChange={() => handleChange(this.searchRef.current.value)}
          ref={this.searchRef}
        />
        {сurrencyCodes && (
          <SearchResults>
            {сurrencyCodes
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
