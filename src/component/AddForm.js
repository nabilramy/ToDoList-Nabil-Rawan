import React from 'react';

export default function AddForm({
  title,
  description,
  timetodo,
  handleChange,
  handleAddToList,
}) {
  return (
    <form>
      <input
        type='text'
        value={title}
        name='title'
        placeholder='Title...'
        onChange={handleChange}
        required
      />
      <input
        type='text'
        value={description}
        name='description'
        placeholder='Description...'
        onChange={handleChange}
        required
      />
      <input
        type='datetime-local'
        value={timetodo}
        name='timetodo'
        placeholder='time...'
        onChange={handleChange}
        required
      />
      <button onClick={()=>handleAddToList(title,description,timetodo,)}>Add</button>
    </form>
  );
}
