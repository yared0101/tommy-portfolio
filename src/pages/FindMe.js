import { useState, useEffect } from "react";
import { MdDoneOutline } from "react-icons/md";
import { BsVimeo, BsTwitter } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { baseUrl, sendMessageUrl } from "../constants";
import axios from "axios";
export const FindMe = () => {
    const [sent, setSent] = useState(false);
    /**
     *
     * @param {React.FormEvent<HTMLFormElement>} e
     */
    const submitForm = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const values = Object.fromEntries(formData);
        try {
            await axios.post(baseUrl + sendMessageUrl, values);
            setSent(true);
        } catch (e) {
            console.log(e);
        }
    };
    useEffect(() => {
        window.scrollTo({ behavior: "smooth", top: 0 });
    }, []);
    return (
        <div className="find-me" style={{ minHeight: "100vh" }}>
            <div className="contact-left">
                <div className="all-contact-left-texts">
                    <div className="contact-text">Contact</div>
                    <div>
                        <a href="mailto:Tommy@bonafacio.cc">
                            Tommy@bonafacio.cc
                        </a>
                    </div>
                    <div>+251-932-659-803</div>
                    <div>Addis Ababa, Bole Road</div>

                    <div className="inner-socials inner-socials-find-me">
                        <a href="https://twitter.com">
                            <BsTwitter />
                        </a>
                        <a href="https://instagram.com">
                            <AiFillInstagram />
                        </a>
                        <a href="https://vimeo.com">
                            <BsVimeo />
                        </a>
                    </div>
                </div>

                <div></div>
            </div>
            <div>
                <form onSubmit={submitForm}>
                    <div className="contact-form">
                        <div>
                            <div>
                                <span className="input-labels">Name *</span>
                            </div>
                            <div className="full-name-inputs">
                                <div className="label-and-input">
                                    <input
                                        name="first_name"
                                        type="text"
                                        required
                                    />
                                    <span className="input-labels">
                                        First Name
                                    </span>
                                </div>
                                <div className="label-and-input">
                                    <input name="last_name" type="text" />
                                    <span className="input-labels">
                                        Last Name
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div>
                                <span className="input-labels">Email *</span>
                            </div>
                            <div>
                                <input name="email" type="email" required />
                            </div>
                        </div>
                        <div>
                            <div>
                                <span className="input-labels">Message *</span>
                            </div>
                            <div>
                                <textarea name="message" required />
                            </div>
                        </div>
                        <div>
                            <button
                                type="submit"
                                disabled={sent}
                                className={
                                    sent
                                        ? "submit-button button-done"
                                        : "submit-button"
                                }
                            >
                                {sent ? (
                                    <span>
                                        Thank you <MdDoneOutline />
                                    </span>
                                ) : (
                                    "Let's Do This!"
                                )}
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};
