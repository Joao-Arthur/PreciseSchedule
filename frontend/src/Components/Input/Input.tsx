import Text, { textProps } from './Text';
import Email, { emailProps } from './Email';
import Password, { passwordProps } from './Password';
import Date, { dateProps } from './Date';
import Time, { timeProps } from './Time';
import Select, { selectProps } from './Select';
import Toggle, { toggleProps } from './Toggle';

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
        case 'text':
            return <Text {...props} />;
        case 'email':
            return <Email {...props} />;
        case 'password':
            return <Password {...props} />;
        case 'date':
            return <Date {...props} />;
        case 'time':
            return <Time {...props} />;
        case 'select':
            return <Select {...props} />;
        case 'toggle':
            return <Toggle {...props} />;
    }
}
