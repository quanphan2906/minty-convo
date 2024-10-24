"use client";

import { useState } from "react";
import { TabsNavigation } from "./TabsNavigation";
import { CommonTopicsChart } from "./CommonTopicsChart";
import { WritingSuggestions } from "./WritingSuggestions";

export function AnalyticsConversations() {
	const [activeTab, setActiveTab] = useState<string>("conversations");

	return (
		<div className="w-full max-w-4xl mx-auto py-12">
			<div className="text-lg font-semibold mb-4">Analytics</div>
			<TabsNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
			{activeTab === "conversations" && (
				<div className="mt-6 space-y-8">
					<WritingSuggestions />
					<CommonTopicsChart />
				</div>
			)}
		</div>
	);
}
