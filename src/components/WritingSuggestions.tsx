import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";

type Suggestion = {
	title: string;
	description: string;
};

const writingSuggestions: Suggestion[] = [
	{
		title: "Add Q&A for handling unexpected outputs in complex queries.",
		description:
			"Many users have reported unexpected model outputs for certain edge cases. Expanding the Quick Guide’s Q&A section to cover potential causes and solutions could greatly reduce confusion and improve user experience.",
	},
	{
		title: "Document a troubleshooting guide for latency issues in API calls.",
		description:
			"Several customers have experienced intermittent latency in API responses. Creating a detailed troubleshooting guide that outlines steps to mitigate and diagnose latency issues would help users resolve this problem more efficiently.",
	},
	{
		title: "Update fine-tuning section with common pitfalls and best practices.",
		description:
			"Customers have reported difficulties during model fine-tuning, often due to undocumented pitfalls. Adding a 'Common Issues' section to the fine-tuning guide could provide clearer guidance and reduce customer support queries.",
	},
	{
		title: "Add detailed explanation on how to monitor and correct model drift.",
		description:
			"Model drift is a frequently reported issue. Expanding the guide with best practices for monitoring and correcting model drift would provide valuable insights for customers managing long-term deployments.",
	},
	{
		title: "Clarify API rate limit behavior in the documentation.",
		description:
			"Some customers are unclear about API rate limits, particularly under heavy usage. Updating the Quick Guide with detailed information on how rate limits work and how to handle limit exceedance will minimize customer confusion.",
	},
];

export function WritingSuggestions() {
	return (
		<div>
			<h2 className="text-lg font-semibold mb-2">Writing Suggestions</h2>
			<div className="text-sm text-muted-foreground mb-4">
				MintAI has identified {writingSuggestions.length} key topics
				that could benefit from further writing or updates.
			</div>
			<Accordion type="single" collapsible className="w-full">
				{writingSuggestions.map((suggestion, index) => (
					<AccordionItem key={index} value={`item-${index}`}>
						<AccordionTrigger>{suggestion.title}</AccordionTrigger>
						<AccordionContent>
							{suggestion.description}
						</AccordionContent>
					</AccordionItem>
				))}
			</Accordion>
		</div>
	);
}
