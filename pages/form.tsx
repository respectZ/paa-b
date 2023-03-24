import type { NextPage } from 'next'
import 'bootstrap/dist/css/bootstrap.min.css';
import { request } from 'http';

// Handle button click
function btn_Login_click(e) {
    // Bikin object data
    let v_data = {
        username: document.getElementById("username").value,
        password: document.getElementById("password").value
    };

    // Reuqest POST ke server
    fetch("http://localhost:3000/api/login_json", {
        method: "POST",
        // Isi data ke body
        body: JSON.stringify(v_data),
    }).then((response) => {
        // Response ke json
        return response.json();
    }).then((data) => {
        // Cek apakah success
        if (data["success"] == 1) {
            // Update view, hide form dan show table
            document.getElementById("view-login").style.display = "none";
            document.getElementById("view_user").style.display = "block";

            // Loop data
            let persons = data["msg"];
            for (let i = 0; i < persons.length; i++) {
                let person = persons[i];
                let tr = document.createElement("tr");
                // Loop objects
                for (let j = 0; j < Object.keys(person).length; j++) {
                    let key = Object.keys(person)[j];
                    console.log(key);

                    let td = document.createElement("td");
                    td.innerHTML = person[key];
                    tr.appendChild(td);
                }
                // Tambah ke table
                document.getElementById("table_body").appendChild(tr);
            }

        }
    });
}

const Home: NextPage = () => {
    return (
        <div>
            <div id="view-login">
                <h1>Flask JQuery Example</h1>
                <div className="form-signin" role="form">
                    <h2 className="form-signin-heading">Please Login </h2>
                    <input type="text" name="username" id="username" className="form-control" placeholder="User name" required />
                    <input type="password" name="password" id="password" className="form-control" placeholder="Password" required />

                    <input type="button" className="btn btn-lg btn-primary btn-block" id="btn_login" value="Login" onClick={btn_Login_click} />
                </div>
            </div>
            <div id="view_user" style={
                {
                    display: 'none'
                }
            }>


                <div className="row">
                    <div className="col-lg-12">

                        <table id="example" className="table-hover" style={
                            {
                                width: '100%'
                            }
                        }>
                            <thead>
                                <tr>
                                    <th>Nama </th>
                                    <th>Username</th>
                                    <th>Password</th>
                                    <th>Status</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody id="table_body">
                            </tbody>
                        </table>

                    </div>
                </div>

            </div>
        </div>

    )
}

export default Home
