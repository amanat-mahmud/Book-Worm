import React from 'react';


const Blog = () => {
    return (
        <div>
            {/* blog 1 */}
            <div className='md:mx-20 mx-5 my-10 border rounded-2xl dark:border-white dark:text-white '>
                <div className="card bg-base-100 dark:bg-black shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title"> What are the different ways to manage a state in a React application?</h2>
                        <p>When we talk about state in our applications, it's important to be clear about what types of state actually matter. There are 5 main types of state you need to properly manage in your React apps.
                            <ol >
                                <li>1.Communication State.</li>
                                <li>2.Data State.</li>
                                <li>3.Control State.</li>
                                <li>4.Session State.</li>
                                <li>5.Location State.</li>
                            </ol>
                        </p>
                    </div>
                </div>
            </div>
            {/* blog 2 */}
            <div className='md:mx-20 mx-5 mb-10 border rounded-2xl
            dark:border-white dark:text-white '>
                <div className="card bg-base-100 dark:bg-black shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">How does prototypical inheritance work?</h2>
                        <p>In programming, we often want to take something and extend it.For instance, we have a user object with its properties and methods, and want to make admin and guest as slightly modified variants of it. We'd like to reuse what we have in user, not copy/reimplement its methods, just build a new object on top of it.Prototypal inheritance is a language feature that helps in that.Every object with its methods and properties contains an internal and hidden property known as [[Prototype]]. The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object.getPrototypeOf and Object.setPrototypeOf. Nowadays, in modern language, it is being set using __proto__.</p>
                    </div>
                </div>
            </div>
            {/* blog 3 */}
            <div className='md:mx-20 mx-5 mb-10 border rounded-2xl
            dark:border-white dark:text-white '>
                <div className="card bg-base-100  dark:bg-black shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">What is a unit test? Why should we write unit tests?</h2>
                        <p>Unit Testing is a type of software testing where individual units or components of a software are tested. The purpose is to validate that each unit of the software code performs as expected. Unit Testing is
            done during the development (coding phase) of an application by the
            developers. Unit Tests isolate a section of code and verify its
            correctness. A unit may be an individual function, method,
            procedure, module, or object. Unit Testing is important because
            software developers sometimes try saving time doing minimal unit
            testing and this is myth because inappropriate unit testing leads to
            high cost Defect fixing during System Testing, Integration Testing
            and even Beta Testing after application is built. If proper unit
            testing is done in early development, then it saves time and money
            in the end.</p>
                    </div>
                </div>
            </div>
            {/* blog 4 */}
            <div className='md:mx-20 mx-5 mb-10 border rounded-2xl
           dark:border-white dark:text-white '>
                <div className="card bg-base-100  dark:bg-black shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">React vs. Angular vs. Vue?</h2>
                        <p>Just a couple of years ago, developers were mainly debating whether
            they should be using Angular vs React for their projects. But over
            the course of the last couple of years, we've seen a growth of
            interest in a third player called Vue.js. If you are a developer starting out on a project and cannot decide on which JavaScript
            framework to use, this guide should help you make a decision.</p>
                    </div>
                </div>
            </div> 
        </div>
    );
};

export default Blog;