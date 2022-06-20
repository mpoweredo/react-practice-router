import { useCallback, useReducer } from "react";

const requestReducer = (state, action) => {
	if (action.type === "SEND") {
		return {
			data: null,
			error: null,
			status: "pending",
		};
	}

	if (action.type === "SUCCES") {
		return {
			data: action.responseData,
			error: null,
			status: "done",
		};
	}

	if (action.type === "ERROR") {
		return {
			data: null,
			error: action.errorMsg,
			status: "done",
		};
	}

	return state;
};

const initialState = {
	status: "",
	data: null,
	error: null,
};

const useFetch = (requestFunction) => {
	const [requestState, dispatch] = useReducer(requestReducer, initialState);

	const sendRequest = useCallback(
		async (requestData) => {
			dispatch({ type: "SEND" });
			try {
				const responseData = await requestFunction(requestData);
				dispatch({ type: "SUCCES", responseData });
			} catch (error) {
				dispatch({ type: "ERROR", errorMsg: error.message || 'Something went Wrong!' });
			}
		},
		[requestFunction]
	);

	return { sendRequest, ...requestState };
};

export default useFetch;
