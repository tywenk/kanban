import React from "react";

function UpdateBoardForm({
  updateFormState,
  setUpdateFormState,
  handleUpdateBoard,
}) {
  const handleChange = (event) => {
    const { name, value } = event.target;
    setUpdateFormState((formState) => ({ ...formState, [name]: value }));
  };

  function handleSubmit() {
    event.stopPropagation();
    handleUpdateBoard();
  }

  return (
    <div>
      <form onSubmit={handleUpdateBoard}>
        <label>name</label>
        <input
          type="text"
          placeholder="enter new name"
          name="name"
          value={updateFormState.name}
          onChange={handleChange}
        />
      </form>
    </div>
  );
}

export default UpdateBoardForm;
