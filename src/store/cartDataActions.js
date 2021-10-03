import { uiActions } from ".";
import { database } from "firebase";

export const sendCartData = (cart) => {
  return async (dispatch) => {
    uiActions.showNotification({
      status: 'pending',
      title: 'Sending...',
      message: 'Sending cart data!',
    });

    const sendRequest = async () => {
      return database.ref('cart').update({
        body: JSON.stringify(cart)
      });
    };

    try {
      await sendRequest();
      dispatch(
        uiActions.showNotification({
          status: 'success',
          title: 'Success',
          message: 'Sent cart data successfully!',
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: 'error',
          title: 'Error',
          message: 'Sending cart data failed.',
        })
      );
    }
  };
};