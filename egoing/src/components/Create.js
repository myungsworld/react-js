function Create(props) {
  return (
    <article>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          const title = event.target.title.value;
          const description = event.target.description.value;
          props.onCreate(title, description);
        }}
      >
        <p>
          <input type="text" name="title" placeholder="title"></input>
        </p>
        <p>
          <textarea name="description" placeholder="description"></textarea>
        </p>
        <p>
          <input type="button" value="Create"></input>
        </p>
      </form>
    </article>
  );
}

export default Create;
