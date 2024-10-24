type Conversation = {
	clientName: string;
	lastContacted: string;
	summary: string;
};

const conversationsData: Conversation[] = [
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

export function ConversationsTable() {
	return (
		<div>
			<h2 className="text-lg font-semibold mb-4">Recent Conversations</h2>
			<table className="min-w-full divide-y divide-gray-300">
				<thead>
					<tr>
						<th className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
							Client Name
						</th>
						<th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
							Last Contacted
						</th>
						<th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
							Summary
						</th>
					</tr>
				</thead>
				<tbody className="divide-y divide-gray-200">
					{conversationsData.map((conversation, index) => (
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
					))}
				</tbody>
			</table>
		</div>
	);
}
