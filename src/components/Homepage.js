import { useEffect } from "react";
import { useStateValue } from "../context/provider/StateProvider";
import { Container, Row, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { actionTypes } from "../context//actions/actionTypes";
import useForm from "../utils/useForm";
import validator from "../utils/formValidator";

function Homepage() {
	const history = useHistory();
	const [{}, dispatch] = useStateValue();
	const { values, handleChange, register, errors } = useForm(validator);

	function checkStorage() {
		const localData = JSON.parse(localStorage.getItem("persistedData"));

		if (localData) {
			history.push("/profile");

			dispatch({
				type: actionTypes.RETRIEVE_USER,
				payload: localData,
			});
		}
	}

	useEffect(() => {
		checkStorage();
	}, []);

	return (
		<Container>
			<Row>
				<section className="form__wrapper mx-auto col-lg-5 col-md-8 col-sm p-4">
					<h5 className="my-3 text-center">Hello User, Please Signup below</h5>
					<form>
						<input
							onChange={handleChange}
							name="firstName"
							value={values.firstName}
							type="text"
							placeholder="First Name"
							className="form__input w-100"
						/>
						{errors.firstName && (
							<p className="form__error">{errors.firstName}</p>
						)}
						<input
							onChange={handleChange}
							name="lastName"
							value={values.lastName}
							type="text"
							placeholder="Last Name"
							className="form__input w-100"
						/>
						{errors.lastName && (
							<p className="form__error">{errors.lastName}</p>
						)}
						<input
							onChange={handleChange}
							name="email"
							value={values.email}
							type="email"
							placeholder="Email Address"
							className="form__input w-100"
						/>
						{errors.email && <p className="form__error">{errors.email}</p>}
						<input
							onChange={handleChange}
							name="password"
							value={values.password}
							type="password"
							placeholder="Password"
							className="form__input w-100"
						/>
						{errors.password && (
							<p className="form__error">{errors.password}</p>
						)}
						<input
							onChange={handleChange}
							name="password2"
							value={values.password2}
							type="password"
							placeholder="Retype Password"
							className="form__input w-100"
						/>
						{errors.password2 && (
							<p className="form__error">{errors.password2}</p>
						)}

						<Button
							className="d-block mt-3 w-50 mx-auto"
							variant="success"
							type="submit"
							onClick={register}>
							Submit
						</Button>
					</form>
				</section>
			</Row>
		</Container>
	);
}

export default Homepage;
