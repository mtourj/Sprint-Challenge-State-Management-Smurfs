1. What problem does the context API help solve?

Context API solves the cumbersome issue of prop drilling, especially when the depth of component nesting is complex.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions are objects that carry a type and sometimes, a payload. This action gets passed to the reducer along with the current state stored in the store. The reducer takes these two values and 'reduces' them into a new state object. The store is where state is held, so that there is a central state machine the entire app can access, which makes state management manageable.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is state that applies to the entire application, while component state (for example, the state of a form, & whether the input is valid/invalid) is state that pertains to only a single component, which is the only time it would be better to use component state over application state.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

It allows us to use a function to dispatch actions rather than returning an action object, which allows us to dispatch more than one action in one action creator, which is helpful for asynchronous operations.

1. What is your favorite state management system you've learned and this sprint? Please explain why!

Redux. It makes everything easy to follow, and difficult to break when set up correctly. I like the concept a lot, and I also really don't like prop drilling! :)