import { render } from "@testing-library/react";
import { TimeScale } from "chart.js";
import axios from 'axios'

class Contact2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            message: ""
        }
        this.onHandleSubmit = this.onHandleSubmit.bind(this)
        this.onNameChange = this.onNameChange.bind(this)
        this.onEmailChange = this.onEmailChange.bind(this)
        this.onMessageChange = this.onMessageChange.bind(this)
    }
    render() {

        const socicalLinks = [
            {
                title: "Github",
                icon: <IoLogoGithub />,
                link: "https://github.com/piyushjha0409"
            },

            {
                title: "Linkedin",
                icon: <AiFillLinkedin />,
                link: "https://www.linkedin.com/in/piyush-jha-570a6420a/"
            },

            {
                title: "Twitter",
                icon: <BsTwitter />,
                link: "https://twitter.com/PiyushJ60805822"
            },
        ]

        onNameChange = (e) => {
           this.setState({name: e.target.value})
        }
        onEmailChange = (e) => {
           this.setState({email: e.target.value})
        }
        onMessageChange = (e) => {
           this.setState({message: e.target.value})
        }

        //function for the submission 
        onHandleSubmit = (e) => {
          e.preventDefault()
        }

        //integrating api
        var data = {
            service_id: "",
            template_id: "",
            user_id: "xodvAVWr_iwX3v9uS",
            template_params: {
                "username": "Sid & Gautam",
                "g-recaptcha-response": '03AHJ_ASjnLA214KSNKFJAK12sfKASfehbmfd...'
            }
        }
        return (
            <section className='py-5 h-screen text-white flex-1 justify-between' id='contact'>
                <h1 className=' md:text-9xl md:mt-14 md:mt-28 md:mb-10 text-amber-200 '>
                    Get In Touch
                </h1>
                <div className='flex-1 justify-between mt-8'>
                    <div className='w-full max-w-[1100px] flex gap-20 mx-12'>
                        <div className='flex-1 font-custom2 font-bold justify-center'>
                            <form onSubmit={this.onHandleSubmit} className="flex flex-col gap-2">
                                <label htmlFor='name'>Name:</label>
                                <input 
                                type="text" 
                                id='name' 
                                placeholder='Piyush jha' 
                                className='text-black rounded-md' 
                                value={this.state.name}
                                onChange={this.onNameChange}
                                />
                                <label htmlFor="email">Email:</label>
                                <input 
                                type="text"
                                id="email" 
                                placeholder='peeyush0409@gmail.com' 
                                className='text-black rounded-md' 
                                value={this.state.email} 
                                onChange={this.onEmailChange} />
                                <label htmlFor="subject">Subject:</label>
                                <input
                                type="text"
                                id="subject"
                                placeholder='I want to talk to you'
                                className='text-black rounded-md'
                                value={this.state.message}
                                onChange={this.onMessageChange}
                                />
                                <button className='mt-2 py-2 text-white rounded transition duration-300 flex justify-center items-center gap-12 bg-[#1876d2] hover:bg-[#2884e0]'>Send</button>
                            </form>
                        </div>
                        <div className='flex-1 justify-center'>
                            <div className="flex-1 justify-center px-12">
                                <h1 className="text-xl mb-3 text-center font-bold font-custom2">Other places :</h1>
                                {socicalLinks.map((item) => (
                                    <a
                                        key={item.title}
                                        href={item.link}
                                        className="flex gap-5 justify-center items-center hover:bg-slate-900 p-2 transition duration-300">
                                        <span className="text-4xl rounded-full">{item.icon}</span>
                                        <h1>{item.title}</h1>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Contact2
