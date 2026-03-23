export default function DateForm() {
  return (
    <div className="p-4"> 
      <div className="max-w-md mx-auto">
        <form>
          <span className="flex flex-col gap-2">
            <label htmlFor="userDate">Date:</label>
            <input 
              type="date" 
              id="userDate" 
              name="userDate" 
              required 
              className="border p-2 rounded"
            />
          </span>
          
          <button type="submit" className="mt-4 bg-blue-600 text-white px-4 py-2 rounded">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}