import React, { Fragment, ChangeEvent } from 'react';
import styled from 'styled-components';
import { Button, Box } from "grommet";

const StyledInput = styled.input`
  padding: 6px 12px;
  margin-right: 1em;
  height: 20px;
  line-height: 24px;
  width: 400px;
  outline: none;
`;

export interface SearchInputProps{
  value?: string;
  placeholder?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onClick: () => void;
}

const SearchInput = ({ value = '', placeholder = '', onChange, onClick }: SearchInputProps): JSX.Element =>
  (<Box direction="row" align="center">
    <StyledInput value={value} type="text" placeholder={placeholder} onChange={onChange} />
    <Button primary label="Search" onClick={onClick} />
  </Box>);

export default SearchInput;
