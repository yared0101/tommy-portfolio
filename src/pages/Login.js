import { useState, useEffect } from "react";
import { baseUrl, loginUrl } from "../constants";
import axios from "axios";
import { useNavigate } from "react-router";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
export const Login = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    /**
     *
     * @param {React.FormEvent<HTMLFormElement>} e
     */
    const submitForm = async (e) => {
        setLoading(true);
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const values = Object.fromEntries(formData);
        try {
            const data = await axios.post(baseUrl + loginUrl, values);
            const token = data.data.accessToken;
            localStorage.setItem("accessToken", token);
            setLoading(false);
            navigate("/home");
        } catch (e) {
            setLoading(false);
            setError(e?.data?.message || e?.message || "something went wrong");
            console.log(e);
        }
    };
    useEffect(() => {
        window.scrollTo({ behavior: "smooth", top: 0 });
    }, []);
    return (
        <div className="find-me" style={{ minHeight: "100vh" }}>
            <div className="contact-left big-only"></div>
            <div>
                <form onSubmit={submitForm}>
                    <div
                        className="contact-form"
                        style={{ width: "100%", marginLeft: 0 }}
                    >
                        <div>
                            <div>
                                <span className="input-labels">Username</span>
                            </div>
                            <div>
                                <input name="username" type="text" required />
                            </div>
                        </div>
                        <div>
                            <div>
                                <span className="input-labels">password *</span>
                            </div>
                            <div>
                                <input
                                    name="password"
                                    type="password"
                                    required
                                />
                            </div>
                        </div>
                        <div>
                            <span style={{ color: "red" }}>{error}</span>
                        </div>
                        <div>
                            <button type="submit" className={"submit-button"}>
                                {loading ? (
                                    <AiOutlineLoading3Quarters />
                                ) : (
                                    "Login"
                                )}
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};
