import { useState } from "react";
import Modal from "./ui/Modal/Modal";

const App = () => {
  const [isModal, setIsModal] = useState(false);
  return (
    <div>
      {isModal && (
        <Modal>
          <h1>Title</h1>
          <p>Description sdsj kljfkl sdjklfjs dlkfjlk</p>
          <div>
            <button onClick={() => setIsModal(false)}>Yes</button>
            <button onClick={() => setIsModal(false)}>No</button>
          </div>
        </Modal>
      )}

        <div className="p-absolute">

        </div>

      <button onClick={() => setIsModal(true)}>Open Modal</button>
    </div>
  )
}

export default App;