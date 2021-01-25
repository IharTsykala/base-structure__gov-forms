import React from "react"
import "./App.scss"
// import Header from "./Components/Header/Header"
import FormPage from "./Pages/FormPage/FormPage"
// import Footer from "./Components/Footer/Footer"
import { Provider } from "react-redux"
import { createStore, applyMiddleware } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import rootReducer from "./Redux/index"
import createSagaMiddleware from "redux-saga"
import stepSaga from "./Redux/store/step/step.saga"
import Navbar from "./Components/Navbar/Navbar"
import Footer from "./Components/Footer/Footer"

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  rootReducer,
  composeWithDevTools({ trace: true, traceLimit: 25 })(
    applyMiddleware(sagaMiddleware)
  )
)

sagaMiddleware.run(stepSaga)

const App: React.FC = () => (
  <Provider store={store}>
    <div className={"wrapper"}>
      <Navbar />
      <main className={"main"}>
        <FormPage />
      </main>
      <Footer />
    </div>
  </Provider>
)

export default App
