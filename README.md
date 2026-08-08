# VectorShift Frontend Technical Assessment

A React-based workflow editor built for the VectorShift frontend
technical assessment.

The application provides a reusable node architecture, a visual React
Flow pipeline editor, dynamic Text Node variables, and FastAPI-based
pipeline analysis.

## Features

- Visual workflow editor powered by React Flow
- Reusable `BaseNode` architecture
- Four original node types:
  - Input
  - LLM
  - Output
  - Text
- Five additional node types:
  - API
  - Filter
  - Transform
  - Database
  - Condition
- Drag-and-drop node creation
- Node and edge connections
- Node/edge deletion with `Delete` or `Backspace`
- Consistent node, handle, toolbar, edge, minimap, and control styling
- Responsive Text Node sizing
- Dynamic `{{variable}}` detection
- One input handle per unique valid JavaScript variable
- Backend pipeline analysis
- Node and edge counting
- Directed acyclic graph (DAG) detection
- User-friendly pipeline analysis result

## Tech Stack

### Frontend

- React
- React Flow
- Tailwind CSS
- shadcn/ui
- Lucide React
- Zustand (used by the React Flow/store architecture)

### Backend

- Python
- FastAPI
- Pydantic
- Uvicorn

## Project Structure

```text
vectorshift-frontend-assessment/
├── backend/
│   └── main.py
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── nodes/
│   │   │   │   ├── BaseNode.jsx
│   │   │   │   ├── NodeContent.jsx
│   │   │   │   ├── NodeField.jsx
│   │   │   │   ├── NodeHandles.jsx
│   │   │   │   └── NodeHeader.jsx
│   │   │   └── ui/
│   │   ├── nodes/
│   │   │   ├── inputNode.js
│   │   │   ├── llmNode.js
│   │   │   ├── outputNode.js
│   │   │   ├── textNode.js
│   │   │   ├── apiNode.js
│   │   │   ├── filterNode.js
│   │   │   ├── transformNode.js
│   │   │   ├── databaseNode.js
│   │   │   └── conditionNode.js
│   │   ├── store.js
│   │   ├── toolbar.js
│   │   ├── ui.js
│   │   ├── submit.js
│   │   └── index.css
│   └── package.json
│
└── README.md
```

## Installation

### Prerequisites

- Node.js
- npm
- Python 3.10+
- A Python virtual environment is recommended

### 1. Clone the repository

```bash
git clone https://github.com/mukteswar-git/vectorshift-frontend-assessment.git
cd vectorshift-frontend-assessment
```

### 2. Install frontend dependencies

```bash
cd frontend
npm install
```

### 3. Install backend dependencies

Open another terminal:

```bash
cd backend
python -m venv ../.venv
```

Activate the environment on Windows PowerShell:

```powershell
..\.venv\Scripts\Activate.ps1
```

If the virtual environment already exists, activate it directly:

```powershell
..\.venv\Scripts\Activate.ps1
```

Install the backend dependencies:

```bash
pip install fastapi uvicorn pydantic
```

## Running the Application

The frontend and backend should run simultaneously.

### Backend

From `backend/`:

```bash
python -m uvicorn main:app --reload
```

The API will be available at:

```text
http://127.0.0.1:8000
```

FastAPI Swagger documentation:

```text
http://127.0.0.1:8000/docs
```

### Frontend

From `frontend/`:

```bash
npm start
```

The application will be available at:

```text
http://localhost:3000
```

## Architecture

### Base Node Abstraction

The original node implementations shared common structure and styling.
Instead of duplicating that structure for every node, the project uses a
reusable `BaseNode`.

The architecture is:

```text
BaseNode
├── NodeHeader
├── NodeContent
└── NodeHandles
```

A node provides its configuration and custom content while `BaseNode`
handles the shared structure and styling.

Example:

```jsx
<BaseNode
  title="API"
  icon={...}
  handles={handles}
>
  {/* Node-specific content */}
</BaseNode>
```

This makes new node types cheaper to implement and keeps shared styling
centralized.

### Reusable Form Fields

`NodeField` provides a consistent label/content layout for node
configuration fields.

This prevents individual nodes from implementing slightly different
spacing and field structures.

### Node Handles

`NodeHandles` receives a handle configuration array and renders the
corresponding React Flow handles.

This allows each node to define its own connections without duplicating
handle rendering logic.

## Node Types

### Input

Provides a configurable input name and input type and exposes a source
handle.

### LLM

Represents an LLM processing node with input and output connections.

### Output

Provides configurable output name and type and exposes a target handle.

### Text

Provides editable text content and dynamically creates variable input
handles.

### API

Represents an API request step with configurable request-related fields.

### Filter

Represents filtering logic in a workflow.

### Transform

Represents a data transformation step.

### Database

Represents a database operation step.

### Condition

Represents conditional workflow logic.

The additional nodes primarily demonstrate the flexibility of the shared
node abstraction, which is the main architectural requirement of the
assessment.

## Text Node

The Text Node implements two pieces of dynamic behavior.

### Dynamic sizing

The node observes the text content and adjusts its dimensions within
sensible limits.

Short text keeps the node compact, while larger content increases the
node size until the configured maximum is reached. Additional content
remains accessible through the textarea scrollbar.

### Variable detection

Variables are written using double curly brackets:

```text
Hello {{name}}, your order {{orderId}} is ready.
```

Valid JavaScript identifiers are detected from the text.

For example:

```text
{{name}}
{{orderId}}
{{user_id}}
```

create corresponding input handles on the left side of the Text Node.

Invalid expressions such as:

```text
{{123name}}
{{hello.world}}
```

are ignored.

Duplicate variables are deduplicated so that each unique variable
receives one handle.

The handles use stable IDs derived from the node ID and variable name,
and React Flow node internals are updated when the handle set changes.

## Backend Integration

The frontend sends the current React Flow nodes and edges to:

```text
POST /pipelines/parse
```

The request contains:

```json
{
  "nodes": [],
  "edges": []
}
```

The backend returns:

```json
{
  "num_nodes": 3,
  "num_edges": 2,
  "is_dag": true
}
```

### DAG Detection

The backend constructs a directed graph from the supplied edges and
determines whether the graph contains a cycle.

A pipeline such as:

```text
Input → LLM → Output
```

is a DAG.

A pipeline containing:

```text
A → B → C → A
```

is not a DAG.

The frontend displays the result after submission:

```text
Pipeline Analysis

Nodes: 3
Edges: 2
Is DAG: Yes
```

## Validation

The implementation has been manually validated for:

- Node creation
- Drag-and-drop
- Node movement
- Node deletion
- Edge creation
- Edge deletion
- Original node types
- Five additional node types
- Long Text Node content
- Text Node resizing
- Multiple variables
- Duplicate variables
- Invalid variables
- Variable removal
- Linear DAGs
- Branching DAGs
- Cyclic graphs
- Backend node/edge counting
- Backend validation
- Frontend/backend integration
- Production build

### Production Build

Run:

```bash
npm run build
```

The production build completes successfully.

## Development Notes

The project intentionally keeps the implementation focused on the
assessment requirements rather than adding unrelated application
features.

The node abstraction, dynamic Text Node behavior, visual workflow
editor, and backend DAG analysis are the core areas of the
implementation.

## Assessment Requirements

The implementation covers the four assessment areas:

1.  **Node Abstraction** --- reusable node architecture plus five new
    nodes.
2.  **Styling** --- unified workflow editor UI and React Flow styling.
3.  **Text Node Logic** --- dynamic sizing and variable-based handles.
4.  **Backend Integration** --- pipeline submission, node/edge counts,
    DAG detection, and result display.

## License

This project was created as part of the VectorShift frontend technical
assessment.
