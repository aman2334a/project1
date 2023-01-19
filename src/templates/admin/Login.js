import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { adminLogin } from "../../Services/adminServices/service";
export default function LoginTemplate() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const changeData = (key, value) => {
    let tmp = { ...data };
    tmp[key] = value;
    setData(tmp);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    adminLogin(data)
      .then(function (response) {
        console.log(response.data);
        // let token = response.data.token;
        let data = {
          role: 'admin',
          token: response?.data?.token
        }
        localStorage.setItem("fintaxcialUser", JSON.stringify(data))
        navigate("/admin/reports");
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  useEffect(() => {
    let userData = JSON.parse(localStorage.getItem("fintaxcialUser"));
    if (userData?.token&&userData.role=='admin') {
      navigate("/admin/reports");
    }
  });
  return (
    <>
      <div className="admin-container">
        <div className="container">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-md-8 offset-md-2">
                <div className="form_input">
                  <div className="row">
                    <div className="col-md-12 text-center">
                      <h3>Admin Login</h3>
                    </div>
                  </div>
                  <div className="form-group position-relative">
                    <span className="zmdi zmdi-account"></span>                         <input
                      type="email"
                      id="email"
                      class="form-control"
                      placeholder="Email Address"
                      value={data.email}
                      onChange={(e) =>
                        changeData("email", e.target.value)
                      }
                    />
                  </div>

                  <div className="form-group position-relative">
                    <span className="zmdi zmdi-email"></span>
                    <input
                      type="password"
                      id="password"
                      class="form-control"
                      placeholder="Password"
                      value={data.password}
                      onChange={(e) => changeData("password", e.target.value)}
                    />
                  </div>
                  <button className="btn btn-dark">
                    <b>Login</b>
                  </button>
                  {/* <span>Forgot Password?</span> */}
                  {/* <span><NavLink to='/signup'>Create Account</NavLink></span> */}
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}