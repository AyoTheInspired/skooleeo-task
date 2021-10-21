import { useState } from "react";
import { actionTypes } from "../context/actions/actionTypes";
import { useStateValue } from "../context/provider/StateProvider";
import { useHistory } from "react-router-dom";

const useForm = (validator) => {
	const history = useHistory();
	const [{ user }, dispatch] = useStateValue();
	const [errors, setErrors] = useState({});
	const [values, setValues] = useState({
		firstName: "",
		lastName: "",
		email: "",
		password: "",
		password2: "",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setValues({
			...values,
			[name]: value,
		});
	};

	const register = (e) => {
		e.preventDefault();

		setErrors(validator(values));

		if (
			!errors ||
			(values.firstName &&
				values.lastName &&
				values.email &&
				values.password &&
				values.password === values.password2)
		) {
			localStorage.setItem("persistedData", JSON.stringify(values));

			dispatch({
				type: actionTypes.SET_USER,
				payload: values,
			});
			history.push("/profile");
		}
	};

	return { values, setValues, register, handleChange, errors };
};

export default useForm;
