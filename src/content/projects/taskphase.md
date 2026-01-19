---
title: "TaskPhase"
description: "A local-first task board built to explore complex UI interactions, predictable state management, and automated testing."
stack:
  - "Vue"
  - "Pinia"
  - "Vitest"
  - "JavaScript"
links:
  github: "https://github.com/jnabulsi/TaskPhase"
  live: "https://taskphase.xyz"
screenshots:
  - "/projects/taskphase/taskphase1.png"
  - "/projects/taskphase/taskphase2.png"
featured: true
role: "Solo project"
---

## What it is
TaskPhase is a task board application inspired by tools like Trello, built as a learning-focused project to explore more complex user interactions and frontend architecture.

## Why I built it
I wanted to build something that went beyond static CRUD screens and required careful handling of user-driven state changes. In particular, I was interested in implementing reliable drag-and-drop behaviour and understanding how UI interactions, application state, and persistence fit together in a real project.

I also used this project as an opportunity to write meaningful unit tests and get more comfortable testing stateful frontend logic.

## Technical highlights
- Drag-and-drop task and column reordering with predictable state updates
- Local-first data model with clear separation of concerns
- Unit tests covering core state and interaction logic
- Designed to be iterated on rather than treated as a one-off demo

## Future work
The current version is single-user and local-first. A future goal for the project is to introduce a hosted backend to support collaborative boards and shared state across users.

