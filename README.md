# Product Catalog

Run: `npm install` then `npm run dev`

## Lab 3 Guide Questions

1. **Props vs state:** Props are data passed into a component by its parent and are read-only. State is data a component owns and manages itself, and it can change over time and trigger a re-render.
2. **Why a child can't modify props:** Props belong to the parent. React uses one-way data flow so data changes are predictable. A child must ask the parent to change the data.
3. **Callback and data flow:** The parent passes a function down as a prop. The child calls it with a value (the title), so the function runs in the parent and the data travels up.
4. **Why `key`:** React uses keys to tell which list items changed, were added, or removed. Missing or duplicate keys cause warnings and wrong updates.
5. **`children`:** It lets a parent place any JSX between a component's tags, so the component can wrap flexible content instead of only receiving simple values.


## Lab 4 Guide Questions

1. **Two states:** searchText updates on every keystroke so the input stays responsive, while debouncedSearch only updates after the user pauses and is what actually filters the list. With one state, the list would filter on every keystroke.
2. **No cleanup:** Every keystroke would leave its timer running, so many updates would fire later and the debounce would not work.
3. **Dependency array:** It tells React when to re-run the effect. An empty array [] runs the effect only once, after the first render. Leaving it out runs the effect after every render.
4. **Not sorting the original:** sort() changes the array in place, so it would permanently change the data and could cause bugs elsewhere.
5. **Calculate, not store:** The filtered list is derived from existing state, so calculating it while rendering avoids duplicate data that could get out of sync.