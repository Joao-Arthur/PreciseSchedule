import {
    AreaChart,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
    Area
} from 'recharts';
//import { ChartTitle } from './Charts.styles';

type dataKey = {
    color: string;
    key: string;
};

type props = {
    title: string;
    data: Object[];
    xKey: string;
    dataKeys: dataKey[];
};

export default function Chart({ title, data, xKey, dataKeys }: props) {
    return (
        <ResponsiveContainer width='100%' height='100%'>
            <AreaChart data={data}>
                <defs>
                    {dataKeys.map(({ key, color }) => (
                        <linearGradient
                            id={`color${key}`}
                            x1='0'
                            y1='0'
                            x2='0'
                            y2='1'
                        >
                            <stop
                                offset='5%'
                                stopColor={color}
                                stopOpacity={0.5}
                            />
                            <stop
                                offset='95%'
                                stopColor={color}
                                stopOpacity={0.1}
                            />
                        </linearGradient>
                    ))}
                </defs>
                <CartesianGrid strokeDasharray='3 3' />
                <XAxis dataKey={xKey} />
                <YAxis />
                <Tooltip />
                <Legend />
                {dataKeys.map(({ key, color }) => (
                    <Area
                        type='monotone'
                        stackId=''
                        dataKey={key}
                        stroke={color}
                        fill={`url(#color${key})`}
                    />
                ))}
            </AreaChart>
        </ResponsiveContainer>
    );
}
