function Update(props) {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        const title = event.target.title.value;
        const description = event.target.description.value;
        props.onUpdate(title, description);
      }}
    >
      <p>
        <input type="text" name="title" placeholder={props.title}></input>
      </p>
      <p>
        <textarea name="description" placeholder={props.description}></textarea>
      </p>
      <p>
        <button type="submit">변경하기</button>
      </p>
    </form>
  );
}

export default Update;
