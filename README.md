# Product Catalog

Run: `npm install` then `npm run dev`

## Lab 3 Guide Questions

1. **Props vs state:** Props are data passed into a component by its parent and are read-only. State is data a component owns and manages itself, and it can change over time and trigger a re-render.
2. **Why a child can't modify props:** Props belong to the parent. React uses one-way data flow so data changes are predictable. A child must ask the parent to change the data.
3. **Callback and data flow:** The parent passes a function down as a prop. The child calls it with a value (the title), so the function runs in the parent and the data travels up.
4. **Why `key`:** React uses keys to tell which list items changed, were added, or removed. Missing or duplicate keys cause warnings and wrong updates.
5. **`children`:** It lets a parent place any JSX between a component's tags, so the component can wrap flexible content instead of only receiving simple values.