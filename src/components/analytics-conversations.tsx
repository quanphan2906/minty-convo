"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Bar, BarChart, XAxis, YAxis } from "recharts";
import { Button } from "@/components/ui/button";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";

const tabData = [
	{ id: "overview", label: "Overview" },
	{ id: "feedback", label: "Feedback" },
	{ id: "search", label: "Search" },
	{ id: "conversations", label: "Conversations" },
];

const conversationsData = [
	{
		clientName: "Client A",
		lastContacted: "Oct 12, 2024",
		summary: "Asked about clarification on Feature X usage.",
	},
	{
		clientName: "Client B",
		lastContacted: "Oct 10, 2024",
		summary: "Inquired about documentation for new update.",
	},
];

const topicsData = [
	{ topic: "Feature X", frequency: 5 },
	{ topic: "Documentation", frequency: 3 },
	{ topic: "Pricing", frequency: 2 },
];

const writingSuggestions = [
	{
		title: "Write a blog post on Feature X usage.",
		description:
			"Based on recent conversations, clients are showing interest in Feature X. A comprehensive blog post could help address common questions and showcase its benefits.",
	},
	{
		title: "Update documentation for the new update.",
		description:
			"With the recent update, there's a need for refreshed documentation. This will help clients understand and adapt to the changes more easily.",
	},
	{
		title: "Create a guide for Pricing models.",
		description:
			"Pricing has been a topic of discussion. A detailed guide explaining different pricing models could help clients choose the best option for their needs.",
	},
];

export function AnalyticsConversationsComponent() {
	const [activeTab, setActiveTab] = React.useState("conversations");

	return (
		<div className="w-full max-w-4xl mx-auto">
			<div className="border-b border-gray-200">
				<nav className="-mb-px flex space-x-8" aria-label="Tabs">
					{tabData.map((tab) => (
						<button
							key={tab.id}
							onClick={() => setActiveTab(tab.id)}
							className={cn(
								"whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm",
								activeTab === tab.id
									? "border-green-500 text-green-600"
									: "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
							)}
							aria-current={
								activeTab === tab.id ? "page" : undefined
							}
						>
							{tab.label}
						</button>
					))}
				</nav>
			</div>

			{activeTab === "conversations" && (
				<div className="mt-6 space-y-8">
					<div>
						<h2 className="text-lg font-semibold mb-4">
							Recent Conversations
						</h2>
						<table className="min-w-full divide-y divide-gray-300">
							<thead>
								<tr>
									<th
										scope="col"
										className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
									>
										Client Name
									</th>
									<th
										scope="col"
										className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
									>
										Last Contacted
									</th>
									<th
										scope="col"
										className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
									>
										Summary
									</th>
								</tr>
							</thead>
							<tbody className="divide-y divide-gray-200">
								{conversationsData.map(
									(conversation, index) => (
										<tr key={index}>
											<td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
												{conversation.clientName}
											</td>
											<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
												{conversation.lastContacted}
											</td>
											<td className="px-3 py-4 text-sm text-gray-500">
												{conversation.summary}
											</td>
										</tr>
									)
								)}
							</tbody>
						</table>
					</div>

					<div>
						<h2 className="text-lg font-semibold mb-4">
							Common Topics
						</h2>
						<div className="h-[300px] w-full">
							<div className="w-full h-full">
								<BarChart
									width={500}
									height={300}
									data={topicsData}
								>
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
							</div>
						</div>
					</div>

					<div>
						<h2 className="text-lg font-semibold mb-4">
							Writing Suggestions
						</h2>
						<Accordion type="single" collapsible className="w-full">
							{writingSuggestions.map((suggestion, index) => (
								<AccordionItem
									key={index}
									value={`item-${index}`}
								>
									<AccordionTrigger>
										{suggestion.title}
									</AccordionTrigger>
									<AccordionContent>
										{suggestion.description}
									</AccordionContent>
								</AccordionItem>
							))}
						</Accordion>
					</div>
				</div>
			)}
		</div>
	);
}
