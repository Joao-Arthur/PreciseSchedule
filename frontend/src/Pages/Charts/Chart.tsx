import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
    Area
} from 'recharts';
//import { ChartTitle } from './Charts.styles';

type props = {
    title: string;
    data: Object[];
    xKey: string;
    yKeys: string[];
};

export default function Chart({ title, data, xKey, yKeys }: props) {
    return (
        <ResponsiveContainer width='100%' height='100%'>
            <LineChart data={data}>
                <CartesianGrid strokeDasharray='3 3' />
                <XAxis dataKey={xKey} />
                <YAxis />
                <Tooltip />
                <Legend />
                {yKeys.map(yKey => (
                    <Line type='monotone' dataKey={yKey} stroke='#8884d8' />
                ))}
            </LineChart>
        </ResponsiveContainer>
    );
}
