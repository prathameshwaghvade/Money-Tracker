import './App.css';

function App() {
  return (
    <main>
      <h1>$400 <span>.00</span></h1>

      <form>
        <div className='basic'>
        <input type="text" placeholder={'+200 new samsung tv'}/>
        <input type="datetime-local"/>
        </div>

        <div className='description'>
        <input type="text" placeholder={'desciption'}/>
        </div>
        <button type='submit'>Add a new transaction</button>
      </form>
      
      <div className='transactions'>
        <div className='transaction'>

          <div className='left'>
            <div className='name'>New samsung tv</div>
            <div className='description'>It was time for new tv</div>
          </div>


          <div className='right'>
            <div className='price red'>-$500</div>
            <div className='datetime'>2025-04-10 15:45</div>
          </div>
        </div>

        <div className='transaction'>

          <div className='left'>
            <div className='name'>Gig job new website</div>
            <div className='description'>It was time for new site</div>
          </div>

          
          <div className='right'>
            <div className='price green'>+$400</div>
            <div className='datetime'>2025-04-10 15:45</div>
          </div>
        </div>

        <div className='transaction'>

          <div className='left'>
            <div className='name'>Iphone</div>
            <div className='description'>It was time for new ios</div>
          </div>

          
          <div className='right'>
            <div className='price red'>-$900</div>
            <div className='datetime'>2025-04-10 15:45</div>
          </div>
        </div>
      </div>
    </main>
    
  );
}

export default App;
