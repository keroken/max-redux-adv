import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Notification from './components/UI/Notification';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { uiActions } from './store';

function App() {
  const dispatch = useDispatch();
  const cartIsVisible = useSelector(state => state.ui.cartIsVisible);
  const notification = useSelector(state => state.ui.notification);

  useEffect(() => {
    if (notification) {
      setTimeout(() => {
        dispatch(uiActions.hideNotification());
      }, 1000);
    }
  }, [dispatch, notification]);

  return (
    <>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {cartIsVisible && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
