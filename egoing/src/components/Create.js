function Create(props) {
  return (
    <article>
      <form
        onSubmit={(event) => {
          console.log("ㅎㅎ");
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
          <button type="submit">버튼</button>
        </p>
      </form>
    </article>
  );
}

export default Create;
