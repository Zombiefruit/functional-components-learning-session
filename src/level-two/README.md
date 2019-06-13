# Level Two

Welcome to level two.

Let's continue where we left off, with our broken `fetchWeather` data flow. What has to change?

- You need to call it every time the state changes as well. What goes wrong when you don’t put it in the setState callback?

Okay, let's spruce the app up a bit. Let's say we want to add a checkbox in the `index.tsx` file that lets our users toggle between fahrenheit (bleh) and Celsius.

- Add a checkbox in the parent component for fahrenheit
- Pass that as a prop to the weather component
- Use that prop in the fetchWeather method. Does it work?
- How would we solve this in a class component?

Okay, time for level three.