import { ResponsiveBar } from '@nivo/bar';

export default function Charts() {
    const data = [
        {
            country: 'AD',
            'hot dog': 157,
            'hot dogColor': 'hsl(223, 70%, 50%)',
            burger: 181,
            burgerColor: 'hsl(337, 70%, 50%)',
            sandwich: 141,
            sandwichColor: 'hsl(251, 70%, 50%)',
            kebab: 110,
            kebabColor: 'hsl(96, 70%, 50%)',
            fries: 61,
            friesColor: 'hsl(216, 70%, 50%)',
            donut: 62,
            donutColor: 'hsl(184, 70%, 50%)'
        },
        {
            country: 'AE',
            'hot dog': 70,
            'hot dogColor': 'hsl(189, 70%, 50%)',
            burger: 40,
            burgerColor: 'hsl(297, 70%, 50%)',
            sandwich: 11,
            sandwichColor: 'hsl(317, 70%, 50%)',
            kebab: 170,
            kebabColor: 'hsl(159, 70%, 50%)',
            fries: 144,
            friesColor: 'hsl(280, 70%, 50%)',
            donut: 156,
            donutColor: 'hsl(16, 70%, 50%)'
        },
        {
            country: 'AF',
            'hot dog': 194,
            'hot dogColor': 'hsl(235, 70%, 50%)',
            burger: 12,
            burgerColor: 'hsl(140, 70%, 50%)',
            sandwich: 145,
            sandwichColor: 'hsl(157, 70%, 50%)',
            kebab: 50,
            kebabColor: 'hsl(221, 70%, 50%)',
            fries: 132,
            friesColor: 'hsl(283, 70%, 50%)',
            donut: 105,
            donutColor: 'hsl(236, 70%, 50%)'
        },
        {
            country: 'AG',
            'hot dog': 125,
            'hot dogColor': 'hsl(62, 70%, 50%)',
            burger: 76,
            burgerColor: 'hsl(29, 70%, 50%)',
            sandwich: 90,
            sandwichColor: 'hsl(282, 70%, 50%)',
            kebab: 196,
            kebabColor: 'hsl(70, 70%, 50%)',
            fries: 106,
            friesColor: 'hsl(165, 70%, 50%)',
            donut: 134,
            donutColor: 'hsl(235, 70%, 50%)'
        },
        {
            country: 'AI',
            'hot dog': 61,
            'hot dogColor': 'hsl(83, 70%, 50%)',
            burger: 154,
            burgerColor: 'hsl(130, 70%, 50%)',
            sandwich: 8,
            sandwichColor: 'hsl(65, 70%, 50%)',
            kebab: 25,
            kebabColor: 'hsl(256, 70%, 50%)',
            fries: 42,
            friesColor: 'hsl(291, 70%, 50%)',
            donut: 97,
            donutColor: 'hsl(108, 70%, 50%)'
        },
        {
            country: 'AL',
            'hot dog': 30,
            'hot dogColor': 'hsl(51, 70%, 50%)',
            burger: 11,
            burgerColor: 'hsl(18, 70%, 50%)',
            sandwich: 152,
            sandwichColor: 'hsl(287, 70%, 50%)',
            kebab: 117,
            kebabColor: 'hsl(285, 70%, 50%)',
            fries: 5,
            friesColor: 'hsl(46, 70%, 50%)',
            donut: 159,
            donutColor: 'hsl(107, 70%, 50%)'
        },
        {
            country: 'AM',
            'hot dog': 37,
            'hot dogColor': 'hsl(99, 70%, 50%)',
            burger: 140,
            burgerColor: 'hsl(263, 70%, 50%)',
            sandwich: 167,
            sandwichColor: 'hsl(34, 70%, 50%)',
            kebab: 29,
            kebabColor: 'hsl(323, 70%, 50%)',
            fries: 194,
            friesColor: 'hsl(16, 70%, 50%)',
            donut: 75,
            donutColor: 'hsl(105, 70%, 50%)'
        }
    ];

    return (
        <ResponsiveBar
            data={data}
            keys={['hot dog', 'burger', 'sandwich', 'kebab', 'fries', 'donut']}
            indexBy='country'
            margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
            padding={0.3}
            valueScale={{ type: 'linear' }}
            indexScale={{ type: 'band', round: true }}
            colors={{ scheme: 'nivo' }}
            defs={[
                {
                    id: 'dots',
                    type: 'patternDots',
                    background: 'inherit',
                    color: '#38bcb2',
                    size: 4,
                    padding: 1,
                    stagger: true
                },
                {
                    id: 'lines',
                    type: 'patternLines',
                    background: 'inherit',
                    color: '#eed312',
                    rotation: -45,
                    lineWidth: 6,
                    spacing: 10
                }
            ]}
            fill={[
                {
                    match: {
                        id: 'fries'
                    },
                    id: 'dots'
                },
                {
                    match: {
                        id: 'sandwich'
                    },
                    id: 'lines'
                }
            ]}
            borderColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
            axisTop={null}
            axisRight={null}
            axisBottom={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'country',
                legendPosition: 'middle',
                legendOffset: 32
            }}
            axisLeft={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'food',
                legendPosition: 'middle',
                legendOffset: -40
            }}
            labelSkipWidth={12}
            labelSkipHeight={12}
            labelTextColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
            legends={[
                {
                    dataFrom: 'keys',
                    anchor: 'bottom-right',
                    direction: 'column',
                    justify: false,
                    translateX: 120,
                    translateY: 0,
                    itemsSpacing: 2,
                    itemWidth: 100,
                    itemHeight: 20,
                    itemDirection: 'left-to-right',
                    itemOpacity: 0.85,
                    symbolSize: 20,
                    effects: [
                        {
                            on: 'hover',
                            style: {
                                itemOpacity: 1
                            }
                        }
                    ]
                }
            ]}
        />
    );
}
