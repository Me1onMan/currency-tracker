import React, { ChangeEvent, Component, createRef, RefObject } from "react";

import { Select } from "./styled";

interface IProps {
  labelName: string;
  optionName: string;
  targetCurrencies: string[];
  selectedCurrency: string;
  onChange(_: string): void;
}

export default class SelectComponent extends Component<IProps> {
  private selectRef: RefObject<HTMLSelectElement>;

  constructor(props: IProps) {
    super(props);
    this.selectRef = createRef();
    this.changeSelectedOption = this.changeSelectedOption.bind(this);
    // this.focusOnSelect = this.focusOnSelect.bind(this);
  }

  // focusOnSelect = () => {
  //   if (this.selectRef.current)
  //   this.selectRef.current.focus();
  // }

  changeSelectedOption(e: ChangeEvent<HTMLSelectElement>) {
    const { onChange } = this.props;
    onChange(e.target.value);
  }

  render() {
    const { labelName, optionName, targetCurrencies, selectedCurrency } =
      this.props;

    return (
      <label>
        {labelName}
        <Select
          onChange={this.changeSelectedOption}
          value={selectedCurrency}
          ref={this.selectRef}
        >
          <option disabled>{optionName}</option>
          {targetCurrencies.map((code) => (
            <option value={code} key={code}>
              {code}
            </option>
          ))}
        </Select>
      </label>
    );
  }
}
