export const Form = ({ application, setApplication }: any) => {
  const add = (e: any) => {
    setApplication({
      todos: [
        ...application.todos,
        {
          name: application.name,
          user: application.user,
        },
      ],
      name: "",
      user: "",
    });
  };
  return (
    <form>
      <input
        placeholder="name"
        value={application.name}
        onInput={(e) => setApplication({ name: e.currentTarget.value })}
      />
      <input
        placeholder="user"
        value={application.user}
        onInput={(e) => setApplication({ user: e.currentTarget.value })}
      />
      <button disabled={!application.user.length} onClick={add}>
        Add
      </button>
    </form>
  );
};
