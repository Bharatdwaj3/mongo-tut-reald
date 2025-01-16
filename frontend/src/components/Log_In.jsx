

function Log_In() {
  return (
   <>
     <div
      style={{
        height: '420px',
        width: '450px',
        border: '3px solid black',
      }}
    >
      
      <form style={{ padding: '40px' }}>
        <label>
          Name: <input type="text" />
        </label>
        <br/>
        <br/>
        <label>
          Password: <input type="password" placeholder="password" />
        </label>
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
   </>
  )
}

export default Log_In