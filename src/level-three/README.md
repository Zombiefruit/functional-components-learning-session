# Level Three

Booyah, onto the last level. It's finally time to make this sucker functional.

- Create a new functional component
- Follow steps from above, using `useState` and then `useEffect` to replace our state and `componentDidMount` calls from before
- now use the optional params for `useEffect` to specify the dependencies that `fetchWeather` will need

It should work! This pattern becomes extremely difficult to manage in a class component, but functional components make it incredibly simple to manage the flow of data, *and* it gives you the ability to statically analyze your code. Awesome!