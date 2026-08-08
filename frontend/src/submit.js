import { useStore } from './store';

export const SubmitButton = () => {
  const nodes = useStore((state) => state.nodes);
  const edges = useStore((state) => state.edges);

  const handleSubmit = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/pipelines/parse', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nodes,
          edges,
        }),
      });

      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }

      const result = await response.json();

      alert(
        `Pipeline Analysis\n\n` +
          `Nodes: ${result.num_nodes}\n` +
          `Edges: ${result.num_edges}\n` +
          `Is DAG: ${result.is_dag ? 'Yes' : 'No'}`
      );
    } catch (error) {
      console.error('Pipeline submission failed:', error);

      alert(
        'Unable to analyze the pipeline. ' +
          'Please make sure the backend is running.'
      );
    }
  };

  return (
    <div className="flex items-center justify-center py-4">
      <button
        type="button"
        onClick={handleSubmit}
        className="rounded-md bg-primary px-5 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/20 focus-visible:ring-offset-2"
      >
        Submit
      </button>
    </div>
  );
};
