export default function Projects(props) {
  return (
    <div>
      <h1>Projects</h1>
      <p>Here are some of my projects:</p>
      <ul>
        {props.projects.map((project, index) => (
          <div key={index}>
          <h2>{project.title}</h2>
          <p>{project.body}</p>
      </div>
        ))}
      </ul>
    </div>
  );
}

