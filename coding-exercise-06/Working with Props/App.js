// CourseGoal component
export function CourseGoal({ title, description }) {
  return (
    <li>
      <h2>{title}</h2>
      <p>{description}</p>
    </li>
  );
}

// App component
function App() {
  return (
    <div id="app" data-testid="app">
      <h1>Time to Practice</h1>
      <p>One course, many goals! 🎯</p>
      <ul>
        {/* First CourseGoal with "Learn React" */}
        <CourseGoal title="Learn React" description="In-depth" />

        {/* Second CourseGoal with custom title and description */}
        <CourseGoal
          title="Practice"
          description="Practice working with React, components, etc."
        />
      </ul>
    </div>
  );
}

export default App;
