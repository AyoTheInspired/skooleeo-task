export default function formValidator(values) {
	let errors = {};

	if (!values.firstName.trim()) {
		errors.firstName = "First Name is required";
	}
	if (!values.lastName.trim()) {
		errors.lastName = "Last Name is required";
	}

	if (!values.email) {
		errors.email = "Email is required";
	} else if (!/\S+@\S+\.\S+/.test(values.email)) {
		errors.email = "Email address is invalid";
	}
	if (!values.password) {
		errors.password = "Password is required";
	} else if (values.password.length < 3) {
		errors.password = "Password needs to be at least 3 characters";
	}

	if (!values.password2) {
		errors.password2 = "Please confirm your password";
	} else if (values.password2 !== values.password) {
		errors.password2 = "Passwords do not match";
	}
	return errors;
}
