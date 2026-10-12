# Week 1 reflection

Answer each question in 1–3 sentences, in your own words.

1. What is the difference between building a UI imperatively (plain DOM code) and declaratively (React)?

Imperative means telling the browser step by step how to change the page. Declarative means describing what the UI should look like, and React updates the page based on the data.

2. Why must a component name start with a capital letter?

A component name must start with a capital letter so React can recognise it as a custom component instead of a normal HTML element.

3. What does a fragment <>...</> do, and why not just use a <div>?

A fragment allows us to group multiple elements without adding an extra element to the page. It helps keep the HTML structure clean when a wrapper is not needed.

4. Name one benefit of splitting the UI into small components.

Splitting the UI into small components makes the code easier to read, reuse and maintain. For example, we can reuse the same vendor card design for different vendors.