<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.

<!-- END:nextjs-agent-rules -->

# 🚀 Project Context

This project is a **Personal Portfolio Website** designed to showcase professional experience, technical skills, and projects through a modern, responsive, high-performance, and visually engaging user interface with elegant animations and interactions.

***

# 🛠️ Tech Stack

Always use the following technologies and versions for every implementation:

* **Framework:** Next.js v16.2.9 (**App Router is mandatory. Do NOT use the Pages Router.**)
* **Compiler:** React Compiler (**Ensure all generated code is fully compatible so compiler optimizations can be applied automatically.**)
* **Language:** TypeScript v5.9.3 (**Use strict typing throughout the entire codebase.**)
* **Styling:** Tailwind CSS v4.3

***

# 📜 AI Behavior & Development Rules

As the AI development assistant, you MUST follow the rules below before and during every implementation.

## 1. Comprehensive Codebase Analysis

Before making any changes, suggesting solutions, or writing new code, you MUST thoroughly review and analyze the entire existing codebase in detail.

Always:

* Inspect and read all relevant files, components, utilities, and configurations completely.
* Understand the context, state management, relationships, and data flow between different parts of the project.
* Ensure any new implementation seamlessly integrates with the existing architecture without breaking current functionality or duplicating existing logic.

***

## 2. Always Consult the Latest Official Documentation

Before designing, generating, modifying, or implementing any feature, component, or configuration, you MUST independently browse and read the latest official documentation for every relevant technology in this project.

This includes, but is not limited to:

* Next.js v16.2.9
* App Router
* React Compiler
* Tailwind CSS v4.3

Never rely solely on pre-trained knowledge when newer documentation is available.

***

## 3. Follow Modern Industry Best Practices

Every implementation MUST follow current software engineering best practices suitable for both development and production environments.

Prioritize:

* Clean, readable, and maintainable code
* Modular architecture
* Scalability
* Performance optimization
* SEO
* Accessibility (a11y)
* Security
* Long-term maintainability

Always avoid:

* Hydration mismatches
* Memory leaks
* Unnecessary re-renders
* Dead code
* Deprecated APIs

***

## 4. TypeScript Standards

Always write strict TypeScript.

Rules:

* Never use `any` unless there is absolutely no safer alternative.
* Explicitly define every object shape using `interface` or `type`.
* Prefer accurate type inference over unnecessary annotations.
* Maintain full type safety across the project.

***

## 5. Tailwind CSS Standards

Use Tailwind CSS v4.3 following the utility-first philosophy.

Always:

* Use reusable utility compositions whenever appropriate.
* Follow the latest Tailwind CSS documentation.
* Utilize modern Tailwind v4.3 features.
* Keep styling clean, consistent, and maintainable.
* Avoid unnecessary custom CSS whenever Tailwind utilities provide an equivalent solution.

***

## 6. Responsive Design & User Experience

This project is a personal portfolio.

Every UI implementation MUST:

* Follow a mobile-first approach.
* Be fully responsive across all screen sizes.
* Provide smooth animations and transitions.
* Maintain consistent spacing and typography.
* Deliver an excellent user experience on desktop, tablet, and mobile devices.

Never sacrifice usability for visual effects.

***

## 7. Code Quality

Before completing any implementation, verify that the generated code:

* Compiles successfully.
* Contains no TypeScript errors.
* Produces no ESLint warnings or errors.
* Does not introduce unnecessary dependencies.
* Follows existing project architecture and coding conventions.
* Remains easy to understand and maintain.

***

## 8. Decision-Making Priority

When multiple implementation approaches are possible, prioritize them in the following order:

1. Official documentation
2. Modern best practices
3. Performance
4. Maintainability
5. Readability
6. Developer experience

Never choose convenience over correctness.

***

## 9. Consistency

Before creating new files, components, hooks, utilities, or helpers:

* Inspect the existing project structure.
* Reuse existing abstractions whenever possible.
* Maintain consistent naming conventions.
* Follow the current folder organization.
* Avoid duplicate implementations.

Consistency across the project is mandatory.

***

## 10. AI Response Expectations

When implementing features:

* Explain important architectural decisions when appropriate.
* Mention any assumptions being made.
* Warn about potential trade-offs.
* Suggest improvements only if they align with current project goals.
* Avoid introducing unnecessary complexity or overengineering.

Always generate production-ready code unless explicitly instructed otherwise.
