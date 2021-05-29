import styled from 'styled-components';

const CustomInput = styled.input`
    border: 1px solid gray;
    border-radius: 4px;
    padding: 5px;
    font-size: 16px;
`;

export default CustomInput;

enum InputType {
    CHECKBOX = 'checkbox',
    COLOR = 'color',
    DATE = 'date',
    EMAIL = 'email',
    FILE = 'file',
    MONTH = 'month',
    NUMBER = 'number',
    PASSWORD = 'password',
    RADIO = 'radio',
    RANGE = 'range',
    SEARCH = 'search',
    TEL = 'tel',
    TEXT = 'text',
    TIME = 'time',
    URL = 'url',
    SWITCH = 'switch'
}

interface Props {
    type: InputType;
}

export function Input({ type }: Props) {
    switch (type) {
        case InputType.CHECKBOX:
        case InputType.COLOR:
        case InputType.FILE:
        case InputType.RADIO:
        case InputType.RANGE:
        case InputType.SEARCH:
        case InputType.SWITCH:
            return CustomInput;
        case InputType.DATE:
        case InputType.MONTH:
        case InputType.TIME:
        case InputType.TEL:
        case InputType.NUMBER:
        case InputType.EMAIL:
        case InputType.TEXT:
        case InputType.URL:
        case InputType.PASSWORD:
            return CustomInput;
    }
}
