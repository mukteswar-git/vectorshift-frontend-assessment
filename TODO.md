# 🚀 VectorShift Frontend Technical Assessment

> **Goal:** Build a clean, scalable, and production-quality workflow editor that satisfies all assessment requirements while demonstrating strong React engineering, reusable architecture, clean UI, and maintainable code.

## 🛠 Tech Stack

### Frontend

- React
- React Flow (@xyflow/react)
- Tailwind CSS
- shadcn/ui
- Lucide React

### Backend

- FastAPI

---

## 📊 Overall Progress

- [x] Phase 0 — Project Setup
- [x] Phase 1 — Design System
- [ ] Phase 2 — Base Node Architecture
- [ ] Phase 3 — Refactor Existing Nodes
- [ ] Phase 4 — Create New Nodes
- [ ] Phase 5 — Styling & UX
- [ ] Phase 6 — Text Node Logic
- [ ] Phase 7 — Backend Integration
- [ ] Phase 8 — Testing & Validation
- [ ] Phase 9 — Code Cleanup
- [ ] Phase 10 — Documentation
- [ ] Phase 11 — Final Submission

---

## ✅ Phase 0 — Project Setup

### Development Environment

- [x] Create Git branch
- [x] Install frontend dependencies
- [x] Install backend dependencies
- [x] Setup shadcn/ui
- [x] Install Lucide React
- [x] Verify frontend runs
- [x] Verify backend runs

### Project Understanding

- [x] Understand React Flow architecture
- [x] Understand node system
- [x] Understand backend structure
- [x] Read assessment requirements
- [x] Plan implementation strategy

---

## 🎨 Phase 1 — Design System

### Tailwind

- [x] Configure theme
- [x] Configure colors
- [x] Configure typography
- [x] Configure spacing
- [x] Configure border radius
- [x] Configure shadows

### shadcn/ui Components

- [x] Card
- [x] Button
- [x] Input
- [x] Textarea
- [x] Dialog
- [x] Badge
- [x] Separator

### Icons

- [x] Select consistent icon set
- [x] Create central icon mapping
- [x] Assign icon for each existing node
- [x] Integrate icons into draggable nodes

---

## 🏗 Phase 2 — Base Node Architecture

### Base Components

- [x] Create BaseNode
- [x] Create NodeHeader
- [x] Create NodeContent
- [x] Create NodeHandles
- [ ] Create NodeFooter
- [x] Create reusable form field component

### BaseNode Features

- [x] Title
- [x] Icon
- [x] Configurable Handles
- [ ] Footer
- [x] Custom Content
- [x] Shared Styling

### Validation

- [x] Test BaseNode
- [x] Verify reusable architecture

### Node Configuration

- [ ] Design node configuration schema
- [x] Support configurable title
- [x] Support configurable icon
- [x] Support configurable input handles
- [x] Support configurable output handles
- [x] Support configurable custom content
- [x] Support configurable fields

---

## 🔄 Phase 3 — Refactor Existing Nodes

### Input Node

- [x] Refactor InputNode to use BaseNode
- [x] Preserve name state
- [x] Preserve input type state
- [x] Preserve source handle
- [x] Verify InputNode

### LLM Node

- [x] Refactor LLMNode to use BaseNode
- [x] Preserve system handle
- [x] Preserve prompt handle
- [x] Preserve response handle
- [x] Verify LLMNode

### Output Node

- [x] Refactor OutputNode to use BaseNode
- [x] Preserve name state
- [x] Preserve output type state
- [x] Preserve target handle
- [x] Verify OutputNode

### Text Node

- [x] Refactor TextNode to use BaseNode
- [x] Preserve text state
- [x] Preserve textarea
- [x] Preserve output handle
- [x] Verify TextNode

### Integration

- [x] Test all four nodes
- [x] Test node connections
- [x] Verify React Flow behavior

---

## 🧩 Phase 4 — Create New Nodes

### Node Selection

- [x] Choose five new node types
- [x] Define purpose of each node
- [x] Define handles for each node
- [x] Define fields for each node
- [x] Define icon for each node

### Implementation

- [x] Create API Node
- [x] Create Filter Node
- [x] Create Transform Node
- [x] Create Database Node
- [x] Create Condition Node

### Integration

- [x] Register all five nodes with React Flow
- [x] Add all five nodes to toolbar
- [x] Verify drag-and-drop
- [x] Verify handles
- [x] Verify connections

---

## 🎨 Phase 5 — Styling & UX

### Nodes

- [x] Consistent node dimensions
- [x] Consistent header
- [x] Consistent content spacing
- [x] Consistent field styling
- [x] Consistent handle styling
- [x] Node hover state
- [x] Node selected state

### Toolbar

- [x] Styled draggable nodes
- [x] Improve toolbar layout
- [x] Add visual grouping if needed

### Canvas

- [x] Canvas background
- [x] React Flow controls styling
- [x] Minimap styling
- [x] Edge styling
- [x] Selection states

### UX

- [x] Responsive layout
- [x] Clear visual hierarchy
- [x] Accessible labels
- [x] Keyboard/focus states

---

## 📝 Phase 6 — Text Node Logic

### Dynamic Sizing

- [ ] Text node width changes with content
- [ ] Text node height changes with content
- [ ] Set sensible minimum dimensions
- [ ] Prevent uncontrolled growth

### Variable Detection

- [ ] Detect {{ variable }}
- [ ] Validate JavaScript variable names
- [ ] Extract unique variables
- [ ] Ignore invalid variables
- [ ] Update variables as text changes

### Dynamic Handles

- [ ] Create left handle for each variable
- [ ] Give each handle a stable ID
- [ ] Position multiple handles correctly
- [ ] Remove handles when variables disappear
- [ ] Preserve output handle

---

## 🔌 Phase 7 — Backend Integration

### Frontend

- [ ] Read nodes from React Flow
- [ ] Read edges from React Flow
- [ ] Send pipeline to /pipelines/parse
- [ ] Handle successful response
- [ ] Handle request errors

### Backend

- [ ] Receive nodes
- [ ] Receive edges
- [ ] Calculate num_nodes
- [ ] Calculate num_edges
- [ ] Determine whether graph is DAG
- [ ] Return required response

### Result

- [ ] Display num_nodes
- [ ] Display num_edges
- [ ] Display is_dag
- [ ] User-friendly alert

---

## 🧪 Phase 8 — Testing & Validation

### Node Testing

- [ ] Test all original nodes
- [ ] Test all five new nodes
- [ ] Test node connections
- [ ] Test node deletion
- [ ] Test node movement

### Text Node

- [ ] Test long text
- [ ] Test multiple variables
- [ ] Test duplicate variables
- [ ] Test invalid variables
- [ ] Test variable removal

### Backend

- [ ] Empty pipeline
- [ ] Single node
- [ ] Linear DAG
- [ ] Branching DAG
- [ ] Cyclic graph
- [ ] Invalid request

### Build

- [ ] npm run build
- [ ] Fix production build issues

---

## 🧹 Phase 9 — Code Cleanup

- [ ] Remove unused imports
- [ ] Remove unused components
- [ ] Remove temporary code
- [ ] Remove inline styles where appropriate
- [ ] Remove duplicated logic
- [ ] Review component naming
- [ ] Review file organization
- [ ] Review React Flow node registration
- [ ] Review state management
- [ ] Review error handling

---

## 📚 Phase 10 — Documentation

### README

- [ ] Project overview
- [ ] Features
- [ ] Tech stack
- [ ] Installation
- [ ] Frontend setup
- [ ] Backend setup
- [ ] Environment variables
- [ ] Running the application
- [ ] Architecture overview
- [ ] Node abstraction explanation
- [ ] Text node logic explanation
- [ ] Backend integration explanation

### Code

- [ ] Add comments where genuinely useful
- [ ] Document non-obvious logic

---

## 🚀 Phase 11 — Final Submission

- [ ] Run frontend
- [ ] Run backend
- [ ] Test complete workflow
- [ ] Test all nodes
- [ ] Test Text node variables
- [ ] Test backend submission
- [ ] Run production build
- [ ] Check console for errors
- [ ] Check network errors
- [ ] Check Git status
- [ ] Push final changes
- [ ] Verify GitHub repository
- [ ] Prepare submission

---

## 🎯 Critical Path

These tasks **must** be completed before submission.

- [ ] BaseNode Architecture
- [ ] Refactor Existing Nodes
- [ ] Five New Nodes
- [ ] Styling
- [ ] Auto-resizing Text Node
- [ ] Dynamic Variable Handles
- [ ] Backend Integration
- [ ] DAG Detection
- [ ] Production Build
- [ ] Testing
- [ ] README
- [ ] Submit

---

## 💡 Optional Improvements (Only if Time Allows)

- [ ] Dark mode
- [ ] Better node animations
- [ ] Keyboard shortcuts
- [ ] Better edge styling
- [ ] Toast notifications
- [ ] Empty canvas state
- [ ] Better loading states

---

## 🐞 Bugs / Notes

### Bugs

- None

### Notes

- None

## 📅 Target Schedule

### Saturday

- [ ] Phase 0
- [ ] Phase 1
- [ ] Phase 2
- [ ] Phase 3
- [ ] Phase 4
- [ ] Phase 5
- [ ] Phase 6
- [ ] Phase 7

**Goal:** Complete all required features.

---

### Sunday

- [ ] Phase 8
- [ ] Phase 9
- [ ] Phase 10
- [ ] Phase 11

**Goal:** Test, polish, document, build, and submit.

---

## 🏁 Definition of Done

The assessment is complete when:

- [ ] All four assessment requirements are fully implemented.
- [ ] Five new nodes are created.
- [ ] BaseNode abstraction is used by every node.
- [ ] UI is modern and consistent.
- [ ] Text node resizes automatically.
- [ ] Dynamic `{{variable}}` handles work correctly.
- [ ] Backend returns correct node count, edge count, and DAG status.
- [ ] Results are displayed in a polished dialog.
- [ ] No console errors.
- [ ] Production build succeeds.
- [ ] README is complete.
- [ ] Repository is ready for submission.
