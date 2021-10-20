import React, { useContext } from "react";
import { useStateValue } from "../context/provider/StateProvider";
import { Container, Row, Form, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import useForm from "../utils/useForm";

function Homepage() {
	const history = useHistory();
	const [{ user }, dispatch] = useStateValue();
	const [values, handleChange] = useForm();

	const register = (e) => {
		e.preventDefault();

		console.log(values);
	};

	return (
		<Container>
			<Row>
				<section className="form__wrapper mx-auto col-lg-5 col-md-8 col-sm p-4">
					<h5 className="my-3 text-center">Hello User, Please Signup below</h5>
					<Form>
						<input
							required
							onChange={handleChange}
							name="firstName"
							value={values.firstName || ""}
							type="text"
							placeholder="First Name"
							className="form__input w-100"
						/>
						<input
							required
							onChange={handleChange}
							name="lastName"
							value={values.lastName || ""}
							type="text"
							placeholder="Last Name"
							className="form__input w-100"
						/>
						<input
							required
							onChange={handleChange}
							name="email"
							value={values.email || ""}
							type="email"
							placeholder="Email Address"
							className="form__input w-100"
						/>
						<input
							required
							onChange={handleChange}
							name="password"
							value={values.password || ""}
							type="password"
							placeholder="Password"
							className="form__input w-100"
						/>

						<Button
							className="d-block mt-3 w-50 mx-auto"
							variant="primary"
							type="submit"
							onClick={register}>
							Submit
						</Button>
					</Form>
				</section>
			</Row>
		</Container>
	);
}

export default Homepage;
