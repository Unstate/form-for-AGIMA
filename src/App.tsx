import FormContainer from './components/FormContainer'
import classes from './styles/App.module.css'

function App() {

  return (
    <main className={classes.appContainer}>
      <p className={classes.text}>Анкета для новых клиентов AGIMA</p>
      <FormContainer />
    </main>
  )
}

export default App
