
export default function AddForm({
  title,
  description,
  timetodo,
  handleChange,
  handleAddToList,
  wantToEdit,
  closeEdit,
  ApplyEdit
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
   {!wantToEdit &&  ( <input
        type='datetime-local'
        value={timetodo}
        name='timetodo'
        placeholder='time...'
        onChange={handleChange}
        required
      />)}
      {wantToEdit ?  (<div className='two-btn'><button onClick={(event)=>{ApplyEdit(event)}}>Edit</button> <button onClick={closeEdit} >Close</button></div>): (<button onClick={handleAddToList}>Add</button>)}
    </form>
  );
}
