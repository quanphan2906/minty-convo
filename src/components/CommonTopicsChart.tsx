import { Bar, BarChart, XAxis, YAxis, ResponsiveContainer } from "recharts";

type Topic = {
	topic: string;
	frequency: number;
};

const topicsData: Topic[] = [
	{ topic: "Unexpected Model Outputs", frequency: 8 },
	{ topic: "Latency in API Responses", frequency: 6 },
	{ topic: "Fine-Tuning Issues", frequency: 5 },
	{ topic: "Model Drift", frequency: 4 },
	{ topic: "API Rate Limits", frequency: 3 },
];

export function CommonTopicsChart() {
	return (
		<div>
			<h2 className="text-lg font-semibold mb-4">Common Topics</h2>
			<div className="h-[200px]">
				<ResponsiveContainer width="100%" height="100%">
					<BarChart data={topicsData}>
						<XAxis
							dataKey="topic"
							stroke="#888888"
							fontSize={12}
							tickLine={false}
							axisLine={false}
						/>
						<YAxis
							stroke="#888888"
							fontSize={12}
							tickLine={false}
							axisLine={false}
							tickFormatter={(value) => `${value}`}
						/>
						<Bar
							dataKey="frequency"
							fill="#4ade80"
							radius={[4, 4, 0, 0]}
						/>
					</BarChart>
				</ResponsiveContainer>
			</div>
		</div>
	);
}
