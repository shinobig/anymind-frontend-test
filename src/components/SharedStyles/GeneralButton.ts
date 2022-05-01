import styled from "styled-components";

interface ChannelButtonHolderProps {
  selected?: boolean
  width?: number
  height?: number
  margin?: string
  fontSize?: number
  alignItems?: string
}

const ChannelButtonHolder = styled.button<ChannelButtonHolderProps>`
  width: ${({width}) => width ? `${width}%` : '100%'};
  height: ${({height}) => height ? `${height}%` : 'initial'};
  margin: ${({margin}) => margin ? margin : '.7em 0'};
  padding: .5em;
  border-radius: 5px;
  background-color: ${({selected}) => selected ? '#2196f3' : '#e3f2fd'};
  border: none;
  font-size: ${({fontSize}) => fontSize ? `${fontSize}px` : '18px'};
  outline: none;
  color: ${({selected}) => selected ? 'white' : 'black'};
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Montserrat', sans-serif;

  &:hover {
    background-color: #bbdefb;
    cursor: pointer;
  }

  &:disabled {
    background-color: #cfd8dc;
    color: #546e7a;
  }


`

export default ChannelButtonHolder
