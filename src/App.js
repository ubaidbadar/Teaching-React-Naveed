import { useState } from "react";
import Modal from "./ui/Modal/Modal";

const App = () => {
  const [isModal, setIsModal] = useState(false);
  return (
    <div>
      <Modal
        handler={showModal => (
          <button onClick={showModal}>Open Modal</button>
        )}
      >
          <div>
            <h1>Product 1</h1>
            <div>
              <Modal handler={showModal => (
                <button onClick={showModal}>Delete</button>
              )}>
                <h1>Are you sure</h1>
                <p>You really want to delete this product</p>
              </Modal>
            </div>
          </div>
      </Modal>

    </div>
  )
}

export default App;