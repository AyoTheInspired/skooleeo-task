import React from "react";
import { Container, Row, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { actionTypes } from "../context/actions/actionTypes";
import { useStateValue } from "../context/provider/StateProvider";

function UserProfile() {
	const [{ user }, dispatch] = useStateValue();
	const history = useHistory();

	const logout = () => {
		dispatch({
			type: actionTypes.LOGOUT_USER,
		});

		history.replace("/");
	};

	return (
		<Container>
			<Row>
				<section className="profile__wrapper mx-auto col-lg-5 col-md-8 col-sm p-4 ">
					<h4 className="text-center mb-4">Welcome, {user.firstName}</h4>

					<div className="flex-btw">
						<p>Full Name: </p>
						<h4 className="user__detail">
							{user.firstName} {user.lastName}
						</h4>{" "}
					</div>
					<div className="flex-btw">
						<p>Email: </p>
						<h4 className="user__detail">{user.email}</h4>{" "}
					</div>

					<Button
						className="d-block mt-3 w-50 mx-auto"
						variant="danger"
						type="submit"
						onClick={logout}>
						Logout
					</Button>
				</section>
			</Row>
		</Container>
	);
}

export default UserProfile;
