import Text, { textProps } from './Text';
import Email, { emailProps } from './Email';
import Password, { passwordProps } from './Password';
import Date, { dateProps } from './Date';
import Time, { timeProps } from './Time';
import Select, { selectProps } from './Select';
import Toggle, { toggleProps } from './Toggle';
import { InputTypes } from './Input.types';

export type inputProps =
    | textProps
    | emailProps
    | passwordProps
    | dateProps
    | timeProps
    | selectProps
    | toggleProps;

export default function Input(props: inputProps) {
    switch (props.type) {
        case InputTypes.text:
            return <Text {...props} />;
        case InputTypes.email:
            return <Email {...props} />;
        case InputTypes.password:
            return <Password {...props} />;
        case InputTypes.date:
            return <Date {...props} />;
        case InputTypes.time:
            return <Time {...props} />;
        case InputTypes.select:
            return <Select {...props} />;
        case InputTypes.toggle:
            return <Toggle {...props} />;
    }
}
