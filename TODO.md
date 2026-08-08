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
- [ ] Phase 1 — Design System
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

- [ ] Configure theme
- [ ] Configure colors
- [ ] Configure typography
- [ ] Configure spacing
- [ ] Configure border radius
- [ ] Configure shadows

### shadcn/ui Components

- [ ] Card
- [ ] Button
- [ ] Input
- [ ] Textarea
- [ ] Dialog
- [ ] Badge
- [ ] Separator

### Icons

- [ ] Select consistent icon set
- [ ] Assign icon for each node

---

## 🏗 Phase 2 — Base Node Architecture

### Base Components

- [ ] Create BaseNode
- [ ] Create NodeHeader
- [ ] Create NodeContent
- [ ] Create NodeHandles
- [ ] Create NodeFooter
- [ ] Create reusable form field component

### BaseNode Features

- [ ] Title
- [ ] Icon
- [ ] Dynamic Handles
- [ ] Footer
- [ ] Custom Content
- [ ] Shared Styling

### Validation

- [ ] Test BaseNode
- [ ] Verify reusable architecture

### Node Configuration

- [ ] Design node configuration schema
- [ ] Support configurable title
- [ ] Support configurable icon
- [ ] Support configurable input handles
- [ ] Support configurable output handles
- [ ] Support configurable fields

---

## 🔄 Phase 3 — Refactor Existing Nodes

### Existing Nodes

- [ ] Input Node
- [ ] Output Node
- [ ] Text Node
- [ ] LLM Node

### Validation

- [ ] Input Node works
- [ ] Output Node works
- [ ] Text Node works
- [ ] LLM Node works

### Regression Testing

- [ ] Existing handles still connect
- [ ] Existing node state still works
- [ ] Existing functionality unchanged

---

## ➕ Phase 4 — Create Five New Nodes

### Required Nodes

- [ ] API Node
- [ ] Database Node
- [ ] Email Node
- [ ] Delay Node
- [ ] JSON Node

### Validation

- [ ] All nodes draggable
- [ ] Handles positioned correctly
- [ ] Styling consistent
- [ ] Functionality working

### Node Quality

- [ ] Uses BaseNode abstraction
- [ ] No duplicated UI code
- [ ] Consistent styling

---

## 🎨 Phase 5 — Styling & UX

### Canvas

- [ ] Background
- [ ] Grid
- [ ] Controls
- [ ] MiniMap

### Nodes

- [ ] Card styling
- [ ] Shadows
- [ ] Rounded corners
- [ ] Icons
- [ ] Hover state
- [ ] Selected state
- [ ] Spacing
- [ ] Typography

### Handles

- [ ] Size
- [ ] Colors
- [ ] Hover state

### General UI

- [ ] Buttons
- [ ] Dialog
- [ ] Inputs
- [ ] Consistent spacing
- [ ] Responsive layout

### Accessibility

- [ ] Labels for inputs
- [ ] Keyboard focus states
- [ ] Sufficient color contrast

---

## 📝 Phase 6 — Text Node Logic

### Auto Resize

- [ ] Auto-resize width
- [ ] Auto-resize height
- [ ] Set minimum size
- [ ] Set maximum size

---

### Variable Parser

- [ ] Create regex for `{{variable}}`
- [ ] Validate JavaScript variable names
- [ ] Extract unique variables
- [ ] Unit test parser with sample inputs

---

### Variable Parsing

- [ ] Parse `{{variable}}`
- [ ] Detect valid variables
- [ ] Ignore invalid variables
- [ ] Ignore duplicate variables

---

### Dynamic Handles

- [ ] Create one Handle for each detected variable
- [ ] Position Handles on the left side of the Text Node
- [ ] Label Handles with the variable name
- [ ] Update Handles as the text changes
- [ ] Remove Handles when variables are deleted
- [ ] Preserve existing output Handle(s)
- [ ] Ensure Handles remain connectable

---

### Testing

- [ ] Single variable (`{{input}}`)
- [ ] Multiple variables (`{{name}} {{email}}`)
- [ ] Duplicate variables
- [ ] Invalid JavaScript identifiers
- [ ] Variable deletion removes Handle
- [ ] Handle updates without refresh

---

## 🔗 Phase 7 — Backend Integration

### Frontend

- [ ] Serialize nodes
- [ ] Serialize edges
- [ ] Send POST request
- [ ] Handle loading state
- [ ] Handle API success
- [ ] Handle API errors

### Backend

- [ ] Count nodes
- [ ] Count edges
- [ ] Verify DAG
- [ ] Return response

### Result Dialog

- [ ] Display node count
- [ ] Display edge count
- [ ] Display DAG status
- [ ] User-friendly UI

---

## 🧪 Phase 8 — Testing & Validation

### Node Testing

- [ ] Drag
- [ ] Drop
- [ ] Select
- [ ] Delete

### Edge Testing

- [ ] Connect
- [ ] Disconnect
- [ ] Multiple connections

### Text Node Testing

- [ ] Resize
- [ ] Dynamic handles
- [ ] Variable parsing

### Backend Testing

- [ ] Empty graph
- [ ] Single node
- [ ] Valid DAG
- [ ] Invalid DAG
- [ ] Large graph

### Edge Cases

- [ ] Empty pipeline
- [ ] Disconnected graph
- [ ] Cyclic graph
- [ ] Large pipeline

### UI Testing

- [ ] Zoom
- [ ] Pan
- [ ] Responsive layout
- [ ] Dialog

---

## 🧹 Phase 9 — Code Cleanup

### Cleanup

- [ ] Remove console.log
- [ ] Remove dead code
- [ ] Remove unused imports
- [ ] Remove commented code

### Refactoring

- [ ] Extract reusable functions
- [ ] Organize folders
- [ ] Organize imports
- [ ] Improve naming

### Validation

- [ ] npm run build
- [ ] npm run lint
- [ ] Backend runs successfully

---

## 📚 Phase 10 — Documentation

### README

- [ ] Project overview
- [ ] Features
- [ ] Architecture
- [ ] Folder structure
- [ ] Installation
- [ ] Running locally
- [ ] Design decisions
- [ ] Assumptions
- [ ] Future improvements
- [ ] Screenshots

---

## 🚀 Phase 11 — Final Submission

### Assessment Verification

- [ ] Part 1 — Node Abstraction completed
- [ ] Part 2 — Styling completed
- [ ] Part 3 — Text Node Logic completed
- [ ] Part 4 — Backend Integration completed

### Final Quality Checks

- [ ] All assessment requirements satisfied
- [ ] Manual testing completed
- [ ] No console errors or warnings
- [ ] Production build succeeds (`npm run build`)
- [ ] Backend starts successfully
- [ ] README reviewed and updated

### Version Control

- [ ] Review changed files
- [ ] Write meaningful commit message
- [ ] Push latest changes to GitHub
- [ ] Verify GitHub repository is up to date

### Submission

- [ ] Verify repository link/access
- [ ] Submit assessment
- [ ] Save confirmation email or submission confirmation

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
