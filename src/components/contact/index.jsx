import React from "react";
import PageHeaderContent from "../PageHeader";
import { BsInfoCircleFill } from 'react-icons/bs';
import './styles.scss';

const Contact = () => {
    return (
        <section id="contact" className="contact">
            <PageHeaderContent
                headerText="Contact"
                icon={<BsInfoCircleFill size={40} />}
            />
            <div className="contact__content">
                <h3 className="contact__content__header-text">Let's Talk</h3>
                <form
                    action="https://formspree.io/f/xqazjaaj" 
                    method="POST"
                    className="contact__content__form"
                >
                    <div className="contact__content__form__control">
                        <div>
                            <input
                                required
                                name="name"
                                className="inputName"
                                type="text"
                            />
                            <label htmlFor="name" className="labelName">Name</label>
                        </div>
                        <div>
                            <input
                                required
                                name="email"
                                className="inputEmail"
                                type="email"
                            />
                            <label htmlFor="email" className="labelEmail">Email</label>
                        </div>
                        <div>
                            <textarea
                                required
                                name="desc"
                                className="inputDesc"
                                rows={5}
                            />
                            <label htmlFor="desc" className="labelDesc">Description</label>
                        </div>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </section>
    );
}

export default Contact;
