import { Link } from 'react-router-dom';
import longLogo from '../assets/longLogo.png';

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer className='min-h-96'>
            <div className='flex flex-col md:flex-row bg-slate-900 justify-between text-white px-4 py-14 md:px-40 md:py-20'>
                <div className='mb-6'>
                    <Link to={"/"} >
                        <img src={longLogo} loading="lazy" className="h-auto w-1/2 mb-6" alt="business directory" />
                    </Link>
                    <h5>

                        548 Market St PMB 30073, San Francisco</h5>
                    <h5>cunsultantcomp@gmail.com</h5>
                    <h5>9876543210</h5>
                    <div className='flex mt-5 gap-5'>
                        <a className='socialIcons'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill='white' height="32px" viewBox="0 0 512 512" width="32px"><path d="m256 0c-141.363281 0-256 114.636719-256 256s114.636719 256 256 256 256-114.636719 256-256-114.636719-256-256-256zm5.425781 405.050781c-.003906 0 .003907 0 0 0h-.0625c-25.644531-.011719-50.84375-6.441406-73.222656-18.644531l-81.222656 21.300781 21.738281-79.375c-13.410156-23.226562-20.464844-49.578125-20.453125-76.574219.035156-84.453124 68.769531-153.160156 153.222656-153.160156 40.984375.015625 79.457031 15.96875 108.382813 44.917969 28.929687 28.953125 44.851562 67.4375 44.835937 108.363281-.035156 84.457032-68.777343 153.171875-153.21875 153.171875zm0 0" /><path d="m261.476562 124.46875c-70.246093 0-127.375 57.105469-127.40625 127.300781-.007812 24.054688 6.726563 47.480469 19.472657 67.75l3.027343 4.816407-12.867187 46.980468 48.199219-12.640625 4.652344 2.757813c19.550781 11.601562 41.964843 17.738281 64.816406 17.746094h.050781c70.191406 0 127.320313-57.109376 127.351563-127.308594.011718-34.019532-13.222657-66.003906-37.265626-90.066406-24.042968-24.0625-56.019531-37.324219-90.03125-37.335938zm74.90625 182.035156c-3.191406 8.9375-18.484374 17.097656-25.839843 18.199219-6.597657.984375-14.941407 1.394531-24.113281-1.515625-5.5625-1.765625-12.691407-4.121094-21.828126-8.0625-38.402343-16.578125-63.484374-55.234375-65.398437-57.789062-1.914063-2.554688-15.632813-20.753907-15.632813-39.59375 0-18.835938 9.890626-28.097657 13.398438-31.925782 3.511719-3.832031 7.660156-4.789062 10.210938-4.789062 2.550781 0 5.105468.023437 7.335937.132812 2.351563.117188 5.507813-.894531 8.613281 6.570313 3.191406 7.664062 10.847656 26.5 11.804688 28.414062.957031 1.917969 1.59375 4.152344.320312 6.707031-1.277344 2.554688-5.519531 8.066407-9.570312 13.089844-1.699219 2.105469-3.914063 3.980469-1.679688 7.8125 2.230469 3.828125 9.917969 16.363282 21.296875 26.511719 14.625 13.039063 26.960938 17.078125 30.789063 18.996094 3.824218 1.914062 6.058594 1.59375 8.292968-.957031 2.230469-2.554688 9.570313-11.175782 12.121094-15.007813 2.550782-3.832031 5.105469-3.191406 8.613282-1.914063 3.511718 1.273438 22.332031 10.535157 26.160156 12.449219 3.828125 1.917969 6.378906 2.875 7.335937 4.472657.960938 1.597656.960938 9.257812-2.230469 18.199218zm0 0" /></svg>
                        </a>
                        <a className='socialIcons'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill='white' id="Layer_2_1_" enableBackground="new 0 0 32 32" height="32px" viewBox="0 0 32 32" width="32px"><path d="m30 16c0 7.2-5.4 13.1-12.3 13.9v-10.8h3.3l.5-3.8h-3.7v-2.3c0-1.1.3-1.8 1.9-1.8h2v-3.5c-1-.1-1.9-.1-2.9-.1-2.9 0-4.9 1.8-4.9 5v2.8h-3.3v3.8h3.3v10.7c-6.8-1.1-11.9-6.9-11.9-13.9 0-7.7 6.3-14 14-14s14 6.3 14 14z" /></svg>
                        </a>
                        <a className='socialIcons'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill='white' id="Layer_1" height="32px" viewBox="0 0 512 512" width="32px" data-name="Layer 1"><circle cx="256" cy="256" r="52.5" /><path d="m256 6c-138.071 0-250 111.929-250 250s111.929 250 250 250 250-111.929 250-250-111.929-250-250-250zm154.458 313.54c-1.2 23.768-7.879 47.206-25.2 64.343-17.489 17.3-41.038 23.746-65.035 24.934h-128.445c-24-1.188-47.546-7.63-65.035-24.934-17.322-17.137-24-40.575-25.2-64.343v-127.08c1.2-23.768 7.879-47.206 25.2-64.344 17.489-17.3 41.038-23.746 65.035-24.933h128.444c24 1.187 47.546 7.63 65.035 24.933 17.322 17.138 24 40.576 25.2 64.344z" /><path d="m318.6 132.138c-31.286-.858-93.906-.858-125.192 0-16.281.447-34.738 4.5-46.338 16.89-12.054 12.879-16.609 28.439-17.071 45.846-.812 30.552 0 122.252 0 122.252.529 17.405 5.017 32.967 17.071 45.846 11.6 12.394 30.057 16.443 46.338 16.89 31.286.858 93.906.858 125.192 0 16.281-.447 34.738-4.5 46.338-16.89 12.054-12.879 16.609-28.439 17.071-45.846v-122.252c-.462-17.407-5.017-32.967-17.071-45.846-11.604-12.394-30.061-16.443-46.338-16.89zm-62.6 205.237a81.375 81.375 0 1 1 81.375-81.375 81.375 81.375 0 0 1 -81.375 81.375zm81.721-145.953a16.275 16.275 0 1 1 16.279-16.275 16.275 16.275 0 0 1 -16.279 16.275z" /></svg>                        </a>
                        <a className='socialIcons'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill='white' height="32px" viewBox="0 0 512 512" width="32px"><path d="m256 0c-141.363281 0-256 114.636719-256 256s114.636719 256 256 256 256-114.636719 256-256-114.636719-256-256-256zm-74.390625 387h-62.347656v-187.574219h62.347656zm-31.171875-213.1875h-.40625c-20.921875 0-34.453125-14.402344-34.453125-32.402344 0-18.40625 13.945313-32.410156 35.273437-32.410156 21.328126 0 34.453126 14.003906 34.859376 32.410156 0 18-13.53125 32.402344-35.273438 32.402344zm255.984375 213.1875h-62.339844v-100.347656c0-25.21875-9.027343-42.417969-31.585937-42.417969-17.222656 0-27.480469 11.601563-31.988282 22.800781-1.648437 4.007813-2.050781 9.609375-2.050781 15.214844v104.75h-62.34375s.816407-169.976562 0-187.574219h62.34375v26.558594c8.285157-12.78125 23.109375-30.960937 56.1875-30.960937 41.019531 0 71.777344 26.808593 71.777344 84.421874zm0 0" /></svg>                        </a>
                    </div>
                </div>
                <div className='flex md:justify-between md:w-3/12'>
                    <div className='w-1/2 md:w-full'>
                        <ul className="">
                            <li className='items-center'><Link to={"/about"} className="block mb-3   pe-3 md:px-3  rounded md:border-0 
                            md:p-0">
                                About</Link>
                            </li>
                            <li><Link to={"/allbusiness"} className="block my-3 text-sm  pe-3 md:px-3  md:border-0 
                            md:p-0 ">
                                Contact Us</Link>
                            </li>

                            <li><Link to={"/businessconsultancy"} className="block text-sm  my-3 pe-3 md:px-3  md:border-0 
                            md:p-0">
                                Terms of Service</Link>
                            </li>
                            <li><Link to={"/businessconsultancy"} className="block text-sm  my-3 pe-3 md:px-3  md:border-0 
                            md:p-0 ">
                                Privacy Policy</Link>
                            </li>
                        </ul>
                    </div>
                    <div className='w-1/2  md:w-full'>
                        <ul className="me-10  md:me-0 md:text-right">
                            <li className='items-center'><Link to={"/categories"} className="block   mb-3 pe-3 md:px-3  rounded md:border-0 
                            md:p-0 ">
                                Blogs</Link>
                            </li>
                            <li><Link to={"/writeablog"} className="block text-sm  my-3 pe-3 md:px-3   md:border-0 
                            md:p-0 ">
                                Publish your blog</Link>
                            </li>

                        </ul>
                    </div>
                </div>

            </div>
            <div className='bg-slate-900 text-center pb-4 pt-4 text-white'>
                <h6>
                    © {year}  Company name
                </h6>
            </div>
        </footer>
    )
};

export default Footer;
