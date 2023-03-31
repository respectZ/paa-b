import axios from "axios";
import jwtDecode from "jwt-decode";
import React, { useState } from "react";
import Router from "next/router";

function Login() {
	const [Username, setUsername] = useState("");
	const [Password, setPassword] = useState("");

	const onSubmit = () => {
		const data = {
			username: Username,
			password: Password,
		};
		axios
			.post("http://localhost:3000/api/user/login", data)
			.then((response) => {
				localStorage.setItem("usertoken", "Bearer " + response.data.data);
				const payload = jwtDecode(response.data.data);
				console.log(payload);
				//redirect to profile page
				Router.push("/profile");
			})
			.catch((e) => {});
	};

	return (
		<div className=" flex bg-neutral-200 min-w-[100vw] min-h-[100vh] justify-center items-center">
			<div className="w-[20rem] flex flex-col gap-2 items-center h-[20rem] bg-white rounded-3xl overflow-hidden shadow-md">
				<h1 className="text-neutral-700 font-semibold text-md">Login Process</h1>
				<div className="flex flex-col w-[80%]">
					<p className="text-neutral-400 font-medium text-sm">Username</p>
					<input className="bg-white border-2 rounded-lg border-teal-600 w-full text-neutral-700 focus:text-neutral-700" placeholder="username" value={Username} onChange={(e) => setUsername(e.target.value)} />
				</div>
				<div className="flex flex-col w-[80%]">
					<p className="text-neutral-400 font-medium text-sm">Password</p>
					<input className="bg-white border-2 rounded-lg border-teal-600 w-full text-neutral-700 focus:text-neutral-700" placeholder="password" value={Password} onChange={(e) => setPassword(e.target.value)} />
				</div>
				<div onClick={onSubmit} className="bg-teal-600 w-[7rem] py-2 text-center font-medium hover:shadow-md cursor-pointer hover:bg-white rounded-xl text-white hover:text-teal-600">
					LOGIN
				</div>
			</div>
		</div>
	);
}

export default Login;
