//create product
import { server } from "../../Server";
import axios from "axios";

export const createProduct = (newForm) => async (dispatch) => {
  try {
    dispatch({
      type: "productCreateRequest",
    });
    const config = { headers: { "Content-Type": "multipart/form-data" } };
    const { data } = await axios.post(
      `${server}/product/create-product`,
      newForm,
      config
    );
    dispatch({
      type: "productCreateSuccess",
      payload: data.product,
    });
  } catch (error) {
    dispatch({
      type: "productCreateFail",
      payload: error.response.data.message,
    });
  }
};
